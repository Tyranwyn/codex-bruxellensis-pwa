import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Song } from '../../models/song';
import { SongService } from '../../services/song-service';
import { filter, map } from 'rxjs/operators';

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
  filter: string;

  filterSongs = (song: Song) => {
    const filterString = '' + song.page + song.title + song.battleCryName + song.associationName;
    return filterString.toLowerCase().indexOf(this.filter.toLowerCase()) !== -1;
  }

  constructor(private songService: SongService) {
    this.$songs = songService.getAllSongs()
      .pipe(
        map(s => s.sort(comparePageNumbers))
      );
  }

  ngOnInit() {
  }

  search() {
    this.$songs = this.$songs.pipe(
      map(songs => songs.filter(song => this.filterSongs(song)))
    );
  }
}
