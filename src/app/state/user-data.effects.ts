import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { UserDataService } from '../services/user-data.service';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import * as userDataActions from './user-data.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { UserData } from '../models/user-data.model';
import { DocumentReference } from '@angular/fire/firestore';
import { SongService } from '../songs/services/song-service';

@Injectable()
export class UserDataEffects {
  constructor(private actions$: Actions,
              private userDataService: UserDataService,
              private songService: SongService) {
  }

  @Effect()
  getUserData$: Observable<Action> = this.actions$.pipe(
    ofType(userDataActions.GET_USER_DATA),
    mergeMap((action: userDataActions.GetUserData) => this.userDataService.getUserData().pipe(
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
