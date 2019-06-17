import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FirebaseUIModule } from 'firebaseui-angular';
import { AppRoutingModule } from './app-routing.module';
import { firebaseConfig } from './firebase-config';
import { NavbarComponent } from './common/navbar/navbar.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { EnumToArrayPipe } from './tools/enum-to-array-pipe';
import { LoginComponent } from './login/login.component';
import { SongsComponent } from './songs/songs.component';
import { SongListComponent } from './songs/song-list/song-list.component';
import { SongDetailComponent } from './songs/song-detail/song-detail.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLock, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EnumToArrayPipe,
    LoginComponent,
    SongsComponent,
    SongListComponent,
    SongDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    FirebaseUIModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    library.add(faStar);
    library.add(solidStar)
    library.add(faEnvelope);
    library.add(faSearch);
    library.add(faLock);
  }
}
