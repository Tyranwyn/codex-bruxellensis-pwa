import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../models/category.enum';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-song-edit',
  templateUrl: './song-edit.component.html',
  styleUrls: ['./song-edit.component.css']
})
export class SongEditComponent implements OnInit {

  @Input()
  songToEdit: any = {};
  categories: string[] = [];

  @Input()
  showEditModal = false;
  editSongForm: FormGroup;

  constructor(private fb: FormBuilder) { }

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
    // this.songService.updateSong(this.songToEdit.id, this.editSongForm.value);
    console.log('editing song');
    this.hideEdit();
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
