import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongsComponent } from './songs.component';
import { SongDetailComponent } from './song-detail/song-detail.component';
import { SongListComponent } from './song-list/song-list.component';

@NgModule({
  declarations: [
    SongsComponent,
    SongListComponent,
    SongDetailComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SongsModule { }
