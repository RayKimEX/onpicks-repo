import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DOMAIN_HOST} from '../../../../app.config';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
    @Inject(DOMAIN_HOST) private BASE_URL: string,
    private httpClient: HttpClient,
  ) {

  }

  search(v) {
    console.log(v);
    return this.httpClient.get<any>( this.BASE_URL + '/api/products/search/?term=' + v.term);
  }

}
