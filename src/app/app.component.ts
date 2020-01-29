import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import * as fromRoot from './state/app.state';
import { Store } from '@ngrx/store';
import * as userActions from './user/state/user/user.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private swUpdate: SwUpdate,
    private store: Store<fromRoot.State>) {
  }

  ngOnInit(): void {
    this.store.dispatch(new userActions.GetUser());
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(() => {
        if (confirm('New version available. Load new version?')) {
          window.location.reload();
        }
      });
    }
  }

}
