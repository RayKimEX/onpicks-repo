
// Angular
import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

// Constant
import {DOMAIN_HOST} from '../../global-constant/app.config';
import {CATEGORY_MAP} from '../../global-constant/app.category-database-long';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  constructor(
    @Inject(DOMAIN_HOST) private BASE_URL: string,
    @Inject(CATEGORY_MAP) private CATEGORY_MAP_CONST,
    private httpClient: HttpClient,
  ) { }

  getWeeklyBestGoods() {
    return this.httpClient.get<any>(this.BASE_URL + '/api/home/weekly_best/');
  }

  getAlsoViewedGoods(xProductSlug) {
    return this.httpClient.get<any>(this.BASE_URL + '/api/products/' + xProductSlug + '/also_viewed/');
  }

  getPopularBrands(category = '') {
    const params = new HttpParams().set('category', category);
    return this.httpClient.get<any>( this.BASE_URL + '/api/home/popular_brands/', { params });
  }

  getTrendingReviews() {
    return this.httpClient.get<any>(this.BASE_URL + '/api/home/trending_reviews/?size=10');
  }

  getRecentlyViewed() {
    return this.httpClient.get<any>(this.BASE_URL + '/api/home/recently_viewed/');
  }

  getValueList() {
    const params = new HttpParams().set('ordering', 'random');
    return this.httpClient.get<any>(this.BASE_URL + '/api/values/', { params });
  }

  getCategoryAll(oneDepthCode) {
    return of(this.CATEGORY_MAP_CONST[oneDepthCode]);
  }
}
