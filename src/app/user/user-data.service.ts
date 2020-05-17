import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {environment} from '../../environments/environment';
import {from, Observable} from 'rxjs';
import {SongService} from '../songs/services/song-service';
import {Store} from '@ngrx/store';
import * as fromRoot from '../state';
import {UserData, UserDataDao} from './user';
import {map} from 'rxjs/operators';
import {firestore} from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  private userDataCollection: AngularFirestoreCollection<UserData>;

  constructor(afs: AngularFirestore,
              private songService: SongService,
              private store: Store<fromRoot.State>) {
    this.userDataCollection = afs.collection<UserData>(environment.databases.userData);
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

  addFavorite(uid: string, songId: string): Observable<any> {
    const favorite = this.songService.getSongReferenceById(songId);
    return from(
      this.userDataCollection.doc<UserDataDao>(uid)
        // @ts-ignore
        .update({favorites: firestore.FieldValue.arrayUnion(favorite)})
    );
  }

  removeFavorite(uid: string, songId: string): Observable<any> {
    const favorite = this.songService.getSongReferenceById(songId);
    return from(this.userDataCollection.doc<UserDataDao>(uid)
      // @ts-ignore
      .update({favorites: firestore.FieldValue.arrayRemove(favorite)})
    );
  }
}
