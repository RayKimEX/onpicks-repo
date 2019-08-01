import {Component, OnInit, ChangeDetectionStrategy, Input, HostListener, Renderer2, ChangeDetectorRef, ViewChild, ViewChildren, AfterViewInit} from '@angular/core';

@Component({
  selector: 'onpicks-review-carousel',
  templateUrl: './review-carousel.component.html',
  styleUrls: ['./review-carousel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReviewCarouselComponent implements OnInit, AfterViewInit {
  @Input('imageList') imageList;
  @ViewChild('container') container;
  @ViewChildren('itemList') itemList;

  imageIndex = 0;
  containerWidth = 0;
  capturedTranslateX = 0;

  constructor(
    private renderer: Renderer2,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {

  }
  isIEOrEdge = /msie\s|trident\/|edge\//i.test(window.navigator.userAgent)


  @HostListener('window:resize', ['$event'])
  hello(event) {
    this.containerWidth = parseInt(getComputedStyle(this.container.nativeElement).width, 10);
    this.capturedTranslateX  = ( this.containerWidth ) * this.imageIndex;
    this.renderer.setStyle(this.container.nativeElement, 'transition', 'x');
    this.renderer.setStyle(this.container.nativeElement, 'transform', 'translateX(-' + this.capturedTranslateX  + 'px)');
  }

  ngAfterViewInit() {
    this.containerWidth = parseInt(getComputedStyle(this.container.nativeElement).width, 10);
    this.capturedTranslateX  = ( this.containerWidth ) * this.imageIndex;
  }


  nextButton() {
    if ( this.imageIndex < this.imageList.length - 1) {
      this.imageIndex++;
      this.capturedTranslateX  = ( this.containerWidth) * this.imageIndex;
      this.renderer.setStyle(this.container.nativeElement, 'transition', 'transform .5s ease-in-out 0s');
      this.renderer.setStyle(this.container.nativeElement, 'transform', 'translateX(-' + this.capturedTranslateX  + 'px)');

    }
    this.cd.markForCheck();
  }

  prevButton() {
    console.log(this.imageIndex);

    if ( this.imageIndex !== 0) {
      this.imageIndex--;
      this.capturedTranslateX  = ( this.containerWidth) * this.imageIndex;
      this.renderer.setStyle(this.container.nativeElement, 'transition', 'transform .5s ease-in-out 0s');
      this.renderer.setStyle(this.container.nativeElement, 'transform', 'translateX(-' + this.capturedTranslateX + 'px)');
    }
    this.cd.markForCheck();

  }
}
