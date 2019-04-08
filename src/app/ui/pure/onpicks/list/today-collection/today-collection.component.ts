import {
  AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef,
  Component, HostListener, Inject, Input,
  OnInit,
  Renderer2,
  ViewChild,
  ViewChildren
} from '@angular/core';
import {BreakpointObserver, BreakpointState} from '../../../../../../../node_modules/@angular/cdk/layout';
import {RESPONSIVE_MAP} from '../../../../../core/global-constant/app.config';
import {ActivatedRoute, Router} from '@angular/router';

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
  @Input('todayCollection') todayCollection;


  imageIndex = 0;
  itemListArray;
  translateXWidth = 288;
  isShowButton = true;
  currentX = 0;
  currentPanVelocityX = 0;
  panInterval = null;

  constructor(
    @Inject(RESPONSIVE_MAP) public responsiveMap,
    private renderer: Renderer2,
    private breakpointObserver:  BreakpointObserver,
    private cd: ChangeDetectorRef,
    private router: Router,
    private route: ActivatedRoute,
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

  navigateForCollection(xFilterSlug) {

    Object.keys(xFilterSlug).forEach( v => {
      if ( v === 'router' ) {
        this.router.navigate([xFilterSlug[v]]);
      } else {
        this.router.navigate(['/shops/search'], { relativeTo: this.route, queryParams: {  ordering : 'most_popular', [v] : xFilterSlug[v] }, queryParamsHandling : 'merge'});
      }
    });
    // this.router.navigate();
  }
}
