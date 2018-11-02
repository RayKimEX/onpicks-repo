import {
  AfterViewInit,
  Component, ElementRef,
  HostListener, Input,
  OnInit,
  Renderer2,
  ViewChild,
  ViewChildren
} from '@angular/core';

@Component({
  selector: 'ui-banner-carousel',
  templateUrl: './banner-carousel.component.html',
  styleUrls: ['./banner-carousel.component.scss']
})
export class BannerCarouselComponent implements OnInit, AfterViewInit {
  @Input('height') height;

  @ViewChild('container') container;
  @ViewChildren('itemList') itemList;
  @ViewChild('buttonNext', {read : ElementRef}) buttonNext;
  @ViewChild('buttonPrev', {read : ElementRef}) buttonPrev;
  @ViewChild('circleNavigate') circleNavigate;

  imagesLargeList = [
    'https://picsum.photos/1920/440?image=120',
    'https://picsum.photos/1920/440?image=200',
    'https://picsum.photos/1920/440?image=130',
    'https://picsum.photos/1920/440?image=210',
    // 'https://s3.amazonaws.com/img.onpicks.com/p-customer__image--large-4.png',
    // 'https://s3.amazonaws.com/img.onpicks.com/p-customer__image--large-5.png',
    // 'https://s3.amazonaws.com/img.onpicks.com/p-customer__image--large-4.png',
    // 'https://s3.amazonaws.com/img.onpicks.com/p-customer__image--large-5.png',
  ];

  imageIndex = 1;
  capturedBrowserWidth;
  capturedTranslateX;
  myInterval;



  // backLoad() {
  //   this.itemList.forEach( (item, index ) => {
  //     this.renderer.setStyle(item.nativeElement, 'opacity', 1);
  //   });
  // }

  // TODO : 화면이 넘어갔을때, 이미지를 안나오게 해서, resource 최적화

  constructor(private renderer: Renderer2) {

  }

  @HostListener('mouseover')
  onMouseOver() {
    this.renderer.setStyle( this.buttonNext.nativeElement, 'opacity', '1');
    this.renderer.setStyle( this.buttonPrev.nativeElement, 'opacity', '1');
    this.renderer.setStyle( this.circleNavigate.nativeElement, 'opacity', '1' );
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.renderer.setStyle( this.buttonNext.nativeElement, 'opacity', '0');
    this.renderer.setStyle( this.buttonPrev.nativeElement, 'opacity', '0');
    this.renderer.setStyle( this.circleNavigate.nativeElement, 'opacity', '0' );
  }


  ngOnInit() {
    this.imageIndex = 1;
    this.capturedBrowserWidth = window.innerWidth;
    this.capturedTranslateX = window.innerWidth;
    this.imagesLargeList.splice(0, 0, this.imagesLargeList.slice(this.imagesLargeList.length - 1, this.imagesLargeList.length)[0]);
    this.imagesLargeList.push(this.imagesLargeList.slice(1, 2)[0]);
  }

  @HostListener('window:resize', ['$event'])
  hello(event) {

    // console.log(this.capturedTranslateX);
    // console.log(((this.capturedBrowserWidth - window.innerWidth ) * ( this.imageIndex ));
    const temp = this.capturedTranslateX - ((this.capturedBrowserWidth - window.innerWidth ) * ( this.imageIndex ))

    this.renderer.setStyle(this.container.nativeElement, 'transition', 'x');
    this.renderer.setStyle(this.container.nativeElement, 'transform', 'translateX(-' + temp  + 'px)');
  }

  ngAfterViewInit() {
    this.renderer.setStyle(this.container.nativeElement, 'height', this.height + 'rem' );
    // this.imageOuter.forEach( (item, index) => {
    //   console.log(item)
    //   this.renderer.setStyle(item.nativeElement, 'height', this.height + 'rem' );
    // });
    // this.renderer.setStyle(this.imageOuter.nativeElement, 'height', this.height + 'rem' );

    this.renderer.setStyle(this.container.nativeElement, 'transition', 'x');
    this.renderer.setStyle(this.container.nativeElement, 'transform', 'translateX(-' + ( window.innerWidth * this.imageIndex ) + 'px)');

    this.myInterval = setInterval(() => this.moveNext(), 4000);
  }

