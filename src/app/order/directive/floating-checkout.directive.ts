import {AfterViewInit, ChangeDetectorRef, Directive, HostListener, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {BreakpointObserver, BreakpointState} from '@angular/cdk/layout';
import {RESPONSIVE_MAP} from '../../core/global-constant/app.config';

@Directive({
  selector: '[onpicksFloatingCheckout]'
})
export class FloatingCheckoutDirective implements OnInit, AfterViewInit {
  private headerHeight: number;
  private footerHeight: number;
  private windowInnerHeight: number;
  private breakpointObserver:  BreakpointObserver;
  /*********checkout-mobile*******/
  isThirdBreakPoint = false;

  constructor(
    @Inject( RESPONSIVE_MAP ) public responsiveMap,
    private cd: ChangeDetectorRef,
  ) { }

  ngOnInit() {
    this.breakpointObserver
      .observe([this.responsiveMap['tb']])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.isThirdBreakPoint = false;
          this.cd.markForCheck();
        } else {
          this.isThirdBreakPoint = true;
          this.cd.markForCheck();
        }
      });
  }
  ngAfterViewInit() {
    this.windowInnerHeight = window.innerHeight;
    this.footerHeight = (document.querySelector('footer') as HTMLElement).offsetHeight;
    this.headerHeight = (document.querySelector('header') as HTMLElement).offsetHeight;
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.windowInnerHeight = window.innerHeight;
    this.scrollHandler(event);
  }
  @HostListener('window:scroll', ['$event'])
  scrollHandler(event) {
    if (!this.isThirdBreakPoint) {
      const checkoutRightMenu = (document.querySelector('.checkout-right__menu') as HTMLElement);
      const bodyHeight = (document.querySelector('body') as HTMLElement).offsetHeight;
      const BREADCRUMB_HEIGHT = 69;

      const scrollTop = event.target.scrollingElement.scrollTop;
      if (scrollTop > this.headerHeight + BREADCRUMB_HEIGHT && scrollTop + this.windowInnerHeight < bodyHeight - this.footerHeight ) {
        checkoutRightMenu.style.top = (scrollTop - this.headerHeight - BREADCRUMB_HEIGHT) + 'px';
      }
    }
  }
}
