import { Injectable, OnDestroy } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';
import { environment } from '../../environments/environment';
import { from, Observable, Subscription } from 'rxjs';
import { SongService } from '../songs/services/song-service';
import { Store } from '@ngrx/store';
import { State } from '../state/app.state';
import * as fromUser from '../state/user.reducer';
import { UserData } from '../models/user-data.model';

@Injectable({
  providedIn: 'root'
})
export class UserDataService implements OnDestroy {

  private userDataCollection: AngularFirestoreCollection<UserData>;
  private uid: string;
  private sub: Subscription;

  constructor(afs: AngularFirestore,
              private songService: SongService,
              private store: Store<State>) {
    this.userDataCollection = afs.collection<UserData>(environment.databases.userData);
    this.sub = store.select(fromUser.getUser).subscribe(user => this.uid = user.uid);
  }

  getUserData(): Observable<UserData> {
    return this.userDataCollection.doc<UserData>(this.uid)
      .valueChanges();
  }

  addFavorite(songId: string): Observable<DocumentReference> {
    const favorite = this.songService.getSongReferenceById(songId);
    return from(
      this.userDataCollection.doc<UserData>(this.uid)
        .collection<DocumentReference>('favorites')
        .add(favorite)
    );
  }

  removeFavorite(songId: string): Observable<void> {
    return from(this.userDataCollection.doc<UserData>(this.uid)
        .collection<DocumentReference>('favorites')
        .doc(songId)
        .delete()
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
