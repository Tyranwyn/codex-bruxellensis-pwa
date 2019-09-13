import { AccountType } from '../models/account-type.enum';
import { DocumentReference } from '@angular/fire/firestore';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const userDataFeatureKey = 'userDataState';

export interface UserDataState {
  accountType: AccountType;
  favorites: DocumentReference[];
}

const initialState: UserDataState = {
  accountType: AccountType.USER,
  favorites: []
};

const getUserDataFeatureState = createFeatureSelector<UserDataState>(userDataFeatureKey);

export const getAccountType = createSelector(
  getUserDataFeatureState,
  state => state.accountType
);

export const getFavorites = createSelector(
  getUserDataFeatureState,
  state => state.favorites
);

export function reducer(state = initialState, action): UserDataState {
  switch (action.type) {
    case 'CHANGE_ACCOUNTTYPE':
      return {
        ...state,
        accountType: action.payload
      };
    case 'ADD_FAVORITE':
      return {
        ...state,
        favorites: [
          ...state.favorites,
          action.payload
        ]
      };
    case 'REMOVE_FAVORITE':
    default:
      return state;
  }
}
