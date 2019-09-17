import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Song } from '../models/song';
import * as fromRoot from '../../state/app.state';
import * as songActions from './song.actions';

export const songsStateFeatureKey = 'songsState';

export interface State extends fromRoot.State {
  songsState: SongsState;
}

export interface SongsState {
  songs: Song[];
  currentSongId: string | null;
  error: string;
}

export const defaultState: SongsState = {
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

export function reducer(state = defaultState, action: songActions.All): SongsState {
  switch (action.type) {
    case songActions.SET_CURRENT_SONG:
      return {
        ...state,
        currentSongId: action.payload.id
      };
    case songActions.CLEAR_CURRENT_SONG:
      return {
        ...state,
        currentSongId: null
      };
    case songActions.INITIALIZE_CURRENT_SONG:
        return {
          ...state,
          currentSongId: '',
        };
    case songActions.LOAD_SUCCESS:
      return {
        ...state,
        songs: action.payload,
        error: ''
      };
    case songActions.LOAD_FAIL:
      return {
        ...defaultState,
        error: action.payload
      };
    default:
      return state;
  }
}
