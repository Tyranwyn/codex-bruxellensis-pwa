import {DocumentReference} from '@angular/fire/firestore';
import {AccountType} from './account-type.enum';

export interface UserData {
  accountType: AccountType;
  favorites?: DocumentReference[];
}
