import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable, Subscription} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {Title} from '@angular/platform-browser';
import {AngularFireAuth} from '@angular/fire/auth';
import {Location} from '@angular/common';
import {Song} from '../models/song';
import {SongService} from '../services/song-service';
import * as fromSongs from '../state';
import * as fromRoot from '../../state';
import * as UserDataAction from '../../user/state/user-data/user-data.actions';
import {Store} from '@ngrx/store';
import {UserDataService} from '../../user/user-data.service';
import {UserData} from '../../user/user';

@Component({
  selector: 'app-song-detail',
  templateUrl: './song-detail.component.html',
  styleUrls: ['./song-detail.component.css']
})
export class SongDetailComponent implements OnInit, OnDestroy {

  songId: string;
  song$: Observable<Song>;
  currentUserId: string;
  user: UserData;
  subscriptions: Subscription[] = [];

  constructor(
    public auth: AngularFireAuth,
    private route: ActivatedRoute,
    private songService: SongService,
    private titleService: Title,
    private userDataService: UserDataService,
    private location: Location,
    private store: Store<fromSongs.State>
  ) {
  }

  ngOnInit() {
    this.subscriptions.push(this.store.select(fromRoot.getUserData)
      .subscribe(userdata => this.user = userdata));
    this.subscriptions.push(this.store.select(fromRoot.getUserId)
      .subscribe(uid => this.currentUserId = uid));
    this.song$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.songId = params.get('id');
        return this.songService.getSongById(this.songId);
      })
    );
    this.song$.subscribe(song => this.titleService.setTitle(song.title));
  }

  isSongFavorite(id: string): boolean {
    if (this.user.favorites) {
      return !!this.user.favorites.find(fav => fav === id);
    }
    return false;
  }

  updateFavorites(id: string) {
    if (this.isSongFavorite(id)) {
      this.store.dispatch(UserDataAction.RemoveFavorite({uid: this.currentUserId, songId: id}));
    } else {
      this.store.dispatch(UserDataAction.AddFavorite({uid: this.currentUserId, songId: id}));
    }
  }

  updateSong($event: any) {
    this.songService.updateSong(this.songId, $event);
  }

  back() {
    this.location.back();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

}
