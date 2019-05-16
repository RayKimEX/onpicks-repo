import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostBinding,
  Input,
  OnChanges,
  Renderer2, SimpleChanges
} from '@angular/core';
import {fromEvent} from 'rxjs';

@Directive({
  selector: '[drLazyLoad]'
})

export class LazyLoadDirective implements AfterViewInit, OnChanges {

  @HostBinding('attr.src') srcAttr = null;
  @Input() src: string;
  @Input() drLazyLoad: { method: string };
  @Input('relativeOption') relativeOption = true;
  imgLoad$;
  imgAnimation$;
  obs;

  constructor(private el: ElementRef, private renderer: Renderer2) {

  }

  ngOnChanges( changes: SimpleChanges) {
    this.srcAttr = this.src;
  }

  // TODO  : minilist 에서 lazy loading이 안됨.
  // 이유 : ngOnChagnes에서 다 로딩해버림.
  ngAfterViewInit() {
    if ( this.drLazyLoad.method === '' || this.drLazyLoad.method === undefined || this.drLazyLoad.method === 'transition'){
      const backgroundColor = this.renderer.createElement('div');

      this.renderer.addClass(backgroundColor, 'u-img-background');

      if ( this.relativeOption ) {
        this.renderer.setStyle(this.el.nativeElement.parentNode, 'position', 'relative');
      }
      this.renderer.setStyle(this.el.nativeElement.parentNode, 'display', 'inline-block');
      this.renderer.appendChild(this.el.nativeElement.parentNode, backgroundColor);


      this.renderer.addClass(this.el.nativeElement, 'u-img-load-transition');
      this.renderer.addClass(this.el.nativeElement, 'u-opacity-zero');

      this.canLazyLoad() ? this.lazyLoadImage() : this.loadImage();
      this.imgLoad$ = fromEvent(this.el.nativeElement, 'load')
        .subscribe( val => {
        this.renderer.removeChild(this.el.nativeElement.parentNode, backgroundColor);
        this.renderer.removeClass(this.el.nativeElement, 'u-opacity-zero');
        this.imgLoad$.unsubscribe();
      });

      return;
    }

    if ( this.drLazyLoad.method === 'pure-transition' ) {

      this.renderer.addClass(this.el.nativeElement, 'u-img-load-transition');
      this.renderer.addClass(this.el.nativeElement, 'u-opacity-zero');

      this.canLazyLoad() ? this.lazyLoadImage() : this.loadImage();
      this.imgLoad$ = fromEvent(this.el.nativeElement, 'load').subscribe( val => {
        this.renderer.removeClass(this.el.nativeElement, 'u-opacity-zero');
        this.imgLoad$.unsubscribe();
      });

      return;
    }


    if ( this.drLazyLoad.method === 'animation' ) {
      const backgroundColor = this.renderer.createElement('div');

      this.renderer.addClass(backgroundColor, 'u-img-background');

      if ( this.relativeOption ) {
        this.renderer.setStyle(this.el.nativeElement.parentNode, 'position', 'relative');
      }
      this.renderer.setStyle(this.el.nativeElement.parentNode, 'display', 'inline-block');
      this.renderer.appendChild(this.el.nativeElement.parentNode, backgroundColor);



      // this.renderer.addClass(this.el.nativeElement, 'u-opacity-zero');

      this.canLazyLoad() ? this.lazyLoadImage() : this.loadImage();
      this.imgLoad$ = fromEvent(this.el.nativeElement, 'load').subscribe( val => {
        this.renderer.removeChild(this.el.nativeElement.parentNode, backgroundColor);
        this.renderer.addClass(this.el.nativeElement, 'u-fade-in');
        this.imgLoad$.unsubscribe();
      });
      this.imgAnimation$ = fromEvent(this.el.nativeElement, 'animationend').subscribe( val => {
        this.renderer.removeClass(this.el.nativeElement, 'u-fade-in');
        this.imgAnimation$.unsubscribe();
      });

      return;
    }
  }

  private canLazyLoad() {
    return window && 'IntersectionObserver' in window;
  }

  private lazyLoadImage() {
    this.obs = new IntersectionObserver(entries => {

      entries.forEach((entry: IntersectionObserverEntry) => {

        if (this.checkIfIntersecting(entry)) {
          this.loadImage();
          this.obs.unobserve(this.el.nativeElement);
        }
      });
    // }, {root : this.dom === undefined ? null : this.dom });
     }, {});
    this.obs.observe(this.el.nativeElement);
  }

  private checkIfIntersecting (entry: IntersectionObserverEntry) {

    return (<any>entry).isIntersecting && entry.target === this.el.nativeElement;
  }

  private loadImage() {
    this.srcAttr = this.src;
  }
}
