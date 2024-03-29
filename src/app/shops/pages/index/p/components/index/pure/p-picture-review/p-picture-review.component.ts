import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component, HostListener,
  Input,
  Renderer2,
  ViewChild,
  ViewChildren
} from '@angular/core';
import { Store } from '@ngrx/store';
import { PDataService } from '../../../../../../../../core/service/data-pages/p/p-data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'p-picture-review',
  templateUrl: './p-picture-review.component.html',
  styleUrls: ['./p-picture-review.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})
export class PPictureReviewComponent {
  @ViewChildren('itemList') itemList;
  @ViewChild('container') container;
  @Input('pictureReviewList') set setList(xData) {

    if ( xData === null ) { return ; };

    this.imagesCount = xData.count;
    this.imagesLargeList = xData.results;
    this.imagesLargeList.unshift({});
    this.imagesLargeList.push({});

    setTimeout( () => {
      this.imagesLargeList.forEach( item => {
        if ( item.url !== undefined ) {
          // 작은 이미지 만들어서 불러오기
          this.imagesSmallList.push(item.url + '?d=w128-h128');
        }
      });

      this.itemListArray = this.itemList.toArray();
      if ( this.itemList.first !== undefined ) {
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
      }

      this.cd.markForCheck();
    }, 0);
  }


  calculatePercentToPXInterval;
  translateXWidth = 0;
  firstOffset = 0;

  imagesCount = 0;
  imagesLargeList = [];
  imagesSmallList = [];

  itemListArray;
  imageIndex = 0;

  constructor(
    private pDataService: PDataService,
    private renderer: Renderer2,
    private store: Store<any>,
    private cd: ChangeDetectorRef,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if ( this.itemList.length !== 0) {
      const computedStyle = getComputedStyle(( this.itemList.first.nativeElement ), null);
      this.firstOffset = parseFloat(computedStyle.width) * 0.8245;
      this.translateXWidth =  parseInt(computedStyle.width, 10 ) + parseInt(computedStyle.marginRight, 10);
      this.renderer.setStyle(this.container.nativeElement, 'transition', 'x');
      this.renderer.setStyle(this.container.nativeElement, 'transform', 'translateX(-' + (this.firstOffset + (this.imageIndex * this.translateXWidth)) + 'px');
    }
  }

  clickImageSmall( f ) {
    this.imageIndex = parseInt(f.getAttribute('data-index'), 10);
    this.renderer.setStyle(this.container.nativeElement, 'transition', 'transform .5s ease 0s');
    this.renderer.setStyle(this.container.nativeElement, 'transform', 'translateX(-' + (this.firstOffset + (this.imageIndex * this.translateXWidth)) + 'px)');
  }

  prevButton() {
    this.imageIndex--;
    this.renderer.setStyle(this.container.nativeElement, 'transition', 'transform .5s ease 0s');
    this.renderer.setStyle(this.container.nativeElement, 'transform', 'translateX(-' + (this.firstOffset + (this.imageIndex * this.translateXWidth)) + 'px)');
  }

  nextButton() {
    this.imageIndex++;
    this.renderer.setStyle(this.container.nativeElement, 'transition', 'transform .5s ease 0s');
    this.renderer.setStyle(this.container.nativeElement, 'transform', 'translateX(-' + (this.firstOffset + (this.imageIndex * this.translateXWidth)) + 'px)');
  }

  goReview(xReviewId) {
    if (xReviewId) {
      this.router.navigate(['reviews/' + xReviewId], {relativeTo: this.route});
    }
  }
}
