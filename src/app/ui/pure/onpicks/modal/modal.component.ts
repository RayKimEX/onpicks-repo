import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter, HostListener,
  Input,
  OnChanges,
  OnInit,
  Output, Renderer2,
  SimpleChanges,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'onpicks-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalComponent implements OnInit, OnChanges {
  @Input('isShow') isShow = false;
  @Output('exit') exitEvent = new EventEmitter();


  constructor(
    private renderer: Renderer2,
  ) {

  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges){
    console.log(changes);
    if ( changes.isShow.currentValue === true ) {
      this.renderer.addClass(document.body , 'u-open-modal');
    } else {
      this.renderer.removeClass(document.body, 'u-open-modal');
    }
  }

  @HostListener('document:keydown.escape', ['$event'])
  onKeydownHandler(event: KeyboardEvent) {

    // &&  this.communicateBox.nativeElement.style.display !== 'none'
    if ( event.key === 'Escape' ) {
      this.exitEvent.emit();
    }
  }

}
