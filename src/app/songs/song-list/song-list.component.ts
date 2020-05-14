import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {map} from 'rxjs/operators';
import {Title} from '@angular/platform-browser';
import {environment} from '../../../environments/environment';
import {ActivatedRoute} from '@angular/router';
import {Song} from '../models/song';
import {SongService} from '../services/song-service';
import {select, Store} from '@ngrx/store';
import * as fromSongs from '../state';
import * as songActions from '../state/song.actions';
import * as UserDataAction from '../../user/state/user-data/user-data.actions';
import * as fromRoot from '../../state';
import {Role, UserData} from '../../user/user';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.scss']
})
export class SongListComponent implements OnInit, OnDestroy {

  songs$: Observable<Song[]>;
  errormessage$: Observable<string>;
  filter: string;
  userDataSub: Subscription;
  currentUser: UserData;
  songToEdit: any = {};

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
    this.userDataSub = this.store.select(fromRoot.getUserData).subscribe(userData => this.currentUser = userData);

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

  filterSongsByPageTitleBattleCryNameOrAssociationName = (song: Song) => {
    const filterString = '' + song.page + song.title + song.battleCryName + song.associationName;
    return filterString.toLowerCase().indexOf(this.filter.toLowerCase()) !== -1;
  }

  filterSongsByCategory = (category: string) => {
    this.songs$ = this.songService.getSongsByCategory(category);
    /*this.songs$ = this.store.pipe(
      select(fromSongs.getSongs),
      map(songs => songs.filter(song => song.category.match(category)))
    );*/
  }

  isSongFavorite(id: string): boolean {
    if (this.currentUser && this.currentUser.favorites) {
      return !!this.currentUser.favorites.find(ref => ref.id === id);
    }
    return false;
  }

  updateFavorites(id: string) {
    if (this.isSongFavorite(id)) {
      this.store.dispatch(UserDataAction.RemoveFavorite({id}));
    } else {
      this.store.dispatch(UserDataAction.AddFavorite({id}));
    }
  }

  editSong(song) {
    this.songToEdit = song;
    this.showEdit();
  }

  canEditSong(): boolean {
    return this.currentUser && this.currentUser.role === Role.ADMIN;
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
    this.userDataSub.unsubscribe();
  }
}
