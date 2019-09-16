import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';
import { UserDataService } from '../../services/user-data.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { ICodexUser } from '../../models/codex-user.model';
import { AccountType } from '../../models/account-type.enum';
import { Location } from '@angular/common';
import { Song } from '../models/song';
import { SongService } from '../services/song-service';

@Component({
  selector: 'app-song-detail',
  templateUrl: './song-detail.component.html',
  styleUrls: ['./song-detail.component.css']
})
export class SongDetailComponent implements OnInit {

  songId: string;
  $song: Observable<Song>;
  userData: ICodexUser;

  constructor(
    private route: ActivatedRoute,
    private songService: SongService,
    private titleService: Title,
    private userDataService: UserDataService,
    private auth: AngularFireAuth,
    private location: Location
  ) {
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

  updateSong($event: any) {
    this.songService.updateSong(this.songId, $event);
  }

  canModifySong(): boolean {
    return this.userData && this.userData.accountType === AccountType.ADMIN;
  }

  back() {
    this.location.back();
  }

}
