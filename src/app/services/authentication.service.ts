import { Injectable } from '@angular/core';
import {AuthProviders} from '../models/auth-providers.enum';
import {auth} from 'firebase';
import {AngularFireAuth} from '@angular/fire/auth';
import UserCredential = firebase.auth.UserCredential;

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private angularFireAuth: AngularFireAuth) { }

  login(provider: string, email?: string, password?: string): Promise<UserCredential> {
    switch (provider) {
      case AuthProviders.Google:
        return this.angularFireAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
      case AuthProviders.Facebook:
        return this.angularFireAuth.auth.signInWithPopup(new auth.FacebookAuthProvider());
      case AuthProviders.Twitter:
        return this.angularFireAuth.auth.signInWithPopup(new auth.TwitterAuthProvider());
      case AuthProviders.GitHub:
        return this.angularFireAuth.auth.signInWithPopup(new auth.GithubAuthProvider());
      case 'Email':
        return this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password);
      default:
        console.log(`The provider: ${provider}, is not configured yet.`);
    }
  }
}
