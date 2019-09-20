import { Component, OnDestroy, OnInit } from '@angular/core';
import { from, Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';
import { environment } from '../../../environments/environment';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Song } from '../models/song';
import { SongService } from '../services/song-service';
import { Category } from '../models/category.enum';
import { select, Store } from '@ngrx/store';
import * as fromSong from '../state/song.reducer';
import * as songActions from '../state/song.actions';
import * as userDataActions from '../../user/state/user-data/user-data.actions';
import * as fromUserState from '../../user/state';
import { User } from '../../user/user';
import { AccountType } from '../../user/account-type.enum';

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
  currentUser: User;

  showAddModal = false;
  addSongForm: FormGroup;

  showEditModal = false;
  editSongForm: FormGroup;
  songToEdit: any = {};
  categories: any[] = [];

  constructor(
    private songService: SongService,
    private titleService: Title,
    private route: ActivatedRoute,
    public fb: FormBuilder,
    private store: Store<fromSong.State>
  ) {
    titleService.setTitle(environment.title);
  }

  ngOnInit() {
    this.userDataSub = this.store.select(fromUserState.getUser).subscribe(userData => this.currentUser = userData);

    this.errormessage$ = this.store.pipe(select(fromSong.getError));
    this.store.dispatch(new songActions.Load());
    this.songs$ = this.store.select(fromSong.getSongs);
    this.route.queryParamMap.subscribe(paramMap => {
      const category = paramMap.get('category');
      if (category) {
        this.filterSongsByCategory(category);
      }
    });

    this.categories = Object.keys(Category);
    this.initializeForms();
  }

  initializeForms() {
    this.editSongForm = this.fb.group({
      category: '',
      page: '',
      title: '',
      bgInfo: '',
      lyrics: '',
      associationName: '',
      associationInfo: '',
      battleCryName: '',
      battleCryInfo: '',
      battleCry: '',
    });
    this.addSongForm = this.fb.group({
      category: '',
      page: '',
      title: '',
      bgInfo: '',
      lyrics: '',
      associationName: '',
      associationInfo: '',
      battleCryName: '',
      battleCryInfo: '',
      battleCry: ''
    });
  }

  capitalize(text) {
    text = text.toLowerCase();
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  search() {
    this.songs$ = this.songs$.pipe(
      map(songs => songs.filter(song => this.filterSongsByPageTitleBattleCryNameOrAssociationName(song)))
    );
  }

  filterSongsByPageTitleBattleCryNameOrAssociationName = (song: Song) => {
    const filterString = '' + song.page + song.title + song.battleCryName + song.associationName;
    return filterString.toLowerCase().indexOf(this.filter.toLowerCase()) !== -1;
  };

  filterSongsByCategory = (category: string) => {
    this.songs$ = this.store.pipe(
      select(fromSong.getSongs),
      map(songs => songs.filter(song => song.category.match(category)))
    );
  };

  isSongFavorite(id: string): boolean {
    if (this.currentUser && this.currentUser.favorites) {
      return !!this.currentUser.favorites.find(ref => ref.id === id);
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

  add() {
    this.songService.addSong(this.addSongForm.value);
    this.hideAdd();
  }

  edit() {
    this.songService.updateSong(this.songToEdit.id, this.editSongForm.value);
    this.hideEdit();
  }

  delete(id) {
    this.songService.deleteSong(id);
    this.hideEdit();
  }

  editSong(song) {
    this.songToEdit = song;
    this.showEdit();
  }

  canEditSong(): boolean {
    return this.currentUser && this.currentUser.accountType === AccountType.ADMIN;
  }

  showEdit() {
    this.showEditModal = true;
  }

  hideEdit() {
    this.showEditModal = false;
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
