import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {of} from 'rxjs';
import * as UserDataAction from './user-data.actions';
import {catchError, map, mergeMap, take} from 'rxjs/operators';
import {UserDataService} from '../../user-data.service';

@Injectable()
export class UserDataEffects {
  constructor(private actions$: Actions,
              private userDataService: UserDataService) {
  }

  checkIfUserDataExists$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserDataAction.CheckUserDataExists),
      mergeMap(action => this.userDataService.userDataExists(action.uid)
        .pipe(
          take(1),
          map(exists => exists ? UserDataAction.GetUserData(action) : UserDataAction.CreateDefaultUserData(action))
        )
      ), catchError(err => of(UserDataAction.GetUserDataFail(err)))
    )
  );

  getUserData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserDataAction.GetUserData),
      mergeMap(action => this.userDataService.getUserData(action.uid).pipe(take(1))),
      mergeMap(data => of(UserDataAction.GetUserDataSuccess(data))),
      catchError(err => of(UserDataAction.GetUserDataFail(err)))
    )
  );

  createDefaultUserData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserDataAction.CreateDefaultUserData),
      mergeMap(action => this.userDataService.setDefaultUserDataForUser(action.uid).pipe(take(1))),
      map(() => UserDataAction.CreateDefaultUserDataSuccess()),
      catchError(err => of(UserDataAction.CreateDefaultUserDataFail(err)))
    )
  );

  addFavorite$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserDataAction.AddFavorite),
      mergeMap(action => this.userDataService.addFavorite(action.uid, action.songId)
        .pipe(map(() => UserDataAction.AddFavoriteSuccess({id: action.songId})))),
      catchError(err => of(UserDataAction.AddFavoriteFail(err)))
    )
  );

  removeFavorite$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserDataAction.RemoveFavorite),
      mergeMap(action => this.userDataService.removeFavorite(action.uid, action.songId)
        .pipe(map(() => UserDataAction.RemoveFavoriteSuccess({id: action.songId})))),
      catchError(err => {
        console.error(err);
        return of(UserDataAction.RemoveFavoriteFail(err));
      })
    )
  );
}
