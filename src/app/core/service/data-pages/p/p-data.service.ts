import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DOMAIN_HOST} from '../../../global-constant/app.config';

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
  getReviewsData(productId, xSorting) {

    let requestUrl = '';
    if (xSorting === 'all') {
      requestUrl = '/api/products/' + productId + '/reviews/';
    } else {
      requestUrl = '/api/products/' + productId + '/reviews/?period=' + xSorting;
    }

    console.log(xSorting);

    return this.httpClient.get<any>( this.BASE_URL + requestUrl);
  }

  getCommentsData(productId, reviewsId) {
    return this.httpClient.get<any>( this.BASE_URL + '/api/products/' + productId + '/reviews/' + reviewsId + '/comments/');
  }

  addCommentsData(productId, reviewsId, addedText) {
    return this.httpClient.post<any>( this.BASE_URL + '/api/products/' + productId + '/reviews/' + reviewsId + '/comments/', { text : addedText });
  }

  getPictureReviewsData( productId ) {
    // api/products/{{slug}}/picture_reviews/
    return this.httpClient.get<any>( this.BASE_URL + '/api/products/' + productId + '/picture_reviews/');
  }

  voteReviewsData( productSlug, reviewsId) {
    return this.httpClient.post<any>( this.BASE_URL + '/api/products/' + productSlug + '/reviews/' + reviewsId + '/vote/', {});
  }

  unvoteReviewsData( productSlug, reviewsId) {
    return this.httpClient.post<any>( this.BASE_URL + '/api/products/' + productSlug + '/reviews/' + reviewsId + '/unvote/', {});
  }

//   [POST] api/products/[ slug] /reviews/ [ id ] / report
//
// { text : "" }

  reportReviewData( xProductSlug, xReviewId, xReportReason) {
    return this.httpClient.post<any>( this.BASE_URL + '/api/products/' + xProductSlug + '/reviews/' + xReviewId + '/report/', { reason : xReportReason });
  }

}
