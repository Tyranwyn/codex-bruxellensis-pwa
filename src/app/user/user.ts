import { DocumentReference } from '@angular/fire/firestore';

export interface User {
  uid: string;
  displayName: string;
  email: string;
  loading?: boolean;
  error?: Error;
}

export interface UserData {
  role: Role;
  favorites: string[];
  loading?: boolean;
  error?: Error;
}

export interface UserDataDao {
  role: Role;
  favorites: DocumentReference[];
}

export enum Role {
  USER = 'USER',
  ADMIN = 'ADMIN'
}
