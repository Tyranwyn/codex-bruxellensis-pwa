import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {UserData} from '../models/user-data';
import {environment} from '../../environments/environment';
import {AngularFireAuth} from '@angular/fire/auth';
import {AccountType} from '../models/account-type.enum';
import {Observable, Subject} from 'rxjs';
import {User} from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  private userData: Subject<UserData> = new Subject();
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
            if (userData && userData.data()) {
              this.userData.next(userData.data() as UserData);
            } else {
              const initUserData: UserData = {accountType: AccountType.USER};
              userDataDoc.set(initUserData)
                .then(() => this.userData.next(initUserData));
            }
          }
        );
    } else {
      this.userData.next();
    }
  }

  getUserData(): Observable<UserData> {
    return this.userData.asObservable();
  }
}
