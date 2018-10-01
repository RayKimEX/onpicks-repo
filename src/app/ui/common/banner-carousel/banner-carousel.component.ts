import {
  AfterViewInit,
  Component,
  HostListener,
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
  @ViewChild('container') container;
  @ViewChildren('itemList') itemList;

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

  @HostListener('window:resize', ['$event'])
  hello(event) {

    // console.log(this.capturedTranslateX);
    // console.log(((this.capturedBrowserWidth - window.innerWidth ) * ( this.imageIndex ));
    const temp = this.capturedTranslateX - ((this.capturedBrowserWidth - window.innerWidth ) * ( this.imageIndex ))
    console.log(this.capturedTranslateX - ((this.capturedBrowserWidth - window.innerWidth ) * ( this.imageIndex )));
    console.log(temp);

    this.renderer.setStyle(this.container.nativeElement, 'transition', 'x');
    this.renderer.setStyle(this.container.nativeElement, 'transform', 'translateX(-' + temp  + 'px)');
    console.log(this.container.nativeElement);
  }

  // backLoad() {
  //   this.itemList.forEach( (item, index ) => {
  //     this.renderer.setStyle(item.nativeElement, 'opacity', 1);
  //   });
  // }

  constructor(private renderer: Renderer2) {

  }

  ngOnInit() {
     console.log(this.imagesLargeList.slice(this.imagesLargeList.length - 1, this.imagesLargeList.length)[0])
    this.imagesLargeList.splice(0, 0, this.imagesLargeList.slice(this.imagesLargeList.length - 1, this.imagesLargeList.length)[0]);
    this.imagesLargeList.push(this.imagesLargeList.slice(1, 2)[0]);
    console.log(this.imagesLargeList);
  }

  ngAfterViewInit() {
    this.itemList.forEach( (item, index ) => {
      console.log(item.nativeElement.style.transition);
    });

    this.renderer.setStyle(this.container.nativeElement, 'transform', 'translateX(-' + ( window.innerWidth * this.imageIndex ) + 'px)');
  }

  nextButton() {

    if ( this.imageIndex === this.imagesLargeList.length - 2) {
      this.renderer.setStyle(this.container.nativeElement, 'transition', 'x');
      this.renderer.setStyle(this.container.nativeElement, 'transform', 'translateX(0px)');
      this.imageIndex = 0;
      setTimeout(() => {
        this.capturedBrowserWidth = window.innerWidth;
        this.imageIndex++;
        this.renderer.setStyle(this.container.nativeElement, 'transition', 'transform .2s ease 0s');
        this.renderer.setStyle(this.container.nativeElement, 'transform', 'translateX(-' + ( window.innerWidth * this.imageIndex ) + 'px)');
        this.capturedTranslateX  = window.innerWidth * this.imageIndex;
      }, 20);

    } else {
      this.capturedBrowserWidth = window.innerWidth;
      this.imageIndex++;
      this.renderer.setStyle(this.container.nativeElement, 'transition', 'transform .2s ease 0s');
      this.renderer.setStyle(this.container.nativeElement, 'transform', 'translateX(-' + ( window.innerWidth * this.imageIndex ) + 'px)');
      this.capturedTranslateX  = window.innerWidth * this.imageIndex;
    }
  }

  prevButton() {

    console.log(this.imageIndex);
    if ( this.imageIndex === 1 ) {
      this.imageIndex = this.imagesLargeList.length - 1;
      this.renderer.setStyle(this.container.nativeElement, 'transition', 'x');
      this.renderer.setStyle(this.container.nativeElement, 'transform', 'translateX(-' + (window.innerWidth * this.imageIndex ) + 'px)');


      setTimeout(() => {
        this.capturedBrowserWidth = window.innerWidth;
        this.imageIndex--;
        this.renderer.setStyle(this.container.nativeElement, 'transition', 'transform .2s ease 0s');
        this.renderer.setStyle(this.container.nativeElement, 'transform', 'translateX(-' + ( window.innerWidth * this.imageIndex ) + 'px)');
        this.capturedTranslateX  = window.innerWidth * this.imageIndex;
      }, 20);
    } else {
      this.capturedBrowserWidth = window.innerWidth;

      this.imageIndex--;
      this.renderer.setStyle(this.container.nativeElement, 'transition', 'transform .2s ease 0s');
      this.renderer.setStyle(this.container.nativeElement, 'transform', 'translateX(-' + ( window.innerWidth * this.imageIndex ) + 'px)');
      this.capturedTranslateX  = window.innerWidth * this.imageIndex;
    }
  }
}
