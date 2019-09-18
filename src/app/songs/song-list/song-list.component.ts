import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';
import { environment } from '../../../environments/environment';
import { ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Song } from '../models/song';
import { SongService } from '../services/song-service';
import { Category } from '../models/category.enum';
import { select, Store } from '@ngrx/store';
import * as fromSong from '../state/song.reducer';
import * as songActions from '../state/song.actions';
import * as userDataActions from '../../user/state/user-data/user-data.actions';
import * as fromUserState from '../../user/state';
import { UserData } from '../../user/models/user-data';
import { UserDataService } from '../../user/user-data.service';
import { AccountType } from '../../user/models/account-type.enum';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.scss']
})
export class SongListComponent implements OnInit, OnDestroy {

  songs$: Observable<Song[]>;
  errormessage$: Observable<string>;
  filter: string;
  userData: UserData;
  userDataSub: Subscription;

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
    private userDataService: UserDataService,
    private auth: AngularFireAuth,
    public fb: FormBuilder,
    private store: Store<fromSong.State>
  ) {
    titleService.setTitle(environment.title);
  }

  ngOnInit() {
    this.userDataSub = this.store.select(fromUserState.userDataSelector).subscribe(userdata => this.userData = userdata);

    this.errormessage$ = this.store.pipe(select(fromSong.getError));
    this.store.dispatch(new songActions.Load());
    this.songs$ = this.store.pipe(select(fromSong.getSongs));
    this.route.queryParamMap.subscribe(paramMap => this.filterSongsByCategory(paramMap.get('category')));

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
  }

  filterSongsByCategory = (category: string) => {
    this.songs$ = this.store.pipe(
      select(fromSong.getSongs),
      map(songs => songs.filter(song => song.category.match(category)))
    );
  }

  isSongFavorite(id: string): boolean {
    if (this.userData && this.userData.favorites) {
      return !!this.userData.favorites.find(ref => ref.id === id);
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
    return this.userData && this.userData.accountType === AccountType.ADMIN;
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
