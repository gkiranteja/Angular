import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _url ="";

  constructor(private _http: HttpClient) { }
   
   postData(user: User){
      return this._http.post<any>(this._url, user);
   }
   

}
