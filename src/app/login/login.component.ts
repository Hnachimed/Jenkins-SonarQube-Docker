import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {FormsModule} from "@angular/forms";
import {Router, RouterLink} from "@angular/router";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    RouterLink
  ],
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  loginError: boolean = false;

  constructor(private authService: AuthService, private router: Router) { }

  handleLogin() {
    const validUsername = 'admin';
    const validPassword = 'password123';

    if (this.username === validUsername && this.password === validPassword) {
      this.authService.login();
      this.loginError = false;
      this.router.navigate(['/order']);

    } else {
      this.loginError = true;
    }
  }
}
