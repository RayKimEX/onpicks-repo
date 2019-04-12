
// 신고하기 기능
import {InjectionToken} from '@angular/core';

export const PREFERENCE_MAP = new InjectionToken<any>( './core/global-constant/app.locale');
export const PREFERENCE_MAP_CONST = {
  locale : {
    title : '언어를 선택해주세요',
    list : {
      en : 'English',
      ko : '한국어'
    }
  },
  currency : {
    title : {
      ko : '통화를 선택해주세요',
      en : '통화를 선택해주세요(English)'
    },
    list : {
      USD : {
        ko : '미국 달러 - $',
        en : '미국 달러 - $(English)'
      },
      KRW : {
        ko : '한국 원 - ₩',
        en : '한국 원 - ₩(English)'
      },
    }
  }
}

export const REPORT_REASON_MAP = new InjectionToken<any>( './core/global-constant/app.locale');
export const REPORT_REASON_MAP_CONST = {
  'irrelevant' : {
    ko : '주제와 관련 없음',
    en : '',
    // 중국어
    zh : '',
  },
  'inappropriate' : {
    ko : '음란, 욕설 및 비방',
    en : '',
    // 중국어
    zh : '',
  },
  'advertising' : {
    ko : '스팸 및 광고성',
    en : '',
    // 중국어
    zh : '',
  },
  'piracy' : {
    ko : '복제 등 저작권 침해 우려',
    en : '',
    // 중국어
    zh : '',
  },
  'others' : {
    ko : '기타',
    en : '',
    // 중국어
    zh : '',
  },
}


// menu
export const MENU_MAP = new InjectionToken<any>( './core/global-constant/app.locale');
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
    main : [
      {
        name : 'Pantry & Household',
        slug : 'pantry-and-household',
        href : 'pantry-and-household',
        sub : [
          {
            name : 'Grocery',
            slug : 'grocery',
            href : 'pantry-and-household/grocery'
          },
          {
            name : 'Household',
            slug : 'household-supplies',
            href : 'pantry-and-household/household-supplies'
          },
          {
            name : 'Personal',
            slug : 'personal-care',
            href : 'pantry-and-household/personal-care'
          },
          {
            name : 'Pantry',
            slug : 'pantry',
            href : 'pantry-and-household/grocery/pantry'
          }
        ],
      },
      {
        name : 'Beauty',
        slug : 'beauty',
        href : 'beauty',
        sub : [
          {
            name : 'Skin Care',
            slug : 'skincare',
            href : 'beauty/skincare'
          },
          {
            name : 'Hair',
            slug : 'hair',
            href : 'beauty/hair'
          },
          {
            name : 'Makeup',
            slug : 'makeup',
            href : 'beauty/makeup'
          },
          {
            name : 'Fragrance',
            slug : 'fragrance',
            href : 'beauty/fragrance'
          },
        ],
      },
      {
        name : 'Baby',
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
        name : 'Health',
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
}
