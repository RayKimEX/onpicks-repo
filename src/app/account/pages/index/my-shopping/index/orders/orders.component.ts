import {
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  OnInit
} from '@angular/core';

import {
  AccountDataService
} from '../../../../../../core/service/data-pages/account/account-data.service';

import {
  tap
} from 'rxjs/operators';
import {UiService} from '../../../../../../core/service/ui/ui.service';

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

  writeReview = {
    isShow : false,
    orderData : undefined,
  }
  isShowWriteReview = false;

  weeklyBest$;

  constructor(
    private uiDataService: UiService,
    private accountDataService: AccountDataService,
    private cd: ChangeDetectorRef
  ) {

    this.weeklyBest$ = this.uiDataService.getWeeklyBestGoods().pipe( tap( v => console.log(v));
    this.orderData$ = this.accountDataService
      .getOrdersData()
      .pipe(
      tap( v => {
        console.log(v);
      })
    );
  }

  viewModal(xParam) {

    console.log(xParam);

    if (xParam.data.review === null ) {
      this.accountDataService.createReviewData(xParam.data.product, xParam.orderId).subscribe(
        response => {
          console.log(xParam.param);
          console.log(response);
          if ( xParam.param === 'write_review' ) {
            this.writeReview.isShow = true;
            this.writeReview.orderData = xParam.data;
            this.writeReview.orderData.review = response.review;
          }
          this.cd.markForCheck();
        }, error => {
          console.log(error);
        }
      );
    } else {
      if ( xParam.param === 'write_review' ) {
        this.writeReview = {
          isShow : true,
          orderData : {
            ...xParam.data
          }
        }
        this.cd.markForCheck();
      }
    }



  }

  ngOnInit() {

  }

}
