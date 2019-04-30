import {Component, OnInit, ChangeDetectionStrategy, Inject} from '@angular/core';
import {REGION_ID} from '../../../core/global-constant/app.config';

@Component({
  selector: 'onpicks-checkout-us',
  templateUrl: './checkout-us.component.html',
  styleUrls: ['./checkout-us.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckoutUsComponent implements OnInit {

  constructor(

  ) { }

  ngOnInit() {
  }

}
