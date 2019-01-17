import {
  AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef,
  Component, HostListener, Inject,
  OnInit,
  Renderer2,
  ViewChild,
  ViewChildren
} from '@angular/core';
import {BreakpointObserver, BreakpointState} from '../../../../../../../node_modules/@angular/cdk/layout';
import {RESPONSIVE_MAP} from '../../../../../app.config';

@Component({
  selector: 'onpicks-today-collection',
  templateUrl: './today-collection.component.html',
  styleUrls: ['./today-collection.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class TodayCollectionComponent implements OnInit, AfterViewInit {
  @ViewChild('container') container;
  @ViewChildren('itemList') itemList;
  @ViewChild('shaveDiscription') shaveDiscription;

  todayCollection = [
    {
      imgSrc : 'http://img.onpicks.com/index-collections-paleo.jpg',
      todayCategoryName : '식품·생활용품',
      todayTitle : '팔레오 다이어트',
      todayDiscription: '건강&체중을 한 번에! 수천년 전에 인간 사냥꾼 조상이 먹은 것과 유사하도록 고안된 구석기 다이어트...',
    },
    {
      imgSrc : 'http://img.onpicks.com/index-collections-USDA.jpg',
      todayCategoryName : '식품·생활용품',
      todayTitle : 'USDA 인증',
      todayDiscription: '미국 유기농 인증마크 USDA',
    },
    {
      imgSrc : 'http://img.onpicks.com/index-collections-gluten.jpg',
      todayCategoryName : '식품·생활용품',
      todayTitle : '글루텐프리',
      todayDiscription: '밀가루 무첨가 영양만점 글루텐프리',
    },
    // {
    //   imgSrc : 'http://img.onpicks.com/index-collections-vesitable.jpg',
    //   todayCategoryName : '식품·생활용품',
    //   todayTitle : '채식주의자',
    //   todayDiscription: '더 나은 삶을 위힌 채식주의',
    // },
    // {
    //   imgSrc : 'http://img.onpicks.com/index-collections-gluten.jpg',
    //   todayCategoryName : '식품·생활용품',
    //   todayTitle : '글루텐프리',
    //   todayDiscription: '밀가루 무첨가 영양만점 글루텐프리',
    // },
    // {
    //   imgSrc : 'http://img.onpicks.com/index-collections-vesitable.jpg',
    //   todayCategoryName : '식품·생활용품',
    //   todayTitle : '채식주의자',
    //   todayDiscription: '더 나은 삶을 위힌 채식주의',
    // }
  ]

  imageIndex = 0;
  itemListArray;
  translateXWidth = 288;
  isShowButton = true;
  currentX = 0;
  currentPanVelocityX = 0;
  panInterval = null;

  constructor(
    @Inject(RESPONSIVE_MAP) public categoryMap,
    private renderer: Renderer2,
    private breakpointObserver:  BreakpointObserver,
    private cd: ChangeDetectorRef
  ) {

  }

  // TODO : shave는 나중에 하자
  // https://github.com/NetanelBasal/angular2-shave
  //
  ngOnInit() {
    // tb
    this.breakpointObserver
      .observe([this.categoryMap['tb']])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.isShowButton = false;
          this.cd.markForCheck();
        } else {
          this.isShowButton = true;
        }
      });
  }
  ngAfterViewInit() {
    this.itemListArray = this.itemList.toArray();
    const computedStyle = getComputedStyle(( this.itemList.first.nativeElement ), null);
    this.translateXWidth =  parseInt(computedStyle.width, 10 ) + parseInt(computedStyle.marginRight, 10);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    const computedStyle = getComputedStyle(( this.itemList.first.nativeElement ), null);
    this.translateXWidth =  parseInt(computedStyle.width, 10 ) + parseInt(computedStyle.marginRight, 10);
  }

  nextButton() {
    this.imageIndex--;
    this.renderer.setStyle(this.container.nativeElement, 'transform', 'translateX(' + this.imageIndex * this.translateXWidth  + 'px)');
  }

  prevButton() {
    this.imageIndex++;
    this.renderer.setStyle(this.container.nativeElement, 'transform', 'translateX(' + this.imageIndex * this.translateXWidth  + 'px)');
  }
}
