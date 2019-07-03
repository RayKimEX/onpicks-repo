import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  Renderer2, SimpleChanges,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'onpicks-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})
export class SearchBoxComponent implements OnInit, AfterViewInit {
  @Input('placeholder') placeHolder;
  @Input('top') top;
  @Input('isMobile') isMobile = false;
  @Output('enter') enterEvent = new EventEmitter<any>();
  @Output('keypress') keypress = new EventEmitter<any>();
  @Output('deleteText') deleteEvent = new EventEmitter();
  @ViewChild('searchInputBox') searchInputBox;
  @ViewChild('inputTag') inputTag;

  insertedValue;

  constructor(
    private renderer: Renderer2
  ) {

  }

  ngOnInit() {
    this.insertedValue = '';
  }


  ngAfterViewInit() {

    this.renderer.setAttribute( this.inputTag.nativeElement, 'placeholder', this.placeHolder );
    this.renderer.setStyle( this.searchInputBox.nativeElement, 'top', this.top + 'rem' );
  }


  deleteText() {

    this.insertedValue = '';
    this.renderer.setProperty( this.inputTag.nativeElement, 'value', '');
    // TODO : 이 부분을 NgRX를 사용하여 깔끔하게 바꿀 여지가 있는지? ( event dispatcher 사용하지 않고 )
    // TODO : Security Issue 체크 https://github.com/mgechev/angular-seed/issues/1881
    this.searchInputBox.nativeElement.dispatchEvent(new Event('input'));
    this.deleteEvent.emit();
  }

  keypressEvent(event) {
    if ( event.key === 'Enter' ) {
      console.log('hello');
      this.enterEvent.emit(this.inputTag.nativeElement.value);
    }
  }

}
