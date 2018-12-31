import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {tap} from 'rxjs/operators';
import {AccountDataService} from '../../../../../core/service/data-pages/account/account-data.service';

@Component({
  selector: 'onpicks-my-shopping-index',
  templateUrl: './my-shopping-index.component.html',
  styleUrls: ['./my-shopping-index.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})
export class MyShoppingIndexComponent implements OnInit {

  constructor(
    private store: Store<any>,
  ) {
    this.url$ = this.store.pipe(
      select(state => state.ui.activeUrl),
      tap( v => console.log(v))
    );


  }

  url$;

  ngOnInit() {
  }

}
