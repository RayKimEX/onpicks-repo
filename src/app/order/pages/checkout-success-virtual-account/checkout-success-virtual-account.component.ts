import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {OrderDataService} from '../../../core/service/data-pages/order/order-data.service';

@Component({
  selector: 'onpicks-checkout-success-no-bank',
  templateUrl: './checkout-success-virtual-account.component.html',
  styleUrls: ['./checkout-success-virtual-account.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class CheckoutSuccessVirtualAccountComponent implements OnInit {

  queryParams$;

  orderCode = 0;

  orderInfo$;

  constructor(
    private route: ActivatedRoute,
    private orderDataService: OrderDataService
  ) {
    this.queryParams$ = this.route.queryParams
      .subscribe((val: {order_code}) => {
        this.orderCode = val.order_code;
        this.orderInfo$ = this.orderDataService.getOrderInfo(this.orderCode);
        console.log('checkout-success param' + this.orderCode);
      });
  }

  ngOnInit() {

  }

}
