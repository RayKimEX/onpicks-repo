import {
  AfterViewInit,
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  Input, OnChanges,
  OnDestroy,
  OnInit,
  Renderer2, SimpleChanges,
  ViewChild,
  ViewChildren
} from '@angular/core';
import {fromEvent} from 'rxjs';
import {map} from 'rxjs/operators';


@Component({
  selector: 'ui-simple-carousel',
  templateUrl: './simple-carousel.component.html',
  styleUrls: ['./simple-carousel.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
  // animations: [
  //   trigger('')
  // ]
})

// TODO : 29cm 참고해서 다시 재 도전
// 일렬로 나열해서 해야될 것 같음
//
export class SimpleCarouselComponent implements AfterViewInit, OnDestroy {

  @ViewChildren('imageLargeOuter') imageLargeOuter;
  @ViewChild('imagesSmallOuter') imagesSmallOuter;
  @ViewChildren('imageSmallOuter') imageSmallOuter;
  @Input() width;
  @Input() height;
  @Input('imagesLargeList') imagesLargeList = null;
  @Input('imagesSmallList') imagesSmallList = null;


  // TODO : 모든 subscription에 대해서 unsubscribe확실하게 정리하기
  // imagesLargeList = [
  //   'http://img.onpicks.com/p-customer__image--large-2.png',
  //   'http://img.onpicks.com/p-customer__image--large-3.png',
  //   'http://img.onpicks.com/p-customer__image--large-4.png',
  //   'http://img.onpicks.com/p-customer__image--large-5.png',
  // ];

  // imagesSmallList = [
  //   'http://img.onpicks.com/p-customer__image-small-1.jpg',
  //   'http://img.onpicks.com/p-customer__image-small-2.jpg',
  //   'http://img.onpicks.com/p-customer__image-small-3.jpg',
  //   'http://img.onpicks.com/p-customer__image-small-4.jpg',
  // ];

  imageIndex = 0;
  // 456(width) + 16 ( margin )
  state = 'stay';

  imageLargeOuterArray = [];
  imageSmallOuterArray = [];

  animationEnd$;

  constructor(
    private renderer: Renderer2,
    private cd: ChangeDetectorRef
  ) {
  }

  ngOnDestroy() {
    this.animationEnd$.unsubscribe();
  }

  ngAfterViewInit() {

    let animationCount = 0;
    this.animationEnd$ = fromEvent(document, 'animationend' );
    this.animationEnd$ = this.animationEnd$.pipe(map((val: AnimationEvent) => val.target));

    this.animationEnd$ = this.animationEnd$.subscribe( val => {

      if ( this.state === 'leftAnimating' || this.state === 'leftInteruptAnimating') {

        if ( val.classList.contains('simple-carousel-animate-left')) { this.renderer.removeClass(val, 'simple-carousel-animate-left'); }
        if ( val.classList.contains('simple-carousel-animate-second-left')) { this.renderer.removeClass(val, 'simple-carousel-animate-second-left'); }

        if ( this.state === 'leftAnimating') {

          // else의 경우의 수가 명시적이지가 않다..
          // else를 대신해서 this.state === 'leftAnimating' 하면 되야 되는게 맞는것같은데
          // else를 풀고 저렇게 하면 제대로 동작하지 않음. 이유에 대해선 정확히 잘 모르겠음
          animationCount++;
          if (animationCount >= 2) {
            this.state = 'stay';
            animationCount = 0;
          }
          return;
        }
      }

      if (this.state === 'rightAnimating' || this.state === 'rightInteruptAnimating') {

        if ( val.classList.contains('simple-carousel-animate-right')) { this.renderer.removeClass(val, 'simple-carousel-animate-right'); }
        if ( val.classList.contains('simple-carousel-animate-second-right')) { this.renderer.removeClass(val, 'simple-carousel-animate-second-right'); }

        if ( this.state === 'rightAnimating') {

          // else의 경우의 수가 명시적이지가 않다..
          // else를 대신해서 this.state === 'leftAnimating' 하면 되야 되는게 맞는것같은데
          // else를 풀고 저렇게 하면 제대로 동작하지 않음. 이유에 대해선 정확히 잘 모르겠음
          animationCount++;
          if (animationCount >= 2) {
            this.state = 'stay';
            animationCount = 0;
          }
          return;
        }
      };
    });
  }

  clickImageSmall( f ) {
    this.imageIndex = parseInt(f.getAttribute('data-index'), 10);
  }

  prevButton() {
    // 사라지는 조건  this.imageIndex == 0
    this.imageLargeOuterArray = this.imageLargeOuter.toArray();
    this.imageSmallOuterArray = this.imageSmallOuter.toArray();
    switch (this.state) {
      case 'stay' :
        if ( this.imageIndex === 0 ) {
          this.renderer.addClass(this.imageLargeOuterArray[0].nativeElement, 'simple-carousel-animate-right');
          this.renderer.addClass(this.imageLargeOuterArray[this.imageSmallOuterArray.length - 1].nativeElement, 'simple-carousel-animate-second-right');
          this.imageIndex = this.imageSmallOuterArray.length - 1;
        } else {
          this.renderer.addClass(this.imageLargeOuterArray[this.imageIndex  ].nativeElement, 'simple-carousel-animate-right');
          this.renderer.addClass(this.imageLargeOuterArray[this.imageIndex - 1].nativeElement, 'simple-carousel-animate-second-right');
          this.imageIndex--;
        }

        this.state = 'rightAnimating';
        break;
    }
  }

  nextButton() {
    this.imageLargeOuterArray = this.imageLargeOuter.toArray();
    this.imageSmallOuterArray = this.imageSmallOuter.toArray();

    switch (this.state) {
      case 'stay' :

        if ( this.imageIndex >= this.imageSmallOuterArray.length - 1 ) {
          this.renderer.addClass(this.imageLargeOuterArray[this.imageIndex].nativeElement, 'simple-carousel-animate-left');
          this.renderer.addClass(this.imageLargeOuterArray[0].nativeElement, 'simple-carousel-animate-second-left');
          this.imageIndex = 0;
        } else {
          this.renderer.addClass(this.imageLargeOuterArray[this.imageIndex].nativeElement, 'simple-carousel-animate-left');
          this.renderer.addClass(this.imageLargeOuterArray[this.imageIndex + 1].nativeElement, 'simple-carousel-animate-second-left');
          this.imageIndex++;
        }

        this.state = 'leftAnimating';
        break;
    }
  }
}


