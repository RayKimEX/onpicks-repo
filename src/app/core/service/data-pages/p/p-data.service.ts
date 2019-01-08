import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DOMAIN_HOST} from '../../../../app.config';
import {ActivatedRoute, ActivatedRouteSnapshot} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PDataService {

  constructor(
    @Inject(DOMAIN_HOST) private BASE_URL: string,
    private httpClient: HttpClient,
  ) {  }

  // login(email: string, password: string, isPersistent: boolean): Observable<any> {
  //   return this.httpClient.post<any>(this.BASE_URL + '/api/customers/login/', { email : email, password : password, is_persistent : isPersistent});
  // }

  getPageData(id) {
    return this.httpClient.get<any>( this.BASE_URL + '/api/products/' + id + '/');
  }

  // 왠만하면 끝에 슬래쉬 붙임.
  getReviewsData(productId) {
    return this.httpClient.get<any>( this.BASE_URL + '/api/products/' + productId + '/reviews/');
  }

  getCommentsData(productId, reviewsId) {
    return this.httpClient.get<any>( this.BASE_URL + '/api/products/' + productId + '/reviews/' + reviewsId + '/comments/');
  }

  addCommentsData(productId, reviewsId, addedText) {
    return this.httpClient.post<any>( this.BASE_URL + '/api/products/' + productId + '/reviews/' + reviewsId + '/comments/', { text : addedText });
  }

  getPictureReviewsData( productId ){
    // api/products/{{slug}}/picture_reviews/
    console.log(productId);
    return this.httpClient.get<any>( this.BASE_URL + '/api/products/' + productId + '/picture_reviews/');
  }

}
