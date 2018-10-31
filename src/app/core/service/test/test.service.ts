import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {FormControl, FormGroup} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private httpClient: HttpClient) {

  }

  myGroup;

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

    console.log('form');
    console.log(form);
    console.log('formGroup');
    console.log(formGroup);
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
      const {pay_script, form_data} = response;
      const script = document.createElement('script');
      script.src = pay_script;
      script.async = true;
      script.onload = function() {
        console.log('Script loaded');
        // @ts-ignore
        INIStdPay.pay(form);
      }
      document.head.appendChild(script);

      console.log(form)

      Object.keys(form_data).forEach(key => {
        const input = document.createElement('input');
        input.type = 'text';
        input.name = key;
        input.value = form_data[key];
        input.hidden = true;

        form.appendChild(input);
      });
      console.log('Form created.');
    });
  }
}
