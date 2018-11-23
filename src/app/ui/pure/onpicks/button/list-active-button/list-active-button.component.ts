import {AfterViewInit, Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, Renderer2, ViewChild} from '@angular/core';
import {fromEvent, merge} from 'rxjs';

@Component({
  selector: 'onpicks-list-active-button',
  templateUrl: './list-active-button.component.html',
  styleUrls: ['./list-active-button.component.scss']
})
export class ListActiveButtonComponent implements OnInit, AfterViewInit {
  @ViewChild('outer') outer;
  @ViewChild('plusIcon', {read : ElementRef}) plusIcon;
  @ViewChild('extendUI' ) extendUI;
  @Output('amountEvent') amountEvent = new EventEmitter<string>();
  @Input('isFixExtend') isFixExtend;

  isExtend = false;
  amount = 1;
  plusColor = '#292929';
  plusOpactiy = 1;
  minusOpacity = 1;
  plusMinusIconSize = '12px';
  tempEvent;

  // TODO : 해당 HTML파일에서, Border-radius에 대한, 부분에는, mouseover에 대한, css변경이 정확히 circle안에서만 이루어지게
  // TODO : span 2개를 따로만들어서, 버튼 처리 했는데, 그것을, position absolute말고, padding을 추가해서 가운대로 맞춘후, parentWidth, Height로 button처리 하기
  constructor(
    private renderer: Renderer2
  ) {

  }

  ngOnInit() {
    this.isExtend = this.isFixExtend;
  }

  ngAfterViewInit() {

  }

  @HostListener('mouseover')
  onMouseOver() {

    if( this.isFixExtend ) { return;}
    // 이미 확장되었을때,
    if (this.isExtend) {

    // 초기 상태일 때,
    } else {
      this.plusColor = '#FFFFFF';
      this.renderer.setStyle(this.outer.nativeElement, 'backgroundColor', '#292929');
    }
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    // 이미 확장되었을때,
    if (this.isExtend) {
      this.renderer.setStyle(this.outer.nativeElement, 'backgroundColor', '#FFFFFF');
      // 초기 상태일 때,
    } else {
      this.plusColor = '#292929';
      this.renderer.setStyle(this.outer.nativeElement, 'backgroundColor', '#FFFFFF');
    }
  }

  downOpacity (direction){
    if( direction === 'plus' && this.isExtend ) {
      if(this.amount !== 10) {
        this.plusOpactiy = 0.3;
      }
    } else {

      if( this.amount !== 1 ){
        this.minusOpacity = 0.3;
      }

    }
  }

  upOpacity(direction) {
    if( direction === 'plus'){
      this.plusOpactiy = 1;
    } else {
      this.minusOpacity = 1;
    }
  }



  extendWidth() {
    // 초기상태일때
    if (! this.isExtend) {
      this.plusColor = '#292929';
      this.plusMinusIconSize = '12px';
      this.renderer.setStyle(this.extendUI.nativeElement, 'display', 'table-cell');
      this.renderer.setStyle(this.outer.nativeElement, 'backgroundColor', '#FFFFFF');
      this.renderer.setStyle(this.plusIcon.nativeElement, 'left', 'auto');
      this.renderer.setStyle(this.plusIcon.nativeElement, 'right', '1.9rem');
      this.isExtend = true;
      this.renderer.setStyle(this.outer.nativeElement, 'width', '12.8rem');
      this.renderer.setStyle(this.outer.nativeElement, 'border-color', '#e5e5e5');

      // 이미 확장 되었을때,
    } else {

      if ( this.amount < 10) {
        if( this.amount === 9 ){
          this.plusColor = '#e5e5e5';
        }
        this.amountEvent.emit('increase');
        this.amount++;
      }

    }
  }



  amountDown() {
    if( this.amount > 1) {
      this.amountEvent.emit('decrease');
      this.amount--;
      if ( this.plusColor !== '#292929') {
        this.plusColor = '#292929';
      }

    } else {

      if( this.isFixExtend ) { return;}

      this.renderer.setStyle(this.extendUI.nativeElement, 'display', 'none');
      this.renderer.setStyle(this.outer.nativeElement, 'width', '4rem');
      this.renderer.setStyle(this.outer.nativeElement, 'border-color', '#292929');
      this.tempEvent = fromEvent(this.outer.nativeElement, 'transitionend');


      this.tempEvent = this.tempEvent.subscribe( val => {
        this.isExtend = false;
        this.tempEvent.unsubscribe();
      });
    }
  }

}
