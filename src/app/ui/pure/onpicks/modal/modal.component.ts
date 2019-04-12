import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  EventEmitter, HostListener, Inject,
  Input, LOCALE_ID,
  OnChanges, OnDestroy,
  OnInit,
  Output, Renderer2,
  SimpleChanges, ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {RESPONSIVE_MAP} from '../../../../core/global-constant/app.config';
import {BreakpointObserver, BreakpointState} from '../../../../../../node_modules/@angular/cdk/layout';

@Component({
  selector: 'onpicks-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ModalComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input('isShow') set _isShow(xIsShow) {
    if (xIsShow === null ) { return; }

    this.isShow = xIsShow;
    console.log(this.isShow);
    this.popupState = false;
    if ( this.isShow === true ) {

      // isShow = true이고, 모바일 버전이 아닐때만 open-modal적용
      if ( this.modalForMenu === false ) {
        this.renderer.addClass(document.body , 'u-open-modal');
      }

      if ( this.modalForMenu === true && this.isDesktopBreakPoint === true ){
        this.renderer.addClass(document.body, 'u-open-modal');
      }

      // 검은색 부분을 눌러을 때, 꼬이는것을 방지하기 위해 추가
      setTimeout( () => {
        this.popupState = true;
      }, 0);
    } else {
      console.log(document.body);

      this.renderer.removeClass(document.body, 'u-open-modal');
      console.log(document.body);
    }
  }

  @Input('modalForMenu') modalForMenu = false;
  @Output('exit') exitEvent = new EventEmitter();
  @ViewChild('modal') modal;

  // 검은색 부분을 눌러을 때, 꼬이는것을 방지하기 위해 추가
  popupState = false;
  isShow = false;
  isDesktopBreakPoint = false;

  constructor(
    @Inject(RESPONSIVE_MAP) public responsiveMap,
    private renderer: Renderer2,
    private breakpointObserver:  BreakpointObserver
  ) { }

  ngOnInit() {
    this.breakpointObserver
      .observe([this.responsiveMap['desktop']])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          // isShow = true이고, 모바일 버전일땐, isThirdBreakPoint가 true일때만, u-open-modal적용
          this.isDesktopBreakPoint = true;
          if ( this.isShow === true && this.modalForMenu === true ) {
            console.log('333');
            this.renderer.addClass(document.body , 'u-open-modal');
          }
        } else {
          this.isDesktopBreakPoint = false;
          if ( this.isShow === true && this.modalForMenu === true ) {
            this.renderer.removeClass(document.body, 'u-open-modal');
          }
        }
      });
  }

  @HostListener('document:keydown.escape', ['$event'])
  onKeydownHandler(event: KeyboardEvent) {
    // &&  this.communicateBox.nativeElement.style.display !== 'none'
    if ( event.key === 'Escape' ) {
      this.exitEvent.emit();
    }
  }

  ngAfterViewInit() {

  }

  ngOnDestroy() {
    this.popupState = false;
  }


  @HostListener('document:click', ['$event'])
  clickout(event) {
    if ( this.popupState === true) {
      if (this.modal.nativeElement.contains(event.target)) {

      } else {
        if ( !this.modalForMenu ) {
          this.exitEvent.emit();
        }
      }
    }
  }
}
