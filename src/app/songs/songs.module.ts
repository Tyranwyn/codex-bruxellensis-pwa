import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongListComponent } from './song-list/song-list.component';
import { SongDetailComponent } from './song-detail/song-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from '../app-routing.module';
import { StoreModule } from '@ngrx/store';
import { reducer } from './state/song.reducer';
import { EffectsModule } from '@ngrx/effects';
import { SongEffects } from './state/song.effects';

@NgModule({
  declarations: [
    SongListComponent,
    SongDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    StoreModule.forFeature('songsState', reducer),
    EffectsModule.forFeature([SongEffects])
  ]
})
export class SongsModule {
}
