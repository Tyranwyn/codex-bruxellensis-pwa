import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Category} from '../models/category.enum';
import {FormBuilder, FormGroup} from '@angular/forms';
import {SongService} from '../services/song-service';
import {Song} from '../models/song';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-song-edit',
  templateUrl: './song-edit.component.html',
  styleUrls: ['./song-edit.component.css']
})
export class SongEditComponent implements OnInit {

  songToEdit$: Observable<Song>;
  showEditModalValue = false;
  categories: string[] = [];
  editSongForm: FormGroup;
  @Output()
  showEditModalChange = new EventEmitter<boolean>();

  @Input()
  set id(id: string) {
    if (id) {
      this.songToEdit$ = this.songService.getSongById(id);
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
    console.log('editing song');
    // this.songService.updateSong(this.songToEdit.id, this.editSongForm.value);
    // this.hideEdit();
  }

  delete(id) {
    // this.songService.deleteSong(id);
    console.log('deleting song');
    this.hideEdit();
  }


  hideEdit() {
    this.showEditModal = false;
  }
}
