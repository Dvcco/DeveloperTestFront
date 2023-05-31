import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './service/employee.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeResponse } from './entity/EmployeResponse.entity';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent {
  idEmployeeSer: number;
  valid: number;
  forms: FormGroup;
  entity: EmployeResponse;
  items: any[] = [];
  items2: any;
  flag: boolean;
  constructor(private employeeS: EmployeeService, private formBuilder: FormBuilder) {
    this.idEmployeeSer = 0;
    this.valid = 0;
    this.entity = new EmployeResponse();
    this.flag = false;

    this.forms = this.formBuilder.group({
      idEmployeeSer: 0
    });

  }

  list() {
    this.items = [];
    this.entity = new EmployeResponse();
    this.entity.id = this.forms.get('idEmployeeSer')?.value;
    if (this.entity.id != null && this.entity.id > 0) {
      this.employeeS.getFindEmployeById(this.entity.id).subscribe(response => {
        if (response.message = 'success') {
          this.flag = true;
          this.entity = response.data;
          Swal.fire({
            icon: 'success',
            title: 'Ok',
            text: 'Busqueda realizada!'
          })
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!'
          })
        }
      });
    } else {
      this.employeeS.getEmploye().subscribe(response => {
        if (response.message = 'success') {
          this.flag = false;
          this.items = response.data;
          Swal.fire({
            icon: 'success',
            title: 'Ok',
            text: 'Busqueda realizada!'
          })
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!'
          })
        }
      })
    }
  }
}