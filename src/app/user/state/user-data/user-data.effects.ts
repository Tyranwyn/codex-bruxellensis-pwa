import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {of} from 'rxjs';
import * as UserDataAction from './user-data.actions';
import {catchError, map, mergeMap, take} from 'rxjs/operators';
import {UserDataService} from '../../user-data.service';
import {SongService} from '../../../songs/services/song-service';

@Injectable()
export class UserDataEffects {
  constructor(private actions$: Actions,
              private userDataService: UserDataService,
              private songService: SongService) {
  }

  getUserData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserDataAction.GetUserData),
      mergeMap(action => this.userDataService.getUserData(action.uid).pipe(take(1))),
      mergeMap(data => {
        if (data) {
          return of(UserDataAction.GetUserDataSuccess(data));
        } else {
          return of(UserDataAction.GetUserDataFail(null)); // TODO: create new data
        }
      }),
      catchError(err => of(UserDataAction.GetUserDataFail(err)))
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
