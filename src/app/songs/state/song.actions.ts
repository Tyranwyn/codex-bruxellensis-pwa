import { Action } from '@ngrx/store';
import { Song } from '../models/song';

export const SET_CURRENT_SONG = '[Song] Set current song';
export const CLEAR_CURRENT_SONG = '[Song] Clear current song';
export const INITIALIZE_CURRENT_SONG = '[Song] Creating a new song';
export const ADD_SONG = '[Songs List] Adding song';
export const ADD_SONG_SUCCESS = '[Songs List] Adding song succeeded';
export const ADD_SONG_FAIL = '[Songs List] Adding song failed';
export const REMOVE_SONG = '[Song] Removing song';
export const REMOVE_SONG_SUCCESS = '[Song] Removing song succeeded';
export const REMOVE_SONG_FAIL = '[Song] Removing song failed';
export const EDIT_SONG = '[Song] Edit song';
export const EDIT_SONG_SUCCESS = '[Song] Edit song success';
export const EDIT_SONG_FAIL = '[Song] Edit song fail';
export const LOAD_ALL_SONGS = '[Songs List] Loading all songs';
export const LOAD_CATEGORY_SONGS = '[Songs List] Loading songs from category';
export const LOAD_SUCCESS = '[Songs List] Load success';
export const LOAD_FAIL = '[Songs List] Load error';

export class SetCurrentSong implements Action {
  readonly type = SET_CURRENT_SONG;

  constructor(public payload: Song) {
  }
}

export class ClearCurrentSong implements Action {
  readonly type = CLEAR_CURRENT_SONG;
}

export class InitializeCurrentSong implements Action {
  readonly type = INITIALIZE_CURRENT_SONG;
}

export class AddSong implements Action {
  readonly type = ADD_SONG;

  constructor(public payload: Song) {
  }
}

export class AddSongSuccess implements Action {
  readonly type = ADD_SONG_SUCCESS;

  constructor(public payload?: any) {
  }
}

export class AddSongFail implements Action {
  readonly type = ADD_SONG_FAIL;

  constructor(public payload: string) {
  }
}

export class RemoveSong implements Action {
  readonly type = REMOVE_SONG;

  constructor(public payload: string) {
  }
}

export class RemoveSongSuccess implements Action {
  readonly type = REMOVE_SONG_SUCCESS;

  constructor(public payload: string) {
  }
}

export class RemoveSongFail implements Action {
  readonly type = REMOVE_SONG_FAIL;

  constructor(public payload: string) {
  }
}

export class EditSong implements Action {
  readonly type = EDIT_SONG;

  constructor(public payload: { id: string, song: Song }) {
  }
}

export class EditSongSuccess implements Action {
  readonly type = EDIT_SONG_SUCCESS;

  constructor(public payload: string) {
  }
}

export class EditSongFail implements Action {
  readonly type = EDIT_SONG_FAIL;

  constructor(public payload: string) {
  }
}

export class LoadAllSongs implements Action {
  readonly type = LOAD_ALL_SONGS;
}

export class LoadCategorySongs implements Action {
  readonly type = LOAD_CATEGORY_SONGS;

  constructor(public category: string) {
  }
}

export class LoadSuccess implements Action {
  readonly type = LOAD_SUCCESS;

  constructor(public payload: Song[]) {
  }
}

export class LoadFail implements Action {
  readonly type = LOAD_FAIL;

  constructor(public payload: string) {
  }
}

export type All = SetCurrentSong
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
