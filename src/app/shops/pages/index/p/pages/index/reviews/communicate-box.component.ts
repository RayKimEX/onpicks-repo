
// Angular Core
import { ActivatedRoute, Router } from '@angular/router';
import {
  AfterViewChecked,
  AfterViewInit, ChangeDetectorRef,
  Component,
  HostListener, Inject,
  OnDestroy,
  OnInit,
  Renderer2,
  ViewChild
} from '@angular/core';

// NgRX & RxJS
import {TryAddComment, TryGetCommentsProduct, TryToggleVoteReview} from '../../../store/p.actions';
import { map, shareReplay, withLatestFrom } from 'rxjs/operators';
import { combineLatest, fromEvent } from 'rxjs';
import { select, Store } from '@ngrx/store';

// Custom
import { PDataService } from '../../../../../../../core/service/data-pages/p/p-data.service';
import { AppState } from '../../../../../../../core/store/app.reducer';
import { UserState } from '../../../../../../../core/store/user.model';
import {DisplayAlertMessage} from '../../../../../../../core/store/ui/ui.actions';
import {DOMAIN_HOST, REPORT_REASON_MAP} from '../../../../../../../app.config';
import {APP_BASE_HREF} from '@angular/common';

@Component({
  selector: 'onpicks-communicate-box',
  templateUrl: './communicate-box.component.html',
  styleUrls: ['./communicate-box.component.scss'],
  // ChangeDetection을 안준 이유가 있을거임.
})
export class CommunicateBoxComponent implements AfterViewChecked, AfterViewInit, OnDestroy {
  // @Input('comment') comment;
  // @Input('commentIndex') commentIndex;
  // Output을 넣지 않으면, consturctor에다가, service나, store같은, 것을 넣어야됨.
  // 그러면 종속적이 되므로, Output을 통해 조금은 번거럽 더라도, encapsulate화 함
  // @Output('willAddComment') willAddComment = new EventEmitter<any>();
  // @Output('willChangeCommentIndex') willChangeCommentIndex = new EventEmitter<any>();
  @ViewChild('communicateBoxOnly') communicateBoxOnly;
  @ViewChild('communicateBox') communicateBox;
  @ViewChild('scrollOuter') scrollOuter;

  /***신고 Modal***/
  objectKeys = Object.keys;
  isShowModal = false;
  textReportReasonForModal = null;
  reviewIndexForModal = null;
  productSlugForModal = null;



  currentReviewIndex = 0

  isViewImage = false;

  // 검은색 부분을 눌러을 때, 꼬이는것을 방지하기 위해 추가
  popupState = false;
  addReviewState = false;
  buttonState = false;


  userState$;
  currentData$;

  communicateBoxTransition$;


  reviewsId;
  productId;
  combine$;



  constructor(
    @Inject(DOMAIN_HOST) private HOST: string,
    @Inject(APP_BASE_HREF) private BASE_URL: string,
    @Inject(REPORT_REASON_MAP) public reasonMap: string,
    private renderer: Renderer2,
    private store: Store<AppState>,
    private router: Router,
    private route: ActivatedRoute,
    private pDataService: PDataService,
    private cd: ChangeDetectorRef
  ) {
    const url = this.router.url.split('/');
    this.reviewsId = parseInt(url[5], 10);
    this.currentData$ = this.store.pipe(select((state: any) => state['p']['reviews']), shareReplay(1));
    this.combine$ =
      combineLatest(
        this.currentData$,
        this.route.params.pipe(
          withLatestFrom(this.route.parent.params),
          map(([child, parent]) => {
            return { child, parent};
          })),
      ).subscribe(
        val => {

          this.reviewsId = parseInt(val[1].child['id'], 10);

          // @ts-ignore
          this.currentReviewIndex = val[0].results.indexOf(this.reviewsId);
          this.productId = val[1].parent['id'];

          // buttonState가 false 일 때만, 이미지를 바로 표출할 수 있게
          // 해당 State는 transition이 끝날때거나, 버튼 누르지 않고, 바로 화면에 뜰때만 false가 됨


          /* undefined로 이외에 더 나은 조건으로 현재는 생각하기가 힘든 상태.
          * 왜냐하면, Loading화면을 위해 Get_CooemtnsProduct에다가 undfeined를 넣었는데, 넣을때마다, subscribe가 동작함.*/
          // TODO : 복잡하지 않은 더 나은조건으로 변경

          // @ts-ignore
          if ( val[0].list[this.reviewsId] && val[0].list[this.reviewsId].isCommentsLoaded === undefined) {
            this.store.dispatch( new TryGetCommentsProduct({ productId : val[1].parent['id'], reviewsId : val[1].child['id']}));
          }

          if ( this.buttonState === false ) { this.isViewImage = true; }
        }
      )



    this.userState$ = this.store.pipe(
      select(
        (state: any) => state.auth.user
      ),

    );

  }

  ngOnDestroy() {
    this.renderer.setStyle( document.body, 'overflow', '' );
    this.combine$.unsubscribe();
    this.communicateBoxTransition$.unsubscribe();

    // route params는 unsubscribe할 필요 없음.
    // There are a few exceptional observables where this is not necessary. The ActivatedRoute observables are among the exceptions.
    //
    //  The ActivatedRoute and its observables are insulated from the Router itself. The Router destroys a routed component when it is no longer needed and the injected ActivatedRoute dies with it.
    //
    //  Feel free to unsubscribe anyway. It is harmless and never a bad practice.
    // https://angular.io/guide/router
  }

