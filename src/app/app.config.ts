import { InjectionToken } from '@angular/core';

export const DOMAIN_HOST = new InjectionToken<string>('app.config');
export const CURRENCY = new InjectionToken<string>('app.config');

// API를 글로벌하게 URL관리하지 않는이유..
// '/api/products/1/variants/1/'
// 이런식으로 1같은 값이 중간에 끼어 있으면, 어떤경우에 그 안에 넣어서 해야하는지 사용하는 입장에서 한번에 알기가 좀 힘듦.
export const API_URL = new InjectionToken<string>('app.config');
export const API_URL_CONST = {
  pageData : {
    p : '/api/products/1/variants/1/',
  }
}
