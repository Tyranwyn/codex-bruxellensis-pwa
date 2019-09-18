import * as fromUser from './user/user.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { User } from '../user';

export interface UserState {
  user: User;
}

export const reducers = {
  user: fromUser.reducer,
  // userData: fromUserData.reducer
};

export const userStateFeatureSelector = createFeatureSelector<UserState>('userState');

export const userSelector = createSelector(
  userStateFeatureSelector,
  state => state.user
);

/*export const userDataSelector = createSelector(
  userStateFeatureSelector,
  state => state.user
);*/
