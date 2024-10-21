import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  username: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  signUpError: string = '';

  constructor(private router: Router) {}

  handleSignUp() {
    if (this.password !== this.confirmPassword) {
      this.signUpError = "Les mots de passe ne correspondent pas.";
      return;
    }

    // Simulez un enregistrement réussi ici, ou utilisez un service d'authentification
    console.log('User registered:', { username: this.username, email: this.email });

    // Redirigez l'utilisateur vers la page de connexion après l'inscription réussie
    this.router.navigate(['/login']);
  }
}
