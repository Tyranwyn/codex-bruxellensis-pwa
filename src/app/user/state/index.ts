import * as fromUser from './user/user.reducer';
import * as fromUserData from './user-data/user-data.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { User } from '../models/user';
import { UserData } from '../models/user-data';

export interface UserState {
  user: User;
  userData: UserData;
}

export const reducers = {
  user: fromUser.reducer,
  userData: fromUserData.reducer
};

export const userStateFeatureSelector = createFeatureSelector<UserState>('userState');

export const userSelector = createSelector(
  userStateFeatureSelector,
  state => state.user
);

export const userDataSelector = createSelector(
  userStateFeatureSelector,
  state => state.userData
);
