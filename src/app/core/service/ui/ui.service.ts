import {Inject, Injectable} from '@angular/core';
import {DOMAIN_HOST} from '../../global-constant/app.config';
import {of} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {CATEGORY_MAP} from '../../global-constant/app.category-database-long';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  constructor(
    @Inject(DOMAIN_HOST) private BASE_URL: string,
    @Inject(CATEGORY_MAP) private CATEGORY_MAP_CONST,
    private httpClient: HttpClient,

  ) {

  }

  getWeeklyBestGoods() {
    return this.httpClient.get<any>(this.BASE_URL + '/api/home/weekly_best/');
  }

  getPopularBrands(category = '') {
    const params = new HttpParams().set('category', category);
    return this.httpClient.get<any>( this.BASE_URL + '/api/home/popular_brands/', { params });
  }

  getRecentlyViewed() {
    return this.httpClient.get<any>(this.BASE_URL + '/api/home/recently_viewed/');
  }

  getValueList() {
    const params = new HttpParams().set('ordering', 'random');
    return this.httpClient.get<any>(this.BASE_URL + '/api/values/', { params });
  }

  getCategoryAll(oneDepthCode) {

    // return this.httpClient.get<any>(this.BASE_URL + '/api/categories/' + oneDepthCode + '/descendants/' );
    return of(this.CATEGORY_MAP_CONST[oneDepthCode]);
  }

  postLanguageSetting(xLanguageCode) {
    // ko = 한국어
    // en = 영어

    // us = 미국
    // kr = 한국
    return this.httpClient.post<any>( this.BASE_URL + '/api/preferences/language/', { language : xLanguageCode } );
  }
}
