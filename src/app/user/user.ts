import { AccountType } from './account-type.enum';
import { DocumentReference } from '@angular/fire/firestore';

export interface User {
  uid: string;
  displayName: string;
  email: string;
  accountType: AccountType;
  favorites: DocumentReference[];
  loading?: boolean;
  error?: string;
}
