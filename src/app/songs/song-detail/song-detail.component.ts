import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SongService } from '../../services/song-service';
import { Observable } from 'rxjs';
import { Song } from '../../models/song';
import { switchMap } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';
import { UserDataService } from '../../services/user-data.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserData } from '../../models/user-data';

@Component({
  selector: 'app-song-detail',
  templateUrl: './song-detail.component.html',
  styleUrls: ['./song-detail.component.css']
})
export class SongDetailComponent implements OnInit {

  songId: string;
  $song: Observable<Song>;
  userData: UserData;

  constructor(private route: ActivatedRoute,
              private songService: SongService,
              private titleService: Title,
              private userDataService: UserDataService,
              private auth: AngularFireAuth) {
    auth.user
      .subscribe(user => {
          if (user) {
            this.userDataService.getUserData(user.uid).subscribe(userData => this.userData = userData);
          }
        }
      );
  }

  ngOnInit() {
    this.$song = this.route.paramMap.pipe(
      switchMap(params => {
        this.songId = params.get('id');
        return this.songService.getSongById(this.songId);
      })
    );
    this.$song.subscribe(song => this.titleService.setTitle(song.title));
  }

  isSongFavorite(id: string): boolean {
    if (this.userData.favorites) {
      return !!this.userData.favorites.find(ref => ref.id === id);
    }
    return false;
  }

  updateFavorites(id: string) {
    if (this.isSongFavorite(id)) {
      this.userDataService.removeFavorite(id);
    } else {
      this.userDataService.addFavorite(id);
    }
  }

  saveTitleAndBgInfo($event: any) {
    this.songService.updateSong(this.songId, {title: $event.title, bgInfo: $event.subtitle});
  }

  saveAssociationName($event: any) {
    this.songService.updateSong(this.songId, {associationName: $event.title});
  }

  saveBattleCryNameAndInfo($event: any) {
    this.songService.updateSong(this.songId, {battleCryName: $event.title, battleCryInfo: $event.subtitle});
  }
}
