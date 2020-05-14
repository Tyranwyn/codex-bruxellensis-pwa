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
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { SongsModule } from './songs/songs.module';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faSave, faStar } from '@fortawesome/free-regular-svg-icons';
import { faEdit, faLock, faSearch, faStar as solidStar, faUser } from '@fortawesome/free-solid-svg-icons';
import { EffectsModule } from '@ngrx/effects';
import { UserModule } from './user/user.module';
import { EnumToArrayModule } from './common/enum-to-array/enum-to-array.module';
import { stringify } from './serializer';

import { reducers, metaReducers } from './state';
export function sanitizer(action) {
  return JSON.parse(stringify(action));
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
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
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    EnumToArrayModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      name: 'Codex Bruxellensis',
      maxAge: 25,
      logOnly: environment.production,
      actionSanitizer: sanitizer
    }),
    SongsModule,
    UserModule
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
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
