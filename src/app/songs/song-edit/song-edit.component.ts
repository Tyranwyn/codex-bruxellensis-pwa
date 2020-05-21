import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Category} from '../models/category.enum';
import {FormBuilder, FormGroup} from '@angular/forms';
import {SongService} from '../services/song-service';
import {Song} from '../models/song';

@Component({
  selector: 'app-song-edit',
  templateUrl: './song-edit.component.html',
  styleUrls: ['./song-edit.component.css']
})
export class SongEditComponent implements OnInit {

  currentSong: Song;
  showEditModalValue = false;
  categories: string[] = [];
  editSongForm: FormGroup;
  @Output()
  showEditModalChange = new EventEmitter<boolean>();

  @Input()
  set song(song: Song) {
    if (song) {
      this.currentSong = song;
      this.fillUpForm(song);
    }
  }

  @Input()
  get showEditModal() {
    return this.showEditModalValue;
  }

  set showEditModal(value: boolean) {
    this.showEditModalValue = value;
    this.showEditModalChange.emit(this.showEditModalValue);
  }

  constructor(private fb: FormBuilder, private songService: SongService) {
  }

  ngOnInit() {
    this.categories = Object.keys(Category);
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
  }

  edit() {
    this.songService.updateSong(this.currentSong.id, this.editSongForm.value);
    this.hideEdit();
  }

  delete() {
    this.songService.deleteSong(this.currentSong.id);
    this.hideEdit();
  }

  hideEdit() {
    this.showEditModal = false;
  }

  private fillUpForm(song: Song) {
    this.editSongForm.get('category').setValue(song.category);
    this.editSongForm.get('page').setValue(song.page);
    this.editSongForm.get('title').setValue(song.title);
    this.editSongForm.get('bgInfo').setValue(song.bgInfo);
    this.editSongForm.get('lyrics').setValue(song.lyrics);
    this.editSongForm.get('associationName').setValue(song.associationName);
    this.editSongForm.get('associationInfo').setValue(song.associationInfo);
    this.editSongForm.get('battleCryName').setValue(song.battleCryName);
    this.editSongForm.get('battleCryInfo').setValue(song.battleCryInfo);
    this.editSongForm.get('battleCry').setValue(song.battleCry);
  }
}
