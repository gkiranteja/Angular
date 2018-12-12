import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { EmployeeInterface } from './employeeInterface';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/Observable/throw';

@Injectable()

export class EmployeService {
    private _url: string = 'http://dummy.restapiexample.com/api/v1/employees';
    // private _url:string = './employee.json';

    constructor(private _http: HttpClient) {}

    getData(): Observable < EmployeeInterface[] > {
        return this._http.get < EmployeeInterface[] > (this._url);
    }
}