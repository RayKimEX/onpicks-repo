import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Inject,
  Input,
  LOCALE_ID,
  OnDestroy,
  OnInit,
  Renderer2,
  ViewChild,
  ViewChildren
} from '@angular/core';
import {fromEvent} from 'rxjs';
import {map} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';
import {AppState} from '../../../../core/store/app.reducer';
import {Store} from '@ngrx/store';

@Component({
  selector: 'ui-mini-list',
  templateUrl: './mini-list.component.html',
  styleUrls: ['./mini-list.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class MiniListComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('insertTitle') insertTitle;
  @ViewChild('container') container;
  @Input('setTitle') setTitle;
  @Input('infoList') infoList;

  // TODO : 보이지 않는 부분에 대해서 img display : none 하는식으로, 메모리 최적화


  imageIndex = 0;
  pressedPrev = false;


  constructor(
    private renderer: Renderer2,
    @Inject(LOCALE_ID) public locale: string,
    @Inject(APP_BASE_HREF) public region: string,
  ) {
    console.log('helllo');
  }



  ngOnInit() {

  }

  ngOnDestroy() {

  }

  ngAfterViewInit() {

    this.renderer.setProperty( this.insertTitle.nativeElement, 'innerHTML', this.setTitle);
  }

  nextButton() {
    this.pressedPrev = false;
    this.imageIndex++;
    console.log(this.imageIndex);
    this.renderer.setStyle(this.container.nativeElement, 'transform', 'translateX(' + (-this.imageIndex) * 288 + 'px)');

  }

  prevButton() {
    this.pressedPrev = true;
    this.imageIndex--;
    console.log(this.imageIndex);
    this.renderer.setStyle(this.container.nativeElement, 'transform', 'translateX(' + (-this.imageIndex) * 288 + 'px)');
  }

  addCart(amountType, index){
    // this.store.dispatch(new )
  };
}
