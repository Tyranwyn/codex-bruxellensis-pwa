import * as userActions from './user.actions';
import { User } from '../models/user.model';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserData } from '../models/user-data.model';

export const userStateFeatureKey = 'userState';

export interface UserState {
  user: User;
  userData: UserData;
}

const defaultUser = new User(null, 'GUEST', null);

const getUserFeatureState = createFeatureSelector<UserState>(userStateFeatureKey);

const getUser = createSelector(
  getUserFeatureState,
  state => state.user
);

const getUserData = createSelector(
  getUserFeatureState,
  state => state.userData
);

export function userReducer(state = defaultUser, action: userActions.All) {
  switch (action.type) {
    case userActions.GET_USER:
      return {...state, loading: true};
    case userActions.AUTHENTICATED:
      return {...state, ...action.payload, loading: false};
    case userActions.NOT_AUTHENTICATED:
      return {...state, ...defaultUser, loading: false};
    case userActions.LOGIN:
      return {...state, loading: true};
    case userActions.AUTH_ERROR:
      return {...state, ...action.payload, loading: false};
    case userActions.LOGOUT:
      return {...state, loading: true};
  }
}
