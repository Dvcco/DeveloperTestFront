import { EmployeResponse } from "./EmployeResponse.entity";

export class EmployeConsult{

    status:string = "";
    data:EmployeResponse = new EmployeResponse();
    message:string = "";

    constructor(){
        
    }
}