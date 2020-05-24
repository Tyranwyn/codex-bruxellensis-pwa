import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {environment} from '../../environments/environment';
import {from, Observable} from 'rxjs';
import {SongService} from '../songs/services/song-service';
import {Role, UserData, UserDataDao} from './user';
import {map} from 'rxjs/operators';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  private userDataCollection: AngularFirestoreCollection<UserData>;

  constructor(afs: AngularFirestore,
              private songService: SongService) {
    this.userDataCollection = afs.collection<UserData>(environment.databases.userData);
  }

  userDataExists(uid: string): Observable<boolean> {
    return this.userDataCollection.doc(uid)
      .valueChanges()
      .pipe(
        map(userData => {
          if (userData) {
            return true;
          }
          return false;
        })
      );
  }

  getUserData(uid: string): Observable<UserData> {
    return this.userDataCollection.doc<UserDataDao>(uid)
      .valueChanges()
      .pipe(map(data => {
        return {
          role: data.role,
          favorites: data.favorites.map(fav => fav.id)
        };
      }));
  }

  setDefaultUserDataForUser(uid: string): Observable<void> {
    return from(this.userDataCollection.doc<UserDataDao>(uid).set({role: Role.USER, favorites: []}));
  }

  addFavorite(uid: string, songId: string): Observable<any> {
    const favorite = this.songService.getSongReferenceById(songId);
    return from(
      this.userDataCollection.doc<UserDataDao>(uid)
        // @ts-ignore
        .update({favorites: firebase.firestore.FieldValue.arrayUnion(favorite)})
    );
  }

  removeFavorite(uid: string, songId: string): Observable<any> {
    const favorite = this.songService.getSongReferenceById(songId);
    return from(this.userDataCollection.doc<UserDataDao>(uid)
      // @ts-ignore
      .update({favorites: firebase.firestore.FieldValue.arrayRemove(favorite)})
    );
  }
}
