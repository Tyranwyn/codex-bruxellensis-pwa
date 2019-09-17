import { UserData } from '../models/user-data.model';
import { AccountType } from '../models/account-type.enum';
import { createSelector } from '@ngrx/store';
import { getUserFeatureState } from './app.state';
import * as userDataActions from './user-data.actions';

export const defaultUserData: UserData = {
  accountType: AccountType.USER,
  favorites: []
};

const getUserData = createSelector(
  getUserFeatureState,
  state => state.userData
);

export function userDataReducer(state: UserData = defaultUserData, action: userDataActions.All): UserData {
  switch (action.type) {
    case userDataActions.GET_USER_DATA_SUCCESS:
      return {
        ...state
      };
    case userDataActions.GET_USER_DATA_FAIL:
      return {
        ...defaultUserData,
        error: state.error
      };
    case userDataActions.ADD_FAVORITE_SUCCESS:
      return {
        ...state,
        favorites: [
          ...state.favorites,
          action.payload
        ]
      };
    case userDataActions.ADD_FAVORITE_FAIL:
      return {
        ...state,
        error: action.payload
      };
    case userDataActions.REMOVE_FAVORITE_SUCCESS:
      return {
        ...state,
        favorites: state.favorites.filter((value) => !value.isEqual(action.payload))
      };
    case userDataActions.REMOVE_FAVORITE_FAIL:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}
