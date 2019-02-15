import {ChangeDetectionStrategy, Component, Inject, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../../core/store/app.reducer';
import {TryLogout} from '../../../core/store/auth/auth.actions';
import {Router} from '@angular/router';
import {CURRENCY} from '../../../app.config';

@Component({
  selector: 'onpicks-account-index',
  templateUrl: './account-index.component.html',
  styleUrls: ['./account-index.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})
export class AccountIndexComponent implements OnInit {

  user$;

  constructor(
    @Inject(CURRENCY) public currency,
    private store: Store<AppState>,
    private router: Router,
  ) {
    this.user$ = this.store.pipe(
      select(state => state.auth.user),
    );
  }

  ngOnInit() {
    this.currency.subscribe( a => {
      console.log(a);
    });
  }



  logout() {
    this.store.dispatch(new TryLogout());
    this.router.navigate( ['/']);
  }

}
