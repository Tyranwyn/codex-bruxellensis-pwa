import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Song } from '../../models/song';
import { SongService } from '../../services/song-service';
import { map } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';
import { environment } from '../../../environments/environment';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { UserDataService } from '../../services/user-data.service';
import { UserData } from '../../models/user-data';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.scss']
})
export class SongListComponent implements OnInit {

  $songs: Observable<Song[]>;
  filter: string;
  userData: UserData;

  filterSongs = (song: Song) => {
    const filterString = '' + song.page + song.title + song.battleCryName + song.associationName;
    return filterString.toLowerCase().indexOf(this.filter.toLowerCase()) !== -1;
  };

  constructor(private songService: SongService,
              private titleService: Title,
              private route: ActivatedRoute,
              private userDataService: UserDataService,
              private auth: AngularFireAuth) {
    titleService.setTitle(environment.title);
    auth.user
      .subscribe(user => {
          if (user) {
            this.userDataService.getUserData(user.uid).subscribe(userData => this.userData = userData);
          }
        }
      );
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

  isSongFavorite(id: string): boolean {
    if (this.userData.favorites) {
      this.userData.favorites.find(ref => ref.id === id);
      return true;
    }
    return false;
  }
}
