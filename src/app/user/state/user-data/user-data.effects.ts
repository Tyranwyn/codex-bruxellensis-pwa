import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import * as userDataActions from './user-data.actions';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { DocumentReference } from '@angular/fire/firestore';
import { UserDataService } from '../../user-data.service';
import { SongService } from '../../../songs/services/song-service';
import { UserData } from '../../models/user-data';

@Injectable()
export class UserDataEffects {
  constructor(private actions$: Actions,
              private userDataService: UserDataService,
              private songService: SongService) {
  }

  @Effect()
  getUserData$: Observable<Action> = this.actions$.pipe(
    ofType(userDataActions.GET_USER_DATA),
    switchMap((action: userDataActions.GetUserData) => this.userDataService.getUserData().pipe(
      map((userData: UserData) => new userDataActions.GetUserDataSuccess(userData)),
      catchError(err => of(new userDataActions.GetUserDataFail(err)))
    ))
  );

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
  );
}
