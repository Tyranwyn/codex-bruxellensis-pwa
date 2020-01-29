import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../state/app.state';
import * as userActions from '../state/user/user.actions';
import * as fromUserState from '../state';
import { AuthProviders } from '../auth-providers.enum';
import { Observable } from 'rxjs';
import { User } from '../user';

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
  user$: Observable<User>;

  constructor(private router: Router,
              private angularFireAuth: AngularFireAuth,
              private store: Store<fromRoot.State>) {
  }

  ngOnInit() {
    this.user$ = this.store.select(fromUserState.getUser);
    // this.store.dispatch(new userActions.GetUser());
  }

  login(provider: string) {
    if (provider.startsWith('Email')) {
      this.store.dispatch(new userActions.Login({provider}));
    } else {
      this.store.dispatch(new userActions.Login({provider, email: this.email, password: this.password}));
    }
  }
}
