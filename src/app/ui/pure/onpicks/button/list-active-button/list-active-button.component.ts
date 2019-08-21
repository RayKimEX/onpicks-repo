import {
  AfterViewInit,
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  HostListener, Inject,
  Input,
  OnDestroy,
  Output,
  Renderer2,
  ViewChild
} from '@angular/core';
import {fromEvent} from 'rxjs';
import {HEALTH_PRODUCT_CATEGORY_LIST} from '../../../../../core/global-constant/app.category-database-short';

@Component({
  selector: 'onpicks-list-active-button',
  templateUrl: './list-active-button.component.html',
  styleUrls: ['./list-active-button.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})

export class ListActiveButtonComponent implements AfterViewInit, OnDestroy {
  @ViewChild('outer') outer;
  @ViewChild('plusIcon', {read : ElementRef}) plusIcon;
  @ViewChild('extendUI' ) extendUI;
  @Output('addEvent') addEvent = new EventEmitter<number>();
  @Output('subtractEvent') subtractEvent = new EventEmitter<number>();
  @Input('categories') categories: [];
  @Input('isFixExtend') isFixExtend = false;
  @Input('amount') set _amount(xAmount) {
    if ( xAmount === null ) { return; }

    if ( xAmount === this.limitQuantity ) {
      if ( this.isFisrtLoad ) {
        this.amount = xAmount;
        this.isFisrtLoad = false;
      } else {
        this.actionMaxQuantity();
        // fade-in, fade-out때문에 변화된 값이 순간적으로 보이는것을 조금 늦춰서 변화시킴
        setTimeout( () => {
          this.amount = xAmount;
        }, 300);
      }
    } else {
      this.amount = xAmount;
    }
  }
  @Input('limitQuantity') set _limitQuantity(xlimitQuantity) {
    if ( xlimitQuantity === null ) { return; }

    const healthyProductFound = this.categories.some( (category: {
      code: never;
    }) => this.healthList.includes(category.code) );

    console.log(healthyProductFound);
    if ( healthyProductFound ) {
      this.limitQuantity = 6;
    } else {
      this.limitQuantity = xlimitQuantity > 10 ? 10 : xlimitQuantity ;
    }
  }

  amount = 0;
  isFisrtLoad = true;
  limitQuantity = 10;
  plusOpactiy = 1;
  minusOpacity = 1;
  mouseHover = false;
  tempEvent$;
  extendButtonPressed = false;
  isMaxQuantity = false;

  constructor(
    private renderer: Renderer2,
    @Inject(HEALTH_PRODUCT_CATEGORY_LIST) public healthList: [],
    private cd: ChangeDetectorRef
  ) { }

  ngAfterViewInit() {
    this.tempEvent$ = fromEvent(this.outer.nativeElement, 'transitionend').subscribe( v => {

      // @ts-ignore
      if (v.propertyName === 'width' ) { this.extendButtonPressed = false; }
    });
  }

  ngOnDestroy() {
    this.tempEvent$.unsubscribe();
  }

  @HostListener('mousemove')
  onMouseOver() {
    if ( this.extendButtonPressed ) { return; }
    if ( this.isFixExtend ) { return;}
    // 이미 확장되었을때,
    if ( this.amount !== 0 ) {
    // 초기 상태일 때,
    } else {
      this.mouseHover = true;
      this.renderer.setStyle(this.outer.nativeElement, 'backgroundColor', '#292929');
    }
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    // 이미 확장되었을때,
    this.mouseHover = false;
    if (this.amount !== 0 ) {

      this.renderer.setStyle(this.outer.nativeElement, 'backgroundColor', '#FFFFFF');
      // 초기 상태일 때,
    } else {
      this.renderer.setStyle(this.outer.nativeElement, 'backgroundColor', '#FFFFFF');
    }
  }

  downOpacity (direction) {
    if ( direction === 'plus') {
      if ( this.amount !== this.limitQuantity) {
        this.plusOpactiy = 0.3;
      }
    } else {

      if ( this.amount !== 1 ) {
        this.minusOpacity = 0.3;
      }
    }
  }

  upOpacity(direction) {
    if ( direction === 'plus') {
      this.plusOpactiy = 1;
    } else {
      this.minusOpacity = 1;
    }
  }

  extendWidth() {
    // 초기상태일때
    // 눌린것을 체크해서, UI가 꼬이는 현상 방지
    if ( this.extendButtonPressed === false ) {
      if ( this.amount < this.limitQuantity) {
        this.addEvent.emit(this.amount);
      }
    }

    this.extendButtonPressed = true;
    this.plusOpactiy = 1;
    if ( this.amount === 0 ) {
      this.mouseHover = false;
      this.minusOpacity = 1;
      this.renderer.setStyle(this.plusIcon.nativeElement, 'left', 'auto');
      this.renderer.setStyle(this.plusIcon.nativeElement, 'right', '1.9rem');
      this.renderer.setStyle(this.outer.nativeElement, 'border-color', '#e5e5e5');
      // 이미 확장 되었을때,
    } else {
      if ( this.amount < this.limitQuantity ) {
        console.log(this.amount);
        this.addEvent.emit(this.amount);
        console.log(this.amount);
      } else {
        this.actionMaxQuantity();
      }
    }
  }

  amountDown() {
    if ( this.amount > 1) {
      this.subtractEvent.emit(this.amount);
    } else {
      if ( this.isFixExtend ) { return; }
      this.subtractEvent.emit(this.amount);
    }
  }

  actionMaxQuantity() {
    this.isMaxQuantity = true;
    setTimeout( () => {
      this.isMaxQuantity = false;
      this.cd.markForCheck();
    }, 1500);
  }
}
