import * as fromRoot from '../../state';
import * as fromSongs from './song.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface State extends fromRoot.State {
  songsState: fromSongs.SongsState;
}

const getSongFeatureState = createFeatureSelector<fromSongs.SongsState>('songsState');

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
