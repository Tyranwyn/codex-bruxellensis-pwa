import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { environment } from '../../environments/environment';
import { AngularFireAuth } from '@angular/fire/auth';
import { AccountType } from '../models/account-type.enum';
import { EMPTY, Observable } from 'rxjs';
import * as firebase from 'firebase';
import { User } from 'firebase';
import { SongService } from '../songs/services/song-service';
import { UserData } from '../models/user-data';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  private userDataCollection: AngularFirestoreCollection<UserData>;

  constructor(private angularFireAuth: AngularFireAuth,
              afs: AngularFirestore,
              private songService: SongService) {
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
    }
  }

  getUserData(id: string): Observable<UserData> {
    if (id) {
      return this.userDataCollection.doc<UserData>(id)
        .valueChanges();
    }
    return EMPTY;
  }

  addFavorite(id: string) {
    this.angularFireAuth.user.subscribe(user => {
      if (user) {
        const favorite = this.songService.getSongReferenceById(id);
        this.userDataCollection.doc<UserData>(user.uid)
          .update({
            // @ts-ignore
            favorites: firebase.firestore.FieldValue.arrayUnion(favorite)
          });
      }
    });
  }

  removeFavorite(id: string) {
    this.angularFireAuth.user.subscribe(user => {
        if (user) {
          const favorite = this.songService.getSongReferenceById(id);
          this.userDataCollection.doc<UserData>(user.uid)
            .update({
              // @ts-ignore
              favorites: firebase.firestore.FieldValue.arrayRemove(favorite)
            });
        }
      }
    );
  }
}
