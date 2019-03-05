import { InjectionToken } from '@angular/core';

export const DOMAIN_HOST = new InjectionToken<string>('app.config');
export const CURRENCY = new InjectionToken<string>('app.config');

// API를 글로벌하게 URL관리하지 않는이유..
// '/api/products/1/variants/1/'
// 이런식으로 1같은 값이 중간에 끼어 있으면, 어떻게 처리해야되는지에 대한 해답이 없음
export const API_URL = new InjectionToken<string>('app.config');
export const API_URL_CONST = {
  pageData : {
    p : '/api/products/1/variants/1/',
  }
}

export const LOCATION_MAP = new InjectionToken<any>('app.config');

export const LOCATION_MAP_CONST = {
  'lax' : {
    nickname : 'la',
    sequence : 1
  },
  'jfk' : {
    nickname : 'new',
    sequence : 0
  },
  'kix' : {
    nickname : 'osaka',
    sequence : 4
  },
  'atl' : {
    nickname : 'gorgia',
    sequence : 2
  },
  'hkg' : {
    nickname : 'hong',
    sequence : 3
  }
}

export const CATEGORY_MAP = new InjectionToken<any>( 'app.config');
export const CATEGORY_MAP_CONST = {
  'pantry-and-household' : 1000000,
  'beauty' : 2000000,
  'home-living' : 3000000,
  'electronics' : 4000000,
  'sports-fitness-outdoor' : 5000000,
  'fashion' : 6000000
}

export const CATEGORY_SECOND_MAP = new InjectionToken<any>( 'app.config');

export const CATEGORY_SECOND_MAP_CONST = {

  'pantry-and-household' : {
    'grocery' : {
      name : '식품'
    },
    'household-supplies' : {
      name : '생활용품'
    },
    'health' : {
      name : '건강'
    },
    'personal-care' : {
      name : '퍼스널케어'
    },
    'baby' : {
      name : '유아동'
    },
    'pet-supplies': {
      name : '반려용품'
    },
    // 'office-supplies' : {
    //   name : '사무용품'
    // }
  },
  'beauty' : {
    'skin-care' : {
      name : '스킨케어'
    },
    'hair-care' : {
      name : '헤어케어'
    },
    'fragrance' : {
      name : '향수'
    },
    'makeup' : {
      name : '메이크업'
    },
    'body-care' : {
      name : '바디'
    },
    'mens-grooming' : {
      name : '남성'
    }
  }
}


export const REPORT_REASON_MAP = new InjectionToken<any>( 'app.config');
export const REPORT_REASON_MAP_CONST = {
  'ko' : {
    '주제와 관련 없음' : '주제와 관련 없음',
    '음란, 욕설 및 비방' : '음란, 욕설 및 비방',
    '스팸 및 광고성' : '스팸 및 광고성',
    '복제 등 저작권 침해 우려' : '복제 등 저작권 침해 우려',
    '기타' : '기타',
  },
  'en' : {

  }
}

export const RESPONSIVE_MAP = new InjectionToken<any>('app.config');
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

export const MENU_MAP = new InjectionToken<any>( 'app.config');
export const MENU_MAP_CONST = {
  'ko' : {
    main : [
      {
        name : '식품·생활용품',
        slug : 'pantry-and-household',
        href : 'pantry-and-household',
        sub : [
          {
            name : '식품',
            slug : 'grocery',
            href : 'pantry-and-household/grocery'
          },
          {
            name : '생활용품',
            slug : 'household-supplies',
            href : 'pantry-and-household/household-supplies'
          },
          {
            name : '퍼스널케어',
            slug : 'personal-care',
            href : 'pantry-and-household/personal-care'
          },
          {
            name : '주방',
            slug : 'pantry',
            href : 'pantry-and-household/grocery/pantry'
          }
        ],
      },
      {
        name : '뷰티',
        slug : 'beauty',
        href : 'beauty',
        sub : [
          {
            name : '스킨케어',
            slug : 'skincare',
            href : 'beauty/skincare'
          },
          {
            name : '헤어',
            slug : 'hair',
            href : 'beauty/hair'
          },
          {
            name : '메이크업',
            slug : 'makeup',
            href : 'beauty/makeup'
          },
          {
            name : '향수',
            slug : 'fragrance',
            href : 'beauty/fragrance'
          },
        ],
      },
      {
        name : '유아동',
        slug : 'baby',
        href : 'pantry-and-household/baby',
        sub : [
          {
            name : '이유식·분유',
            slug : 'baby-food-and-formula',
            href : 'pantry-and-household/baby/baby-food-and-formula'
          },
          {
            name : '수유·이유용품',
            slug : 'feeding-and-nursing',
            href : 'pantry-and-household/baby/feeding-and-nursing'
          },
          {
            name : '기저귀·교체용품',
            slug : 'diapering',
            href : 'pantry-and-household/baby/diapering'
          },
          {
            name : '유아용품',
            slug : 'baby-gear',
            href : 'pantry-and-household/baby/baby-gear'
          },
        ],
      },
      {
        name : '건강',
        slug : 'health',
        href : 'pantry-and-household/health',
        sub : [
          {
            name : '건강기능식품',
            slug : 'vitamins-and-dietary-supplements',
            href : 'pantry-and-household/health/vitamins-and-dietary-supplements'
          },
          {
            name : '헬스·다이어트',
            slug : 'sports-nutrition-and-diet',
            href : 'pantry-and-household/health/sports-nutrition-and-diet'
          },
          {
            name : '의약품',
            slug : 'medicine-cabinet',
            href : 'pantry-and-household/health/medicine-cabinet'
          },
          {
            name : '의료용품',
            slug : 'medical-supplies-and-equipmen',
            href : 'pantry-and-household/health/medical-supplies-and-equipment'
          },
        ],
      }
    ],
    recommandCategory : [
      {
        name : '양념·향신료',
        slug : 'spices-and-seasonings',
        href : 'pantry-and-household/grocery/pantry/spices-and-seasonings'
      },
      {
        name : '반려용품',
        slug : 'pet-supplies',
        href : 'pantry-and-household/pet-supplies'
      },
      // {
      //   name : '스포츠',
      //   slug : 'grocery',
      //   href : 'pantry-and-household/grocery'
      // },
      // '양념·향신료',
      // '반려용품',
      // '스포츠',
    ]
  },
  'en' : {

  }
}
