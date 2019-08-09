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

    return this.httpClient.get<any>( this.BASE_URL + requestUrl);
  }

  getCommentsData(productId, reviewsId) {
    return this.httpClient.get<any>( this.BASE_URL + '/api/products/' + productId + '/reviews/' + reviewsId + '/comments/');
  }

  addCommentsData(productId, reviewsId, addedText) {
    return this.httpClient.post<any>( this.BASE_URL + '/api/products/' + productId + '/reviews/' + reviewsId + '/comments/', { text : addedText });
  }

  getPictureReviewsData( productId ) {
    return this.httpClient.get<any>( this.BASE_URL + '/api/products/' + productId + '/picture_reviews/');
  }

  voteReviewsData( productSlug, reviewsId) {
    return this.httpClient.post<any>( this.BASE_URL + '/api/products/' + productSlug + '/reviews/' + reviewsId + '/vote/', {});
  }

  unvoteReviewsData( productSlug, reviewsId) {
    return this.httpClient.post<any>( this.BASE_URL + '/api/products/' + productSlug + '/reviews/' + reviewsId + '/unvote/', {});
  }

  reportReviewData( xProductSlug, xReviewId, xReportReason) {
    return this.httpClient.post<any>( this.BASE_URL + '/api/products/' + xProductSlug + '/reviews/' + xReviewId + '/report/', { reason : xReportReason });
  }

}
