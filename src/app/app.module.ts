import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AppRoutingModule } from './app-routing.module';
import { firebaseConfig } from './firebase-config';
import { NavbarComponent } from './common/navbar/navbar.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { EnumToArrayPipe } from './tools/enum-to-array-pipe';
import { LoginComponent } from './login/login.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AutosizeModule } from 'ngx-autosize';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducer } from './state/user-data.reducer';
import { SongsModule } from './songs/songs.module';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faSave, faStar } from '@fortawesome/free-regular-svg-icons';
import { faEdit, faLock, faSearch, faStar as solidStar, faUser } from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EnumToArrayPipe,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule.enablePersistence(),
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    AutosizeModule,
    StoreModule.forRoot(reducer),
    StoreDevtoolsModule.instrument({
      name: 'Codex Bruxellensis',
      maxAge: 25,
      logOnly: environment.production
    }),
    SongsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule  {
  constructor() {
    library.add(faStar);
    library.add(solidStar);
    library.add(faEnvelope);
    library.add(faSearch);
    library.add(faLock);
    library.add(faEdit);
    library.add(faSave);
    library.add(faUser);
  }
}
