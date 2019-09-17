import * as userActions from './user.actions';
import { User } from '../models/user.model';
import { createSelector } from '@ngrx/store';
import { getUserFeatureState } from './app.state';

const defaultUser: User = {
  uid: null,
  displayName: 'GUEST',
  email: null
};

export const getUser = createSelector(
  getUserFeatureState,
  state => state.user
);

export function userReducer(state: User = defaultUser, action: userActions.All): User {
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

