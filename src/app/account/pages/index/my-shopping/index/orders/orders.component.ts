import {
  ChangeDetectionStrategy,
  Component,
  OnInit
} from '@angular/core';

import {
  AccountDataService
} from '../../../../../../core/service/data-pages/account/account-data.service';

import {
  tap
} from 'rxjs/operators';

@Component({
  selector: 'onpicks-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})
export class OrdersComponent implements OnInit {

  sortList = [
    {
      title : '3개월',
      value : 0
    },
    {
      title : '3개월',
      value : 0
    }
  ]
  orderData$;

  constructor(
    private accountDataService: AccountDataService,
  ) {
    this.orderData$ = this.accountDataService
      .getOrdersData()
      .pipe(
      tap( v => console.log(v))
    );
  }

  ngOnInit() {

  }

}
