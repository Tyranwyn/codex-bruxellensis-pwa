import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { User } from 'firebase';
import { UserDataService } from '../services/user-data.service';
import { UserData } from '../models/user-data';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {

  $user: Observable<User>;
  $userData: Observable<UserData>;

  constructor(private angularFireAuth: AngularFireAuth,
              private userDataservice: UserDataService) {
    this.$user = angularFireAuth.user;
    this.$userData = this.userDataservice.getUserData();
  }

  ngOnInit() {
  }

}
