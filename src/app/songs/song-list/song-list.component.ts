import {Component, OnDestroy, OnInit} from '@angular/core';
import {EMPTY, Observable, Subscription} from 'rxjs';
import {map} from 'rxjs/operators';
import {Title} from '@angular/platform-browser';
import {environment} from '../../../environments/environment';
import {ActivatedRoute} from '@angular/router';
import {Song, SongListDto} from '../models/song';
import {SongService} from '../services/song-service';
import {select, Store} from '@ngrx/store';
import * as fromSongs from '../state';
import * as fromRoot from '../../state';
import * as UserDataAction from '../../user/state/user-data/user-data.actions';
import {Role, UserData} from '../../user/user';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.scss']
})
export class SongListComponent implements OnInit, OnDestroy {

  songs$: Observable<SongListDto[]>;
  errormessage$: Observable<string>;
  selectedSong$: Observable<Song> = EMPTY;
  filter: string;
  subscriptions: Subscription[] = [];
  currentUid: string;
  currentUserData: UserData;
  canEditSongs = false;

  showEditModal = false;
  showAddModal = false;

  constructor(
    private songService: SongService,
    private titleService: Title,
    private route: ActivatedRoute,
    private store: Store<fromSongs.State>
  ) {
    titleService.setTitle(environment.title);
  }

  ngOnInit() {
    this.subscriptions.push(this.store.select(fromRoot.getUserId).subscribe(uid => this.currentUid = uid));
    this.subscriptions.push(this.store.select(fromRoot.getUserData).subscribe(userData => {
      this.currentUserData = userData;
      this.canEditSongs = userData.role === Role.ADMIN;
    }));

    this.errormessage$ = this.store.pipe(select(fromSongs.getError));

    this.route.queryParamMap.subscribe(paramMap => {
      const category = paramMap.get('category');
      if (category) {
        // this.store.dispatch(new songActions.LoadCategorySongs(category));
        this.songs$ = this.songService.getSongsByCategory(category);
      } else {
        // this.store.dispatch(new songActions.LoadAllSongs());
        this.songs$ = this.songService.getAllSongs();
      }
    });

    // this.songs$ = this.store.select(fromSongs.getSongs);
  }

  search() {
    this.songs$ = this.songs$.pipe(
      map(songs => songs.filter(song => this.filterSongsByPageTitleBattleCryNameOrAssociationName(song)))
    );
  }

  filterSongsByPageTitleBattleCryNameOrAssociationName = (song: SongListDto) => {
    const filterString = '' + song.page + song.title + song.battleCryName + song.associationName;
    return filterString.toLowerCase().indexOf(this.filter.toLowerCase()) !== -1;
  };

  filterSongsByCategory = (category: string) => {
    this.songs$ = this.songService.getSongsByCategory(category);
    /*this.songs$ = this.store.pipe(
      select(fromSongs.getSongs),
      map(songs => songs.filter(song => song.category.match(category)))
    );*/
  };

  updateFavorites(song: SongListDto) {
    if (this.isSongFavorite(song.id)) {
      this.store.dispatch(UserDataAction.RemoveFavorite({uid: this.currentUid, songId: song.id}));
    } else {
      this.store.dispatch(UserDataAction.AddFavorite({uid: this.currentUid, songId: song.id}));
    }
  }

  isSongFavorite(id: string): boolean {
    if (this.currentUserData && this.currentUserData.favorites) {
      return !!this.currentUserData.favorites.find(fav => fav === id);
    }
    return false;
  }

  editSong(song) {
    this.selectedSong$ = this.songService.getSongById(song.id);
    this.showEdit();
  }

  showEdit() {
    this.showEditModal = true;
  }

  showAdd() {
    this.showAddModal = true;
  }

  hideAdd() {
    this.showAddModal = false;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
