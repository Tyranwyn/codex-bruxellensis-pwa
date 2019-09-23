import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { SongService } from '../services/song-service';
import * as songActions from './song.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { Song } from '../models/song';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { SongActionTypes } from './song.actions';

@Injectable()
export class SongEffects {

  constructor(private actions$: Actions,
              private songService: SongService) {
  }

  @Effect()
  loadAllSongs$: Observable<Action> = this.actions$.pipe(
    ofType(SongActionTypes.LOAD_ALL_SONGS),
    mergeMap((action: songActions.LoadAllSongs) => this.songService.getAllSongs().pipe(
      map((songs: Song[]) => new songActions.LoadSuccess(songs)),
      catchError(err => of(new songActions.LoadFail(err)))
    ))
  );

  @Effect()
  loadCategorySongs$: Observable<Action> = this.actions$.pipe(
    ofType(SongActionTypes.LOAD_CATEGORY_SONGS),
    mergeMap((action: songActions.LoadCategorySongs) => this.songService.getSongsByCategory(action.category)
      .pipe(
        map((songs: Song[]) => new songActions.LoadSuccess(songs)),
        catchError(err => of(new songActions.LoadFail(err)))
      ))
  );

  /*@Effect()
  updateSong$: Observable<Action> = this.actions$.pipe(
    ofType(songActions.EDIT_SONG),
    mergeMap((action: songActions.EditSong) => this.songService.updateSong(action.payload.id, action.payload.song)
      .pipe(
        map(() => new songActions.EditSongSuccess())
      )
    ),
    map((id: string, value: any) => {
        return new songActions.EditSongSuccess(id);
      }
    )
  );*/
}