  ngAfterViewChecked() {

    // TODO : 더 좋은 방법이 있는지 찾아 보기, 하지만 현재로써는 이런식의 방법이 가장 괜찮은것 같다.
    // 해당 소스는, 사용자가 리뷰를 작성하면,
    // 그 State을 컴포넌트에서 관리하여, AfterViewChecked에서 순간적으로 관리를 한다.
    // DoCheck보다, VeiwChecked가 좀더 나중에 발생하고, 아마, View가 바뀔때, 그 다음에 Hook되는것 같음.

    if ( this.addReviewState === true ) {
      this.addReviewState = false;
      const scrollOuter = getComputedStyle(this.scrollOuter.nativeElement, null);

      const scrollOuterHeight = parseInt(scrollOuter.height, 10);
      const scrollHeight = parseInt(this.scrollOuter.nativeElement.scrollHeight, 10);
      const result = scrollHeight - scrollOuterHeight;

      this.renderer.setProperty(
        this.scrollOuter.nativeElement,
        'scrollTop',
        (result));

    }

  }

  ngAfterViewInit() {
    this.renderer.setStyle( document.body, 'overflow', 'hidden' );
    this.communicateBoxTransition$ =
      fromEvent(this.communicateBox.nativeElement, 'transitionend').subscribe( val => {
        this.isViewImage = true;
        this.popupState = true;
        this.buttonState = false;

        // transition이 끝났을때 아래 2개의 변수 상태값 변경

    });
  }




  commentTyping(event: KeyboardEvent, f) {

    if ( event.key === 'Enter' ) {

      this.store.dispatch(new TryAddComment({ productId : this.productId, reviewsId : this.reviewsId, addedText : f.value }));
      this.renderer.setProperty(f, 'value', '');

      // ngAfterViewChecked가 매번 계속 발생하기 때문에,
      // 해당 State일때만, AfterViewChecked에서 코드 실행시키기 위해, 아래와같은 변수 추가
      this.addReviewState = true;
    }
  }

  prevButton(navigateArray) {
    // if ( this.currentReviewIndex > 0 ) {
      this.buttonState = true;
      this.isViewImage = false;
      this.currentReviewIndex--;
      // this.comment = this.totalList[this.currentReviewIndex];
      this.router.navigate(['../' + navigateArray], {relativeTo: this.route});

      // this.willChangeCommentIndex.emit('decrease');
    // }

  }


  nextButton(navigateArray) {
    // if ( this.currentReviewIndex < this.totalList.length) {
      this.buttonState = true;
      this.isViewImage = false;
      this.currentReviewIndex++;
      // this.comment = this.totalList[this.currentReviewIndex];
      this.router.navigate(['../' + navigateArray], {relativeTo: this.route});

    // }


  }


  @HostListener('document:click', ['$event'])
  clickout(event) {
    if ( this.popupState === true) {
      if (this.communicateBox.nativeElement.contains(event.target)) {

      } else {
        console.log(this.isShowModal);
        if ( this.buttonState || this.isShowModal) {
          this.buttonState = false;
          return ;
        };
        this.router.navigate(['../../'], {relativeTo: this.route});
      }
    }

  }

  @HostListener('document:keydown.escape', ['$event'])
  onKeydownHandler(event: KeyboardEvent) {

    // &&  this.communicateBox.nativeElement.style.display !== 'none'
    if ( event.key === 'Escape' ) {
      this.router.navigate( ['../../'], {relativeTo: this.route } );
    }
  }
  toggleVoteReviews( xProductSlug, xReviewsId, xIsVoted) {
    this.store.dispatch( new TryToggleVoteReview({ productSlug: xProductSlug, reviewId : xReviewsId, isVote: !xIsVoted}));
  }
  shareReview( xUrl ) {

    // console.log(location.href);
    const hello = location.href;

    // Create a dummy input to copy the string array inside it
    const dummy = document.createElement('input');

    // Add it to the document
    document.body.appendChild(dummy);

    // Output the array into it
    dummy.value = hello;

    // Select it
    dummy.select();

    // Copy its contents
    document.execCommand('copy');

    // Remove it as its not needed anymore
    document.body.removeChild(dummy);
    this.store.dispatch( new DisplayAlertMessage('링크가 복사되었습니다.'));
  }


  exitShowModal(){
    // 순간적으로 같이 체크가 되서 신고하기랑, communicate box가 나가지는걸 방지하기 위해 setTimeout을 줌.
    setTimeout( () => {
      this.isShowModal = false;
      this.cd.markForCheck();
      console.log(this.isShowModal);
    }, 0);
  }

  reportReview( xProductSlug, xReviewId, xReportReason ) {
    this.pDataService.reportReviewData( xProductSlug, xReviewId, xReportReason)
      .subscribe(
        response => {
          this.isShowModal = false;
          this.store.dispatch(new DisplayAlertMessage('신고가 정상적으로 접수 되었습니다.'));
        },
        error => {
          alert('신고 중 에러가 발생하였습니다.');
        }
      );
  }
}
