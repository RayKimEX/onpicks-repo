import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
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

export class ListActiveButtonComponent implements OnInit, AfterViewInit {
  @ViewChild('outer') outer;
  @ViewChild('plusIcon', {read : ElementRef}) plusIcon;
  @ViewChild('extendUI' ) extendUI;
  @Output('addEvent') addEvent = new EventEmitter<number>();
  @Output('subtractEvent') subtractEvent = new EventEmitter<number>();
  @Input('isFixExtend') isFixExtend = false;
  @Input('amount') amount = 0;

  plusOpactiy = 1;
  minusOpacity = 1;
  mouseHover = false;
  tempEvent;
  extendButtonPressed = false;

  // TODO : 해당 HTML파일에서, Border-radius에 대한, 부분에는, mouseover에 대한, css변경이 정확히 circle안에서만 이루어지게
  // TODO : span 2개를 따로만들어서, 버튼 처리 했는데, 그것을, position absolute말고, padding을 추가해서 가운대로 맞춘후, parentWidth, Height로 button처리 하기
  constructor(
    private renderer: Renderer2
  ) {

  }

  ngOnInit() {
    if ( this.isFixExtend ) {
      this.amount = 1;
    }
  }

  ngAfterViewInit() {

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
      if ( this.amount !== 10) {
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

    if ( this.extendButtonPressed === false ) {
      this.addEvent.emit(this.amount);
    }
    this.extendButtonPressed = true;
    this.plusOpactiy = 1;
    if (this.amount === 0 ) {
      this.mouseHover = false;
      this.minusOpacity = 1;

      // this.renderer.setStyle(this.extendUI.nativeElement, 'display', 'table-cell');
      // this.renderer.setStyle(this.outer.nativeElement, 'backgroundColor', '#FFFFFF');
      this.renderer.setStyle(this.plusIcon.nativeElement, 'left', 'auto');
      this.renderer.setStyle(this.plusIcon.nativeElement, 'right', '1.9rem');
      // this.renderer.setStyle(this.outer.nativeElement, 'width', '12.8rem');
      this.renderer.setStyle(this.outer.nativeElement, 'border-color', '#e5e5e5');
      this.tempEvent = fromEvent(this.outer.nativeElement, 'transitionend').subscribe( v => {
        // @ts-ignore
        if (v.propertyName === 'width' ) { this.extendButtonPressed = false };
      });


      // 이미 확장 되었을때,
    } else {

      if ( this.amount < 10) {
        // this.amount++;
        this.addEvent.emit(this.amount);

      }
    }
  }



  amountDown() {
    if ( this.amount > 1) {

      // this.amount--;
      this.subtractEvent.emit(this.amount);


    } else {

      if( this.isFixExtend ) { return; }

      this.renderer.setStyle(this.extendUI.nativeElement, 'display', 'none');
      this.renderer.setStyle(this.outer.nativeElement, 'width', '4rem');
      this.renderer.setStyle(this.outer.nativeElement, 'border-color', '#292929');


      // this.amount--;
      this.subtractEvent.emit(this.amount);

    }
  }
}
