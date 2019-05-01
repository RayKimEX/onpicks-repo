import {
  AfterViewInit,
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  HostListener, Inject,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
  ViewChildren
} from '@angular/core';
import {BreakpointObserver, BreakpointState} from '../../../../../../../node_modules/@angular/cdk/layout';
import {RESPONSIVE_MAP} from '../../../../../core/global-constant/app.config';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'onpicks-popular-brand',
  templateUrl: './popular-brand.component.html',
  styleUrls: ['./popular-brand.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush
})

export class PopularBrandComponent implements OnInit, AfterViewInit {
  @ViewChildren('itemList') itemList;
  @ViewChild('container') container;
  @Input('popularBrand') set _popularBrand(xPopularBrand) {
    if ( xPopularBrand == null ) { return; }
    console.log('@@@@@@@@@popular brand!')
    console.log(this.popularBrand);
    this.popularBrand = xPopularBrand;
    console.log(this.popularBrand);
  }

  popularBrand;
  imageIndex = 0;
  itemListArray;
  translateXWidth = 192;
  isShowButton = true;
  constructor(
    @Inject(RESPONSIVE_MAP) public responsiveMap,
    private renderer: Renderer2,
    private breakpointObserver:  BreakpointObserver,
    private router: Router,
    private cd: ChangeDetectorRef,
  ) {

  }

  ngOnInit() {
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
    // this.itemListArray = this.itemList.toArray();
    // const computedStyle = getComputedStyle(( this.itemList.first.nativeElement ), null);
    // this.translateXWidth =  parseInt(computedStyle.width, 10 ) + parseInt(computedStyle.marginRight, 10);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if ( this.itemList.first !== null && this.itemList.first !== undefined ) {
      const computedStyle = getComputedStyle(( this.itemList.first.nativeElement ), null);
      this.translateXWidth =  parseInt(computedStyle.width, 10 ) + parseInt(computedStyle.marginRight, 10);
    }
  }

  nextButton() {
    this.imageIndex--;
    this.renderer.setStyle(this.container.nativeElement, 'transform', 'translateX(' + this.imageIndex * this.translateXWidth + 'px)');
  }

  prevButton() {
    this.imageIndex++;
    this.renderer.setStyle(this.container.nativeElement, 'transform', 'translateX(' + this.imageIndex * this.translateXWidth + 'px)');
  }

  navigate(xSlug) {
    this.router.navigateByUrl('/shops/search?ordering=most_popular&brand=' + xSlug);
  }

}
