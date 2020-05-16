import {Injectable, OnDestroy} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, DocumentReference} from '@angular/fire/firestore';
import {from, Observable, Subscription} from 'rxjs';
import {Song, SongListDto} from '../models/song';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';
import * as fromRoot from '../../state';
import {UserData} from '../../user/user';
import {Store} from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class SongService implements OnDestroy{
  private songCollection: AngularFirestoreCollection<Song>;

  private subscriptions : Subscription[] = [];
  private currentUserData: UserData;
  constructor(private afs: AngularFirestore,
              private store: Store<fromRoot.State>) {
    this.songCollection = afs.collection<Song>(environment.databases.songs, ref => ref.orderBy('page'));
    this.subscriptions.push(this.store.select(fromRoot.getUserData).subscribe(userData => this.currentUserData = userData));
  }

  getAllSongs(): Observable<SongListDto[]> {
    return this.songCollection.valueChanges({idField: 'id'})
      .pipe(this.mapSongToListDto());
  }

  getSongsByCategory(category: string): Observable<SongListDto[]> {
    return this.songCollection.valueChanges({idField: 'id'})
      .pipe(
        map(songs => songs.filter(s => s.category === category)),
        this.mapSongToListDto()
      );
  }

  getSongById(id: string): Observable<Song> {
    return this.songCollection.doc<Song>(id)
      .valueChanges();
  }

  getSongReferenceById(id: string): DocumentReference {
    return this.songCollection.doc<Song>(id).ref;
  }

  addSong(song: Song): Observable<DocumentReference> {
    return from(this.songCollection.add(song));
  }

  updateSong(id: string, song: any): Observable<void> {
    return from(this.songCollection.doc<Song>(id).update(song));
  }

  deleteSong(id: string): Observable<void> {
    return from(this.songCollection.doc<Song>(id).delete());
  }

  isSongFavorite(id: string): boolean {
    if (this.currentUserData && this.currentUserData.favorites) {
      return !!this.currentUserData.favorites.find(fav => fav === id);
    }
    return false;
  }

  mapSongToListDto = () => {
    return map((songs: Song[]) => songs.map(s => ({
        id: s.id,
        title: s.title,
        associationName: s.associationName,
        battleCryName: s.battleCryName,
        page: s.page,
        favorite: this.isSongFavorite(s.id)
      } as SongListDto)
    ));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
