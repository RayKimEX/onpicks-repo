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

    // tap( obj => {
    //   console.log(obj);
    //   obj.cartList
    //   Object.keys(obj).forEach( key => {
    //     this.totalProductPrice += obj[key].sale_price;
    //   });
    //   console.log(obj);
    //
    // }

    Object.keys(this.checkoutList).forEach( key => {
      this.totalProductPrice += this.checkoutList[key].sale_price;
      console.log(this.checkoutList);
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
