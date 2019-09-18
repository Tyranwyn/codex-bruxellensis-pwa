import { Action } from '@ngrx/store';
import { DocumentReference } from '@angular/fire/firestore';
import { UserData } from '../../user-data';
import { AccountType } from '../../account-type.enum';

export const GET_USER_DATA = '[UserData] Get user';
export const GET_USER_DATA_SUCCESS = '[UserData] Get user succeeded';
export const GET_USER_DATA_FAIL = '[UserData] Get user failed';
export const CHANGE_ACCOUNT_TYPE = '[AccountType] Change account type';
export const CHANGE_ACCOUNT_TYPE_SUCCESS = '[AccountType] Changing account type succeeded';
export const CHANGE_ACCOUNT_TYPE_FAIL = '[AccountType] Changing account type failed';
export const ADD_FAVORITE = '[Favorites] Adding favorite song';
export const ADD_FAVORITE_SUCCESS = '[Favorites] Adding favorite song succeeded';
export const ADD_FAVORITE_FAIL = '[Favorites] Adding favorite song failed';
export const REMOVE_FAVORITE = '[Favorites] Removing favorite song';
export const REMOVE_FAVORITE_SUCCESS = '[Favorites] Removing favorite song succeeded';
export const REMOVE_FAVORITE_FAIL = '[Favorites] Removing favorite song failed';

export class GetUserData implements Action {
  readonly type = GET_USER_DATA;
}

export class GetUserDataSuccess implements Action {
  readonly type = GET_USER_DATA_SUCCESS;

  constructor(public payload: UserData) {
  }
}

export class GetUserDataFail implements Action {
  readonly type = GET_USER_DATA_FAIL;

  constructor(public payload: string) {
  }
}

export class ChangeAccountType implements Action {
  readonly type = CHANGE_ACCOUNT_TYPE;

  constructor(public payload: AccountType) {
  }
}

export class ChangeAccountTypeSuccess implements Action {
  readonly type = CHANGE_ACCOUNT_TYPE_SUCCESS;

  constructor(public payload?: any) {
  }
}

export class ChangeAccountTypeFail implements Action {
  readonly type = CHANGE_ACCOUNT_TYPE_FAIL;

  constructor(public payload: string) {
  }
}

export class AddFavorite implements Action {
  readonly type = ADD_FAVORITE;

  constructor(public payload: string) {
  }
}

export class AddFavoriteSuccess implements Action {
  readonly type = ADD_FAVORITE_SUCCESS;

  constructor(public payload: DocumentReference) {
  }
}

export class AddFavoriteFail implements Action {
  readonly type = ADD_FAVORITE_FAIL;

  constructor(public payload: string) {
  }
}

export class RemoveFavorite implements Action {
  readonly type = REMOVE_FAVORITE;

  constructor(public payload: string) {
  }
}

export class RemoveFavoriteSuccess implements Action {
  readonly type = REMOVE_FAVORITE_SUCCESS;

  constructor(public payload: DocumentReference) {
  }
}

export class RemoveFavoriteFail implements Action {
  readonly type = REMOVE_FAVORITE_FAIL;

  constructor(public payload: string) {
  }
}

export type All = GetUserData
  | GetUserDataSuccess
  | GetUserDataFail
  | ChangeAccountType
  | ChangeAccountTypeSuccess
  | ChangeAccountTypeFail
  | AddFavorite
  | AddFavoriteSuccess
  | AddFavoriteFail
  | RemoveFavorite
  | RemoveFavoriteSuccess
  | RemoveFavoriteFail;
