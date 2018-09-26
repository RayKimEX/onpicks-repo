import {AfterViewInit, Directive, ElementRef, EventEmitter, HostBinding, Input, Output, Renderer2} from '@angular/core';
import {fromEvent, Observable} from 'rxjs';

@Directive({
  selector: '[drLazyLoad]'
})
export class LazyLoadDirective implements AfterViewInit {

  @HostBinding('attr.src') srcAttr = null;
  @Input() src: string;
  @Input() drLazyLoad: { method: string };


  constructor(private el: ElementRef, private renderer: Renderer2) {

  }

  ngAfterViewInit() {

    if( this.drLazyLoad.method === '' || this.drLazyLoad.method === undefined || this.drLazyLoad.method === 'transition'){
      const backgroundColor = this.renderer.createElement('div');

      this.renderer.addClass(backgroundColor, 'u-img-background');

      this.renderer.setStyle(this.el.nativeElement.parentNode, 'position', 'relative');
      this.renderer.setStyle(this.el.nativeElement.parentNode, 'display', 'inline-block');
      this.renderer.appendChild(this.el.nativeElement.parentNode, backgroundColor);
      // console.log(temp.width)
      // console.log(this.el.nativeElement);

      this.renderer.addClass(this.el.nativeElement, 'u-img-load-transition');
      this.renderer.addClass(this.el.nativeElement, 'u-opacity-zero');

      this.canLazyLoad() ? this.lazyLoadImage() : this.loadImage();
      const imgLoad$ = fromEvent(this.el.nativeElement, 'load');
      const loadSub = imgLoad$.subscribe( val => {
        this.renderer.removeChild(this.el.nativeElement.parentNode, backgroundColor);
        this.renderer.removeClass(this.el.nativeElement, 'u-opacity-zero');
        loadSub.unsubscribe();
      });

      return;
    }

    if( this.drLazyLoad.method === 'animation' ){
      const backgroundColor = this.renderer.createElement('div');

      this.renderer.addClass(backgroundColor, 'u-img-background');

      this.renderer.setStyle(this.el.nativeElement.parentNode, 'position', 'relative');
      this.renderer.setStyle(this.el.nativeElement.parentNode, 'display', 'inline-block');
      this.renderer.appendChild(this.el.nativeElement.parentNode, backgroundColor);



      // this.renderer.addClass(this.el.nativeElement, 'u-opacity-zero');

      this.canLazyLoad() ? this.lazyLoadImage() : this.loadImage();
      const imgLoad$ = fromEvent(this.el.nativeElement, 'load');
      const imgAnimation$ = fromEvent(this.el.nativeElement, 'animationend');
      const loadSub = imgLoad$.subscribe( val => {
        this.renderer.removeChild(this.el.nativeElement.parentNode, backgroundColor);
        this.renderer.addClass(this.el.nativeElement, 'u-fade-in');
        loadSub.unsubscribe();
    });

      const animationSub = imgAnimation$.subscribe( val => {
        this.renderer.removeClass(this.el.nativeElement, 'u-fade-in');
        animationSub.unsubscribe();
      });
      return;
    }

  }

  private canLazyLoad() {
    return window && 'IntersectionObserver' in window;
  }

  private lazyLoadImage() {
    const obs = new IntersectionObserver(entries => {

      entries.forEach((entry: IntersectionObserverEntry) => {


        if (this.checkIfIntersecting(entry)) {
          this.loadImage();
          obs.unobserve(this.el.nativeElement);
        }
      });
    }, {});
    obs.observe(this.el.nativeElement);
  }

  private checkIfIntersecting (entry: IntersectionObserverEntry) {
    // console.log('===entry===')
    // console.log(entry.target)
    // console.log(this._elementRef.nativeElement)
    return (<any>entry).isIntersecting && entry.target === this.el.nativeElement;
  }

  private loadImage() {
    this.srcAttr = this.src;
    // console.log(this.src);
    // console.log(this.srcAttr);
    // setInterval(() => {
    //   this.srcAttr = this.src;
    //   console.log(this.src);
    //   console.log(this.srcAttr);
    //   setInterval(() => {
    //     this.srcAttr = '!!!!'
    //     console.log(this.src);
    //     console.log(this.srcAttr);
    //   }, 2000);
    // }, 2000);

  //  console.log('interseting');
  }
}


