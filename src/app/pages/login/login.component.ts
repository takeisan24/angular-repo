import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from 'express';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  isLoginMode = true;
  

  loginCredentials = {
    email: '',
    password: ''
  };

  signupCredentials = {
    email: '',
    password: '',
    confirmPassword: ''
  };

  constructor(private authService: AuthService, private router: Router) {}

  switchMode(isLogin: boolean) {
    this.isLoginMode = isLogin;
  }

  onLogin() {
    this.authService.login(this.loginCredentials);
  }
}
