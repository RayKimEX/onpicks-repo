import {
  AfterViewInit, Directive, ElementRef, Input, Renderer2
} from '@angular/core';

@Directive({
  selector: '[drAnimateOnScroll]'
})
export class AnimateOnScrollDirective implements AfterViewInit {
  @Input('duration') duration;
  @Input('timing-function') timingFunction;
  @Input('animateClass') animateClass;
  @Input('animateObject') animateObject: { property, value };
  @Input('odMeter')

  obs;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {
    //
  }


  ngAfterViewInit() {
    this.timingFunction = this.timingFunction === undefined ? 'ease' : this.timingFunction;
    this.duration = this.duration === undefined ? '.5s' : this.duration;
    console.log(this.timingFunction);
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'all ' + this.duration + ' ' + this.timingFunction + ' 0s');
    this.canLazyLoad() ? this.lazyLoadImage() : this.animateOnScroll();

    // this.el.nativeElement
  }


  private canLazyLoad() {
    return window && 'IntersectionObserver' in window;
  }

  private lazyLoadImage() {
    this.obs = new IntersectionObserver(entries => {

      entries.forEach((entry: IntersectionObserverEntry) => {

        if (this.checkIfIntersecting(entry)) {
          this.animateOnScroll();
          this.obs.unobserve(this.el.nativeElement);
        }
      });
      // }, {root : this.dom === undefined ? null : this.dom });
    }, {});
    this.obs.observe(this.el.nativeElement);
  }

  private checkIfIntersecting (entry: IntersectionObserverEntry) {
    // console.log('===entry===')
    // console.log(entry.target)
    // console.log(this._elementRef.nativeElement)
    return (<any>entry).isIntersecting && entry.target === this.el.nativeElement;
  }

  private animateOnScroll() {
    if ( this.animateClass !== undefined ) {
      this.renderer.addClass(this.el.nativeElement, this.animateClass);
    } else {
      this.renderer.setStyle(this.el.nativeElement, this.animateObject.property, this.animateObject.value);
    }

  }
}
