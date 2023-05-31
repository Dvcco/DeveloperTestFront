import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environment/environment";
import { EmployeDto } from "../entity/EmployeDto.entity";
import { Injectable } from "@angular/core";
import { EmployeConsult } from "../entity/EmployeConsult.entity";

@Injectable({
    providedIn:'root'
})

export class EmployeeService {

    private url: string = "";
    constructor(private http: HttpClient) {
        this.url = environment.api;

    }

    public getEmploye():Observable<EmployeDto>{
        var headers = new HttpHeaders().set('content-Type', 'application/json');
        return  this.http.get<EmployeDto>(this.url+'getemployee', {headers:headers});
    }

    public getFindEmployeById(id:number):Observable<EmployeConsult>{
        var headers = new HttpHeaders().set('content-Type', 'application/json');
        return  this.http.get<EmployeConsult>(this.url+'findemployeebyid/'+ id, {headers:headers});
    }
    
};