import { AccountType } from './account-type.enum';
import { DocumentReference } from '@angular/fire/firestore';

export interface ICodexUser {
  uid: string;
  displayName: string;
  email: string;
  loading?: boolean;
  error?: string;
  accountType?: AccountType;
  favorites?: DocumentReference[];
}

export class CodexUser implements ICodexUser {
  constructor(public uid: string, public displayName: string, public email: string) {}
}
