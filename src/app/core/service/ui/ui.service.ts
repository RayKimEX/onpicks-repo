import {Inject, Injectable} from '@angular/core';
import {DOMAIN_HOST} from '../../../app.config';
import {HttpClient} from '../../../../../node_modules/@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  constructor(
    @Inject(DOMAIN_HOST) private BASE_URL: string,
    private httpClient: HttpClient
  ) {

  }

  getCategoryAll(oneDepthCode) {
    return this.httpClient.get<any>(this.BASE_URL + '/api/categories/' + oneDepthCode + '/descendants/' );
  }

  postLanguageSetting() {
    return this.httpClient.post<any>( this.BASE_URL + '/api/preferences/language/', { language : 'ko'} );
  }
}
