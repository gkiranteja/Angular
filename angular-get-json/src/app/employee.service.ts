import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from './employeeInterface';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/Observable/throw';

@Injectable()

export class EmployeeService {

    private _url:string = 'http://dummy.restapiexample.com/api/v1/employees';
   // private _url:string = './employee.json';

      constructor( private _http: HttpClient ){}

      getData(): Observable<IEmployee[]>{
          return this._http.get<IEmployee[]>(this._url)
                           .catch(this.errorHandlar)
      }
      
      errorHandlar(error: HttpErrorResponse){
          return Observable.throw(error.message || "server error")
      }

}