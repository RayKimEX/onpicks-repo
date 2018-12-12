import {
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  HostListener,
  OnDestroy,
  OnInit,
  Renderer2,
  ViewChild
} from '@angular/core';
import {combineLatest, fromEvent} from 'rxjs';
import {AppState} from '../../../../../../../core/store/app.reducer';
import {select, Store} from '@ngrx/store';
import {UserState} from '../../../../../../../core/store/user/user.model';
import {ActivatedRoute, Router} from '@angular/router';
import {PDataService} from '../../../../../../../core/service/data-pages/p/p-data.service';
import {AddComment, GetCommentsProduct} from '../../../store/p.actions';
import {map, share, shareReplay, startWith, tap, withLatestFrom} from 'rxjs/operators';

@Component({
  selector: 'onpicks-communicate-box',
  templateUrl: './communicate-box.component.html',
  styleUrls: ['./communicate-box.component.scss'],
})
export class CommunicateBoxComponent implements OnInit,
  AfterViewChecked, AfterViewInit, OnDestroy {
  // @Input('comment') comment;
  // @Input('commentIndex') commentIndex;
  // Output을 넣지 않으면, consturctor에다가, service나, store같은, 것을 넣어야됨.
  // 그러면 종속적이 되므로, Output을 통해 조금은 번거럽 더라도, encapsulate화 함
  // @Output('willAddComment') willAddComment = new EventEmitter<any>();
  // @Output('willChangeCommentIndex') willChangeCommentIndex = new EventEmitter<any>();
  @ViewChild('communicateBoxOnly') communicateBoxOnly;
  @ViewChild('communicateBox') communicateBox;
  @ViewChild('scrollOuter') scrollOuter;


  comment;
  currentReviewIndex = 0;
  signInUserInfo: UserState;

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
    private renderer: Renderer2,
    private store: Store<AppState>,
    private router: Router,
    private route: ActivatedRoute,
    private pData: PDataService
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
          // tap( v => console.log(v))
      ).subscribe(
        val => {
          console.log('hello');
          this.reviewsId = parseInt(val[1].child['id'], 10);

          // @ts-ignore
          this.currentReviewIndex = val[0].results.indexOf(this.reviewsId);
          this.productId = val[1].parent['id'];
          console.log(this.productId);
          // this.store.dispatch( new GetCommentsProduct({ productId : v.parent['id'], reviewsId : v.child['id']}));
          // buttonState가 false 일 때만, 이미지를 바로 표출할 수 있게
          // 해당 State는 transition이 끝날때거나, 버튼 누르지 않고, 바로 화면에 뜰때만 false가 됨
          // console.log('hello');
          // console.log(val.state);
          console.log(val);
          console.log(this.currentData$);

          /* undefined로 이외에 더 나은 조건으로 현재는 생각하기가 힘든 상태.
          * 왜냐하면, Loading화면을 위해 Get_CooemtnsProduct에다가 undfeined를 넣었는데, 넣을때마다, subscribe가 동작함.*/
          // TODO : 복잡하지 않은 더 나은조건으로 변경

          // @ts-ignore
          if ( val[0].list[this.reviewsId] && val[0].list[this.reviewsId].isCommentsLoaded === undefined) {
            this.store.dispatch( new GetCommentsProduct({ productId : val[1].parent['id'], reviewsId : val[1].child['id']}));
          }

          if ( this.buttonState === false ) { this.isViewImage = true; }
        }
      )



    this.userState$ = this.store.pipe(
      select(
        (state: any) => state.auth.user
      ),

    ).subscribe(
      (val: UserState) => {
        this.signInUserInfo = val;
    });
  }


  ngOnInit() {

  }

  ngOnDestroy() {
    this.renderer.setStyle( document.body, 'overflow', '' );
    console.log('destrony')
    console.log(this.userState$);
    this.combine$.unsubscribe();
    this.userState$.unsubscribe();
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

      console.log(result);
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

      this.store.dispatch(new AddComment({ productId : this.productId, reviewsId : this.reviewsId, addedText : f.value }));

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
        // console.log('clicked inside');

      } else {
        if ( this.buttonState ) {
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

}
