import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {catchError, map, tap} from 'rxjs/operators';
import {of} from 'rxjs';
import {OrderDataService} from '../../../../../../core/service/data-pages/order/order-data.service';

@Component({
  selector: 'onpicks-delivery-address',
  templateUrl: './page-delivery-address.component.html',
  styleUrls: ['./page-delivery-address.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush
})

export class PageDeliveryAddressComponent implements OnInit{

  userStore$;
  userStore;

  deliveryData$;

  contentHeight = '';
  constructor(
    private store: Store<any>,
    private orderDataService: OrderDataService,
  ) {
    this.userStore$ = this.store.pipe( select( state => state.auth.user))
      .subscribe( v => {
        this.userStore = v;
        if ( v ===  null ) { return; }
      });
  }

  ngOnInit() {
    this.contentHeight = (window.screen.height - 400) < 300 ? '' : (window.screen.height - 400) + 'px';
  }
}
