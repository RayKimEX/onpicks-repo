import { InjectionToken } from '@angular/core';
import {environment} from '../../../environments/environment';

export const REGION_ID = new InjectionToken<any>('REGION_ID');


export const IMAGE_HOST = new InjectionToken<any>('IMAGE_HOST');
export const DOMAIN_HOST = new InjectionToken<any>('DOMAIN_HOST');
export const CURRENCY = new InjectionToken<any>('CURRENCY');

export const BREAKPOINT =  new InjectionToken<any>('BREAKPOINT');


export const API_URL = new InjectionToken<any>('API_URL');
export const LOCATION_MAP = new InjectionToken<any>('LOCATION_MAP');
export const RESPONSIVE_MAP = new InjectionToken<any>('RESPONSIVE_MAP');
export const STRIPE_API_KEY_TOKEN = new InjectionToken<any>('STRIPE_API_KEY_TOKEN');
export const PAYPAL_API_KEY_TOKEN = new InjectionToken<any>('PAYPAL_API_KEY_TOKEN');

export const PAYPAL_API_KEY = !environment.production ? 'AWt9c2qy20OweuAcv_qLKqmaDccTmGTbz6c3mnxRmtpAk-cwP3Q9RHIUTRHnHwrXpzB6_nppyWroVZSg' : 'AViPD7AOFOeDGPGs0hLzxTJ3aZTpZSVNfdtnJXX6xwSNVa-bQnwtpkLXbtaRlM8VJ2fA_yloZvHGX4Pq';



export const STRIPE_API_KEY = !environment.production ? 'pk_test_BdWhs6G5bNDS9XJ9aW5B0J4E00kl5O2qBD' : 'pk_live_hDaCpF43ZbEFKJ8XIVYAt0ki00PRTWzCCk';




// API를 글로벌하게 URL관리하지 않는이유..
// '/api/products/1/variants/1/'
// 이런식으로 1같은 값이 중간에 끼어 있으면, 어떻게 처리해야되는지에 대한 해답이 없음

export const API_URL_CONST = {
  pageData : {
    p : '/api/products/1/variants/1/',
  }
}

// 배송지

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
