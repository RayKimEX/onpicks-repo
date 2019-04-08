import { InjectionToken } from '@angular/core';

export const DOMAIN_HOST = new InjectionToken<string>('./core/global-constant/app.config');
export const CURRENCY = new InjectionToken<string>('./core/global-constant/app.config');

// API를 글로벌하게 URL관리하지 않는이유..
// '/api/products/1/variants/1/'
// 이런식으로 1같은 값이 중간에 끼어 있으면, 어떻게 처리해야되는지에 대한 해답이 없음
export const API_URL = new InjectionToken<string>('./core/global-constant/app.config');
export const API_URL_CONST = {
  pageData : {
    p : '/api/products/1/variants/1/',
  }
}

// 배송지
export const LOCATION_MAP = new InjectionToken<any>('./core/global-constant/app.config');
export const LOCATION_MAP_CONST = {
  'LAX' : {
    nickname : 'la',
    sequence : 1
  },
  'JFK' : {
    nickname : 'new',
    sequence : 0
  },
  'KIX' : {
    nickname : 'osaka',
    sequence : 4
  },
  'ATL' : {
    nickname : 'gorgia',
    sequence : 2
  },
  'HKG' : {
    nickname : 'hong',
    sequence : 3
  }
}



// reponsive
export const /**/RESPONSIVE_MAP = new InjectionToken<any>('./core/global-constant/app.config');
export const RESPONSIVE_MAP_CONST = {
  // 640 / 16
  // third-break-point : popularCategory, collection, popularBrands
  'tb' : '(max-width: 40em)',
  // 950 / 16
  // second-break-point : popularCategory, collection, popularBrands/**/
  'sb' : '(max-width: 55.625em)',
  // 1192 / 16
  // first-break-point
  'actb' : '(max-width: 57em)',
  'fb' : '(max-width: 74.5em)',
  'desktop' : '(max-width: 80em)'
}
