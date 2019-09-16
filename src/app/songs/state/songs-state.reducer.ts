import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Song } from '../models/song';
import * as fromRoot from '../../state/app.state';
import { SongsActions, SongsActionTypes } from './songs.actions';


export const songsStateFeatureKey = 'songsState';

export interface State extends fromRoot.State {
  songsState: SongsState;
}

export interface SongsState {
  songs: Song[];
}

export const initialState: SongsState = {
  songs: []
};

const getSongsFeatureState = createFeatureSelector<SongsState>(songsStateFeatureKey);

export const getSongs = createSelector(
  getSongsFeatureState,
  state => state.songs
);

export function reducer(state = initialState, action: SongsActions): SongsState {
  switch (action.type) {
    case SongsActionTypes.LoadSongs:
      return {
        songs: [...action.payload]
      };
    default:
      return state;
  }
}
