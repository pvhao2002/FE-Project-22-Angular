import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  login(isAdmin: boolean) {
    localStorage.setItem('isAdmin', isAdmin.toString());
  }
}
