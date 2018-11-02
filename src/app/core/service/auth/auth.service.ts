import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '../../../../../node_modules/@angular/common/http';
import {Observable} from 'rxjs';
import {DOMAIN_HOST} from '../../../app.config';
import {UserSignUpAPI} from '../../store/user/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    @Inject(DOMAIN_HOST) private BASE_URL: string,
    private httpClient: HttpClient
  ) { }

  login(email: string, password: string): Observable<any> {
    return this.httpClient.post<any>(this.BASE_URL + '/api/customers/login/', { email : email, password : password});
  }

  logout(): Observable<any> {
    return this.httpClient.post<any>(this.BASE_URL + '/api/customers/logout/', {});
  }

  signup(parameters: UserSignUpAPI): Observable<any> {
    console.log('signup!!');
    console.log(parameters);
    return this.httpClient.post<any>(this.BASE_URL + '/api/customers/register/', parameters);
  }

  getAuthUser(): Observable<any> {
    return this.httpClient.get<any>(this.BASE_URL + '/api/customers/profile/');
  }
}
