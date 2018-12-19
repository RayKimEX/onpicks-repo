import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'onpicks-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})
export class OrdersComponent implements OnInit {

  sortList = [
    {
      title : '3개월',
      value : 0
    },
    {
      title : '3개월',
      value : 0
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
