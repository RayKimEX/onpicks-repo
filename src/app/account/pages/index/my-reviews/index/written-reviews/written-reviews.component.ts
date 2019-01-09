import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {AccountDataService} from '../../../../../../core/service/data-pages/account/account-data.service';
import {tap} from 'rxjs/operators';
import {UiService} from '../../../../../../core/service/ui/ui.service';

@Component({
  selector: 'onpicks-written-reviews',
  templateUrl: './written-reviews.component.html',
  styleUrls: ['./written-reviews.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})
export class WrittenReviewsComponent implements OnInit {

  writtenReviews$;
  writtenReviews;

  weeklyBest$;
  constructor(
    private accountDataService: AccountDataService,
    private uiService: UiService
  ) {
    this.writtenReviews$ = this.accountDataService.getMyWrittenReviews().pipe( tap( v => console.log(v)));
    this.weeklyBest$ = this.uiService.getWeeklyBestGoods();
  }

  ngOnInit() {
  }

}
