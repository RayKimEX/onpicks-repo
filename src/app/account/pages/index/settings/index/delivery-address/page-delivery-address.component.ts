import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';

@Component({
  selector: 'onpicks-delivery-address',
  templateUrl: './page-delivery-address.component.html',
  styleUrls: ['./page-delivery-address.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush
})

export class PageDeliveryAddressComponent implements OnInit, OnDestroy{

  userStore$;
  userStore;
  contentHeight = '';

  constructor(
    private store: Store<any>,
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

   ngOnDestroy() {
     this.userStore$.unsubscribe();
   }
}
