import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChildren,
  ViewChild,
  Input,
  Renderer2,
  ChangeDetectorRef,
  AfterViewInit, OnDestroy, HostListener
} from '@angular/core';
import {fromEvent} from 'rxjs';
import {first, map} from 'rxjs/operators';
import {select, Store} from '@ngrx/store';
import {PDataService} from '../../../../../../../../core/service/data-pages/p/p-data.service';

@Component({
  selector: 'onpicks-p-picture-review-sub',
  templateUrl: './p-picture-review-sub.component.html',
  styleUrls: ['./p-picture-review-sub.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class PPictureReviewSubComponent {
  @ViewChildren('itemList') itemList;
  @ViewChild('container') container;



  @Input('pictureReviewList') set setList(xData) {

    if ( xData === null ) { return ; };
    this.imagesLargeList = xData;
    this.imagesLargeList.unshift({});
    this.imagesLargeList.push({});
    this.cd.markForCheck();
    setTimeout( () => {
      this.imagesLargeList.forEach( item => {
        if ( item.url !== undefined ){
          this.imagesSmallList.push(item.url);
        }
      });
      // this.imageSmallOuterArray = this.imageSmallOuter.toArray();
      // this.imageLargeOuterArray = this.imageLargeOuter.toArray();

      this.itemListArray = this.itemList.toArray();
      const computedStyle = getComputedStyle(( this.itemList.first.nativeElement ), null);
      this.calculatePercentToPXInterval = setInterval( () => {
        const isPX = computedStyle.width.endsWith('px');
        if ( isPX ) {
          this.firstOffset = parseFloat(computedStyle.width) * 0.8245;
          this.translateXWidth =  parseInt(computedStyle.width, 10 ) + parseInt(computedStyle.marginRight, 10);
          this.renderer.setStyle(this.container.nativeElement, 'transition', 'x');
          this.renderer.setStyle(this.container.nativeElement, 'transform', 'translateX(-' + this.firstOffset + 'px');
          clearInterval(this.calculatePercentToPXInterval);
        }

      }, 20);



    }, 0);
  }


  calculatePercentToPXInterval;
  translateXWidth = 0;
  firstOffset = 0;

  imagesLargeList = [];
  imagesSmallList = [];



  itemListArray;
  imageIndex = 0;
  // 456(width) + 16 ( margin )

  animationEndEvent;

  reviews$;
  constructor(
    private renderer: Renderer2,
    private store: Store<any>,
    private pDataService: PDataService,
    private cd: ChangeDetectorRef
    //
  ) {
    this.reviews$ = this.store.pipe(select((state) => state['p']['reviews']));
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    const computedStyle = getComputedStyle(( this.itemList.first.nativeElement ), null);
    this.firstOffset = parseFloat(computedStyle.width) * 0.8245;
    console.log(this.firstOffset);
    this.translateXWidth =  parseInt(computedStyle.width, 10 ) + parseInt(computedStyle.marginRight, 10);
    this.renderer.setStyle(this.container.nativeElement, 'transition', 'x');
    this.renderer.setStyle(this.container.nativeElement, 'transform', 'translateX(-' + (this.firstOffset + (this.imageIndex * this.translateXWidth)) + 'px');
  }

  clickImageSmall( f ) {
    this.imageIndex = parseInt(f.getAttribute('data-index'), 10);
    this.renderer.setStyle(this.container.nativeElement, 'transition', 'transform .5s ease 0s');
    this.renderer.setStyle(this.container.nativeElement, 'transform', 'translateX(-' + (this.firstOffset + (this.imageIndex * this.translateXWidth)) + 'px)');
  }

  prevButton() {
    // if ( this.imageIndex === 0) { return; };
    this.imageIndex--;
    this.renderer.setStyle(this.container.nativeElement, 'transition', 'transform .5s ease 0s');
    this.renderer.setStyle(this.container.nativeElement, 'transform', 'translateX(-' + (this.firstOffset + (this.imageIndex * this.translateXWidth)) + 'px)');
  }

  nextButton() {

    // if ( this.imageIndex >= this.imageLargeOuterArray.length - 3) { return; };
    this.imageIndex++;
    console.log(this.translateXWidth);
    console.log(this.imageIndex);
    console.log(this.firstOffset);
    this.renderer.setStyle(this.container.nativeElement, 'transition', 'transform .5s ease 0s');
    this.renderer.setStyle(this.container.nativeElement, 'transform', 'translateX(-' + (this.firstOffset + (this.imageIndex * this.translateXWidth)) + 'px)');
  }
}
