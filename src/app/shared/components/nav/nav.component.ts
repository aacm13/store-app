import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  loggedIn: Boolean = false;

  isLoggedIn() {
    if (!localStorage.getItem('accessToken')) {
      this.loggedIn = false;
    } else {
      this.loggedIn = true;
    }
    return this.loggedIn;
  }
}
