import { Injectable } from '@angular/core';
import {HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  constructor() {

  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const csrfToken = this.getCookie('csrftoken');


    if ( request.url.startsWith('http://www.juso')) {
      return next.handle(request);
    }


    request = request.clone(
      { headers: new HttpHeaders({
          'X-CSRFTOKEN' : csrfToken,
          'Content-Type': 'application/json',
        }),
      });

    console.log('%c' + request.url.substring(6, request.url.length - 1), 'color : #007755');;
    return next.handle(request);
  }




  getCookie(cname) {
    const name = cname + '=';
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for ( let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return '';
  }
}
