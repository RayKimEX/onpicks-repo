import {Component, OnInit, ChangeDetectionStrategy, Inject} from '@angular/core';
import {IMAGE_HOST} from '../../../core/global-constant/app.config';

@Component({
  selector: 'onpicks-checkout-failure',
  templateUrl: './checkout-failure.component.html',
  styleUrls: ['./checkout-failure.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckoutFailureComponent implements OnInit {

  constructor(
    @Inject(IMAGE_HOST) public imageHost: string,
  ) { }

  ngOnInit() {
  }

}
