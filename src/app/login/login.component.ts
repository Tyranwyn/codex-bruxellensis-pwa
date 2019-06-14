import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
import {AuthProviders} from '../models/auth-providers.enum';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  authProviders = AuthProviders;
  loginByEmail = false;
  email;
  password;

  constructor(private router: Router,
              private angularFireAuth: AngularFireAuth) {
    this.angularFireAuth.user.subscribe(user => {
      if (user) {
        router.navigate(['']);
      }
    });
  }

  ngOnInit() {
  }

  login(provider: string) {
    switch (provider) {
      case AuthProviders.Google:
        console.log(provider);
        this.angularFireAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
        break;
      case AuthProviders.Facebook:
        this.angularFireAuth.auth.signInWithPopup(new auth.FacebookAuthProvider());
        break;
      case AuthProviders.Twitter:
        this.angularFireAuth.auth.signInWithPopup(new auth.TwitterAuthProvider());
        break;
      case AuthProviders.GitHub:
        this.angularFireAuth.auth.signInWithPopup(new auth.GithubAuthProvider());
        break;
      case 'Email':
        this.angularFireAuth.auth.createUserWithEmailAndPassword(this.email, this.password);
        break;
      default:
        console.log(`The provider: ${provider}, is not configured yet.`);
    }
  }
}
