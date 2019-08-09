import {
  Inject,
  Injectable
} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DOMAIN_HOST} from '../../../global-constant/app.config';
import {CATEGORY_CODE_MAP} from '../../../global-constant/app.category-database-long';

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
    const param = xParam === null ?  '?page_size=36' : xParam + '&page_size=36';
    return this.httpClient.get<any>( this.BASE_URL + '/api/products/search/' + param);
  }

  categorySearch(xCategoryCode, xSortCode, xCurrentPage, xParam ) {
    const param = xParam;

    return this.httpClient.get<any>(
      this.BASE_URL + '/api/products/search/?category=' + xCategoryCode
      + param
      + '&ordering=' + xSortCode + '&page=' + xCurrentPage + '&page_size=36');
  }

  getChildrenCategory(categoryCode) {
    return this.httpClient.get<any>( this.BASE_URL + '/api/categories/' + this.CATEGORY_CODE_MAP_CONST[categoryCode].code + '/children/' );
  }

}
