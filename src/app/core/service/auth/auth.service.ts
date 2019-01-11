import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {API_URL, DOMAIN_HOST} from '../../../app.config';
import {UserSignUpAPI} from '../../store/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    @Inject(DOMAIN_HOST) private BASE_URL: string,
    private httpClient: HttpClient
  ) {
  }

  login(email: string, password: string, isPersistent: boolean): Observable<any> {
    return this.httpClient.post<any>(this.BASE_URL + '/api/customers/login/', { email : email, password : password, is_persistent : isPersistent});
  }

  logout(): Observable<any> {
    return this.httpClient.post<any>(this.BASE_URL + '/api/customers/logout/', {});
  }

  signup(parameters: UserSignUpAPI): Observable<any> {

    return this.httpClient.post<any>(this.BASE_URL + '/api/customers/', parameters);
  }

  getAuthUser(): Observable<any> {
    return this.httpClient.get<any>(this.BASE_URL + '/api/customers/whoami/');
  }

  loginWithSocial(type) {
    return this.httpClient.get<any>( this.BASE_URL + '/api/customers/oauth2/' + type + '/');
  }
}


// TODO : 뭐 있었는데 기억안남
