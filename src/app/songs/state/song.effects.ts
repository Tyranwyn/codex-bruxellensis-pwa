import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { SongService } from '../services/song-service';
import * as songActions from './song.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { Song } from '../models/song';
import { of } from 'rxjs';

@Injectable()
export class SongEffects {


  constructor(private actions$: Actions,
              private songService: SongService) {
  }

  @Effect()
  loadSongs$ = this.actions$.pipe(
    ofType(songActions.SongActionTypes.Load),
    mergeMap((action: songActions.SongActionTypes.Load) => this.songService.getAllSongs().pipe(
      map((songs: Song[]) => new songActions.LoadSuccess(songs)),
      catchError(err => of(new songActions.LoadFail(err)))
    ))
  );
}
