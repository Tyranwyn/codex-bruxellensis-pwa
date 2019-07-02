import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
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
import { faEnvelope, faStar, faSave } from '@fortawesome/free-regular-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLock, faSearch, faStar as solidStar, faEdit } from '@fortawesome/free-solid-svg-icons';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { EditableTitleComponent } from './common/editable-title/editable-title.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EnumToArrayPipe,
    LoginComponent,
    SongsComponent,
    SongListComponent,
    SongDetailComponent,
    EditableTitleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule.enablePersistence(),
    AppRoutingModule,
    FontAwesomeModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule  {
  constructor() {
    library.add(faStar);
    library.add(solidStar)
    library.add(faEnvelope);
    library.add(faSearch);
    library.add(faLock);
    library.add(faEdit);
    library.add(faSave);
  }
}
