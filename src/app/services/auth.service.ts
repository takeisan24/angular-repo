import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;
  constructor(private http: HttpClient) { }

  private localhost = 'http://localhost:4200';

  login(credentials: {email: string; password: string}): Observable<any> {
    return this.http.post(`${this.localhost}/login`, credentials);
  }

  register(credentials: {email: string; password: string}): Observable<any> {
    return this.http.post(`${this.localhost}/register`, credentials);
  }

  setToken(token: string){
      localStorage.setItem('token', token);
      this.isAuthenticated = true;
    }
  
  logout(){
    localStorage.removeItem('token');
    this.isAuthenticated = false;
  }

  
  isLoggedIn(){
    return this.isAuthenticated || !!localStorage.getItem('token');
  }
}
