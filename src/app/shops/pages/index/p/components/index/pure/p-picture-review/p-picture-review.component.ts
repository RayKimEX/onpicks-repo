import {
  AfterViewInit,
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component, HostListener,
  Input,
  OnDestroy,
  OnInit,
  Renderer2,
  ViewChild,
  ViewChildren
} from '@angular/core';
import {fromEvent} from 'rxjs';
import {map} from 'rxjs/operators';
import {select, Store} from '@ngrx/store';
import {PDataService} from '../../../../../../../../core/service/data-pages/p/p-data.service';
import {ActivatedRoute, Router} from '@angular/router';
import {DisplayAlertMessage} from '../../../../../../../../core/store/ui/ui.actions';

@Component({
  selector: 'onpicks-p-picture-review',
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
        console.log(item.url);
        if ( item.url !== undefined ){
          // 작은 이미지 만들어서 불러오기
          this.imagesSmallList.push(item.url + '?d=w128-h128');
        }
      });

      // this.imageSmallOuterArray = this.imageSmallOuter.toArray();
      // this.imageLargeOuterArray = this.imageLargeOuter.toArray();

      this.itemListArray = this.itemList.toArray();
      if ( this.itemList.first !== undefined ){
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
  // 456(width) + 16 ( margin )

  animationEndEvent;

  constructor(
    private renderer: Renderer2,
    private store: Store<any>,
    private pDataService: PDataService,
    private cd: ChangeDetectorRef,
    private router: Router,
    private route: ActivatedRoute
    //
  ) {
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    const computedStyle = getComputedStyle(( this.itemList.first.nativeElement ), null);
    this.firstOffset = parseFloat(computedStyle.width) * 0.8245;
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

  goReview(xReviewId) {
    if (xReviewId) {
      this.router.navigate(['reviews/' + xReviewId], {relativeTo: this.route});
    }
  }

}
