import { Action } from '@ngrx/store';
import { User } from '../../user';

export const GET_USER = '[Auth] Get user';
export const AUTHENTICATED = '[Auth] Authenticated';
export const NOT_AUTHENTICATED = '[Auth] Not authenticated';
export const LOGIN = '[Auth] Login attempt';
export const LOGOUT = '[Auth] Logout';
export const AUTH_ERROR = '[Auth] Error';

export class GetUser implements Action {
  readonly type = GET_USER;

  constructor(public payload?: any) {
  }
}

export class Authenticated implements Action {
  readonly type = AUTHENTICATED;

  constructor(public payload: User) {
  }
}

export class NotAuthenticated implements Action {
  readonly type = NOT_AUTHENTICATED;
}

export class Login implements Action {
  readonly type = LOGIN;

  constructor(public payload: {provider: string, email?: string, password?: string}) {
  }
}

export class Logout implements Action {
  readonly type = LOGOUT;

  constructor(public payload?: any) {
  }
}

export class AuthError implements Action {
  readonly type = AUTH_ERROR;

  constructor(public payload?: any) {
  }
}

export type All = GetUser
  | Authenticated
  | NotAuthenticated
  | Login
  | AuthError
  | Logout;
