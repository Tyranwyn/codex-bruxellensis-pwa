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
  userData: fromUserData.UserDataReducer,
};

const getUserStateFeature = createFeatureSelector<State>('userState');

export const getUser = createSelector(getUserStateFeature, state => state.user);

export const getUserId = createSelector(getUser, state => state.uid);
export const getUserLoading = createSelector(getUser, state => state.loading);
export const getUserError = createSelector(getUser, state => state.error);

export const getUserData = createSelector(getUserStateFeature, state => state.userData);
