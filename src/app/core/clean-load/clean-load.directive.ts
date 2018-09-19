import {AfterViewInit, Directive, ElementRef, HostBinding, Input, Renderer2} from '@angular/core';
import {fromEvent} from 'rxjs';

@Directive({
  selector: '[drCleanLoad]'
})
export class CleanLoadDirective implements AfterViewInit {


  constructor(private el: ElementRef, private renderer: Renderer2) {

  }

  ngAfterViewInit() {


    const backgroundColor = this.renderer.createElement('div');

    this.renderer.addClass(backgroundColor, 'u-img-background');

    this.renderer.setStyle(this.el.nativeElement.parentNode, 'position', 'relative');
    this.renderer.setStyle(this.el.nativeElement.parentNode, 'display', 'inline-block');
    this.renderer.appendChild(this.el.nativeElement.parentNode, backgroundColor);
    // console.log(temp.width)
    // console.log(this.el.nativeElement);

    this.renderer.addClass(this.el.nativeElement, 'u-img-load-transition');
    this.renderer.addClass(this.el.nativeElement, 'u-opacity-zero');

    const imgLoad$ = fromEvent(this.el.nativeElement, 'load');
    const imgTransition$ = fromEvent(this.el.nativeElement, 'transitionend');
    imgLoad$.subscribe( val => {
      this.renderer.removeChild(this.el.nativeElement.parentNode, backgroundColor);
      this.renderer.removeClass(this.el.nativeElement, 'u-opacity-zero');
    });

    imgTransition$.subscribe( val => {
      this.renderer.removeClass(this.el.nativeElement, 'u-img-load-transition');

    });
  }

}
