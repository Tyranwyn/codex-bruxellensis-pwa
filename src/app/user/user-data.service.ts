import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';
import { environment } from '../../environments/environment';
import { from, Observable } from 'rxjs';
import { SongService } from '../songs/services/song-service';
import { Store } from '@ngrx/store';
import * as fromRoot from '../state/app.state';
import { UserData } from './user-data';

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
    return this.userDataCollection.doc<UserData>(uid)
      .valueChanges();
  }

  addFavorite(uid: string, songId: string): Observable<DocumentReference> {
    const favorite = this.songService.getSongReferenceById(songId);
    return from(
      this.userDataCollection.doc<UserData>(uid)
        .collection<DocumentReference>('favorites')
        .add(favorite)
    );
  }

  removeFavorite(uid: string, songId: string): Observable<void> {
    return from(this.userDataCollection.doc<UserData>(uid)
      .collection<DocumentReference>('favorites')
      .doc(songId)
      .delete()
    );
  }
}
