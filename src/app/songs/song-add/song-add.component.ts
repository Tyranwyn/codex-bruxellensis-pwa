import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Category} from '../models/category.enum';
import {SongService} from '../services/song-service';

@Component({
  selector: 'app-song-add',
  templateUrl: './song-add.component.html',
  styleUrls: ['./song-add.component.css']
})
export class SongAddComponent implements OnInit {

  private showAddModalValue = false;
  @Output()
  private showAddModalChange = new EventEmitter<boolean>();

  @Input()
  get showAddModal(): boolean {
    return this.showAddModalValue;
  }

  set showAddModal(show: boolean) {
    this.showAddModalValue = show;
    this.showAddModalChange.emit(this.showAddModalValue);
  }

  categories: string[] = [];
  addSongForm: FormGroup;

  constructor(private fb: FormBuilder,
              private songService: SongService) {
  }

  ngOnInit() {
    this.categories = Object.keys(Category);
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

  add() {
    this.songService.addSong(this.addSongForm.value);
    this.hideAdd();
  }

  hideAdd() {
    this.showAddModal = false;
  }
}
