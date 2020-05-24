import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {AngularFireAuth} from '@angular/fire/auth';
import {from, of} from 'rxjs';
import {catchError, map, mergeMap, take, tap} from 'rxjs/operators';
import {AuthProviders} from '../../auth-providers.enum';

import * as UserAction from './user.actions';
import * as UserDataAction from '../user-data/user-data.actions';
import * as firebase from 'firebase/app';
import {Router} from '@angular/router';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions,
              private afAuth: AngularFireAuth,
              private router: Router) {
  }

  getUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserAction.GetUser),
      mergeMap(() => this.afAuth.authState.pipe(take(1))),
      mergeMap(authData => {
        if (authData) {
          return of(
            UserAction.Authenticated({
              uid: authData.uid,
              displayName: authData.displayName,
              email: authData.email
            }),
            UserDataAction.CheckUserDataExists({uid: authData.uid})
          );
        } else {
          return of(UserAction.NotAuthenticated());
        }
      }),
      catchError(err => of(UserAction.AuthError(err)))
    )
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserAction.Logout),
      tap(() => this.afAuth.signOut()),
      map(() => UserDataAction.ClearUserData()),
      catchError(err => of(UserAction.AuthError(err)))
    )
  );

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserAction.Login),
      mergeMap(action => from(this.login(action.provider, action.email, action.password))),
      mergeMap(() => of(UserAction.GetUser(), UserAction.LoginSuccess())),
      catchError(err => of(UserAction.AuthError(err)))
    )
  );

  loginSucces$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserAction.LoginSuccess),
      tap(() => this.router.navigate(['/']))
    ), { dispatch: false }
  );

  private login(provider: string, email?: string, password?: string): Promise<firebase.auth.UserCredential> {
    switch (provider) {
      case AuthProviders.Google:
        return this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
      case AuthProviders.Facebook:
        return this.afAuth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
      case AuthProviders.Twitter:
        return this.afAuth.signInWithPopup(new firebase.auth.TwitterAuthProvider());
      case AuthProviders.GitHub:
        return this.afAuth.signInWithPopup(new firebase.auth.GithubAuthProvider());
      case 'EmailLogin':
        return this.afAuth.signInWithEmailAndPassword(email, password);
      case 'EmailSignup':
        return this.afAuth.createUserWithEmailAndPassword(email, password);
      default:
        console.log(`The provider: ${provider}, is not configured yet.`);
    }
  }
}
