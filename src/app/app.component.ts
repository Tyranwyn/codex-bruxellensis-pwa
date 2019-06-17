import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserDataService } from './services/user-data.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(auth: AngularFireAuth,
              userDataService: UserDataService,
              private titleService: Title) {
    auth.user.subscribe(user => userDataService.setUserData(user));
  }

}
