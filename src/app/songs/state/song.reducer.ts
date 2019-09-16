import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Song } from '../models/song';
import * as fromRoot from '../../state/app.state';
import { SongActions, SongActionTypes } from './song.actions';


export const songsStateFeatureKey = 'songsState';

export interface State extends fromRoot.State {
  songsState: SongsState;
}

export interface SongsState {
  songs: Song[];
  currentSongId: string | null;
  error: string;
}

export const initialState: SongsState = {
  songs: [],
  currentSongId: null,
  error: ''
};

const getSongFeatureState = createFeatureSelector<SongsState>(songsStateFeatureKey);

export const getCurrentSongId = createSelector(
  getSongFeatureState,
  state => state.currentSongId
);

export const getCurrentSong = createSelector(
  getSongFeatureState,
  getCurrentSongId,
  (state, currentSongId) => {
    if (currentSongId === '') {
      return {
        id: ''
      };
    } else {
      return currentSongId ? state.songs.find(p => p.id === currentSongId) : null;
    }
  }
);

export const getSongs = createSelector(
  getSongFeatureState,
  state => state.songs
);

export const getError = createSelector(
  getSongFeatureState,
  state => state.error
);

export function reducer(state = initialState, action: SongActions): SongsState {
  switch (action.type) {
    case SongActionTypes.SetCurrentSong:
      return {
        ...state,
        currentSongId: action.payload.id
      };
    case SongActionTypes.ClearCurrentSong:
      return {
        ...state,
        currentSongId: null
      };
    case SongActionTypes.InitializeCurrentSong:
        return {
          ...state,
          currentSongId: '',
        };
    case SongActionTypes.LoadSuccess:
      return {
        ...state,
        songs: action.payload,
        error: ''
      };
    case SongActionTypes.LoadFail:
      return {
        ...state,
        songs: [],
        error: action.payload
      };
    default:
      return state;
  }
}
