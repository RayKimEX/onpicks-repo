import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'onpicks-floating-checkout',
  templateUrl: './floating-checkout.component.html',
  styleUrls: ['./floating-checkout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FloatingCheckoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
