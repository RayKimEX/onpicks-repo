import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit
} from '@angular/core';
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
    reviewData : {},
  }
  weeklyBest$;

  contentHeight = '';
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
    this.contentHeight = (window.screen.height - 400) < 300 ? '' : (window.screen.height - 400) + 'px';
  }

  viewModal(xPassedData) {
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
          }
          this.cd.markForCheck();
        }, error => {
          console.error(error);
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
        this.cd.markForCheck();
      }
    }
  }
}
