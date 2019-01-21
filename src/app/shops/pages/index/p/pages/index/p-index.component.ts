import { PDataService } from '../../../../../../core/service/data-pages/p/p-data.service';
import {DeleteProductAndReviewInfo, TryGetProductInfo, TryGetReviewProduct} from '../../store/p.actions';
import {ActivatedRoute, Router} from '@angular/router';
import {select, Store} from '@ngrx/store';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef, OnDestroy,
  Renderer2,
  ViewChild
} from '@angular/core';
import {
  share,
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

  pData$ = null;
  pPictureReviews$;
  weeklyBest$;

  constructor(
    private store: Store<any>,
    private renderer: Renderer2,
    private pDataService: PDataService,
    private route: ActivatedRoute,
    private uiService: UiService,
    private router: Router
  ) {

    // 글로벌 하게 해야되서 reviews는 갖고옴, reviews component와, communicate-box
    this.store.dispatch(new TryGetProductInfo(this.route.snapshot.params.id));
    this.pData$ = this.store.pipe(
      select( state => state.p.data),
      tap( () => {
        // 해당 페이지에 들어 왔을때, reviews에서, scroll값이 있으면 해당 스크롤로 이동
        // TODO : 좀 가라로 한듯함
        const url = this.router.url.split('/');
        if ( url.length > 4 && url[4] === 'reviews') {
          const temp = url[5].substring(url[5].indexOf('?'), url[5].length);
          const splitTemp = temp.split('=');
          window.scrollTo(0, parseInt(splitTemp[1], 10))
          setTimeout( () => window.scrollTo(0, parseInt(splitTemp[1], 10)), 500);
        }
      })
    );

    this.pPictureReviews$ = this.pDataService.getPictureReviewsData(this.route.snapshot.params.id).pipe( tap( v => console.log(v)));
    this.weeklyBest$ = this.uiService.getWeeklyBestGoods();
  }

  ngOnDestroy() {
    this.store.dispatch(new DeleteProductAndReviewInfo());
  }

}



