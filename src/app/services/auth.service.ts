import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;
  constructor(private http: HttpClient) { }

  login(credentials: any): Observable<any> {
    return this.http.post('http://localhost:4200/login', credentials);
  }

  logout(){
    localStorage.removeItem('token');
    this.isAuthenticated = false;
  }

  setToken(token: string){
    localStorage.setItem('token', token);
    this.isAuthenticated = true;
  }
  isLoggedIn(){
    return this.isAuthenticated || !!localStorage.getItem('token');
  }
}
