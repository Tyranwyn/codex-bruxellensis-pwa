import * as userActions from './user.actions';
import { AccountType } from '../../account-type.enum';
import { User } from '../../user';

const defaultUser: User = {
  uid: null,
  displayName: 'GUEST',
  email: null,
  accountType: AccountType.USER,
  favorites: []
};

export function reducer(state: User = defaultUser, action: userActions.All): User {
  switch (action.type) {
    case userActions.GET_USER:
      return {...state, loading: true};
    case userActions.AUTHENTICATED:
      return {...state, ...action.payload, loading: false};
    case userActions.NOT_AUTHENTICATED:
      return {...defaultUser, loading: false};
    case userActions.LOGIN:
      return {...state, loading: true};
    case userActions.AUTH_ERROR:
      return {...state, ...action.payload, loading: false};
    case userActions.LOGOUT:
      return {...state, loading: true};
  }
}

