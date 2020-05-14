import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {AngularFireAuth} from '@angular/fire/auth';
import {of} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';
import {Store} from '@ngrx/store';

import * as UserAction from './user.actions';
import * as UserDataAction from '../user-data/user-data.actions';
import * as fromRoot from '../../../state';

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

  // @Effect()
  // getUser$: Observable<Action> = this.actions$.pipe(
  //   ofType(userActions.GET_USER),
  //   map((action: userActions.GetUser) => action.payload),
  //   switchMap(payload => this.afAuth.authState),
  //   switchMap(authData => {
  //     if (authData) {
  //       return this.userDataService.getUserData(authData.uid)
  //         .pipe(
  //           map(userData => {
  //               return {
  //                 uid: authData.uid,
  //                 displayName: authData.displayName,
  //                 email: authData.email,
  //                 accountType: userData.accountType,
  //                 favorites: userData.favorites
  //               };
  //             }
  //           ),
  //           map(userData => new userActions.Authenticated(userData))
  //         );
  //     } else {
  //       return of(new userActions.NotAuthenticated());
  //     }
  //   }),
  //   catchError(err => of(new userActions.AuthError({error: err.message})))
  // );
  //
  // @Effect()
  // login$: Observable<Action> = this.actions$.pipe(
  //   ofType(userActions.LOGIN),
  //   map((action: userActions.Login) => action.payload),
  //   switchMap(payload => from(this.login(payload.provider, payload.email, payload.password))),
  //   map(credential => new userActions.GetUser()),
  //   catchError(err => of(new userActions.AuthError({error: err.message})))
  // );
  //
  // @Effect()
  // logout$: Observable<Action> = this.actions$.pipe(
  //   ofType(userActions.LOGOUT),
  //   map((action: userActions.Logout) => action.payload),
  //   switchMap(payload => of(this.afAuth.auth.signOut())),
  //   map(authData => new userActions.NotAuthenticated()),
  //   catchError(err => of(new userActions.AuthError({error: err.message})))
  // );
  //
  // private login(provider: string, email?: string, password?: string): Promise<UserCredential> {
  //   switch (provider) {
  //     case AuthProviders.Google:
  //       return this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  //     case AuthProviders.Facebook:
  //       return this.afAuth.auth.signInWithPopup(new auth.FacebookAuthProvider());
  //     case AuthProviders.Twitter:
  //       return this.afAuth.auth.signInWithPopup(new auth.TwitterAuthProvider());
  //     case AuthProviders.GitHub:
  //       return this.afAuth.auth.signInWithPopup(new auth.GithubAuthProvider());
  //     case 'EmailLogin':
  //       return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  //     case 'EmailSignup':
  //       return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
  //     default:
  //       console.log(`The provider: ${provider}, is not configured yet.`);
  //   }
  // }
}
