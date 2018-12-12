import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {API_URL, DOMAIN_HOST} from '../../../app.config';
import {UserSignUpAPI} from '../../store/user/user.model';

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
    console.log('signup!!');
    const reframe = {
      user : {
        email : parameters.email,
        password : parameters.password
      },
      nickname : parameters.nickname,
    }
    return this.httpClient.post<any>(this.BASE_URL + '/api/customers/', reframe);
  }

  getAuthUser(): Observable<any> {
    return this.httpClient.get<any>(this.BASE_URL + '/api/customers/whoami/');
  }
}
