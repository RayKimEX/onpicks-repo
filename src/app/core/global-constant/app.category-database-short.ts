
// category menu
import {InjectionToken} from '@angular/core';

export const CATEGORY_SECOND_MAP = new InjectionToken<any>( './core/global-constant/app.category-database-short');
export const CATEGORY_SECOND_MAP_CONST = {

  'pantry-and-household' : {
    'grocery' : {
      ko : '식품',
      en : 'Grocery'
    },
    'household-supplies' : {
      ko : '생활용품',
      en : 'Household'
    },
    'health' : {
      ko : '건강',
      en : 'Health'
    },
    'personal-care' : {
      ko : '퍼스널케어',
      en : 'Personal Care'
    },
    'baby' : {
      ko : '유아동',
      en : 'Baby'
    },
    'pet-supplies': {
      ko : '반려용품',
      en : 'Pet'
    },
    // 'office-supplies' : {
    //   name : '사무용품'
    // }
  },
  'beauty' : {
    'skin-care' : {
      ko : '스킨케어',
      en : 'Skin Care'
    },
    'hair-care' : {
      ko : '헤어케어',
      en : 'Hair'
    },
    'fragrance' : {
      ko : '향수',
      en : 'Fragrance'
    },
    'makeup' : {
      ko : '메이크업',
      en : 'Makeup'
    },
    'body-care' : {
      ko : '바디',
      en : 'Body Care'
    },
    'mens-grooming' : {
      ko : '남성',
      en : 'Mens'
    }
  }
}
