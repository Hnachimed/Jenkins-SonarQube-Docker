import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authenticated: boolean = false;

  login() {
    this.authenticated = true;
  }

  logout() {
    this.authenticated = false;
  }

  get isAuth(): boolean {
    return this.authenticated;
  }
}
