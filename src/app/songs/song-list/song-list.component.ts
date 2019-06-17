import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Song } from '../../models/song';
import { SongService } from '../../services/song-service';
import { map } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';
import { environment } from '../../../environments/environment';
import { ActivatedRoute, ParamMap } from '@angular/router';

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

  constructor(private songService: SongService,
              private titleService: Title,
              private route: ActivatedRoute) {
    titleService.setTitle(environment.title);
    this.route.queryParamMap.subscribe(paramMap => this.songsInit(paramMap));
  }

  ngOnInit() {
  }

  search() {
    this.$songs = this.$songs.pipe(
      map(songs => songs.filter(song => this.filterSongs(song)))
    );
  }

  songsInit(paramMap: ParamMap) {
    const category = paramMap.get('category');
    if (category) {
      this.$songs = this.songService.getSongsByCategory(category);
    } else {
      this.$songs = this.songService.getAllSongs();
    }
  }
}
