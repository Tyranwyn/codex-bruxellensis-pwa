import * as userDataActions from './user-data.actions';
import { UserData } from '../../user-data';
import { AccountType } from '../../account-type.enum';

export const defaultUserData: UserData = {
  accountType: AccountType.USER,
  favorites: []
};

export function reducer(state: UserData = defaultUserData, action: userDataActions.All): UserData {
  /*switch (action.type) {
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
  }*/
  return null;
}
