import * as UserDataAction from './user-data.actions';
import {Role, UserData} from '../../user';
import {createReducer, on} from '@ngrx/store';

const defaultUserData: UserData = {
  role: Role.USER,
  favorites: []
};

export const reducer = createReducer(
  defaultUserData,
  on(UserDataAction.GetUserData, state => state),
  on(UserDataAction.GetUserDataSuccess, (state: UserData, userData: UserData) => ({ ...state, ...userData })),
  on(UserDataAction.GetUserDataFail, (state: UserData, error: Error) => ({ ...defaultUserData })),
  on(UserDataAction.ClearUserData, () => ({ ...defaultUserData }))
  // on(UserDataAction.ChangeRole, (state: UserData, payload: {role: Role}) => ({ ...payload })),
  // on(UserDataAction.ChangeRoleSuccess, () => {}),
  // on(UserDataAction.ChangeRoleFail, () => {}),
  // on(UserDataAction.AddFavorite, () => {}),
  // on(UserDataAction.AddFavoriteSuccess, () => {}),
  // on(UserDataAction.AddFavoriteFail, () => {}),
  // on(UserDataAction.RemoveFavorite, () => {}),
  // on(UserDataAction.RemoveFavoriteSuccess, () => {})
);
