import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'onpicks-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class WishListComponent implements OnInit {

  wishList$
  wishList;
  constructor(
    private store: Store<any>
  ) {
    this.wishList$ = this.store.pipe( select( state => state.cart.wishList), tap( v => console.log(v)));
  }

  ngOnInit() {
  }

}
