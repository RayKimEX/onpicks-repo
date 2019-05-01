import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChildren,
  ViewChild,
  Input,
  Renderer2,
  ChangeDetectorRef,
  HostListener, AfterViewInit
} from '@angular/core';
import {fromEvent} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'ui-dynamic-carousel',
  templateUrl: './dynamic-carousel.component.html',
  styleUrls: ['./dynamic-carousel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicCarouselComponent implements AfterViewInit {

  @ViewChildren('imageLargeOuter') imageLargeOuter;
  @ViewChild('container') container;
  @Input() width;
  @Input() height;
  @Input('imagesLargeList') set _imagesLargeList (xImagesLargeList){

    if(xImagesLargeList === null ) { return };
    this.imagesLargeList = xImagesLargeList;
    this.imagesLargeList.splice(0, 0, this.imagesLargeList.slice(this.imagesLargeList.length - 1, this.imagesLargeList.length)[0]);
    this.imagesLargeList.push(this.imagesLargeList.slice(1, 2)[0]);
  }

  @Input('imagesSmallList') set _imagesSmallList (xImagesSmallList){
    if ( xImagesSmallList === null ) { return; };
    this.imagesSmallList = xImagesSmallList;
  }

  // TODO : 모든 subscription에 대해서 unsubscribe확실하게 정리하기

  imageIndex = 1;
  // 456(width) + 16 ( margin )

  imagesLargeList = null;
  imagesSmallList = null;

  translateXWidth;

  constructor(
    private renderer: Renderer2,
    private cd: ChangeDetectorRef
  ) {

  }

  ngAfterViewInit() {
    const computedStyle = getComputedStyle(( this.imageLargeOuter.first.nativeElement ), null);
    this.translateXWidth =  parseInt(computedStyle.width, 10 ) + parseInt(computedStyle.marginRight, 10);
    this.renderer.setStyle(this.container.nativeElement, 'transition', 'x');
    this.renderer.setStyle(this.container.nativeElement, 'transform', 'translateX(-' + ( this.translateXWidth * this.imageIndex ) + 'px)');
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    const computedStyle = getComputedStyle(( this.imageLargeOuter.first.nativeElement ), null);
    this.translateXWidth =  parseInt(computedStyle.width, 10 );

    this.renderer.setStyle(this.container.nativeElement, 'transition', 'x');
    this.renderer.setStyle(this.container.nativeElement, 'transform', 'translateX(-' + this.translateXWidth  + 'px)');
  }

  clickImageSmall( f ) {
    this.imageIndex = parseInt(f.getAttribute('data-index'), 10);
    this.renderer.setStyle(this.container.nativeElement, 'transition', 'transform .5s ease 0s');
    this.renderer.setStyle(this.container.nativeElement, 'transform', 'translateX(-' + ( this.translateXWidth * this.imageIndex ) + 'px)');
  }

  prevButton() {
    // 사라지는 조건  this.imageIndex == 0
    // clearInterval( this.myInterval );
    // this.myInterval = setInterval( () => this.moveNext(), 4000);
    if ( this.imageIndex === 1 ) {
      this.imageIndex = this.imagesLargeList.length - 1;
      this.renderer.setStyle(this.container.nativeElement, 'transition', 'x');
      this.renderer.setStyle(this.container.nativeElement, 'transform', 'translateX(-' + (this.translateXWidth * this.imageIndex ) + 'px)');

      setTimeout(() => {
        this.imageIndex--;
        this.renderer.setStyle(this.container.nativeElement, 'transition', 'transform .5s ease 0s');
        this.renderer.setStyle(this.container.nativeElement, 'transform', 'translateX(-' + ( this.translateXWidth * this.imageIndex ) + 'px)');
        this.cd.markForCheck();
        console.log(this.imageIndex);
      }, 20);
    } else {
      this.imageIndex--;
      this.renderer.setStyle(this.container.nativeElement, 'transition', 'transform .5s ease 0s');
      this.renderer.setStyle(this.container.nativeElement, 'transform', 'translateX(-' + ( this.translateXWidth * this.imageIndex ) + 'px)');
      console.log(this.imageIndex);
    }
  }

  nextButton() {
    if ( this.imageIndex === this.imagesLargeList.length - 2) {
      this.renderer.setStyle(this.container.nativeElement, 'transition', 'x');
      this.renderer.setStyle(this.container.nativeElement, 'transform', 'translateX(0px)');
      this.imageIndex = 0;
      setTimeout(() => {
        this.imageIndex++;
        this.renderer.setStyle(this.container.nativeElement, 'transition', 'transform .5s ease 0s');
        this.renderer.setStyle(this.container.nativeElement, 'transform', 'translateX(-' + (this.translateXWidth * this.imageIndex ) + 'px)');
        this.cd.markForCheck();
        console.log(this.imageIndex);
      }, 20);
    } else {
      this.imageIndex++;
      this.renderer.setStyle(this.container.nativeElement, 'transition', 'transform .5s ease 0s');
      this.renderer.setStyle(this.container.nativeElement, 'transform', 'translateX(-' + (this.translateXWidth * this.imageIndex ) + 'px)');
      console.log(this.imageIndex);

    }
  }

}
