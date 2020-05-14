import {User, UserData} from '../user/user';
import {ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromUser from '../user/state/user/user.reducer';
import * as fromUserData from '../user/state/user-data/user-data.reducer';

export interface State {
  user: User;
  userData: UserData;
}

export const reducers: ActionReducerMap<State> = {
  user: fromUser.UserReducer,
  userData: fromUserData.reducer
};

export const getUserSelector = createFeatureSelector<User>('user');

export const getUserLoading = createSelector(getUserSelector, state => state.loading);
export const getUserError = createSelector(getUserSelector, state => state.error);

export const getUserDataSelector = createFeatureSelector<UserData>('userData');
