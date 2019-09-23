import { Song } from '../models/song';
import * as songActions from './song.actions';

export interface SongsState {
  songs: Song[];
  currentSongId: string | null;
  error: string;
}

const defaultState: SongsState = {
  songs: [],
  currentSongId: null,
  error: ''
};

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
