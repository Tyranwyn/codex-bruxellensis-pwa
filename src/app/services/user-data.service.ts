import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { environment } from '../../environments/environment';
import { AngularFireAuth } from '@angular/fire/auth';
import { AccountType } from '../models/account-type.enum';
import { EMPTY, Observable } from 'rxjs';
import * as firebase from 'firebase';
import { User } from 'firebase';
import { SongService } from '../songs/services/song-service';
import { IUser } from '../models/user.model';
import { Store } from '@ngrx/store';
import { State } from '../state/app.state';
import * as userActions from '../state/user.actions';
import * as fromUser from '../state/user.reducer';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  private userDataCollection: AngularFirestoreCollection<IUser>;

  constructor(private angularFireAuth: AngularFireAuth,
              afs: AngularFirestore,
              private songService: SongService,
              private store: Store<State>) {
    this.userDataCollection = afs.collection<IUser>(environment.databases.userData);
  }

  setUserData(user: User) {
    /*if (user) {
      const userDataDoc = this.userDataCollection.doc<IUser>(user.uid);
      userDataDoc.get()
        .subscribe(userData => {
            if (!userData.data()) {
              const initUserData: User = {accountType: AccountType.USER, favorites: []};
              userDataDoc.set(initUserData).catch(e => console.log(e));
            }
          }
        );
    }*/
  }

  getUserData(id: string): Observable<IUser> {
    /*if (id) {
      return this.userDataCollection.doc<IUser>(id)
        .valueChanges();
    }*/
    // this.store.select(fromUser.getUser);
    // this.store.dispatch(new userActions.LoadUserData());
    return EMPTY;
  }

  addFavorite(id: string) {
    this.angularFireAuth.user.subscribe(user => {
      if (user) {
        const favorite = this.songService.getSongReferenceById(id);
        this.userDataCollection.doc<IUser>(user.uid)
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
          this.userDataCollection.doc<IUser>(user.uid)
            .update({
              // @ts-ignore
              favorites: firebase.firestore.FieldValue.arrayRemove(favorite)
            });
        }
      }
    );
  }
}
