import {ChangeDetectionStrategy, Component, HostListener, OnInit} from '@angular/core';
import {tap} from 'rxjs/operators';
import {AccountDataService} from '../../../../../../core/service/data-pages/account/account-data.service';

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
  constructor(
    private accountDataService: AccountDataService,
  ) {
    this.orderData$ = this.accountDataService
      .getOrdersNotReviewedData()
      .pipe(
        tap( v => console.log(v))
      );
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
