import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'onpicks-checkout-success',
  templateUrl: './checkout-success.component.html',
  styleUrls: ['./checkout-success.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class CheckoutSuccessComponent implements OnInit, OnDestroy {

  queryParams$;

  orderCode;

  constructor(
    private route: ActivatedRoute
  ) {
    this.queryParams$ = this.route.queryParams
      .subscribe((val: {order_code}) => {
        this.orderCode = val.order_code;
        console.log('checkout-success param' + this.orderCode);
      });
  }

  ngOnInit() {

  }

  ngOnDestroy(){
    this.queryParams$.unsubscribe();
  }

}
