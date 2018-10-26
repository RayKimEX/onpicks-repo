import {AfterViewInit, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'onpicks-numeric-button',
  templateUrl: './numeric-button.component.html',
  styleUrls: ['./numeric-button.component.scss']
})
export class NumericButtonComponent implements OnInit, AfterViewInit {
  @Input('type') type;
  @Input('active') active;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {

  }
}
