import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DOMAIN_HOST} from '../../../app.config';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(
    @Inject(DOMAIN_HOST) private BASE_URL: string,
    private httpClient: HttpClient,
  ) {

  }

  getCartInfo() {
    return this.httpClient.get<any>(this.BASE_URL + '/api/cart/');
  }

  createToCart(xProductSlug, xAmount) {
    return this.httpClient.post<any>(this.BASE_URL + '/api/cart/', { product : xProductSlug, quantity: xAmount });
  }

  // addToCart(xCartId, xAmount) {
  //   console.log('addToCart!!')
  //   console.log( 'cartId : ' + xCartId);
  //   console.log( 'amount : ' + xAmount);
  //   const amount = xAmount + 1;
  //   return this.httpClient.post<any>(this.BASE_URL + '/api/cart/' + xCartId + '/', { quantity : amount});
  // }

  // add To Cart와 subtractFromCart는, 똑같음 그냥 의미상의 차이를 위해 이름만 바꿈
  addToCart(xProductSlug, xAmount) {
    return this.httpClient.put<any>(this.BASE_URL + '/api/cart/' + xProductSlug + '/', { quantity : xAmount});
  }

  subtractFromCart(xProductSlug, xAmount) {
    return this.httpClient.put<any>(this.BASE_URL + '/api/cart/' + xProductSlug + '/', { quantity : xAmount});
  }

  deleteFromCart( xProductSlug ) {
    return this.httpClient.delete<any>(this.BASE_URL + '/api/cart/' +  xProductSlug + '/');
  }

  addToWishList( xProductSlug ) {
    return this.httpClient.post<any>( this.BASE_URL + '/api/favorites/', { product : xProductSlug});
  }

  getWishListInfo( ) {
    return this.httpClient.get<any>(this.BASE_URL + '/api/favorites/');
  }

  deleteToWishList( xProductSlug ) {
    return this.httpClient.delete<any>( this.BASE_URL + '/api/favorites/' + xProductSlug + '/');
  }
}

