import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../../songs/models/category.enum';
import { Observable } from 'rxjs';
import { CodexUser } from '../../models/codex-user.model';
import { Store } from '@ngrx/store';
import { State } from '../../state/app.state';
import * as fromUser from '../../state/user.reducer';
import * as userActions from '../../state/user.actions';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  categories = Category;
  public showLogoutModal = false;
  user$: Observable<CodexUser>;

  constructor(
    // public angularFireAuth: AngularFireAuth,
    private router: Router,
    private store: Store<State>
  ) {
  }

  ngOnInit() {
    this.user$ = this.store.select(fromUser.userStateFeatureKey);
  }

  active(event) {
    const hasClass = event.target.classList.contains('is-active');
    const parent = event.srcElement.parentElement;
    const elements = Array.from(parent.children);
    if (!hasClass) {
      elements.forEach((element: any) => {
        element.classList.remove('is-active');
      });
      event.target.classList.add('is-active');
    }
  }

  toggleClass(event) {
    let menu = event.srcElement.parentElement.parentElement.children.namedItem('navbar-menu');
    let burger = event.srcElement.parentElement.children.namedItem('navbar-burger');
    const hasClass = event.target.classList.contains('is-active');
    if (event.srcElement.nodeName === 'SPAN') {
      menu = event.srcElement.parentElement.parentElement.parentElement.children.namedItem('navbar-menu');
      burger = event.srcElement.parentElement.parentElement.children.namedItem('navbar-burger');
    }
    if (hasClass) {
      event.target.classList.remove('is-active');
      menu.classList.remove('is-active');
      burger.classList.remove('is-active');
    } else {
      event.target.classList.add('is-active');
      menu.classList.add('is-active');
      burger.classList.add('is-active');
    }
  }

  closeMenu(event) {
    const burger = event.srcElement.parentElement.parentElement.parentElement.children.namedItem('navbar-brand')
      .children.namedItem('navbar-burger');
    const menu = event.srcElement.parentElement.parentElement;
    burger.classList.remove('is-active');
    menu.classList.remove('is-active');
  }

  logout() {
    this.showLogoutModal = false;
    // this.angularFireAuth.auth.signOut();
    this.store.dispatch(new userActions.Logout());
  }

  categoryFilter(category: string) {
    this.router.navigate([''], {queryParams: {category}});
  }

  capitalize(text) {
    text = text.toLowerCase();
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  showLogout() {
    this.showLogoutModal = true;
  }

  hideLogout() {
    this.showLogoutModal = false;
  }

}
