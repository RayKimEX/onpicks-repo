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
import {RESPONSIVE_MAP} from '../../../../../app.config';

@Component({
  selector: 'onpicks-popular-brand',
  templateUrl: './popular-brand.component.html',
  styleUrls: ['./popular-brand.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush
})

export class PopularBrandComponent implements OnInit, AfterViewInit {
  @ViewChildren('itemList') itemList;
  @ViewChild('container') container;
  @Input('popularBrand') popularBrand;



  // SHUUEMURA 슈에무라
  // DIPTYQUE 딥디크
  // L’OCCITANE 록시땅
  // DIOR 디올 (edited)
  imageIndex = 0;
  itemListArray;
  translateXWidth = 192;
  isShowButton = true;
  constructor(
    @Inject(RESPONSIVE_MAP) public categoryMap,
    private renderer: Renderer2,
    private breakpointObserver:  BreakpointObserver,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
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
    this.renderer.setStyle(this.container.nativeElement, 'transform', 'translateX(' + this.imageIndex * this.translateXWidth + 'px)');
  }

  prevButton() {
    this.imageIndex++;
    this.renderer.setStyle(this.container.nativeElement, 'transform', 'translateX(' + this.imageIndex * this.translateXWidth + 'px)');
  }

}
