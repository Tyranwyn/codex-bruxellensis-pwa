import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Category } from '../models/category.enum';

@Component({
  selector: 'app-song-add',
  templateUrl: './song-add.component.html',
  styleUrls: ['./song-add.component.css']
})
export class SongAddComponent implements OnInit {

  @Input()
  showAddModal = false;

  categories: string[] = [];
  addSongForm: FormGroup;

  constructor(private fb: FormBuilder) {
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
    // this.songService.addSong(this.addSongForm.value);
    console.log('adding song');
    this.hideAdd();
  }

  hideAdd() {
    this.showAddModal = false;
  }
}
