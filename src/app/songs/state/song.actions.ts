import { Action } from '@ngrx/store';
import { Song } from '../models/song';

export enum SongActionTypes {
  SetCurrentSong = '[Song] Set current song',
  ClearCurrentSong = '[Song] Clear current song',
  InitializeCurrentSong = '[Song] Creating a new song',
  AddSong = '[Songs List] Add song',
  RemoveSong = '[Song] Remove song',
  EditSong = '[Song] Edit song',
  EditSongSuccess = '[Song] Edit song success',
  EditSongFail = '[Song] Edit song fail',
  Load = '[Songs List] Load all songs',
  LoadSuccess = '[Songs List] Load success',
  LoadFail = '[Songs List] Load error'
}

export class SetCurrentSong implements Action {
  readonly type = SongActionTypes.SetCurrentSong;

  constructor(public payload: Song) {
  }
}

export class ClearCurrentSong implements Action {
  readonly type = SongActionTypes.ClearCurrentSong;
}

export class InitializeCurrentSong implements Action {
  readonly type = SongActionTypes.InitializeCurrentSong;
}

export class AddSong implements Action {
  readonly type = SongActionTypes.AddSong;

  constructor(public payload: any) {
  }
}

export class RemoveSong implements Action {
  readonly type = SongActionTypes.RemoveSong;

  constructor(public payload: string) {
  }
}

export class EditSong implements Action {
  readonly type = SongActionTypes.EditSong;

  constructor(public id, public payload: any) {
  }
}

export class EditSongSuccess implements Action {
  readonly type = SongActionTypes.EditSongSuccess;

  constructor(public payload: string) {
  }
}

export class EditSongFail implements Action {
  readonly type = SongActionTypes.EditSongFail;

  constructor(public payload: string) {
  }
}

export class Load implements Action {
  readonly type = SongActionTypes.Load;
}

export class LoadSuccess implements Action {
  readonly type = SongActionTypes.LoadSuccess;

  constructor(public payload: Song[]) {
  }
}

export class LoadFail implements Action {
  readonly type = SongActionTypes.LoadFail;

  constructor(public payload: string) {
  }
}

export type SongActions = SetCurrentSong
  | ClearCurrentSong
  | InitializeCurrentSong
  | AddSong
  | RemoveSong
  | EditSong
  | EditSongSuccess
  | EditSongFail
  | Load
  | LoadSuccess
  | LoadFail;
