import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostListener,
  Inject,
  Input,
  LOCALE_ID,
  OnInit,
  Renderer2,
  ViewChild,
  ViewChildren
} from '@angular/core';
import {
  RESPONSIVE_MAP
} from '../../../../../core/global-constant/app.config';
import {
  BreakpointObserver,
  BreakpointState
} from '../../../../../../../node_modules/@angular/cdk/layout';
import {
  Router
} from '@angular/router';

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
  }

  imageIndex = 0;
  itemListArray;
  translateXWidth = 188;
  isShowButton = true;

  isShowDescription = false;
  currentDescriptionIndex = 0;
  currentDescription = '';
  currentDescriptionTitle = '';

  pressedPrev = false;
  valueList = [];
  isThirdBreakPoint = false;

  constructor(
    @Inject( RESPONSIVE_MAP ) public responsiveMap,
    @Inject( LOCALE_ID ) public locale: string,
    private router: Router,
    private renderer: Renderer2,
    private breakpointObserver:  BreakpointObserver,
    private cd: ChangeDetectorRef
  ) { }

  // TODO : shave는 나중에 하자
  // https://github.com/NetanelBasal/angular2-shave
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
    if ( this.itemList.first !== undefined ) {
      const computedStyle = getComputedStyle(( this.itemList.first.nativeElement ), null);
      this.translateXWidth =  parseInt(computedStyle.width, 10 ) + parseInt(computedStyle.marginRight, 10);
    }
  }

  @HostListener('document:touchend', ['$event'])
  @HostListener('document:click', ['$event', '$event.target'])
  onClick(event: MouseEvent, targetElement: HTMLElement): void {
    if ( this.container === undefined ) { return; }
    if ( this.container.nativeElement.contains(event.target) ) {

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
