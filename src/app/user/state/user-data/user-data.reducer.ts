import * as UserDataAction from './user-data.actions';
import {Role, UserData} from '../../user';
import {Action, createReducer, on} from '@ngrx/store';

const defaultUserData: UserData = {
  role: Role.USER,
  favorites: []
};

const reducer = createReducer(
  defaultUserData,
  // on(UserDataAction.GetUserData, state => state),
  on(UserDataAction.GetUserDataSuccess, (state: UserData, userData: UserData) => ({...state, ...userData})),
  on(UserDataAction.GetUserDataFail, (state: UserData, error: Error) => ({...defaultUserData, error})),
  on(UserDataAction.ClearUserData, () => ({...defaultUserData})),
  on(UserDataAction.CreateDefaultUserDataFail, (state: UserData, error: Error) => ({...defaultUserData, error})),
  // on(UserDataAction.ChangeRole, (state: UserData, payload: {role: Role}) => ({ ...payload })),
  // on(UserDataAction.ChangeRoleSuccess, () => {}),
  // on(UserDataAction.ChangeRoleFail, () => {}),
  // on(UserDataAction.AddFavorite, () => {}),
  on(UserDataAction.AddFavoriteSuccess, (state: UserData, payload: { id: string }) => ({
    ...state,
    favorites: [...state.favorites, payload.id]
  })),
  on(UserDataAction.AddFavoriteFail, (state: UserData, err: Error) => ({...state, err})),
  // on(UserDataAction.RemoveFavorite, () => {}),
  on(UserDataAction.RemoveFavoriteSuccess, (state: UserData, payload: { id: string }) => ({
    ...state,
    favorites: state.favorites.filter(value => value !== payload.id)
  })),
  on(UserDataAction.RemoveFavoriteFail, (state: UserData, err: Error) => ({...state, err}))
);

export function UserDataReducer(state: UserData | undefined, action: Action) {
  return reducer(state, action);
}
