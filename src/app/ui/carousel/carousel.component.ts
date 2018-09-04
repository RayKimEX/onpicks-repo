import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  QueryList,
  Renderer2,
  ViewChild,
  ViewChildren
} from '@angular/core';
import { style, state, trigger, transition, animate } from '@angular/animations';
import {fromEvent} from 'rxjs';
import {debounceTime, take} from 'rxjs/operators';

@Component({
  selector: 'ui-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  // animations: [
  //   trigger('')
  // ]
})

// 29cm 참고해서 다시 재 도전
// 일렬로 나열해서 해야될 것 같음
//
export class CarouselComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChildren('carouselImages') images: QueryList<ElementRef>;
  @ViewChildren('carouselCircles') circles: QueryList<ElementRef>;

  imagesArray = [];
  circlesArray = [];

  currentIndex = 0;
  observableEvent;

  imgSrcList = [
    'assets/img/1.jpg',
    'assets/img/2.jpg',
    'assets/img/3.jpg',
    'assets/img/4.jpg',
  ]

  imageWidth;

  replay = false;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2 ) { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.imagesArray = this.images.toArray();
    this.circlesArray = this.circles.toArray();

    this.imageWidth = getComputedStyle(this.images.first.nativeElement, null).width;

    this.images.forEach((image, index) => {

      // const imageWidth = getComputedStyle(this.images[0].nativeElement,null ).width;
      // this.renderer.setStyle(image.nativeElement, 'left', imageWidth);
      if ( index === 0 ) {
        this.renderer.setStyle(image.nativeElement, 'display', 'inline-block');
        this.renderer.setStyle(image.nativeElement, 'left', '0px');
        // this.renderer.addClass(image.nativeElement, 'active' );
      }
    });

    this.observableEvent = fromEvent(document, 'transitionend').pipe(debounceTime(70)).subscribe(val => {
      console.log(val);
      if(this.replay){
        this.renderer.removeClass(this.imagesArray[this.imagesArray.length - 1].nativeElement, 'carousel__image--left-slide');
        this.renderer.removeClass(this.imagesArray[this.currentIndex].nativeElement, 'carousel__image--left-slide');


        this.renderer.setStyle(this.imagesArray[this.imagesArray.length - 1].nativeElement, 'left',  -parseInt(this.imageWidth, 10) + 'px');
        this.renderer.setStyle(this.imagesArray[this.currentIndex].nativeElement, 'left', 0);

        this.replay = false;
        return ;
      }
      this.renderer.removeClass(this.imagesArray[this.currentIndex].nativeElement, 'carousel__image--left-slide');
      this.renderer.removeClass(this.imagesArray[this.currentIndex + 1].nativeElement, 'carousel__image--left-slide');


      this.renderer.setStyle(this.imagesArray[this.currentIndex].nativeElement, 'left',  -parseInt(this.imageWidth, 10) + 'px');
      this.renderer.setStyle(this.imagesArray[this.currentIndex + 1].nativeElement, 'left', 0);

      this.currentIndex++;
    });
    // this.observableEvent = fromEvent(document, 'transitionend').pipe(debounceTime(2000)).subscribe(val => {
    //   console.log('transition end');
    //   this.renderer.setStyle(this.imagesArray[this.currentIndex].nativeElement, 'left',  -parseInt(this.imageWidth, 10) + 'px');
    //   this.renderer.setStyle(this.imagesArray[this.currentIndex + 1].nativeElement, 'left', 0);
    //   this.renderer.removeClass(this.imagesArray[this.currentIndex].nativeElement, 'carousel__image--left-slide');
    //   this.renderer.removeClass(this.imagesArray[this.currentIndex + 1].nativeElement, 'carousel__image--left-slide');
    //
    //
    //   this.currentIndex++;
    // });
  }

  check(loopIndex) {
    return Number(loopIndex.nativeElement.getAttribute('data-carousel-index')) === Number(this);
  }

  rightCarousel() {

  }

  leftCarousel() {
    // animation은 다시 사용하는데 문제가 잇음
    // 그래서 transition으로 변환 시도중
    // 근데 transition은 미리 만들어져 있어야됨


    // console.log(this.imageWidth);
    if ( this.currentIndex === this.imagesArray.length - 1 ) {

      this.replay = true;
      console.log('@@@@@@@@');
      this.currentIndex = 0;
      this.imagesArray.forEach((image, index) => {
        this.renderer.setStyle(image.nativeElement, 'display', 'inline-block' );

        if ( index === this.imagesArray.length - 1) {
          return ;
        }

        this.renderer.setStyle(image.nativeElement, 'left', this.imageWidth );
      });

      this.renderer.addClass(this.imagesArray[this.imagesArray.length - 1].nativeElement, 'carousel__image--left-slide');
      this.renderer.addClass(this.imagesArray[this.currentIndex].nativeElement, 'carousel__image--left-slide');



    } else {
      this.renderer.setStyle(this.imagesArray[this.currentIndex + 1].nativeElement, 'display', 'inline-block' );
      this.renderer.setStyle(this.imagesArray[this.currentIndex + 1].nativeElement, 'left', this.imageWidth );

      this.renderer.addClass(this.imagesArray[this.currentIndex].nativeElement, 'carousel__image--left-slide');
      this.renderer.addClass(this.imagesArray[this.currentIndex + 1].nativeElement, 'carousel__image--left-slide');


    }

  }

  ngOnDestroy() {
    this.observableEvent.unsubscribe();
  }
}


