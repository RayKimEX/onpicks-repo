
// Angular
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter, Inject,
  Input,
  LOCALE_ID,
  Output,
  Renderer2,
  ViewChildren
} from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

// Constant
import { DOMAIN_HOST} from '../../../../../../../../core/global-constant/app.config';
import { DISPLAY_ALERT_MESSAGE_MAP, REPORT_REASON_MAP } from '../../../../../../../../core/global-constant/app.locale';

// Service
import { PDataService } from '../../../../../../../../core/service/data-pages/p/p-data.service';

// NgRX
import { select, Store } from '@ngrx/store';
import { DisplayAlertMessage } from '../../../../../../../../core/store/ui/ui.actions';
import { TryGetReviewProduct, TryToggleVoteReview } from '../../../../store/p.actions';

// RxJS
import { tap } from 'rxjs/operators';
import { REVIEW_SORT_LIST } from '../../../../../../../../core/global-constant/item-component.locale';

@Component({
  selector: 'p-reviews',
  templateUrl: './p-reviews.component.html',
  styleUrls: ['./p-reviews.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})
export class PReviewsComponent {
  @ViewChildren('lineList') lineList;
  @ViewChildren('hrLineList') hrLineList;
  @Output('updateState') updateState = new EventEmitter<any>();
  @Input('reviewAveragePoint') reviewAveragePoint;
  @Input('totalList') totalList;
  objectKeys = Object.keys;

  /***신고 Modal***/
  isShowModal = false;
  reviewIndexForModal = null;
  productSlugForModal = null;
  textReportReasonForModal = null;

  /** Pagination **/
  maxRow = 6;
  totalPage;
  totalCount;
  currentPage = 1;

  totalPageArray = [];
  currentList = [];

  starMaxList = {};
  reviews$;
  userState$;

  selectedElement = {
    value : 'created'
  };

  constructor(
    @Inject( LOCALE_ID ) public locale: string,
    @Inject( REPORT_REASON_MAP ) public REASON_MAP: string,
    @Inject( DOMAIN_HOST ) private _HOST: string,
    @Inject( APP_BASE_HREF ) private _BASE_URL: string,
    @Inject( DISPLAY_ALERT_MESSAGE_MAP ) private _ALERT_MAP,
    @Inject( REVIEW_SORT_LIST ) public REVIEW_SORT_LIST,
    private _pDataService: PDataService,
    private _renderer: Renderer2,
    private _store: Store<any>,
    private _cd: ChangeDetectorRef,
    private _router: Router,
    private _route: ActivatedRoute,
  ) {
    this._store.dispatch(new TryGetReviewProduct({ productSlug : this._route.snapshot.params.id, sorting: 'created'}));
    this.reviews$ = this._store.pipe(
      select((state) => state['p']['reviews']),
      tap( reviewData => {
        if ( reviewData.extraInfo === undefined ) { return; }
        this.starMaxList = reviewData.extraInfo.reviewRatingsDist;

        this.totalList = reviewData.results;
        this.totalCount = this.totalList.length;
        this.totalPage = this.totalCount / this.maxRow;

        this.totalPageArray =  Array(parseInt(this.totalPage, 10));
        this.totalPageArray.push(this.totalPageArray.length + 1);
        this.currentList = this.totalList.slice( 0, this.maxRow );
      })
    );

    this.userState$ = this._store.pipe(
      select((state: any) => state.auth)
    );
  }

  numberArray(n: number): any[] {
    return Array(n);
  }

  paginate(pageIndex) {
    this.currentPage = pageIndex;
    this.currentList = this.totalList.slice(  (this.currentPage - 1 ) * this.maxRow , this.currentPage * this.maxRow );
  }

  toggleVoteReviews( xProductSlug, xReviewsId, xIsVoted, xIsAuthenticated) {
    if ( xIsAuthenticated ) {
      this._store.dispatch( new TryToggleVoteReview({ productSlug: xProductSlug, reviewId : xReviewsId, isVote: !xIsVoted}));
    } else {
      this._store.dispatch( new DisplayAlertMessage(this._ALERT_MAP['need-log-in-to-continue'][this.locale]) )
      this._router.navigateByUrl('/member/login?return=' + encodeURI(location.href.split(this._BASE_URL.substring(1, this._BASE_URL.length))[1]));
    }
  }

  reportReview( xProductSlug, xReviewId, xReportReason ) {
    this._pDataService.reportReviewData( xProductSlug, xReviewId, xReportReason)
      .subscribe(
        response => {
          this.isShowModal = false;
          this._store.dispatch(new DisplayAlertMessage(this._ALERT_MAP['report-submitted'][this.locale]));
          this._cd.markForCheck();
        },
        error => {
          alert('신고 중 에러가 발생하였습니다.');
        }
      );
  }

  commentReview( xUrl ) {
    const const_url = xUrl + '?scroll=' + window.pageYOffset;
    this._router.navigateByUrl( const_url);
  }

  shareReview( xUrl ) {
    const const_url = this._HOST + this._BASE_URL + xUrl + '?scroll=' + window.pageYOffset;

    // Create a dummy input to copy the string array inside it
    const dummy = document.createElement('input');

    // Add it to the document
    document.body.appendChild(dummy);

    // Output the array into it
    dummy.value = const_url;

    // Select it
    dummy.select();

    // Copy its contents
    document.execCommand('copy');

    // Remove it as its not needed anymore
    document.body.removeChild(dummy);
    this._store.dispatch( new DisplayAlertMessage(this._ALERT_MAP['link-copied'][this.locale]));
  }

  reviewSorting( xSortingValue ) {
    this.selectedElement.value = xSortingValue.value;
    this._store.dispatch(new TryGetReviewProduct({ productSlug : this._route.snapshot.params.id, sorting: xSortingValue}));
  }

  showReportModal(xReviewId, xPrdocutSlug, xIsAuthenticated) {
    if ( xIsAuthenticated ) {
      this.isShowModal = true;
      this.reviewIndexForModal = xReviewId;
      this.productSlugForModal = xPrdocutSlug;
    } else {
      this._store.dispatch(new DisplayAlertMessage(this._ALERT_MAP['need-log-in-to-continue'][this.locale]))
      this._router.navigateByUrl('/member/login?return=' + encodeURI(location.href.split(this._BASE_URL.substring(1, this._BASE_URL.length))[1]));
    }
  }
}


