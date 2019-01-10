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

  getMyWrittenReviews(){
    return this.httpClient.get<any>( this.BASE_URL + '/api/customers//my_reviews/');
  }

  getOrdersData() {
    return this.httpClient.get<any>( this.BASE_URL + '/api/orders/');
  }

  getOrdersNotReviewedData() {
    return this.httpClient.get<any>( this.BASE_URL + '/api/orders/?filter=not_reviewed');
  }

  getOrdersDetailData(orderId) {
    return this.httpClient.get<any>( this.BASE_URL + '/api/orders/' + orderId + '/');
  }

  saveProfileData(userId, data) {
    return this.httpClient.put<any>( this.BASE_URL + '/api/customers/' + userId + '/', data);
  }

  getProfileData(userId) {
    return this.httpClient.get<any>( this.BASE_URL + '/api/customers/' + userId + '/');
  }

  uploadReviewImage( xProductSlug, xReviewId, xFile ) {

    const formData: FormData = new FormData();
    formData.append('file', xFile, xFile.name );
    return this.httpClient.post<any>(
      this.BASE_URL + '/api/products/' + xProductSlug + '/reviews/' + xReviewId + '/pictures/', formData);
  }

  getPendingReviewData( xProductSlug, xReviewId ) {

    return this.httpClient.get<any>(
      this.BASE_URL + '/api/products/' + xProductSlug + '/reviews/' + xReviewId + '/');
  }


  createReviewData( xProductSlug, orderId ) {
    return this.httpClient.post<any>(
      this.BASE_URL + '/api/products/' + xProductSlug + '/reviews/', {order : orderId});
  }

  publishReviewData( xProductSlug, xReviewId, xRating, xText ) {
    return this.httpClient.patch<any>(
      this.BASE_URL + '/api/products/' + xProductSlug + '/reviews/' + xReviewId + '/', { rating : xRating, text : xText }
    );
  }

  changePasswordData( xPassword ) {
    return this.httpClient.post<any>(
      this.BASE_URL + '/api/customers/change_password/', {password : xPassword});
  }
}
