import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private authURL = "http://localhost:3000/auth/";
  constructor(private http: HttpClient) { }

  registerUser(user){
    return this.http.post<any>(this.authURL + "registerUser",user);
  }
  validateUser(user){
    return this.http.post<any>(this.authURL + "validateUser",user);
  }

  isLoggedIn(){
    return !!localStorage.getItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }
  logout(){
    localStorage.removeItem('token');
  }
}
