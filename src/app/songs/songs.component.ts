import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './state/songs-state.reducer';
import * as songsAction from './state/songs.actions';
import { SongService } from './services/song-service';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {

  constructor(private store: Store<State>,
              private songService: SongService) {
  }

  ngOnInit(): void {
    this.songService.getAllSongs()
      .subscribe(songs => this.store.dispatch(new songsAction.LoadSongs(songs)))
      .unsubscribe();
  }
}
