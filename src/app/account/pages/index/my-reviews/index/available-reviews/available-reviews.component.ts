import {ChangeDetectionStrategy, Component, HostListener, OnInit} from '@angular/core';
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
    currentData : undefined,
  }

  weeklyBest$;
  weeklyBest;
  constructor(
    private accountDataService: AccountDataService,
    private uiDataService: UiService
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

  viewModal(data) {
    if ( data.param === 'write_review' ) {
      this.writeReview.isShow = true;
      this.writeReview.currentData = data.data;
    }
  }
}
