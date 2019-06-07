import {ChangeDetectionStrategy, Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {REGION_ID} from '../../../core/global-constant/app.config';

@Component({
  selector: 'onpicks-checkout-success',
  templateUrl: './checkout-success.component.html',
  styleUrls: ['./checkout-success.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class CheckoutSuccessComponent implements OnInit, OnDestroy {

  queryParams$;

  orderCode = 0;

  constructor(
    @Inject(REGION_ID) public region: string,
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
