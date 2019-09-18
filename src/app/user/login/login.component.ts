import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../state';
import * as userActions from '../state/user/user.actions';
import { AuthProviders } from '../auth-providers.enum';

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
              private store: Store<fromRoot.State>) {
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
