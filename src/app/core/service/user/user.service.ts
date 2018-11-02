import {Inject, Injectable} from '@angular/core';
import {DOMAIN_HOST} from '../../../app.config';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    @Inject(DOMAIN_HOST) private BASE_URL: string,
    private httpClient: HttpClient
  ) { }

  getUserInfo() {
    return this.httpClient.get<any>(this.BASE_URL + '/api/accounts/login/');
  }
}
