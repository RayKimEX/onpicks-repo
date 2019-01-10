import { PDataService } from '../../../../../../core/service/data-pages/p/p-data.service';
import {TryGetProductInfo, TryGetReviewProduct} from '../../store/p.actions';
import { ActivatedRoute } from '@angular/router';
import {select, Store} from '@ngrx/store';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef, OnDestroy,
  Renderer2,
  ViewChild
} from '@angular/core';
import {
  shareReplay,
  tap
} from 'rxjs/operators';
import {UiService} from '../../../../../../core/service/ui/ui.service';

@Component({
  selector: 'onpicks-p',
  templateUrl: './p-index.component.html',
  styleUrls: ['./p-index.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})

export class PIndexComponent implements OnDestroy {

  @ViewChild('communicateBox', { read : ElementRef}) communicateBox;

  pData$;
  pPictureReviews$;
  weeklyBest$;

  constructor(
    private store: Store<any>,
    private renderer: Renderer2,
    private pDataService: PDataService,
    private route: ActivatedRoute,
    private uiService: UiService
  ) {
    // 글로벌 하게 해야되서 reviews는 갖고옴, reviews component와, communicate-box
    this.store.dispatch(new TryGetReviewProduct(this.route.snapshot.params.id));
    this.store.dispatch(new TryGetProductInfo(this.route.snapshot.params.id));
    this.pData$ = this.store.pipe(
      select( state => state.p.data), shareReplay(1)
    );
    this.pPictureReviews$ = this.pDataService.getPictureReviewsData(this.route.snapshot.params.id).pipe( tap( v => console.log(v)));
    this.weeklyBest$ = this.uiService.getWeeklyBestGoods();
    // this.pData$ = this.data.getPageData(ths.route.snapshot.params.id).pipe(
    //   tap( v => console.log(v))
    // );

  }

  ngOnDestroy() {
  }

}



