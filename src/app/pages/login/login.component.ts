import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
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

  // constructor(private authService: AuthService, private router: Router) {}



  switchMode(isLogin: boolean) {
    this.isLoginMode = isLogin;
  }

  onLogin() {
    // this.authService.login(this.loginCredentials).subscribe({
    //   next: (res) => {
    //     this.authService.setToken(res.token);
    //     this.router.navigate(['/blog']);
    //   },
    //   error: (err) => {
    //     console.error('Login failed', err);
    //     alert('Login failed. Please check your credentials and try again.');
    //   }
    // });
  }

  // Xử lý đăng ký
  onSignUp() {
  //   if(this.signupCredentials.password !== this.signupCredentials.confirmPassword){
  //     alert('Password and Confirm Password do not match');
  //     return;
  //   }else{
  //     this.authService.register(this.signupCredentials).subscribe({
  //       next: (res) => {
  //         this.authService.setToken(res.token);
  //         this.router.navigate(['/admin-dashboard']);
  //       },
  //       error: (err) => {
  //         console.error('Signup failed', err);
  //         alert('Signup failed. Please try again.');
  //       }
  //     });
  //   }
  }
}
