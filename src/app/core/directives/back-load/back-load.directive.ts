import {
  AfterViewInit,
  Directive,
  ElementRef,
  EventEmitter,
  Output} from '@angular/core';
import {Observable, of} from 'rxjs';

@Directive({
  selector: '[drBackLoad]'
})
export class BackLoadDirective implements AfterViewInit {
  @Output() drBackLoad: EventEmitter<boolean> = new EventEmitter<boolean>(true);

  constructor(private el: ElementRef) {

  }

  ngAfterViewInit() {
    of(window.getComputedStyle(this.el.nativeElement).backgroundImage).subscribe(style => {
      if (style) {
        this.drBackLoad.emit(true);
      }
    });
  }

}
