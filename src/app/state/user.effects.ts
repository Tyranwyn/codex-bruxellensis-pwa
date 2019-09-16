import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AngularFireAuth } from '@angular/fire/auth';
import { from, Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';

import * as userActions from './user.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { CodexUser } from '../models/codex-user.model';
import * as firebase from 'firebase';
import UserCredential = firebase.auth.UserCredential;

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions,
              private afAuth: AngularFireAuth) {
  }

  @Effect()
  getUser$: Observable<Action> = this.actions$.pipe(
    ofType(userActions.GET_USER),
    map((action: userActions.GetUser) => action.payload),
    switchMap(payload => this.afAuth.authState),
    map(authData => {
      if (authData) {
        const user = new CodexUser(authData.uid, authData.displayName, authData.email);
        return new userActions.Authenticated(user);
      } else {
        return new userActions.NotAuthenticated();
      }
    }),
    catchError(err => of(new userActions.AuthError({error: err.message})))
  );

  @Effect()
  login$: Observable<Action> = this.actions$.pipe(
    ofType(userActions.GOOGLE_LOGIN),
    map((action: userActions.GoogleLogin) => action.payload),
    switchMap(payload => from(this.googleLogin())),
    map(credential => new userActions.GetUser()),
    catchError(err => of(new userActions.AuthError({error: err.message})))
  );

  @Effect()
  logout$: Observable<Action> = this.actions$.pipe(
    ofType(userActions.LOGOUT),
    map((action: userActions.Logout) => action.payload),
    switchMap(payload => of(this.afAuth.auth.signOut())),
    map(authData => new userActions.NotAuthenticated()),
    catchError(err => of(new userActions.AuthError({error: err.message})))
  );

  private googleLogin(): Promise<UserCredential> {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.afAuth.auth.signInWithPopup(provider);
  }
}
