import {AfterViewInit, Component, Input, OnInit, Renderer2, ViewChild} from '@angular/core';
import {fromEvent} from 'rxjs';

@Component({
  selector: 'onpicks-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit, AfterViewInit {
  @Input('placeholder') placeHolder;
  @Input('width') width;
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

  }


  deleteText() {
    this.insertedValue = '';
    this.renderer.setProperty( this.inputTag.nativeElement, 'value', '');
  }

}
