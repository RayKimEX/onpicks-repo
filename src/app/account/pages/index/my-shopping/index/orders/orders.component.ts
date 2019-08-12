import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
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
      title : {
        ko : '3개월',
        en : '3 Months'
      },
      value : '3m'
    },
    {
      title : {
        ko : '6개월',
        en : '6 Months'
      },
      value : '6m'
    },
    {
      title : {
        ko : '1년',
        en : '1 Year'
      },
      value : '1y'
    },
    {
      title : {
        ko : '전체보기',
        en : 'all'
      },
      value : 'all',
    }
  ]

  selectedElement = {
    value : '3m'
  }


  writeReview = {
    isShow : false,
    reviewData : undefined,
  }


  /*******data********/
  orderData$;
  weeklyBest$;
  reviewData;

  /*******ui********/
  contentHeight = '';

  constructor(
    private uiDataService: UiService,
    private accountDataService: AccountDataService,
    private cd: ChangeDetectorRef,
  ) {
    this.weeklyBest$ = this.uiDataService.getWeeklyBestGoods();
    this.orderData$ = this.accountDataService
      .getOrdersData('3m')
      .pipe(
        tap( v => {
          console.log(v);
        })
      );
  }

  ngOnInit() {
    this.contentHeight = (window.screen.height - 400) < 300 ? '' : (window.screen.height - 400) + 'px';
  }

  viewModal(xPassedData) {
    if (xPassedData.item.review === null ) {
      this.accountDataService.createReviewData(xPassedData.item.product, xPassedData.orderId).subscribe(
        response => {
          if ( xPassedData.condition === 'write_review' ) {
            xPassedData.item['review'] = response.id;
            this.writeReview = {
              isShow : true,
              reviewData : xPassedData.item
            }
            this.reviewData = xPassedData.item;
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
          reviewData : xPassedData.item
        }
        this.reviewData = xPassedData.item;
        this.cd.markForCheck();;
      }
    }
  }

 test(vv) {
    this.selectedElement = vv;
    this.orderData$ = this.accountDataService
      .getOrdersData(this.selectedElement.value)
      .pipe(
        tap( v => {
          console.log(v);
        })
      );
  }

  exitWriteReview() {
    this.writeReview.isShow = false;
    this.cd.markForCheck();
  }

  publishedReview() {
    // MUST TODO : 이 부분은 여러가지로 꼬여있어서, 그냥 처음부터 다시 로딩하는거로 바꿈, 새로 다시 만들어야함. 여러가지로 설계까 잘못된 코딩.
    // 이코드가 있는 이유는, 리뷰를 작성한 다음에 리뷰 버튼이 사라져야 하기 때문

    this.orderData$ = this.accountDataService
      .getOrdersData('3m')
      .pipe(
        tap( v => {
          console.log(v);
        })
      );

  }
}
