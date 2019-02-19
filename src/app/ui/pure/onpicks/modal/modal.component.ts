import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  EventEmitter, HostListener,
  Input,
  OnChanges, OnDestroy,
  OnInit,
  Output, Renderer2,
  SimpleChanges, ViewChild,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'onpicks-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ModalComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
  @Input('isShow') set _isShow(xIsShow) {
    if(xIsShow === null) { return; }
    this.popupState = false;
    this.isShow = xIsShow;
    console.log(this.isShow);
    if(this.isShow === true ){
      this.renderer.addClass(document.body , 'u-open-modal');
      // 검은색 부분을 눌러을 때, 꼬이는것을 방지하기 위해 추가

      setTimeout( () => {
        this.popupState = true;
      }, 0);
    } else {
      this.renderer.removeClass(document.body, 'u-open-modal');
      console.log('@@@@@@@@@@@@@@@@remove modal 1');
    }
  }
  @Output('exit') exitEvent = new EventEmitter();
  @ViewChild('modal') modal;

  // 검은색 부분을 눌러을 때, 꼬이는것을 방지하기 위해 추가
  popupState = false;
  isShow = false;
  constructor(
    private renderer: Renderer2,
  ) {

  }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges) {
    this.popupState = false;
    if ( changes.isShow.currentValue === true ) {

    } else {

    }
  }

  @HostListener('document:keydown.escape', ['$event'])
  onKeydownHandler(event: KeyboardEvent) {
    // &&  this.communicateBox.nativeElement.style.display !== 'none'
    if ( event.key === 'Escape' ) {
      this.exitEvent.emit();
    }
  }

  ngAfterViewInit(){

  }

  ngOnDestroy() {
    this.popupState = false;
  }


  @HostListener('document:click', ['$event'])
  clickout(event) {
    if ( this.popupState === true) {
      if (this.modal.nativeElement.contains(event.target)) {

      } else {
        this.exitEvent.emit();
      }
    }
  }
}
