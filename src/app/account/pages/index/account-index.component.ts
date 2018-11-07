import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../../core/store/app.reducer';

@Component({
  selector: 'onpicks-account-index',
  templateUrl: './account-index.component.html',
  styleUrls: ['./account-index.component.scss']
})
export class AccountIndexComponent implements OnInit {

  user$;

  constructor(
    private store: Store<AppState>
  ) {
    this.user$ = this.store.pipe(
      select(state => state.auth.user),
    );
  }

  ngOnInit() {
  }

}
