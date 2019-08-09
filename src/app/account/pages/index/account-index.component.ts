import {
  ChangeDetectionStrategy,
  Component,
  Inject
} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../../core/store/app.reducer';
import {TryLogout} from '../../../core/store/auth/auth.actions';
import {Router} from '@angular/router';
import {CURRENCY, IMAGE_HOST} from '../../../core/global-constant/app.config';

@Component({
  selector: 'onpicks-account-index',
  templateUrl: './account-index.component.html',
  styleUrls: ['./account-index.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})
export class AccountIndexComponent {

  user$;

  constructor(
    @Inject(CURRENCY) public currency,
    @Inject(IMAGE_HOST) public imageHost: string,
    private store: Store<AppState>,
    private router: Router,
  ) {
    this.user$ = this.store.pipe(
      select(state => state.auth.user),
    );
  }

  logout() {
    this.store.dispatch(new TryLogout());
    this.router.navigate( ['/']);
  }
}
