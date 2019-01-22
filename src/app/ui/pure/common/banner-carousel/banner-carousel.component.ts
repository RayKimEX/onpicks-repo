import {
  AfterViewInit,
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  Renderer2,
  ViewChild,
  ViewChildren
} from '@angular/core';

@Component({
  selector: 'ui-banner-carousel',
  templateUrl: './banner-carousel.component.html',
  styleUrls: ['./banner-carousel.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class BannerCarouselComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input('height') height;
  @Input('imagesLargeList') imagesLargeList;

  @ViewChild('container') container;
  @ViewChildren('itemList') itemList;
  @ViewChild('buttonNext', {read : ElementRef}) buttonNext;
  @ViewChild('buttonPrev', {read : ElementRef}) buttonPrev;
  @ViewChild('circleNavigate') circleNavigate;

  imageIndex = 1;
  capturedBrowserWidth;
  capturedTranslateX;
  myInterval;
  scrollBarWidth;

  // TODO : 화면이 넘어갔을때, 이미지를 안나오게 해서, resource 최적화

  constructor(
    private renderer: Renderer2,
    private cd: ChangeDetectorRef
  ) {

  }

  ngOnDestroy() {
    clearInterval( this.myInterval );
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
    // 윈도우에서 스크롤바에 의한 layout깨짐 방지
    const scrollDiv = this.renderer.createElement('div');

    this.renderer.addClass(scrollDiv, 'scrollbar-measure');
    this.renderer.appendChild(document.body, scrollDiv);

    // Get the scrollbar width
    this.scrollBarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    console.warn(this.scrollBarWidth); // Mac:  15

    this.renderer.removeChild(document.body, scrollDiv);



    this.imageIndex = 1;
    console.warn(window.innerWidth);

    this.capturedBrowserWidth = window.innerWidth - this.scrollBarWidth;
    console.warn(this.capturedBrowserWidth);
    this.capturedTranslateX = window.innerWidth - this.scrollBarWidth;
    this.imagesLargeList.splice(0, 0, this.imagesLargeList.slice(this.imagesLargeList.length - 1, this.imagesLargeList.length)[0]);
    this.imagesLargeList.push(this.imagesLargeList.slice(1, 2)[0]);
  }

  @HostListener('window:resize', ['$event'])
  hello(event) {

    const temp = this.capturedTranslateX - ((this.capturedBrowserWidth - (window.innerWidth - this.scrollBarWidth) ) * ( this.imageIndex ))

    this.renderer.setStyle(this.container.nativeElement, 'transition', 'x');
    this.renderer.setStyle(this.container.nativeElement, 'transform', 'translateX(-' + temp  + 'px)');
  }

  ngAfterViewInit() {

    this.renderer.setStyle(this.container.nativeElement, 'height', this.height + 'rem' );
    this.renderer.setStyle(this.container.nativeElement, 'transition', 'x');
    this.renderer.setStyle(this.container.nativeElement, 'transform', 'translateX(-' + ( (window.innerWidth - this.scrollBarWidth) * this.imageIndex ) + 'px)');
    // this.myInterval = setInterval(() => this.moveNext(), 4000);
  }

  nextButton() {
    console.log(this.imageIndex )
    console.log(this.imagesLargeList.length)

    clearInterval( this.myInterval );
    // this.myInterval = setInterval( () => this.moveNext(), 4000);
    if ( this.imageIndex === this.imagesLargeList.length - 2) {
      this.renderer.setStyle(this.container.nativeElement, 'transition', 'x');
      this.renderer.setStyle(this.container.nativeElement, 'transform', 'translateX(0px)');
      this.imageIndex = 0;
      setTimeout(() => {
        this.capturedBrowserWidth = window.innerWidth - this.scrollBarWidth;
        this.imageIndex++;
        this.renderer.setStyle(this.container.nativeElement, 'transition', 'transform .5s ease 0s');
        this.renderer.setStyle(this.container.nativeElement, 'transform', 'translateX(-' + (( window.innerWidth - this.scrollBarWidth) * this.imageIndex ) + 'px)');
        this.capturedTranslateX  = (window.innerWidth - this.scrollBarWidth) * this.imageIndex;
        this.cd.markForCheck();
      }, 20);
    } else {
      this.capturedBrowserWidth = window.innerWidth - this.scrollBarWidth;
      this.imageIndex++;
      this.renderer.setStyle(this.container.nativeElement, 'transition', 'transform .5s ease 0s');
      this.renderer.setStyle(this.container.nativeElement, 'transform', 'translateX(-' + (( window.innerWidth - this.scrollBarWidth) * this.imageIndex ) + 'px)');
      this.capturedTranslateX  = (window.innerWidth - this.scrollBarWidth) * this.imageIndex;
    }
  }

  prevButton() {

    clearInterval( this.myInterval );
    // this.myInterval = setInterval( () => this.moveNext(), 4000);
    if ( this.imageIndex === 1 ) {
      this.imageIndex = this.imagesLargeList.length - 1;
      this.renderer.setStyle(this.container.nativeElement, 'transition', 'x');
      this.renderer.setStyle(this.container.nativeElement, 'transform', 'translateX(-' + ((window.innerWidth - this.scrollBarWidth) * this.imageIndex ) + 'px)');

      setTimeout(() => {
        this.capturedBrowserWidth = (window.innerWidth - this.scrollBarWidth);
        this.imageIndex--;
        this.renderer.setStyle(this.container.nativeElement, 'transition', 'transform .5s ease 0s');
        this.renderer.setStyle(this.container.nativeElement, 'transform', 'translateX(-' + ( (window.innerWidth - this.scrollBarWidth) * this.imageIndex ) + 'px)');
        this.capturedTranslateX  = (window.innerWidth - this.scrollBarWidth) * this.imageIndex;
        this.cd.markForCheck();
      }, 20);
    } else {
      this.capturedBrowserWidth = (window.innerWidth - this.scrollBarWidth);
      this.imageIndex--;
      this.renderer.setStyle(this.container.nativeElement, 'transition', 'transform .5s ease 0s');
      this.renderer.setStyle(this.container.nativeElement, 'transform', 'translateX(-' + ( (window.innerWidth - this.scrollBarWidth) * this.imageIndex ) + 'px)');
      this.capturedTranslateX  = (window.innerWidth - this.scrollBarWidth) * this.imageIndex;
    }
  }


  private moveNext() {
    if ( this.imageIndex === this.imagesLargeList.length - 2) {
      this.renderer.setStyle(this.container.nativeElement, 'transition', 'x');
      this.renderer.setStyle(this.container.nativeElement, 'transform', 'translateX(0px)');
      this.imageIndex = 0;
      setTimeout(() => {
        this.capturedBrowserWidth = (window.innerWidth - this.scrollBarWidth);
        this.imageIndex++;
        this.renderer.setStyle(this.container.nativeElement, 'transition', 'transform 1.3s ease 0s');
        this.renderer.setStyle(this.container.nativeElement, 'transform', 'translateX(-' + ( (window.innerWidth - this.scrollBarWidth) * this.imageIndex ) + 'px)');
        this.capturedTranslateX  = (window.innerWidth - this.scrollBarWidth) * this.imageIndex;
      }, 20);

    } else {
      this.capturedBrowserWidth = (window.innerWidth - this.scrollBarWidth);
      this.imageIndex++;
      this.renderer.setStyle(this.container.nativeElement, 'transition', 'transform 1.3s ease 0s');
      this.renderer.setStyle(this.container.nativeElement, 'transform', 'translateX(-' + ( (window.innerWidth - this.scrollBarWidth) * this.imageIndex ) + 'px)');
      this.capturedTranslateX  = (window.innerWidth - this.scrollBarWidth) * this.imageIndex;
    }
  }
}
