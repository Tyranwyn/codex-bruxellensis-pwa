import { Song } from '../models/song';
import { SongActions, SongActionTypes } from './song.actions';

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

export function reducer(state = defaultState, action: SongActions): SongsState {
  switch (action.type) {
    case SongActionTypes.SET_CURRENT_SONG:
      return {
        ...state,
        currentSongId: action.payload.id
      };
    case SongActionTypes.CLEAR_CURRENT_SONG:
      return {
        ...state,
        currentSongId: null
      };
    case SongActionTypes.INITIALIZE_CURRENT_SONG:
      return {
        ...state,
        currentSongId: '',
      };
    case SongActionTypes.LOAD_SUCCESS:
      return {
        ...state,
        songs: action.payload,
        error: ''
      };
    case SongActionTypes.LOAD_FAIL:
      return {
        ...defaultState,
        error: action.payload
      };
    default:
      return state;
  }
}
