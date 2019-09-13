import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Song } from '../models/song';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  private songCollection: AngularFirestoreCollection<Song>;

  constructor(private afs: AngularFirestore) {
    this.songCollection = afs.collection<Song>(environment.databases.songs, ref => ref.orderBy('page'));
  }

  getAllSongs(): Observable<Song[]> {
    return this.songCollection
      .valueChanges({idField: 'id'});
  }

  getSongsByCategory(category: string): Observable<Song[]> {
    return this.afs.collection<Song>(environment.databases.songs, ref => ref.where('category', '==', category).orderBy('page'))
      .valueChanges({idField: 'id'});
  }

  getSongById(id: string): Observable<Song> {
    return this.songCollection.doc<Song>(id)
      .valueChanges();
  }

  getSongReferenceById(id: string): DocumentReference {
    return this.songCollection.doc<Song>(id).ref;
  }

  addSong(song: Song): Promise<DocumentReference> {
    return this.songCollection.add(song);
  }

  updateSong(id: string, song: any): Promise<void> {
    return this.songCollection.doc<Song>(id).update(song);
  }

  deleteSong(id: string): Promise<void> {
    return this.songCollection.doc<Song>(id).delete();
  }
}