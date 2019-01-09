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
    console.log(_cartInfo);
    this.totalItems = _cartInfo.total.total_items;
    this.cartInfo = _cartInfo.pack;
  }

  cartInfo = null;
  totalItems = 0;

  constructor(
    @Inject(LOCATION_MAP) public locationMap: any,
  ) {

  }

  ngOnInit() {
  }

}
