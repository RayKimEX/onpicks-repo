import { Injectable } from '@angular/core';
import {of} from 'rxjs';
import {Router} from '@angular/router';

@Injectable()
export class CartToCheckoutService {


  checkoutList = [];
  totalProductPrice = 0;
  constructor(
    private router: Router
  ) { }

  getCheckoutList() {

    Object.keys(this.checkoutList).forEach( key => {
      this.totalProductPrice += (this.checkoutList[key].price + this.checkoutList[key].discount);
    });
    return of(this.checkoutList);
  }

  getTotalProductPrice() {
    return this.totalProductPrice;
  }

  setCheckoutList(xCheckoutList) {


    this.router.navigate( ['/order/checkout']);
    this.checkoutList = xCheckoutList;
  }
}
