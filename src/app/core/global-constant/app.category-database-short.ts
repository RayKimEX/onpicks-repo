
// category menu
import {InjectionToken} from '@angular/core';

export const CATEGORY_SECOND_MAP = new InjectionToken<any>( './core/global-constant/app.category-database-short');
export const CATEGORY_SECOND_MAP_CONST = {

  'pantry-and-household' : {
    'grocery' : {
      ko : '식품',
      en : ''
    },
    'household-supplies' : {
      ko : '생활용품',
      en : ''
    },
    'health' : {
      ko : '건강',
      en : ''
    },
    'personal-care' : {
      ko : '퍼스널케어',
      en : ''
    },
    'baby' : {
      ko : '유아동',
      en : ''
    },
    'pet-supplies': {
      ko : '반려용품',
      en : ''
    },
    // 'office-supplies' : {
    //   name : '사무용품'
    // }
  },
  'beauty' : {
    'skin-care' : {
      ko : '스킨케어',
      en : ''
    },
    'hair-care' : {
      ko : '헤어케어',
      en : ''
    },
    'fragrance' : {
      ko : '향수',
      en : ''
    },
    'makeup' : {
      ko : '메이크업',
      en : ''
    },
    'body-care' : {
      ko : '바디',
      en : ''
    },
    'mens-grooming' : {
      ko : '남성',
      en : ''
    }
  }
}
