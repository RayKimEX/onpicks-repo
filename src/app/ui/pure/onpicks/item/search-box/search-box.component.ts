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
export class SearchBoxComponent implements OnInit, AfterViewInit, OnChanges {
  @Input('placeholder') placeHolder;
  @Input('width') width;
  @Input('top') top;
  @Output('enter') enterEvent = new EventEmitter<any>();
  @Output('keypress') keypress = new EventEmitter<any>();
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

  ngOnChanges(changes: SimpleChanges) {
    this.renderer.setAttribute( this.inputTag.nativeElement, 'placeholder', this.placeHolder );
    this.renderer.setStyle( this.inputTag.nativeElement, 'width', ( this.width - 9.6 ) + 'rem' );
    this.renderer.setStyle( this.searchInputBox.nativeElement, 'width', this.width + 'rem' );
    this.renderer.setStyle( this.searchInputBox.nativeElement, 'top', this.top + 'rem' );
  }

  ngAfterViewInit() {

    this.renderer.setAttribute( this.inputTag.nativeElement, 'placeholder', this.placeHolder );
    this.renderer.setStyle( this.inputTag.nativeElement, 'width', ( this.width - 9.6 ) + 'rem' );
    this.renderer.setStyle( this.searchInputBox.nativeElement, 'width', this.width + 'rem' );
    this.renderer.setStyle( this.searchInputBox.nativeElement, 'top', this.top + 'rem' );
  }


  deleteText() {

    this.insertedValue = '';
    this.renderer.setProperty( this.inputTag.nativeElement, 'value', '');
    // TODO : 이 부분을 NgRX를 사용하여 깔끔하게 바꿀 여지가 있는지? ( event dispatcher 사용하지 않고 )
    // TODO : Security Issue 체크 https://github.com/mgechev/angular-seed/issues/1881
    this.searchInputBox.nativeElement.dispatchEvent(new Event('input'));
  }

  keypressEvent(event) {
    if ( event.code === 'Enter' ){
      this.enterEvent.emit(this.inputTag.nativeElement.value);
    }
  }

}
