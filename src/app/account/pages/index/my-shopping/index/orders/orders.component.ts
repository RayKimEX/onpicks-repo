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
    reviewData : undefined,
  }
  isShowWriteReview = false;

  weeklyBest$;

  constructor(
    private uiDataService: UiService,
    private accountDataService: AccountDataService,
    private cd: ChangeDetectorRef
  ) {

    this.weeklyBest$ = this.uiDataService.getWeeklyBestGoods();
    this.orderData$ = this.accountDataService
      .getOrdersData()
      .pipe(
      tap( v => {
        console.log(v);
      })
    );
  }

  viewModal(xPassedData) {

    console.log(xPassedData.item);
    if (xPassedData.item.review === null ) {
      this.accountDataService.createReviewData(xPassedData.item.product, xPassedData.orderId).subscribe(
        response => {
          if ( xPassedData.condition === 'write_review' ) {

            this.writeReview = {
              isShow : true,
              reviewData : {
                ...xPassedData.item,
                review : response.id
              }
            }
            console.log(this.writeReview);
          }
          this.cd.markForCheck();
        }, error => {
          console.log(error);
        }
      );
    } else {
      if ( xPassedData.condition === 'write_review' ) {
        this.writeReview = {
          isShow : true,
          reviewData : {
            ...xPassedData.item
          }
        }

        console.log(this.writeReview);
        this.cd.markForCheck();
      }
    }



  }

  ngOnInit() {

  }

}
