import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, Input, LOCALE_ID, OnInit} from '@angular/core';
import {LOCATION_MAP} from '../../../../../app.config';

@Component({
  selector: 'onpicks-free-delivery-notibox',
  templateUrl: './free-delivery-notibox.component.html',
  styleUrls: ['./free-delivery-notibox.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})
export class FreeDeliveryNotiboxComponent implements OnInit {
  @Input() set setCartInfo(_cartInfo) {

    this.cartInfo = _cartInfo;
    if ( _cartInfo == null ) { return; };
    this.cartInfo = _cartInfo.cartInfo.pack;
    console.log(this.cartInfo);
  }

  cartInfo = null;

  constructor(
    @Inject(LOCATION_MAP) public locationMap: any,
  ) {

  }

  ngOnInit() {
  }

}
