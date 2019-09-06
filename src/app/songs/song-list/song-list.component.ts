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
import { AccountType } from 'src/app/models/account-type.enum';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Category } from 'src/app/models/category.enum';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.scss']
})
export class SongListComponent implements OnInit {

  $songs: Observable<Song[]>;
  filter: string;
  userData: UserData;

  public showEditModal = false;
  public editSongForm: FormGroup;
  public songToEdit: any = {};
  public categories: any[] = [];

  filterSongs = (song: Song) => {
    const filterString = '' + song.page + song.title + song.battleCryName + song.associationName;
    return filterString.toLowerCase().indexOf(this.filter.toLowerCase()) !== -1;
  }

  constructor(
    private songService: SongService,
    private titleService: Title,
    private route: ActivatedRoute,
    private userDataService: UserDataService,
    private auth: AngularFireAuth,
    public fb: FormBuilder,
  ) {
    this.editSongForm = fb.group({
      category: new FormControl('', []),
      page: new FormControl('', []),
      title: new FormControl('', []),
      bgInfo: new FormControl('', []),
      lyrics: new FormControl('', []),
      associationName: new FormControl('', []),
      associationInfo: new FormControl('', []),
      battleCryName: new FormControl('', []),
      battleCryInfo: new FormControl('', []),
      battleCry: new FormControl('', [])
    });
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
    this.categories = Object.keys(Category);
  }

  capitalize(text) {
    text = text.toLowerCase();
    return text.charAt(0).toUpperCase() + text.slice(1);
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

  edit() {
    console.log(this.editSongForm.value);
    this.songService.updateSong(this.songToEdit.id, this.editSongForm.value);
    this.hideEdit();
  }

  delete(id) {
    console.log(id);
  }

  editSong(song) {
    this.songToEdit = song;
    console.log(song);
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



}
