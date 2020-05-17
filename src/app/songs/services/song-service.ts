import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, DocumentReference} from '@angular/fire/firestore';
import {from, Observable} from 'rxjs';
import {Song, SongListDto} from '../models/song';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SongService {
  private songCollection: AngularFirestoreCollection<Song>;

  constructor(private afs: AngularFirestore) {
    this.songCollection = afs.collection<Song>(environment.databases.songs, ref => ref.orderBy('page'));
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

  mapSongToListDto = () => {
    return map((songs: Song[]) => songs.map(s => ({
        id: s.id,
        title: s.title,
        associationName: s.associationName,
        battleCryName: s.battleCryName,
        page: s.page
      } as SongListDto)
    ));
  };

}
