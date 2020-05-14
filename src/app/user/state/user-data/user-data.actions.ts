import {createAction, props} from '@ngrx/store';
import {DocumentReference} from '@angular/fire/firestore';
import {Role, UserData} from '../../user';

export const GetUserData = createAction('[UserData] Get user', props<{uid: string}>());
export const GetUserDataSuccess = createAction('[UserData] Get user succeeded', props<UserData>());
export const GetUserDataFail = createAction('[UserData] Get user failed', props<Error>());
export const ClearUserData = createAction('[UserData] Clearing user data');
export const ChangeRole = createAction('[Role] Change account type', props<{role: Role}>());
export const ChangeRoleSuccess = createAction('[Role] Changing role succeeded');
export const ChangeRoleFail = createAction('[Role] Changing role failed', props<Error>());
export const AddFavorite = createAction('[Favorites] Adding favorite song', props<{id: string}>());
export const AddFavoriteSuccess = createAction('[Favorites] Adding favorite song succeeded', props<DocumentReference>());
export const AddFavoriteFail = createAction('[Favorites] Adding favorite song failed', props<Error>());
export const RemoveFavorite = createAction('[Favorites] Removing favorite song', props<{id: string}>());
export const RemoveFavoriteSuccess = createAction('[Favorites] Removing favorite song succeeded', props<DocumentReference>());
export const RemoveFavoriteFail = createAction('[Favorites] Removing favorite song failed', props<Error>());
