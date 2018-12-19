import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CATEGORY_MAP, DOMAIN_HOST} from '../../../../app.config';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(

    @Inject(DOMAIN_HOST) private BASE_URL: string,
    @Inject(CATEGORY_MAP) private CATEGORY_MAP_CONST: string,
    private httpClient: HttpClient,

  ) {

  }

  search(param) {
    return this.httpClient.get<any>( this.BASE_URL + '/api/products/search/' + param);
  }

  getChildrenCategory(categoryCode) {
    console.log('getChildrenCategory');
    return this.httpClient.get<any>( this.BASE_URL + '/api/categories/' + this.CATEGORY_MAP_CONST[categoryCode] + '/children/' );
  }

}
