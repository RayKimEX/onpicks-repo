import {
  ChangeDetectionStrategy,
  Component,
  OnInit
} from '@angular/core';
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
  weeklyBest$;
  contentHeight = '';

  constructor(
    private accountDataService: AccountDataService,
    private uiService: UiService
  ) {
    this.writtenReviews$ = this.accountDataService
      .getMyWrittenReviews().pipe( tap( v => console.log(v)));
    this.weeklyBest$ = this.uiService.getWeeklyBestGoods();
  }

  ngOnInit() {
    this.contentHeight = (window.screen.height - 400) < 300 ? '' : (window.screen.height - 400) + 'px';
  }
}
