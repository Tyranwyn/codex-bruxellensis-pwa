import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, DocumentReference} from '@angular/fire/firestore';
import {Song} from '../models/song';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  private songCollection: AngularFirestoreCollection<Song>;

  constructor(afs: AngularFirestore) {
    this.songCollection = afs.collection<Song>(environment.databases.songs);
  }

  getAllSongs(): Observable<Song[]> {
    return this.songCollection
      .valueChanges({ idField: 'id'});
  }

  getSongById(id: string): Observable<Song> {
    return this.songCollection.doc<Song>(id)
      .valueChanges();
  }

  addSong(song: Song): Promise<DocumentReference> {
    return this.songCollection.add(song);
  }

  updateSong(id: string, song: Song): Promise<void> {
    return this.songCollection.doc<Song>(id).update(song);
  }
}
