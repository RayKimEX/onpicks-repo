import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DOMAIN_HOST} from '../../../../app.config';

@Injectable({
  providedIn: 'root'
})
export class OrderDataService {

  constructor(
    @Inject(DOMAIN_HOST) private BASE_URL: string,
    private httpClient: HttpClient,
  ) {

  }

  getCheckoutData() {
    return this.httpClient.get<{}>( this.BASE_URL + '/api/cart/checkout/');
  }

  getDeliveryData(userId) {
    return this.httpClient.get<{}>( this.BASE_URL + '/api/customers/' + userId + '/address_book/');
  }

  addDeliveryData(userId, data) {
    return this.httpClient.post<any>( this.BASE_URL + '/api/customers/' + userId + '/address_book/',
      data);
  }

  deleteDeliveryData( userId, deliveryIndex) {
    return this.httpClient.delete<any>( this.BASE_URL + '/api/customers/' + userId + '/address_book/' + deliveryIndex);
  }

  updateDeliveryDataToDefault(userId, deliveryIndex) {
    return this.httpClient.put<any>( this.BASE_URL + '/api/customers/' + userId + '/address_book/' + deliveryIndex + '/default/', {} );
  }

  updateDeliveryData( userId, deliveryIndex, data ) {
    return this.httpClient.put<any>( this.BASE_URL + '/api/customers/' + userId + '/address_book/' + deliveryIndex + '/', data);
  }
}
