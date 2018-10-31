import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '../../../../../node_modules/@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpClient: HttpClient
  ) { }
  private BASE_URL = 'http://localhost';

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

  signup() {

  }

  getProfile() {
    this.httpClient.get<any>(this.BASE_URL + '/api/customers/profile/').subscribe(response => {
      console.log(response);
    });
  }
}