  nextButton() {

    clearInterval( this.myInterval );
    this.myInterval = setInterval( () => this.moveNext(), 4000);
    if ( this.imageIndex === this.imagesLargeList.length - 2) {
      this.renderer.setStyle(this.container.nativeElement, 'transition', 'x');
      this.renderer.setStyle(this.container.nativeElement, 'transform', 'translateX(0px)');
      this.imageIndex = 0;
      setTimeout(() => {
        this.capturedBrowserWidth = window.innerWidth;
        this.imageIndex++;
        this.renderer.setStyle(this.container.nativeElement, 'transition', 'transform .5s ease 0s');
        this.renderer.setStyle(this.container.nativeElement, 'transform', 'translateX(-' + ( window.innerWidth * this.imageIndex ) + 'px)');
        this.capturedTranslateX  = window.innerWidth * this.imageIndex;
      }, 20);

    } else {
      this.capturedBrowserWidth = window.innerWidth;
      this.imageIndex++;
      this.renderer.setStyle(this.container.nativeElement, 'transition', 'transform .5s ease 0s');
      this.renderer.setStyle(this.container.nativeElement, 'transform', 'translateX(-' + ( window.innerWidth * this.imageIndex ) + 'px)');
      this.capturedTranslateX  = window.innerWidth * this.imageIndex;
    }
  }

  prevButton() {

    clearInterval( this.myInterval );
    this.myInterval = setInterval( () => this.moveNext(), 4000);
    if ( this.imageIndex === 1 ) {
      this.imageIndex = this.imagesLargeList.length - 1;
      this.renderer.setStyle(this.container.nativeElement, 'transition', 'x');
      this.renderer.setStyle(this.container.nativeElement, 'transform', 'translateX(-' + (window.innerWidth * this.imageIndex ) + 'px)');


      setTimeout(() => {
        this.capturedBrowserWidth = window.innerWidth;
        this.imageIndex--;
        this.renderer.setStyle(this.container.nativeElement, 'transition', 'transform .5s ease 0s');
        this.renderer.setStyle(this.container.nativeElement, 'transform', 'translateX(-' + ( window.innerWidth * this.imageIndex ) + 'px)');
        this.capturedTranslateX  = window.innerWidth * this.imageIndex;
      }, 20);
    } else {
      this.capturedBrowserWidth = window.innerWidth;

      this.imageIndex--;
      this.renderer.setStyle(this.container.nativeElement, 'transition', 'transform .5s ease 0s');
      this.renderer.setStyle(this.container.nativeElement, 'transform', 'translateX(-' + ( window.innerWidth * this.imageIndex ) + 'px)');
      this.capturedTranslateX  = window.innerWidth * this.imageIndex;
    }
  }


  private moveNext() {
    if ( this.imageIndex === this.imagesLargeList.length - 2) {
      this.renderer.setStyle(this.container.nativeElement, 'transition', 'x');
      this.renderer.setStyle(this.container.nativeElement, 'transform', 'translateX(0px)');
      this.imageIndex = 0;
      setTimeout(() => {
        this.capturedBrowserWidth = window.innerWidth;
        this.imageIndex++;
        this.renderer.setStyle(this.container.nativeElement, 'transition', 'transform 1.3s ease 0s');
        this.renderer.setStyle(this.container.nativeElement, 'transform', 'translateX(-' + ( window.innerWidth * this.imageIndex ) + 'px)');
        this.capturedTranslateX  = window.innerWidth * this.imageIndex;
      }, 20);

    } else {
      this.capturedBrowserWidth = window.innerWidth;
      this.imageIndex++;
      this.renderer.setStyle(this.container.nativeElement, 'transition', 'transform 1.3s ease 0s');
      this.renderer.setStyle(this.container.nativeElement, 'transform', 'translateX(-' + ( window.innerWidth * this.imageIndex ) + 'px)');
      this.capturedTranslateX  = window.innerWidth * this.imageIndex;
    }
  }
}
