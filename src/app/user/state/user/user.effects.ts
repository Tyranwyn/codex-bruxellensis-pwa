import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {AngularFireAuth} from '@angular/fire/auth';
import {from, of} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';
import {Store} from '@ngrx/store';

import * as UserAction from './user.actions';
import * as UserDataAction from '../user-data/user-data.actions';
import * as fromRoot from '../../../state';
import {AuthProviders} from '../../auth-providers.enum';
import * as firebase from 'firebase/app';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions,
              private afAuth: AngularFireAuth,
              private store: Store<fromRoot.State>) {
  }

  getUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserAction.GetUser),
      switchMap(() => this.afAuth.authState),
      switchMap(authData => {
        if (authData) {
          this.store.dispatch(UserDataAction.GetUserData({uid: authData.uid})); // TODO
          return of(UserAction.Authenticated({
            uid: authData.uid,
            displayName: authData.displayName,
            email: authData.email
          }));
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
      switchMap(() => {
        this.store.dispatch(UserDataAction.ClearUserData());
        return of(this.afAuth.auth.signOut());
      }),
      map(authData => UserAction.NotAuthenticated()),
      catchError(err => of(UserAction.AuthError(err)))
    )
  );

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserAction.Login),
      switchMap(action => from(this.login(action.provider, action.email, action.password))),
      map(() => UserAction.GetUser()),
      catchError(err => of(UserAction.AuthError(err)))
    )
  );

  private login(provider: string, email?: string, password?: string): Promise<firebase.auth.UserCredential> {
    switch (provider) {
      case AuthProviders.Google:
        return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
      case AuthProviders.Facebook:
        return this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
      case AuthProviders.Twitter:
        return this.afAuth.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider());
      case AuthProviders.GitHub:
        return this.afAuth.auth.signInWithPopup(new firebase.auth.GithubAuthProvider());
      case 'EmailLogin':
        return this.afAuth.auth.signInWithEmailAndPassword(email, password);
      case 'EmailSignup':
        return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
      default:
        console.log(`The provider: ${provider}, is not configured yet.`);
    }
  }
}
