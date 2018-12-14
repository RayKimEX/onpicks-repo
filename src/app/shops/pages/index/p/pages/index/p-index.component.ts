import { PDataService } from '../../../../../../core/service/data-pages/p/p-data.service';
import { TryGetReviewProduct } from '../../store/p.actions';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Renderer2,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'onpicks-p',
  templateUrl: './p-index.component.html',
  styleUrls: ['./p-index.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})

export class PIndexComponent {

  @ViewChild('communicateBox', { read : ElementRef}) communicateBox;

  pData$;

  constructor(

    private store: Store<any>,
    private renderer: Renderer2,
    private data: PDataService,
    private route: ActivatedRoute,

  ) {

    // 글로벌 하게 해야되서 reviews는 갖고옴, reviews component와, communicate-box
    this.store.dispatch(new TryGetReviewProduct(this.route.snapshot.params.id));
    this.pData$ = this.data.getPageData(this.route.snapshot.params.id);

  }

}



