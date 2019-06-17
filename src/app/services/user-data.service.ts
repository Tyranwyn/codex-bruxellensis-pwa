import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { UserData } from '../models/user-data';
import { environment } from '../../environments/environment';
import { AngularFireAuth } from '@angular/fire/auth';
import { AccountType } from '../models/account-type.enum';
import { EMPTY, Observable } from 'rxjs';
import { User } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  // private static currentUid: string;
  // private userData: Subject<UserData>;
  private userDataCollection: AngularFirestoreCollection<UserData>;

  constructor(private angularFireAuth: AngularFireAuth,
              afs: AngularFirestore) {
    this.userDataCollection = afs.collection<UserData>(environment.databases.userData);
  }

  setUserData(user: User) {
    if (user) {
      const userDataDoc = this.userDataCollection.doc<UserData>(user.uid);
      userDataDoc.get()
        .subscribe(userData => {
            if (!userData.data()) {
              const initUserData: UserData = {accountType: AccountType.USER, favorites: []};
              userDataDoc.set(initUserData).catch(e => console.log(e));
            }
          }
        );
      // this.userData = userDataDoc.valueChanges();
      // UserDataService.currentUid = user.uid;
    } else {
      // UserDataService.currentUid = null;
    }
  }

  getUserData(id: string): Observable<UserData> {
    if (id) {
      return this.userDataCollection.doc<UserData>(id)
        .valueChanges();
    }
    return EMPTY;
  }

  updateUserData(userData: UserData) {
    this.angularFireAuth.user.subscribe( user =>
      this.userDataCollection.doc<UserData>(user.uid).update(userData)
    );
  }
}
