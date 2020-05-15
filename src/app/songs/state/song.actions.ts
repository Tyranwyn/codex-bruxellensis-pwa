import { Action } from '@ngrx/store';
import { Song } from '../models/song';

export enum SongActionTypes {
  SET_CURRENT_SONG = '[Song] Set current song',
  CLEAR_CURRENT_SONG = '[Song] Clear current song',
  INITIALIZE_CURRENT_SONG = '[Song] Creating a new song',
  ADD_SONG = '[Songs List] Adding song',
  ADD_SONG_SUCCESS = '[Songs List] Adding song succeeded',
  ADD_SONG_FAIL = '[Songs List] Adding song failed',
  REMOVE_SONG = '[Song] Removing song',
  REMOVE_SONG_SUCCESS = '[Song] Removing song succeeded',
  REMOVE_SONG_FAIL = '[Song] Removing song failed',
  EDIT_SONG = '[Song] Edit song',
  EDIT_SONG_SUCCESS = '[Song] Edit song success',
  EDIT_SONG_FAIL = '[Song] Edit song fail',
  LOAD_ALL_SONGS = '[Songs List] Loading all songs',
  LOAD_CATEGORY_SONGS = '[Songs List] Loading songs from category',
  LOAD_SUCCESS = '[Songs List] Load success',
  LOAD_FAIL = '[Songs List] Load error'
}

export class SetCurrentSong implements Action {
  readonly type = SongActionTypes.SET_CURRENT_SONG;

  constructor(public payload: Song) {
  }
}

export class ClearCurrentSong implements Action {
  readonly type = SongActionTypes.CLEAR_CURRENT_SONG;
}

export class InitializeCurrentSong implements Action {
  readonly type = SongActionTypes.INITIALIZE_CURRENT_SONG;
}

export class AddSong implements Action {
  readonly type = SongActionTypes.ADD_SONG;

  constructor(public payload: Song) {
  }
}

export class AddSongSuccess implements Action {
  readonly type = SongActionTypes.ADD_SONG_SUCCESS;

  constructor(public payload?: any) {
  }
}

export class AddSongFail implements Action {
  readonly type = SongActionTypes.ADD_SONG_FAIL;

  constructor(public payload: string) {
  }
}

export class RemoveSong implements Action {
  readonly type = SongActionTypes.REMOVE_SONG;

  constructor(public payload: string) {
  }
}

export class RemoveSongSuccess implements Action {
  readonly type = SongActionTypes.REMOVE_SONG_SUCCESS;

  constructor(public payload: string) {
  }
}

export class RemoveSongFail implements Action {
  readonly type = SongActionTypes.REMOVE_SONG_FAIL;

  constructor(public payload: string) {
  }
}

export class EditSong implements Action {
  readonly type = SongActionTypes.EDIT_SONG;

  constructor(public payload: { id: string, song: Song }) {
  }
}

export class EditSongSuccess implements Action {
  readonly type = SongActionTypes.EDIT_SONG_SUCCESS;

  constructor(public payload: string) {
  }
}

export class EditSongFail implements Action {
  readonly type = SongActionTypes.EDIT_SONG_FAIL;

  constructor(public payload: string) {
  }
}

export class LoadAllSongs implements Action {
  readonly type = SongActionTypes.LOAD_ALL_SONGS;
}

export class LoadCategorySongs implements Action {
  readonly type = SongActionTypes.LOAD_CATEGORY_SONGS;

  constructor(public category: string) {
  }
}

export class LoadSuccess implements Action {
  readonly type = SongActionTypes.LOAD_SUCCESS;

  constructor(public payload: Song[]) {
  }
}

export class LoadFail implements Action {
  readonly type = SongActionTypes.LOAD_FAIL;

  constructor(public payload: string) {
  }
}

export type SongActions = SetCurrentSong
  | ClearCurrentSong
  | InitializeCurrentSong
  | AddSong
  | AddSongSuccess
  | AddSongFail
  | RemoveSong
  | RemoveSongSuccess
  | RemoveSongFail
  | EditSong
  | EditSongSuccess
  | EditSongFail
  | LoadAllSongs
  | LoadCategorySongs
  | LoadSuccess
  | LoadFail;
