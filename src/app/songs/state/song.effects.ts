import { Injectable } from '@angular/core';
import { act, Actions, Effect, ofType } from '@ngrx/effects';
import { SongService } from '../services/song-service';
import * as songActions from './song.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { Song } from '../models/song';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';

@Injectable()
export class SongEffects {

  constructor(private actions$: Actions,
              private songService: SongService) {
  }

  @Effect()
  loadSongs$: Observable<Action> = this.actions$.pipe(
    ofType(songActions.LOAD),
    mergeMap((action: songActions.Load) => this.songService.getAllSongs().pipe(
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
