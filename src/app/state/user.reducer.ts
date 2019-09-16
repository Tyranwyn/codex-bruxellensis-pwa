import * as userActions from './user.actions';
import { CodexUser } from '../models/codex-user.model';
import { createFeatureSelector } from '@ngrx/store';
import { User } from 'firebase';

export const userStateFeatureKey = 'userState';

const defaultUser = new CodexUser(null, 'GUEST', null);

const getUserFeatureState = createFeatureSelector<User>(userStateFeatureKey);

export function userReducer(state = defaultUser, action: userActions.All) {
  switch (action.type) {
    case userActions.GET_USER:
      return {...state, loading: true};
    case userActions.AUTHENTICATED:
      return {...state, ...action.payload, loading: false};
    case userActions.NOT_AUTHENTICATED:
      return {...state, ...defaultUser, loading: false};
    case userActions.GOOGLE_LOGIN:
      return {...state, loading: true};
    case userActions.AUTH_ERROR:
      return {...state, ...action.payload, loading: false};
    case userActions.LOGOUT:
      return {...state, loading: true};
  }
}
