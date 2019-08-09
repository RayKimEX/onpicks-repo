import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnDestroy
} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {OrderDataService} from '../../../core/service/data-pages/order/order-data.service';
import {CURRENCY} from '../../../core/global-constant/app.config';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'onpicks-checkout-success-no-bank',
  templateUrl: './checkout-success-virtual-account.component.html',
  styleUrls: ['./checkout-success-virtual-account.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class CheckoutSuccessVirtualAccountComponent implements OnDestroy {

  queryParams$;
  orderCode = 0;
  orderInfo$;

  constructor(
    @Inject( CURRENCY ) public currency: BehaviorSubject<any>,
    private route: ActivatedRoute,
    private orderDataService: OrderDataService,
  ) {
    this.queryParams$ = this.route.queryParams
      .subscribe((val: {order_code}) => {
        this.orderCode = val.order_code;
        this.orderInfo$ = this.orderDataService.getOrderInfo(this.orderCode);
      });
  }

  ngOnDestroy() {
    this.queryParams$.unsubscribe();
  }
}
