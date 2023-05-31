import { EmployeResponse } from "./EmployeResponse.entity";

export class EmployeDto{

    status:string = "";
    data:Array<EmployeResponse> = [];
    message:string = "";

    constructor(){
        
    }
}