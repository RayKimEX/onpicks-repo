import {Inject, Injectable} from '@angular/core';
import {DOMAIN_HOST} from '../../../../app.config';
import {HttpClient} from '../../../../../../node_modules/@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountDataService {

  constructor(
    @Inject(DOMAIN_HOST) private BASE_URL: string,
    private httpClient: HttpClient,
  ) {

  }


  getDeliveryData(userId) {
    return this.httpClient.get<any>( this.BASE_URL + '/api/customers/' + userId + '/address_book/' );
  }

  getOrdersData() {
    return this.httpClient.get<any>( this.BASE_URL + '/api/orders/');
  }

  getOrdersData(orderId) {
    return this.httpClient.get<any>( this.BASE_URL + '/api/orders/' + orderId + '/');
  }

  saveProfileData(userId, data) {
    return this.httpClient.put<any>( this.BASE_URL + '/api/customers/' + userId + '/', data);
  }

  getProfileData(userId) {
    return this.httpClient.get<any>( this.BASE_URL + '/api/customers/' + userId + '/');
  }
}
