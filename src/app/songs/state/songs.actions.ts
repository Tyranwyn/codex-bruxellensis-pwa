import { Action } from '@ngrx/store';
import { Song } from '../models/song';

export enum SongsActionTypes {
  LoadSongs = '[Songs List] Load all songs',
  AddSong = '[Songs List] Add song',
  RemoveSong = '[Song] Remove song',
  EditSong = '[Song] Edit song'
}

export class LoadSongs implements Action {
  readonly type = SongsActionTypes.LoadSongs;

  constructor(public payload: Song[]) {
  }
}

export class AddSong implements Action {
  readonly type = SongsActionTypes.AddSong;

  constructor(public payload: Song) {
  }
}

export class RemoveSong implements Action {
  readonly type = SongsActionTypes.RemoveSong;

  constructor(public payload: string) {
  }
}

export class EditSong implements Action {
  readonly type = SongsActionTypes.EditSong;

  constructor(public payload: Song) {
  }
}

export type SongsActions = LoadSongs
  | AddSong
  | RemoveSong
  | EditSong;
