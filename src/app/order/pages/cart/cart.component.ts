import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  Renderer2
} from '@angular/core';
import { select, Store } from '@ngrx/store';
import { shareReplay } from 'rxjs/operators';
import { LOCATION_MAP } from '../../../app.config';
import { TryDeleteFromCart } from '../../../core/store/cart/cart.actions';

@Component({
  selector: 'onpicks-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})
export class CartComponent {

  cartStore$;


  constructor(

    @Inject( LOCATION_MAP ) public locationMap: any,
    private renderer: Renderer2,
    private store: Store<any>

  ) {

    this.cartStore$ = this.store.pipe(
      select( state => state.cart.cartInfo ),
      shareReplay(1));

  }

  deleteCart(xProductSlug) {

    this.store.dispatch(new TryDeleteFromCart({ productSlug : xProductSlug}));

  }

  toggleWishList(item) {

    if ( item.style.display === 'block') {
      this.renderer.setStyle(item, 'display', 'none');
    } else {
      this.renderer.setStyle(item, 'display', 'block');
    }

  }

}
