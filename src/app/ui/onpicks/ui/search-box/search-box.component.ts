import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  Renderer2,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'onpicks-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit, AfterViewInit {
  @Input('placeholder') placeHolder;
  @Input('width') width;
  @Input('top') top;
  @ViewChild('searchInputBox') searchInputBox;
  @ViewChild('inputTag') inputTag;

  insertedValue;

  constructor(private renderer: Renderer2 ) { }

  ngOnInit() {
    this.insertedValue = '';
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

}
