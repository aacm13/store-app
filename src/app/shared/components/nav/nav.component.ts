import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  loggedIn: Boolean = false;

  constructor(private authService: AuthService) {}
  isLoggedIn() {
    if (!localStorage.getItem('token')) {
      this.loggedIn = false;
    } else {
      this.loggedIn = true;
    }
    return this.loggedIn;
  }

  logoutClick() {
    this.authService.logout();
  }
}
