import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SongDetailComponent } from './songs/song-detail/song-detail.component';
import { LoginComponent } from './user/login/login.component';
import { SongListComponent } from './songs/song-list/song-list.component';

const routes: Routes = [
  { path: '', component: SongListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'song/:id', component: SongDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
