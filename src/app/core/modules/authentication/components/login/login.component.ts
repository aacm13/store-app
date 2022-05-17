import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { loginStart } from '../../state/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  ngUnsubscribe$ = new Subject();
  form: FormGroup = new FormGroup({});
  invalidLoing!: Boolean;

  constructor(private fb: FormBuilder, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  get f() {
    return this.form.controls;
  }

  signIn() {
    if (this.form.invalid) {
      return;
    }
    const email: string = this.f.email.value;
    const password: string = this.f.password.value;

    this.store.dispatch(loginStart({ email, password }));
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.complete();
  }
}
