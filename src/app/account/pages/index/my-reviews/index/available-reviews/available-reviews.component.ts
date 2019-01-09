import {ChangeDetectionStrategy, ChangeDetectorRef, Component, HostListener, OnInit} from '@angular/core';
import {tap} from 'rxjs/operators';
import {AccountDataService} from '../../../../../../core/service/data-pages/account/account-data.service';
import {UiService} from '../../../../../../core/service/ui/ui.service';

@Component({
  selector: 'onpicks-available-reviews',
  templateUrl: './available-reviews.component.html',
  styleUrls: ['./available-reviews.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})
export class AvailableReviewsComponent implements OnInit {

  orderData$;
  writeReview = {
    isShow : false,
    orderData : undefined,
  }

  weeklyBest$;
  weeklyBest;
  constructor(
    private accountDataService: AccountDataService,
    private uiDataService: UiService,
    private cd: ChangeDetectorRef
  ) {
    this.orderData$ = this.accountDataService
      .getOrdersNotReviewedData()
      .pipe(
        tap( v => console.log(v))
      );

    this.weeklyBest$ = this.uiDataService.getWeeklyBestGoods().pipe( tap( v => console.log(v)));
  }

  ngOnInit() {

  }

  viewModal(xParam) {

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
}
