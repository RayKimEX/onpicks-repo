import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '../../../../../node_modules/@angular/common/http';
import {Observable} from 'rxjs';
import {DOMAIN_HOST} from '../../../app.config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    @Inject(DOMAIN_HOST) private BASE_URL: string,
    private httpClient: HttpClient
  ) { }

  login(email: string, password: string): Observable<any> {
    return this.httpClient.post<any>(
      this.BASE_URL + '/api/accounts/login/',
      { email : email, password : password},
      // { email : 'dev@mojostudio.io', password : 'mojostudio0!'},
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
        // withCredentials: true
      }
    );
  }

  logout(): Observable<any> {
    return this.httpClient.post<any>(this.BASE_URL + '/api/accounts/logout/', {});
  }

  signup() {

  }

  getAuthUser(): Observable<any> {
    return this.httpClient.get<any>(this.BASE_URL + '/api/customers/profile/');
  }
}
