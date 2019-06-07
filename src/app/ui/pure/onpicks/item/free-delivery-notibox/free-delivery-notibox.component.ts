import {ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Inject, Input, LOCALE_ID, OnInit, Output} from '@angular/core';
import {CURRENCY, LOCATION_MAP} from '../../../../../core/global-constant/app.config';
import {BehaviorSubject} from 'rxjs';
import {Router} from '@angular/router';

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

  @Output() goCartEvent = new EventEmitter();

  cartInfo = null;
  totalItems = 0;

  constructor(
    @Inject(CURRENCY) public currency: BehaviorSubject<any>,
    @Inject(LOCATION_MAP) public locationMap: any,
    @Inject( LOCALE_ID ) public locale: string,
    private router: Router
  ) {

  }

  ngOnInit() {
  }


  goCart() {
    this.goCartEvent.emit();
    this.router.navigate(['/order/cart']);
  }
}
