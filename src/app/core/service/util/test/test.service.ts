import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {FormControl, FormGroup} from '@angular/forms';
import {DOMAIN_HOST} from '../../../global-constant/app.config';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(
    private httpClient: HttpClient,
    @Inject(DOMAIN_HOST) private BASE_URL: string,
  ) {

  }

  myGroup;


  // enrollReviews( reviewData ) {
  //   this.httpClient.post<any>(this.BASE_URL + '/api/products/1/',{rating : reviewData.starRating, text : reviewData.review, pictures})
  //
  //   // {“rating”: 5.0, “text”: “…”}
  // }



  login () {
    this.httpClient.post<any>(
      'http://localhost/api/accounts/login/',
      { email : 'dev@mojostudio.io', password : 'mojostudio0!'},
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
        // withCredentials: true
  }
    ).subscribe((response) => {
      console.log(response);
    });
  }



  requestPayment (formGroup, form) {

    this.httpClient.post<any>( // https://localhost/api/orders/1/payments/
      'http://localhost/api/orders/1/payments/',
      { method : 'cards' },
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
        // withCredentials: true
      }
    ).subscribe((response) => {

    });
  }
}
