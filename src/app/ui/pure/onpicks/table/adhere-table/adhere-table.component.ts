import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'onpicks-adhere-table',
  templateUrl: './adhere-table.component.html',
  styleUrls: ['./adhere-table.component.scss']
})
export class AdhereTableComponent implements OnInit {
  @Input('type') type;

  constructor() { }

  ngOnInit() {
  }

}
