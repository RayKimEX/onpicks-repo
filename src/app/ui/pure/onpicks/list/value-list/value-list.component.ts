import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Inject,
  Renderer2,
  ChangeDetectorRef,
  HostListener,
  AfterViewInit,
  ViewChild, ViewChildren
} from '@angular/core';
import {RESPONSIVE_MAP} from '../../../../../app.config';
import {BreakpointObserver, BreakpointState} from '../../../../../../../node_modules/@angular/cdk/layout';

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

  imageIndex = 0;
  itemListArray;
  translateXWidth = 288;
  isShowButton = true;
  currentX = 0;
  currentPanVelocityX = 0;
  panInterval = null;

  valueList = [
    {
      imgSrc : 'https:///img.onpicks.com/values/value-alcohol-free.png',
      title : 'Gluten Free',
      description : {

      }
    }
  ]

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
