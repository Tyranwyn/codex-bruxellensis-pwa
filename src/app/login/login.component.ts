import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import {AuthProviders} from '../models/auth-providers.enum';
import {AuthenticationService} from '../services/authentication.service';

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
              private angularFireAuth: AngularFireAuth,
              private authService: AuthenticationService) {
    this.angularFireAuth.user.subscribe(user => {
      if (user) {
        router.navigate(['']);
      }
    });
  }

  ngOnInit() {
  }

  login(provider: string) {
    if (provider === 'Email') {
      this.authService.login(provider, this.email, this.password)
        .catch(reason => console.log(reason));
    } else {
      this.authService.login(provider)
        .catch(reason => console.log(reason));
    }
  }
}
