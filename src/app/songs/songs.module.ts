import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SongListComponent} from './song-list/song-list.component';
import {SongDetailComponent} from './song-detail/song-detail.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {AppRoutingModule} from '../app-routing.module';
import {StoreModule} from '@ngrx/store';
import {reducer} from './state/song.reducer';
import {EffectsModule} from '@ngrx/effects';
import {SongEffects} from './state/song.effects';
import {SongEditComponent} from './song-edit/song-edit.component';
import {CapitalizeModule} from '../common/capitalize/capitalize.module';
import {SongAddComponent} from './song-add/song-add.component';
import {AutosizeModule} from 'ngx-autosize';
import {RouterModule, Routes} from '@angular/router';
import {ScrollingModule} from '@angular/cdk/scrolling';

const songRoutes: Routes = [
  {path: '', component: SongListComponent},
  {path: 'song/:id', component: SongDetailComponent}
];

@NgModule({
  declarations: [
    SongListComponent,
    SongDetailComponent,
    SongEditComponent,
    SongAddComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(songRoutes),
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    StoreModule.forFeature('songsState', reducer),
    EffectsModule.forFeature([SongEffects]),
    CapitalizeModule,
    AutosizeModule,
    ScrollingModule
  ]
})
export class SongsModule {
}
