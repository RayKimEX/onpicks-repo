import {
  AfterViewChecked, AfterViewInit,
  Component, DoCheck, EventEmitter, HostListener, Input, OnChanges, OnDestroy,
  OnInit, Output,
  Renderer2, SimpleChanges,
  ViewChild
} from '@angular/core';
import {combineLatest, fromEvent, of, pipe} from 'rxjs';
import {AppState} from '../../../../../../../core/store/app.reducer';
import {select, Store} from '@ngrx/store';
import {UserState} from '../../../../../../../core/store/user/user.model';
import {ActivatedRoute, ActivatedRouteSnapshot, Params, Router} from '@angular/router';
import {catchError, map, mergeMap, switchMap, tap} from 'rxjs/operators';
import {PDataService} from '../../../../../../../core/service/data-pages/p/p-data.service';
@Component({
  selector: 'onpicks-communicate-box',
  templateUrl: './communicate-box.component.html',
  styleUrls: ['./communicate-box.component.scss']
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
  currentCommentIndex;
  addReviewState = false;
  communicateBoxTransition$;
  isViewImage = false;
  // reviewsUIState$;
  buttonState = false;
  signInUserInfo: UserState;

  // 검은색 부분을 눌러을 때, 꼬이는것을 방지하기 위해 추가
  popupState = false;

  userState$;
  combine$;

  commentData$;
  constructor(
    private renderer: Renderer2,
    private store: Store<AppState>,
    private router: Router,
    private route: ActivatedRoute,
    private pData: PDataService,
    // private param: ActivatedRouteSnapshot,
  ) {
    this.userState$ = this.store.pipe(
      select(
        (state: any) => state.auth.user = {
          email: 'example@mojostudio.io',
          nickname: 'hello guys',
          thumbnailSmallImgSrc: 'https://randomuser.me/api/portraits/women/21.jpg'
        } ))
      .subscribe( (val: UserState) => this.signInUserInfo = val);
  }

  ngOnInit() {
    //
    // this.combine$ = combineLatest(
    //   this.route.parent.params,
    //   this.route.params,
    // ).pipe(
    //   map(([parent, child]) => {
    //     return { parent, child };
    //   }),
    //   // mergeMap( val => this.pData.getCommentsData(val.parent['id'], val.child['id']))
    // ).subscribe( val => {
    //
    //   console.log(val);
    //   this.comment = this.totalList[val.child['id']];
    //   this.currentCommentIndex = val.child['id'];
    //   // console.log('childparams');
    //   // console.log(params);
    //   if ( this.comment.reviewImg !== '') {
    //
    //     // buttonState가 false 일 때만, 이미지를 바로 표출할 수 있게
    //     // 해당 State는 transition이 끝날때거나, 버튼 누르지 않고, 바로 화면에 뜰때만 false가 됨
    //     if ( this.buttonState === false ) { this.isViewImage = true; }
    //
    //     this.renderer.setStyle(this.communicateBox.nativeElement, 'width', '1056px');
    //     this.renderer.setStyle(this.communicateBoxOnly.nativeElement, 'width' , '408px');
    //   } else {
    //     this.renderer.setStyle(this.communicateBox.nativeElement, 'width', '660px');
    //     this.renderer.setStyle(this.communicateBoxOnly.nativeElement, 'width' , '660px');
    //   }
    //
    //   this.commentData$ = this.pData.getCommentsData(val.parent['id'], val.child['id']).subscribe( comment => {
    //     this.commentData = comment;
    //     console.log(this.commentData);
    //   });
    // });
    // ).subscribe( val => {
    //
    // });
    // http://localhost/kr/shops/p/1/reviews/6 6부분의 값을 가져옴
    // this.parentRouteParams$ = this.route.parent.params.subscribe(
    //   (params) => {
    //     console.log('parent params');
    //     console.log(params);
    //
    //
    //   });
    //
    //
    // this.routeParams$ = this.route.params.subscribe(
    //   (params) => {
    //   this.comment = this.totalList[params['id']];
    //   this.currentCommentIndex = params['id'];
    //   console.log('childparams');
    //     console.log(params);
    //   if ( this.comment.reviewImg !== '') {
    //
    //     // buttonState가 false 일 때만, 이미지를 바로 표출할 수 있게
    //     // 해당 State는 transition이 끝날때거나, 버튼 누르지 않고, 바로 화면에 뜰때만 false가 됨
    //     if ( this.buttonState === false ) { this.isViewImage = true; }
    //
    //
    //     this.renderer.setStyle(this.communicateBox.nativeElement, 'width', '1056px');
    //     this.renderer.setStyle(this.communicateBoxOnly.nativeElement, 'width' , '408px');
    //   } else {
    //     this.renderer.setStyle(this.communicateBox.nativeElement, 'width', '660px');
    //     this.renderer.setStyle(this.communicateBoxOnly.nativeElement, 'width' , '660px');
    //   }
    //
    // });
  }

  ngOnDestroy() {
    this.communicateBoxTransition$.unsubscribe();
    this.userState$.unsubscribe();
    this.combine$.unsubscribe();
    this.commentData$.unsubscribe();


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

    this.communicateBoxTransition$ =
      fromEvent(this.communicateBox.nativeElement, 'transitionend').subscribe( val => {
        // transition이 끝났을때 아래 2개의 변수 상태값 변경
        this.popupState = true;
        this.buttonState = false;
        if ( this.comment.reviewImg !== '') {
          this.isViewImage = true;
        } else {
          this.isViewImage = false;
        }
      });
  }




  commentTyping(event: KeyboardEvent, f) {

    if ( event.key === 'Enter' ) {

      // this.totalList[this.currentCommentIndex].comments.push({
      //   author : this.signInUserInfo.nickname,
      //   content : f.value
      // });

      this.renderer.setProperty(f, 'value', '');

      // ngAfterViewChecked가 매번 계속 발생하기 때문에,
      // 해당 State일때만, AfterViewChecked에서 코드 실행시키기 위해, 아래와같은 변수 추가
      this.addReviewState = true;

    }
  }

  prevButton() {

    if ( this.currentCommentIndex > 0 ) {
      this.buttonState = true;
      this.currentCommentIndex--;
      // this.comment = this.totalList[this.currentCommentIndex];
      this.router.navigate(['../' + this.currentCommentIndex], {relativeTo: this.route});

      // this.willChangeCommentIndex.emit('decrease');
    }

  }


  nextButton() {


    //if ( this.currentCommentIndex < this.totalList.length) {
      this.buttonState = true;
      this.currentCommentIndex++;
      // this.comment = this.totalList[this.currentCommentIndex];
      this.router.navigate(['../' + this.currentCommentIndex], {relativeTo: this.route});

    //}


  }


  @HostListener('document:click', ['$event'])
  clickout(event) {
    if ( this.popupState === true) {
      if (this.communicateBox.nativeElement.contains(event.target)) {
        // console.log('clicked inside');

      } else {

        this.renderer.setStyle(document.body, 'overflow', '');
        this.router.navigate(['../../'], {relativeTo: this.route});
      }
    }

  }

  @HostListener('document:keydown.escape', ['$event'])
  onKeydownHandler(event: KeyboardEvent) {

    // &&  this.communicateBox.nativeElement.style.display !== 'none'
    if ( event.key === 'Escape' ) {
      this.renderer.setStyle(document.body, 'overflow', '');
      this.router.navigate( ['../../'], {relativeTo: this.route } );
    }
  }

}
