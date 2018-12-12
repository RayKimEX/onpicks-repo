import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../../core/store/app.reducer';
import {Logout} from '../../../core/store/auth/auth.actions';
import {Router} from '@angular/router';

@Component({
  selector: 'onpicks-account-index',
  templateUrl: './account-index.component.html',
  styleUrls: ['./account-index.component.scss'],
})
export class AccountIndexComponent implements OnInit {

  user$;

  constructor(
    private store: Store<AppState>,
    private router: Router,
  ) {
    this.user$ = this.store.pipe(
      select(state => state.auth.user),
    );
  }

  ngOnInit() {
  }



  logout() {
    this.store.dispatch(new Logout());
    this.router.navigate( ['/']);
  }

}
