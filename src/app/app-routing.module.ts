import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SongsComponent } from './songs/songs.component';
import { LoginComponent } from './login/login.component';
import { SongDetailComponent } from './songs/song-detail/song-detail.component';

const routes: Routes = [
  { path: '', component: SongsComponent },
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
