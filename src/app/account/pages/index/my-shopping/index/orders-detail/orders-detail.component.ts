import {ChangeDetectionStrategy, Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AccountDataService} from '../../../../../../core/service/data-pages/account/account-data.service';
import {tap} from 'rxjs/operators';
import {CURRENCY} from '../../../../../../app.config';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'onpicks-orders-detail',
  templateUrl: './orders-detail.component.html',
  styleUrls: ['./orders-detail.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})
export class OrdersDetailComponent implements OnInit, OnDestroy {


  queryParams$;

  orderDetailData$;
  orderDetailData;

  isShowDeliveryModal = false;

  constructor(
    @Inject(CURRENCY) public currency: BehaviorSubject<any>,
    private route: ActivatedRoute,
    private accountDataService: AccountDataService
  ) {
    this.queryParams$ = this.route.params.subscribe( orderId => {
      this.orderDetailData$ = this.accountDataService.getOrdersDetailData(orderId.id).pipe(
        tap( v => console.log(v)),
      );
    });
  }

  ngOnDestroy() {
    this.queryParams$.unsubscribe();

  }

  ngOnInit(){

  }

}
