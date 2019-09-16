import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, takeWhile } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';
import { environment } from '../../../environments/environment';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { UserDataService } from '../../services/user-data.service';
import { UserData } from '../../models/user-data';
import { AngularFireAuth } from '@angular/fire/auth';
import { AccountType } from 'src/app/models/account-type.enum';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Song } from '../models/song';
import { SongService } from '../services/song-service';
import { Category } from '../models/category.enum';
import { select, Store } from '@ngrx/store';
import * as fromSong from '../state/song.reducer';
import * as songAction from '../state/song.actions';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.scss']
})
export class SongListComponent implements OnInit {

  songs$: Observable<Song[]>;
  errormessage$: Observable<string>;
  filter: string;
  userData: UserData;

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
    auth.user
      .subscribe(user => {
          if (user) {
            this.userDataService.getUserData(user.uid).subscribe(userData => this.userData = userData);
          }
        }
      );
    // this.route.queryParamMap.subscribe(paramMap => this.songsInit(paramMap));

    this.errormessage$ = this.store.pipe(select(fromSong.getError));
    this.store.dispatch(new songAction.Load());
    this.songs$ = this.store.pipe(select(fromSong.getSongs));
  }

  ngOnInit() {
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

  songsInit(paramMap: ParamMap) {
    const category = paramMap.get('category');
    if (category) {
      this.songs$ = this.songService.getSongsByCategory(category);
    } else {
      this.songs$ = this.songService.getAllSongs();
    }
  }

  isSongFavorite(id: string): boolean {
    if (this.userData && this.userData.favorites) {
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
}
