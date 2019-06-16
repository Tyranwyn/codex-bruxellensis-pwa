import {Component} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {UserDataService} from './services/user-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Codex-Bruxellensis-Webapp';

  constructor(auth: AngularFireAuth,
              userDataService: UserDataService) {
    auth.user.subscribe(user => userDataService.setUserData(user));
  }
}
