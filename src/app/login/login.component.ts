import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthProviders } from '../models/auth-providers.enum';
import { Store } from '@ngrx/store';
import { State } from '../state/app.state';
import * as userActions from '../state/user.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  authProviders = AuthProviders;
  email;
  password;
  error;

  constructor(private router: Router,
              private angularFireAuth: AngularFireAuth,
              private store: Store<State>) {
    this.angularFireAuth.user.subscribe(user => {
      if (user) {
        router.navigate(['']);
      }
    });
  }

  ngOnInit() {
  }

  login(provider: string) {
      if (provider.startsWith('Email')) {
        this.store.dispatch(new userActions.Login({ provider }));
      } else {
        this.store.dispatch(new userActions.Login({ provider, email: this.email, password: this.password }));
      }
  }
}
