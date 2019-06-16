import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Song} from '../../models/song';
import {SongService} from '../../services/song-service';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.scss']
})
export class SongListComponent implements OnInit {

  $songs: Observable<Song[]>;

  constructor(private songService: SongService) {
    this.$songs = songService.getAllSongs();
  }

  ngOnInit() {
  }
}
