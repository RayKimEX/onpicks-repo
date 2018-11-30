import {
  AfterViewInit,
  Component, ElementRef, OnDestroy,
  OnInit,
  Renderer2, ViewChild,
  ViewChildren
} from '@angular/core';
import {fromEvent, pipe} from 'rxjs';
import {debounceTime, first, last, map, skip, take} from 'rxjs/operators';

@Component({
  selector: 'onpicks-p-customer',
  templateUrl: './p-customer.component.html',
  styleUrls: ['./p-customer.component.scss'],
})




export class PCustomerComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChildren('imageLargeOuter') imageLargeOuter;
  @ViewChild('imagesSmallOuter') imagesSmallOuter;
  @ViewChildren('imageSmallOuter') imageSmallOuter;

  imagesLargeList = [
    'empty',
    'http://img.onpicks.com/p-customer__image--large-2.png',
    'http://img.onpicks.com/p-customer__image--large-3.png',
    'http://img.onpicks.com/p-customer__image--large-4.png',
    'http://img.onpicks.com/p-customer__image--large-5.png',
    'http://img.onpicks.com/p-customer__image--large-6.png',
    'http://img.onpicks.com/p-customer__image--large-2.png',
    'http://img.onpicks.com/p-customer__image--large-3.png',
    'http://img.onpicks.com/p-customer__image--large-4.png',
    'http://img.onpicks.com/p-customer__image--large-5.png',
    'http://img.onpicks.com/p-customer__image--large-6.png',
    'http://img.onpicks.com/p-customer__image--large-2.png',
    'http://img.onpicks.com/p-customer__image--large-3.png',
    'http://img.onpicks.com/p-customer__image--large-4.png',
    'http://img.onpicks.com/p-customer__image--large-5.png',
    'http://img.onpicks.com/p-customer__image--large-6.png',
    'empty',
  ]

  imagesSmallList = [
    'http://img.onpicks.com/p-customer__image-small-1.jpg',
    'http://img.onpicks.com/p-customer__image-small-2.jpg',
    'http://img.onpicks.com/p-customer__image-small-3.jpg',
    'http://img.onpicks.com/p-customer__image-small-4.jpg',
    'http://img.onpicks.com/p-customer__image-small-5.jpg',
    'http://img.onpicks.com/p-customer__image-small-1.jpg',
    'http://img.onpicks.com/p-customer__image-small-2.jpg',
    'http://img.onpicks.com/p-customer__image-small-3.jpg',
    'http://img.onpicks.com/p-customer__image-small-4.jpg',
    'http://img.onpicks.com/p-customer__image-small-5.jpg',
    'http://img.onpicks.com/p-customer__image-small-1.jpg',
    'http://img.onpicks.com/p-customer__image-small-2.jpg',
    'http://img.onpicks.com/p-customer__image-small-3.jpg',
    'http://img.onpicks.com/p-customer__image-small-4.jpg',
    'http://img.onpicks.com/p-customer__image-small-5.jpg',
  ]

  imageIndex = 0;
  // 456(width) + 16 ( margin )
  customWidth = 472;
  state = 'stay';

  imageLargeOuterArray = [];
  imageSmallOuterArray = [];

  animationEndEvent;

  constructor(private renderer: Renderer2) {

  }

  ngOnInit() {

  }

  ngOnDestroy() {
    if ( this.animationEndEvent !== undefined) {
      this.animationEndEvent.unsubscribe();
    }

  }

  ngAfterViewInit() {
    this.imageLargeOuterArray = this.imageLargeOuter.toArray();
    this.imageSmallOuterArray = this.imageSmallOuter.toArray();
    const initialLeft_x = -37.6;
    const offsetLeft = 47.2;
    const initialRight_x = 104;


    this.imageLargeOuter.forEach(
      (outer, index) => {

        this.animationEndEvent = fromEvent(outer.nativeElement.parentNode, 'animationend' );

        if ( index === 0 ) {
          this.renderer.setStyle(outer.nativeElement,
            'left',
            (initialLeft_x) + 'rem');
        } else if ( index >= 3 ) {
          this.renderer.setStyle(outer.nativeElement,
            'left',
            (initialRight_x + 'rem'));
        } else {
          this.renderer.setStyle(outer.nativeElement,
            'left',
            (initialLeft_x + (offsetLeft * index)) + 'rem');
        }

      }
    );

    let animationCount = 0;

    this.animationEndEvent = this.animationEndEvent.pipe(map((val: AnimationEvent) => val.target));
    this.animationEndEvent = this.animationEndEvent.subscribe(val => {

      // @ts-ignore
      const temp = getComputedStyle(( val ), null);
      // force로 duration을 0으로 줘서 이벤트를 중지시켜도 animationend는 불려짐
      if (this.state === 'leftAnimating' || this.state === 'leftInteruptAnimating') {
        this.renderer.removeClass(val, 'animate-left');

        this.renderer.setStyle(
          val, 'left', (parseInt(temp.left, 10) - (this.customWidth)) + 'px');

        // interupt animationend
        if (this.state === 'leftInteruptAnimating') {
          this.renderer.removeClass(val, 'u-animation-stop');

          animationCount++;
          if (animationCount >= 4) {
            animationCount = 0;
            this.state = 'leftAnimating';
            this.animateCarousel('left', 'cur', 'animate-left', 'add');
            this.imageIndex++;
          }

          return;
        }
        if (this.state === 'leftAnimating') {

          // else의 경우의 수가 명시적이지가 않다..
          // else를 대신해서 this.state === 'leftAnimating' 하면 되야 되는게 맞는것같은데
          // else를 풀고 저렇게 하면 제대로 동작하지 않음. 이유에 대해선 정확히 잘 모르겠음
          animationCount++;
          if (animationCount >= 4) {
            this.state = 'stay';
            animationCount = 0;
          }
          return;
        }
      }

      if (this.state === 'rightAnimating' || this.state === 'rightInteruptAnimating') {
        this.renderer.removeClass(val, 'animate-right');

        this.renderer.setStyle(
          val, 'left', (parseInt(temp.left, 10) + (this.customWidth)) + 'px');

        // interupt animationend
        if (this.state === 'rightInteruptAnimating') {
          this.renderer.removeClass(val, 'u-animation-stop');

          animationCount++;
          if (animationCount >= 4) {
            animationCount = 0;
            this.state = 'rightAnimating';
            this.animateCarousel('right', 'cur', 'animate-right', 'add');
            this.imageIndex--;
          }

          return;
        }
        if (this.state === 'rightAnimating') {

          // else의 경우의 수가 명시적이지가 않다..
          // else를 대신해서 this.state === 'leftAnimating' 하면 되야 되는게 맞는것같은데
          // else를 풀고 저렇게 하면 제대로 동작하지 않음. 이유에 대해선 정확히 잘 모르겠음
          animationCount++;
          if (animationCount >= 4) {
            this.state = 'stay';
            animationCount = 0;
          }
          return;
        }


      };
      //
      //     // 이 else의 경우의 수도 명시적이지가 않다..
      //     this.renderer.removeClass(val, 'animate-right');
      //
      //     this.renderer.setStyle(
      //       val, 'left', (parseInt(temp.left, 10) + this.customWidth ) + 'px');
      //
      //   }
      //
      // }
    });

  }

  clickImageSmall( f ) {
    this.imageIndex = parseInt(f.getAttribute('data-index'), 10);
    // const initialLeft_x = -37.6;
    // const offsetLeft = 47.2;
    // const initialRight_x = 104;


    this.imageLargeOuter.forEach( (el, index) => {
      if ( index <= this.imageIndex - 1 ) {
        this.renderer.setStyle(el.nativeElement, 'left', '-84.8rem');
        return;
      }

      if ( index >= this.imageIndex + 3 ) {
        this.renderer.setStyle(el.nativeElement, 'left', '104rem');
        return;
      }

      if ( index === this.imageIndex ) {
        this.renderer.setStyle(el.nativeElement, 'left', '-37.6rem');
      }

      if ( index === this.imageIndex + 1 ) {
        this.renderer.setStyle(el.nativeElement, 'left', '9.6rem');
      }

      if ( index === this.imageIndex + 2 ) {
        this.renderer.setStyle(el.nativeElement, 'left', '56.8rem');
      }

    });

    if ( this.imageIndex >= 4 ) {
      this.renderer.setProperty(this.imagesSmallOuter.nativeElement,
        'scrollLeft',
        (72 * (this.imageIndex - 4)));

      return;
    }

    if ( this.imageIndex <= this.imageSmallOuterArray.length - 5 ) {
      this.renderer.setProperty(this.imagesSmallOuter.nativeElement,
        'scrollLeft',
        this.imagesSmallOuter.nativeElement.scrollLeft - (72 * this.imageIndex - 5));
      return;
    }
  }

  prevButton() {
    if ( this.imageIndex <= this.imageSmallOuterArray.length - 5 ) {
      this.renderer.setProperty(this.imagesSmallOuter.nativeElement,
        'scrollLeft',
        this.imagesSmallOuter.nativeElement.scrollLeft - 72);
    }

    // 사라지는 조건  this.imageIndex == 0
    switch (this.state) {
      case 'rightAnimating' :
        this.animateCarousel('right', 'prev', 'u-animation-stop', 'add');
        this.state = 'rightInteruptAnimating';
        break;
      case 'stay' :
        this.animateCarousel('right', 'cur', 'animate-right', 'add');
        this.imageIndex--;
        this.state = 'rightAnimating';
        break;
    }
  }

  nextButton() {
    if ( this.imageIndex >= 4 ) {
      this.renderer.setProperty(this.imagesSmallOuter.nativeElement,
        'scrollLeft',
        this.imagesSmallOuter.nativeElement.scrollLeft + 72);
    }

    // this.imageIndex === this.imageLargeOuterArray.length - 3
    switch (this.state) {
      case 'leftAnimating' :

        this.animateCarousel('left', 'prev', 'u-animation-stop', 'add');

        this.state = 'leftInteruptAnimating';
        break;
      case 'stay' :
        this.animateCarousel('left', 'cur', 'animate-left', 'add');
        this.imageIndex++;
        this.state = 'leftAnimating';
        break;
    }


  }

  private animateCarousel( direction: string, startPosition: string, addClassName: string, act: string ) {
    switch (direction) {
      case 'left' :
        if ( startPosition === 'cur') {
          for ( let i = 0; i < 4 ; i ++ ) {
            act === 'add' ? this.renderer.addClass(this.imageLargeOuterArray[this.imageIndex + i].nativeElement, addClassName) :
              this.renderer.removeClass(this.imageLargeOuterArray[this.imageIndex + i].nativeElement, addClassName);

          }
        }
        if ( startPosition === 'prev' ) {
          for ( let i = -1; i < 3 ; i ++ ) {
            act === 'add' ? this.renderer.addClass(this.imageLargeOuterArray[this.imageIndex + i].nativeElement, addClassName) :
              this.renderer.removeClass(this.imageLargeOuterArray[this.imageIndex + i].nativeElement, addClassName);
          }
        }

        break;
      case 'right' :
        if ( startPosition === 'cur') {
          for ( let i = -1; i < 3 ; i ++ ) {
            act === 'add' ? this.renderer.addClass(this.imageLargeOuterArray[this.imageIndex + i].nativeElement, addClassName) :
              this.renderer.removeClass(this.imageLargeOuterArray[this.imageIndex + i].nativeElement, addClassName);

          }
        }
        if ( startPosition === 'prev' ) {
          for ( let i = 0; i < 4 ; i ++ ) {
            act === 'add' ? this.renderer.addClass(this.imageLargeOuterArray[this.imageIndex + i].nativeElement, addClassName) :
              this.renderer.removeClass(this.imageLargeOuterArray[this.imageIndex + i].nativeElement, addClassName);
          }
        }
        break;

    }
  }
}
