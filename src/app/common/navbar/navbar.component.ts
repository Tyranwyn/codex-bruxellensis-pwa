import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Category } from '../../models/category.enum';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  categories = Category;

  constructor(public angularFireAuth: AngularFireAuth,
              private router: Router) {
  }

  ngOnInit() {
  }

  logout() {
    this.angularFireAuth.auth.signOut();
  }

  categoryFilter(category: string) {
    this.router.navigate([''], {queryParams: {category}});
  }
}
