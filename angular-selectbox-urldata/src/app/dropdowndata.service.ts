import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DropdowndataService {
  
  public _url: string = "https://stg.trasers.com/api_trasers/trasers_lookupdata";

  constructor(private http: HttpClient) { }

  dropdownData(){
     return this.http.get(this._url);
  }



}
