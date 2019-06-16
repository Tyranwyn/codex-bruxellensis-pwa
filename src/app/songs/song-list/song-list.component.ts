import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Song } from '../../models/song';
import { SongService } from '../../services/song-service';
import { map } from 'rxjs/operators';

const comparePageNumbers = (a: Song, b: Song) => {
  if (a.page < b.page) {
    return -1;
  }
  if (a.page > b.page) {
    return 1;
  }
  return 0;
};

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.scss']
})
export class SongListComponent implements OnInit {

  $songs: Observable<Song[]>;

  constructor(private songService: SongService) {
    this.$songs = songService.getAllSongs()
      .pipe(
        map(s => s.sort(comparePageNumbers))
      );
  }

  ngOnInit() {
  }
}
