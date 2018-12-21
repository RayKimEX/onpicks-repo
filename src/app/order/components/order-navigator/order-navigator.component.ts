import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'onpicks-order-navigator',
  templateUrl: './order-navigator.component.html',
  styleUrls: ['./order-navigator.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})
export class OrderNavigatorComponent implements OnInit {

  constructor(public routeSnapshot: ActivatedRoute) { }

  ngOnInit() {

  }

}
