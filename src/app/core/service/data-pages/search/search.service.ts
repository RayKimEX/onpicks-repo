import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DOMAIN_HOST} from '../../../../app.config';
import {CATEGORY_CODE_MAP} from '../../../../app.database';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
    @Inject(DOMAIN_HOST) private BASE_URL: string,
    @Inject(CATEGORY_CODE_MAP) private CATEGORY_CODE_MAP_CONST,
    private httpClient: HttpClient,
  ) {

  }

  search(xParam) {
    return this.httpClient.get<any>( this.BASE_URL + '/api/products/search/' + xParam + '&page_size=36');
  }

  categorySearch(xCategoryCode, xSortCode, xCurrentPage) {
    return this.httpClient.get<any>( this.BASE_URL + '/api/products/search/?category=' + xCategoryCode + '&ordering=' + xSortCode + '&page=' + xCurrentPage + '&page_size=36');
  }

  getChildrenCategory(categoryCode) {
    return this.httpClient.get<any>( this.BASE_URL + '/api/categories/' + this.CATEGORY_CODE_MAP_CONST[categoryCode].code + '/children/' );
  }

}
