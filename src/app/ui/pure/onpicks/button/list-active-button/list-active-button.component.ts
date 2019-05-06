import {
  AfterViewInit,
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input, OnChanges, OnDestroy,
  OnInit,
  Output,
  Renderer2,
  ViewChild
} from '@angular/core';
import {fromEvent} from 'rxjs';

@Component({
  selector: 'onpicks-list-active-button',
  templateUrl: './list-active-button.component.html',
  styleUrls: ['./list-active-button.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})

export class ListActiveButtonComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('outer') outer;
  @ViewChild('plusIcon', {read : ElementRef}) plusIcon;
  @ViewChild('extendUI' ) extendUI;
  @Output('addEvent') addEvent = new EventEmitter<number>();
  @Output('subtractEvent') subtractEvent = new EventEmitter<number>();
  @Input('isFixExtend') isFixExtend = false;
  @Input('amount') amount = 0;
  @Input('limitCount') limitCount = 10;

  plusOpactiy = 1;
  minusOpacity = 1;
  mouseHover = false;
  tempEvent;
  extendButtonPressed = false;

  constructor(
    private renderer: Renderer2
  ) {

  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.tempEvent = fromEvent(this.outer.nativeElement, 'transitionend').subscribe( v => {

      // @ts-ignore
      if (v.propertyName === 'width' ) { this.extendButtonPressed = false };
    });
  }

  ngOnDestroy() {
    this.tempEvent.unsubscribe();
  }

  @HostListener('mousemove')
  onMouseOver() {

    if(this.extendButtonPressed) { return; }
    if ( this.isFixExtend ) { return;}
    // 이미 확장되었을때,
    if (this.amount !== 0 ) {
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
      if ( this.amount !== this.limitCount) {
        this.plusOpactiy = 0.3;
      }
    } else {

      if ( this.amount !== 1 ) {
        this.minusOpacity = 0.3;
      }
    }
  }

  upOpacity(direction) {
    if ( direction === 'plus'){
      this.plusOpactiy = 1;
    } else {
      this.minusOpacity = 1;
    }
  }



  extendWidth() {

    // 초기상태일때
    // 눌린것을 체크해서, UI가 꼬이는 현상 방지
    console.log(this.extendButtonPressed);
    if ( this.extendButtonPressed === false ) {
      if ( this.amount < this.limitCount) {
        // this.amount++;
        this.addEvent.emit(this.amount);
      }
    }

    this.extendButtonPressed = true;
    console.log(this.extendButtonPressed);
    this.plusOpactiy = 1;
    if (this.amount === 0 ) {
      this.mouseHover = false;
      this.minusOpacity = 1;

      this.renderer.setStyle(this.plusIcon.nativeElement, 'left', 'auto');
      this.renderer.setStyle(this.plusIcon.nativeElement, 'right', '1.9rem');
      this.renderer.setStyle(this.outer.nativeElement, 'border-color', '#e5e5e5');

      // 이미 확장 되었을때,
    } else {



      if ( this.amount < this.limitCount) {
        // this.amount++;

        this.addEvent.emit(this.amount);
      }

    }
  }



  amountDown() {
    if ( this.amount > 1) {
      this.subtractEvent.emit(this.amount);

    } else {

      if( this.isFixExtend ) { return; }
      this.subtractEvent.emit(this.amount);
    }
  }
}
