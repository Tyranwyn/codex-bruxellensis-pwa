import { User } from '../models/user.model';
import { UserData } from '../models/user-data.model';
import { createFeatureSelector } from '@ngrx/store';

export interface State {
  userState: UserState;
}

export interface UserState {
  user: User;
  userData: UserData;
}

export const userStateFeatureKey = 'userState';
export const getUserFeatureState = createFeatureSelector<UserState>(userStateFeatureKey);
