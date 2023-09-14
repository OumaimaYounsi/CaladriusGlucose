import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { env } from '../env/env';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http: HttpClient) { }

  AddUser(user: User){
    return this.http.put(`${env.api_url}/signeup`, user);
  }
  login(user: User){
    return this.http.put(`${env.api_url}/login`, user);
  }
  passwordReset(user: User){
    return this.http.post(`${env.api_url}/resetpassword`, user);
  }
  Logout(){
    return this.http.get(`${env.api_url}/logout`);
  }

}
