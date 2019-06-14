import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private angularFireAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  logout() {
    this.angularFireAuth.auth.signOut();
  }

}
