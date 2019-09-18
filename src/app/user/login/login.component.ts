import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { select, Store } from '@ngrx/store';
import * as fromRoot from '../../state';
import * as userActions from '../state/user/user.actions';
import * as fromUserState from '../state';
import { AuthProviders } from '../auth-providers.enum';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  authProviders = AuthProviders;
  email;
  password;
  error;
  uidSub: Subscription;

  constructor(private router: Router,
              private angularFireAuth: AngularFireAuth,
              private store: Store<fromRoot.State>) {
  }

  ngOnInit() {
    this.uidSub = this.store.select(fromUserState.getUser, select('uid')).subscribe(uid => {
      if (uid) {
        this.router.navigate(['']);
      }
    });
  }

  login(provider: string) {
    if (provider.startsWith('Email')) {
      this.store.dispatch(new userActions.Login({provider}));
    } else {
      this.store.dispatch(new userActions.Login({provider, email: this.email, password: this.password}));
    }
  }

  ngOnDestroy(): void {
    this.uidSub.unsubscribe();
  }
}
