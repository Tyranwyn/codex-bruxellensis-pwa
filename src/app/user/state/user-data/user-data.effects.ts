import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {of} from 'rxjs';
import * as UserDataAction from './user-data.actions';
import {catchError, switchMap} from 'rxjs/operators';
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
      switchMap(action => this.userDataService.getUserData(action.uid)),
      switchMap(data => {
        if (data) {
          return of(UserDataAction.GetUserDataSuccess(data));
        } else {
          return of(UserDataAction.GetUserDataFail(null)); // TODO: create new data
        }
      }),
      catchError(err => of(UserDataAction.GetUserDataFail(err)))
    )
  );

  /*
  @Effect()
  addFavorite$: Observable<Action> = this.actions$.pipe(
    ofType(userDataActions.ADD_FAVORITE),
    mergeMap((action: userDataActions.AddFavorite) => this.userDataService.addFavorite(action.payload)
      .pipe(
        map((documentRef: DocumentReference) => new userDataActions.AddFavoriteSuccess(documentRef)),
        catchError(err => of(new userDataActions.AddFavoriteFail(err)))
      )
    )
  );

  @Effect()
  removeFavorite$: Observable<Action> = this.actions$.pipe(
    ofType(userDataActions.REMOVE_FAVORITE),
    mergeMap((action: userDataActions.RemoveFavorite) => this.userDataService.removeFavorite(action.payload)
      .pipe(
        map(() => new userDataActions.RemoveFavoriteSuccess(this.songService.getSongReferenceById(action.payload))),
        catchError(err => of(new userDataActions.RemoveFavoriteFail(err)))
      )
    )
  );*/
}
