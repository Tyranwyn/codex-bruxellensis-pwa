import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';
import { AngularFireAuth } from '@angular/fire/auth';
import { Location } from '@angular/common';
import { Song } from '../models/song';
import { SongService } from '../services/song-service';
import * as fromSongs from '../state';
import * as fromUser from '../../user/state';
import * as userDataActions from '../../user/state/user-data/user-data.actions';
import { Store } from '@ngrx/store';
import { UserDataService } from '../../user/user-data.service';
import { User } from '../../user/user';
import { AccountType } from '../../user/account-type.enum';

@Component({
  selector: 'app-song-detail',
  templateUrl: './song-detail.component.html',
  styleUrls: ['./song-detail.component.css']
})
export class SongDetailComponent implements OnInit, OnDestroy {

  songId: string;
  $song: Observable<Song>;
  user: User;
  userDataSub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private songService: SongService,
    private titleService: Title,
    private userDataService: UserDataService,
    private auth: AngularFireAuth,
    private location: Location,
    private store: Store<fromSongs.State>
  ) {
  }

  ngOnInit() {
    this.userDataSub = this.store.select(fromUser.getUser)
      .subscribe(userdata => this.user = userdata);
    this.$song = this.route.paramMap.pipe(
      switchMap(params => {
        this.songId = params.get('id');
        return this.songService.getSongById(this.songId);
      })
    );
    this.$song.subscribe(song => this.titleService.setTitle(song.title));
  }

  isSongFavorite(id: string): boolean {
    if (this.user.favorites) {
      return !!this.user.favorites.find(ref => ref.id === id);
    }
    return false;
  }

  updateFavorites(id: string) {
    if (this.isSongFavorite(id)) {
      this.store.dispatch(new userDataActions.RemoveFavorite(id));
    } else {
      this.store.dispatch(new userDataActions.AddFavorite(id));
    }
  }

  updateSong($event: any) {
    this.songService.updateSong(this.songId, $event);
  }

  canModifySong(): boolean {
    return this.user && this.user.accountType === AccountType.ADMIN;
  }

  back() {
    this.location.back();
  }

  ngOnDestroy(): void {
    this.userDataSub.unsubscribe();
  }

}
