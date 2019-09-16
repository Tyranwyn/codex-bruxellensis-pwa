import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthProviders } from '../models/auth-providers.enum';
import { AuthenticationService } from '../services/authentication.service';
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
  // loginByEmail = false;
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
    /*try {
      if (provider.startsWith('Email')) {
        this.authService.login(provider, this.email, this.password);
      } else {
        this.authService.login(provider);
      }
    } catch (e) {
      this.error = e;
    }*/
    this.store.dispatch(new userActions.GoogleLogin());
  }
}
