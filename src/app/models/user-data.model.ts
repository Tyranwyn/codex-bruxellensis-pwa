import { AccountType } from './account-type.enum';
import { DocumentReference } from '@angular/fire/firestore';

export interface UserData {
  accountType?: AccountType;
  favorites?: DocumentReference[];
}
