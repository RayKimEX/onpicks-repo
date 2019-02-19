import {
  AfterViewInit,
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  EventEmitter, Inject,
  Input,
  LOCALE_ID,
  Output,
  Renderer2,
  ViewChildren
} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {DOMAIN_HOST, REPORT_REASON_MAP} from '../../../../../../../../app.config';
import {tap} from 'rxjs/operators';
import {PDataService} from '../../../../../../../../core/service/data-pages/p/p-data.service';
import {TryGetReviewProduct, TryToggleVoteReview} from '../../../../store/p.actions';
import {DisplayAlertMessage} from '../../../../../../../../core/store/ui/ui.actions';
import {APP_BASE_HREF} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'onpicks-p-reviews',
  templateUrl: './p-reviews.component.html',
  styleUrls: ['./p-reviews.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})
export class PReviewsComponent implements AfterViewInit {
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
  // {Star5 : 55, Star4 : 18, Star3 : 6, Star2 : 7, Star1 : 14}


  reviews$;
  userState$;



  selectedElement = {
    value : 'created'
  }
  reviewSortList = [
    // {
    //   title : '추천순',
    //   value : 0
    // },
    {
      title : '최신순',
      value : 'created'
    },
    {
      title : '별점 낮은순',
      value : '-rating'
    },
    {
      title : '별점 높은순',
      value : 'rating'
    }
  ]

  constructor(
    @Inject(DOMAIN_HOST) private HOST: string,
    @Inject(APP_BASE_HREF) private BASE_URL: string,
    @Inject(LOCALE_ID) public locale: string,
    @Inject(REPORT_REASON_MAP) public reasonMap: string,
    private pDataService: PDataService,
    private renderer: Renderer2,
    private store: Store<any>,
    private cd: ChangeDetectorRef,
    private router: Router,
    private route: ActivatedRoute
  ) {


    this.store.dispatch(new TryGetReviewProduct({ productSlug : this.route.snapshot.params.id, sorting: 'created'}));
    this.reviews$ = this.store.pipe(
      select((state) => state['p']['reviews']),
      tap( v => {
        if ( v.extraInfo === undefined ) { return };
        console.log(v);
        this.starMaxList = v.extraInfo.reviewRatingsDist;

        this.totalList = v.results;
        this.totalCount = this.totalList.length;
        this.totalPage = this.totalCount / this.maxRow;

        this.totalPageArray =  Array(parseInt(this.totalPage, 10));
        this.totalPageArray.push(this.totalPageArray.length + 1);
        this.currentList = this.totalList.slice( 0, this.maxRow );
        console.log(this.currentList);
      })
    );

    this.userState$ = this.store.pipe(
      select(
        (state: any) => state.auth
      ),
      tap( v => console.log(v))

    );

    // this.store.dispatch(new DisplayAlertMessage('로그인 후 이용 가능합니다'))
    // this.router.navigateByUrl('/member/login?return=' + encodeURI(location.href.split(this.BASE_URL.substring(1, this.BASE_URL.length))[1]));
  }


  ngAfterViewInit() {

  }

  numberArray(n: number): any[] {
    return Array(n);
  }

  paginate(pageIndex) {
    this.currentPage = pageIndex;
    this.currentList = this.totalList.slice(  (this.currentPage - 1 ) * this.maxRow , this.currentPage * this.maxRow )
  }

  toggleVoteReviews( xProductSlug, xReviewsId, xIsVoted, xIsAuthenticated) {
    if(xIsAuthenticated){
      this.store.dispatch( new TryToggleVoteReview({ productSlug: xProductSlug, reviewId : xReviewsId, isVote: !xIsVoted}));
    } else {
      this.store.dispatch(new DisplayAlertMessage('로그인 후 이용 가능합니다'))
      this.router.navigateByUrl('/member/login?return=' + encodeURI(location.href.split(this.BASE_URL.substring(1, this.BASE_URL.length))[1]));

    }
  }



  reportReview( xProductSlug, xReviewId, xReportReason ) {
    this.pDataService.reportReviewData( xProductSlug, xReviewId, xReportReason)
      .subscribe(
        response => {
          this.isShowModal = false;
          console.log('7777777777777777');
          this.store.dispatch(new DisplayAlertMessage('신고가 정상적으로 접수 되었습니다.'));
          this.cd.markForCheck();
        },
        error => {
          alert('신고 중 에러가 발생하였습니다.');
        }
      );
  }

  commentReview( xUrl ) {
    const const_url = xUrl + '?scroll=' + window.pageYOffset;
    this.router.navigateByUrl( const_url);
  }

  shareReview( xUrl ) {
    const const_url = this.HOST + this.BASE_URL + xUrl + '?scroll=' + window.pageYOffset;

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
    this.store.dispatch( new DisplayAlertMessage('링크가 복사되었습니다.'));
  }

  reviewSorting( xSortingValue ) {
    this.selectedElement.value = xSortingValue
    console.log(xSortingValue);
    this.store.dispatch(new TryGetReviewProduct({ productSlug : this.route.snapshot.params.id, sorting: xSortingValue}));
  }

  showReportModal(xReviewId, xPrdocutSlug, xIsAuthenticated) {

    if ( xIsAuthenticated ){
      this.isShowModal = true;
      this.reviewIndexForModal = xReviewId;
      this.productSlugForModal = xPrdocutSlug;
    } else {
      this.store.dispatch(new DisplayAlertMessage('로그인 후 이용 가능합니다'))
      this.router.navigateByUrl('/member/login?return=' + encodeURI(location.href.split(this.BASE_URL.substring(1, this.BASE_URL.length))[1]));
    }

  }
}


