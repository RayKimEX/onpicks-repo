import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Inject,
  Renderer2,
  ChangeDetectorRef,
  HostListener,
  AfterViewInit,
  ViewChild, ViewChildren, OnDestroy, Input
} from '@angular/core';
import {RESPONSIVE_MAP} from '../../../../../app.config';
import {BreakpointObserver, BreakpointState} from '../../../../../../../node_modules/@angular/cdk/layout';
import {Router} from '@angular/router';

@Component({
  selector: 'onpicks-value-list',
  templateUrl: './value-list.component.html',
  styleUrls: ['./value-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ValueListComponent implements OnInit, AfterViewInit {
  @ViewChild('container') container;
  @ViewChildren('itemList') itemList;
  @ViewChild('shaveDiscription') shaveDiscription;
  @Input('type') type; // product, main
  @Input('valueList') set _popularBrand(xValueList) {
    if ( xValueList == null ) { return; }
    this.valueList = xValueList;
    // console.log(this.popularBrand);
  }

  imageIndex = 0;
  itemListArray;
  translateXWidth = 188;
  isShowButton = true;
  currentX = 0;
  currentPanVelocityX = 0;
  panInterval = null;

  isShowDescription = false;
  currentDescriptionIndex = 0;
  currentDescription = '';
  currentDescriptionTitle = '';

  pressedPrev = false;
  valueList = [];

  isThirdBreakPoint = false;
  // valueList = [
  //   {
  //     imgSrc : 'https:///img.onpicks.com/values/zero-calories.png',
  //     title : 'Zero Calories',
  //     description : '1회 제공량(per serving)에 칼로리가 0.5 Calorie 미만정도로 적게 포함.',
  //   },
  //   {
  //     imgSrc : 'https:///img.onpicks.com/values/alcohol-free.png',
  //     title : 'Big 8 Allergen Free',
  //     description : 'FDA (미국 식품 의약국)에서 정한 음식 알러지 원인의 90 %를 차지하는 식품군인 우유, 계란, 생선, 조개류, 견과류, 땅콩, 밀 및 콩이 포함되지 않음.',
  //   },
  //   {
  //     imgSrc : 'https:///img.onpicks.com/values/value-alcohol-free.png',
  //     title : 'Alcohol Free',
  //     description : '알코올 성분이 첨가되어 있지 않음.',
  //   },
  //   {
  //     imgSrc : 'https:///img.onpicks.com/values/value-alcohol-free.png',
  //     title : 'Gluten Free',
  //     description : 'Cras congue hendrerit eleifend. Nunc in lacinia leo. Quisque a dolor quis nulla laoreet elementum. In porttitor urna enim, eu rutrum neque porttitor commodo. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
  //   }
  // ]

  constructor(
    @Inject(RESPONSIVE_MAP) public responsiveMap,
    private router: Router,
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
      .observe([this.responsiveMap['tb']])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.isThirdBreakPoint = true;
          this.isShowButton = false;
          this.cd.markForCheck();
        } else {
          this.isThirdBreakPoint = false;
          this.isShowButton = true;
        }
      });
  }


  ngAfterViewInit() {
    this.itemListArray = this.itemList.toArray();

  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    const computedStyle = getComputedStyle(( this.itemList.first.nativeElement ), null);
    this.translateXWidth =  parseInt(computedStyle.width, 10 ) + parseInt(computedStyle.marginRight, 10);
    console.log(computedStyle.width);
  }

  @HostListener('document:touchend', ['$event'])
  @HostListener('document:click', ['$event', '$event.target'])
  onClick(event: MouseEvent, targetElement: HTMLElement): void {
    if ( this.container === undefined ) { return; }
    if (this.container.nativeElement.contains(event.target)) {

    } else {
      this.isShowDescription = false;
    }
  }

  nextButton() {
    this.pressedPrev = false;
    this.imageIndex++;
    this.renderer.setStyle(this.container.nativeElement, 'transform', 'translateX(' + (-this.imageIndex) * this.translateXWidth  + 'px)');
  }

  prevButton() {
    this.pressedPrev = true;
    this.imageIndex--;
    this.renderer.setStyle(this.container.nativeElement, 'transform', 'translateX(' + (-this.imageIndex) * this.translateXWidth  + 'px)');
  }

  navigate(xSlug) {
    this.router.navigateByUrl('/shops/search?ordering=most_popular&value=' + xSlug);
  }

}
