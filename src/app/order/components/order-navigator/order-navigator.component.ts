import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot} from '@angular/router';

@Component({
  selector: 'onpicks-order-navigator',
  templateUrl: './order-navigator.component.html',
  styleUrls: ['./order-navigator.component.scss']
})
export class OrderNavigatorComponent implements OnInit {

  constructor(public routeSnapshot: ActivatedRoute) { }

  ngOnInit() {

  }

}
