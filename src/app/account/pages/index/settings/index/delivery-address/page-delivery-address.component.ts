import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'onpicks-delivery-address',
  templateUrl: './page-delivery-address.component.html',
  styleUrls: ['./page-delivery-address.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush
})

export class PageDeliveryAddressComponent {

  constructor(
  ) {
  }
}
