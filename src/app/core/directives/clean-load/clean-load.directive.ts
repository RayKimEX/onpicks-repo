import {AfterViewInit, Directive, ElementRef, HostBinding, Input, OnDestroy, Renderer2} from '@angular/core';
import {fromEvent} from 'rxjs';

@Directive({
  selector: '[drCleanLoad]'
})
export class CleanLoadDirective implements AfterViewInit, OnDestroy {

  imgLoad$;
  imgTransition$;

  constructor(
    private el: ElementRef, private renderer: Renderer2
  ) { }

  ngOnDestroy() {
    this.imgLoad$.unsubscribe();
    this.imgTransition$.unsubscribe();
  }
  ngAfterViewInit() {


    const backgroundColor = this.renderer.createElement('div');

    this.renderer.addClass(backgroundColor, 'u-img-background');

    this.renderer.setStyle(this.el.nativeElement.parentNode, 'position', 'relative');
    this.renderer.setStyle(this.el.nativeElement.parentNode, 'display', 'inline-block');
    this.renderer.appendChild(this.el.nativeElement.parentNode, backgroundColor);


    this.renderer.addClass(this.el.nativeElement, 'u-img-load-transition');
    this.renderer.addClass(this.el.nativeElement, 'u-opacity-zero');

    this.imgLoad$ = fromEvent(this.el.nativeElement, 'load');
    this.imgTransition$ = fromEvent(this.el.nativeElement, 'transitionend');

    this.imgLoad$ = this.imgLoad$.subscribe( val => {
      this.renderer.removeChild(this.el.nativeElement.parentNode, backgroundColor);
      this.renderer.removeClass(this.el.nativeElement, 'u-opacity-zero');
    });

    this.imgTransition$ = this.imgTransition$.subscribe( val => {
      this.renderer.removeClass(this.el.nativeElement, 'u-img-load-transition');

    });
  }

}
