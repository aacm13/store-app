import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  profile: any;
  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    const user = JSON.parse(this.auth.getUser()!);
    console.log(user);
    this.profile = user;
  }
}
