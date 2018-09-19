


import {
  AfterViewInit,
  Component, ElementRef, Input,
  OnInit,
  Renderer2, ViewChild,
  ViewChildren
} from '@angular/core';
import {fromEvent, pipe} from 'rxjs';
import {debounceTime, first, last, map, skip, take} from 'rxjs/operators';


@Component({
  selector: 'ui-simple-carousel',
  templateUrl: './simple-carousel.component.html',
  styleUrls: ['./simple-carousel.component.scss'],
  // animations: [
  //   trigger('')
  // ]
})

// 29cm 참고해서 다시 재 도전
// 일렬로 나열해서 해야될 것 같음
//
export class SimpleCarouselComponent implements OnInit, AfterViewInit {

  @ViewChildren('imageLargeOuter') imageLargeOuter;
  @ViewChild('imagesSmallOuter') imagesSmallOuter;
  @ViewChildren('imageSmallOuter') imageSmallOuter;
  @Input() width;
  @Input() height;


  imagesLargeList = [
    'https://s3.amazonaws.com/img.onpicks.com/p-customer__image--large-2.png',
    'https://s3.amazonaws.com/img.onpicks.com/p-customer__image--large-3.png',
    'https://s3.amazonaws.com/img.onpicks.com/p-customer__image--large-4.png',
    'https://s3.amazonaws.com/img.onpicks.com/p-customer__image--large-5.png',
  ];

  imagesSmallList = [
    'https://s3.amazonaws.com/img.onpicks.com/p-customer__image-small-1.jpg',
    'https://s3.amazonaws.com/img.onpicks.com/p-customer__image-small-2.jpg',
    'https://s3.amazonaws.com/img.onpicks.com/p-customer__image-small-3.jpg',
    'https://s3.amazonaws.com/img.onpicks.com/p-customer__image-small-4.jpg',
  ];

  imageIndex = 0;
  // 456(width) + 16 ( margin )
  customWidth = 646;
  state = 'stay';

  imageLargeOuterArray = [];
  imageSmallOuterArray = [];

  constructor(private renderer: Renderer2) {
  }

  ngOnInit() {

  }

  ngAfterViewInit() {


    this.imageLargeOuterArray = this.imageLargeOuter.toArray();
    this.imageSmallOuterArray = this.imageSmallOuter.toArray();

    let animationCount = 0;
    const source = fromEvent(document, 'animationend' );
    const example = source.pipe(map(val => val.target));
    example.subscribe( (val: HTMLElement) => {
      // const temp = getComputedStyle(val, null);
      // force로 duration을 0으로 줘서 이벤트를 중지시켜도 animationend는 불려짐
      if (this.state === 'leftAnimating' || this.state === 'leftInteruptAnimating') {

        if ( val.classList.contains('simple-carousel-animate-left')) { this.renderer.removeClass(val, 'simple-carousel-animate-left'); }
        if ( val.classList.contains('simple-carousel-animate-second-left')) { this.renderer.removeClass(val, 'simple-carousel-animate-second-left'); }

        if (this.state === 'leftAnimating') {

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
        console.log('rightAnimatingEnd');
        if(val.classList.contains('simple-carousel-animate-right')) { this.renderer.removeClass(val, 'simple-carousel-animate-right'); }
        if(val.classList.contains('simple-carousel-animate-second-right')) { this.renderer.removeClass(val, 'simple-carousel-animate-second-right'); }

        if (this.state === 'rightAnimating') {

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
    // if ( this.imageIndex <= this.imageSmallOuterArray.length - 5 ) {
    //   this.renderer.setProperty(this.imagesSmallOuter.nativeElement,
    //     'scrollLeft',
    //     this.imagesSmallOuter.nativeElement.scrollLeft - 72);
    // }

    // 사라지는 조건  this.imageIndex == 0
    console.log(this.imageIndex);
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
    console.log(this.imageIndex);

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


