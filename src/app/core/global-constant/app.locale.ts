
// 신고하기 기능
import {InjectionToken} from '@angular/core';


export const TITLE_MAP = new InjectionToken<any>( './core/global-constant/app.locale');
export const TITLE_MAP_CONST = {
  'main' : {
    ko : '온픽스, 건강하고 아름다운 삶을 위한 선택',
    en : 'Onpicks, Everyone deserves to have healthier choices'
  },
  'pantry-and-household' : {
    ko : '식품·생활용품',
    en : 'Pantry & Household'
  },
  'beauty' : {
    ko : '뷰티',
    en : 'Beauty'
  }
}


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
    en : 'Off Topic',
    // 중국어
    zh : '',
  },
  'inappropriate' : {
    ko : '음란, 욕설 및 비방',
    en : 'Abuse',
    // 중국어
    zh : '',
  },
  'advertising' : {
    ko : '스팸 및 광고성',
    en : 'Spam',
    // 중국어
    zh : '',
  },
  'piracy' : {
    ko : '복제 등 저작권 침해 우려',
    en : 'Copyright Infringement',
    // 중국어
    zh : '',
  },
  'others' : {
    ko : '기타',
    en : 'Other',
    // 중국어
    zh : '',
  },
}


// menu
export const MENU_MAP = new InjectionToken<any>( './core/global-constant/app.locale');
export const MENU_MAP_CONST = {
  main : [
    {
      name : {
        ko : '식품·생활용품',
        en : 'Pantry & Household'
      },
      slug : 'pantry-and-household',
      href : 'pantry-and-household',
      all : {
        ko : '식품·생활용품 더보기',
        en : 'Shop All Pantry & Household'
      },
      sub : [
        {
          name : {
            ko : '식품',
            en : 'Grocery'
          },
          slug : 'grocery',
          href : 'pantry-and-household/grocery'
        },
        {
          name : {
            ko : '생활용품',
            en : 'Household'
          },
          slug : 'household-supplies',
          href : 'pantry-and-household/household-supplies'
        },
        {
          name : {
            ko : '퍼스널케어',
            en : 'Personal Care'
          },
          slug : 'personal-care',
          href : 'pantry-and-household/personal-care'
        },
        {
          name : {
            ko : '주방',
            en : 'Pantry'
          },
          slug : 'pantry',
          href : 'pantry-and-household/grocery/pantry'
        }
      ],
    },
    {
      name : {
        ko : '뷰티',
        en : 'Beauty'
      },
      slug : 'beauty',
      href : 'beauty',
      all : {
        ko : '뷰티 더보기',
        en : 'Shop All Beauty'
      },
      sub : [
        {
          name : {
            ko : '스킨케어',
            en : 'Skin Care'
          },
          slug : 'skincare',
          href : 'beauty/skin-care'
        },
        {
          name : {
            ko : '헤어',
            en : 'Hair'
          },
          slug : 'hair',
          href : 'beauty/hair-care'
        },
        {
          name : {
            ko : '메이크업',
            en : 'Makeup'
          },
          slug : 'makeup',
          href : 'beauty/makeup'
        },
        {
          name : {
            ko : '향수',
            en : 'Fragrance'
          },
          slug : 'fragrance',
          href : 'beauty/fragrance'
        },
      ],
    },
    {
      name : {
        ko : '유아동',
        en : 'Baby'
      },
      slug : 'baby',
      href : 'pantry-and-household/baby',
      all : {
        ko : '유아동 더보기',
        en : 'Shop All Baby'
      },
      sub : [
        {
          name : {
            ko : '이유식·분유',
            en : 'Baby Food & Formula'
          },
          slug : 'baby-food-and-formula',
          href : 'pantry-and-household/baby/baby-food-and-formula'
        },
        {
          name : {
            ko : '수유·이유용품',
            en : 'Feeding & Nursing'
          },
          slug : 'feeding-and-nursing',
          href : 'pantry-and-household/baby/feeding-and-nursing'
        },
        {
          name : {
            ko : '기저귀·교체용품',
            en : 'Diapering'
          },
          slug : 'diapering',
          href : 'pantry-and-household/baby/diapering'
        },
        {
          name : {
            ko : '유아용품',
            en : 'Baby Gear'
          },
          slug : 'baby-gear',
          href : 'pantry-and-household/baby/baby-gear'
        },
      ],
    },
    {
      name : {
        ko : '건강',
        en : 'Health'
      },
      slug : 'health',
      href : 'pantry-and-household/health',
      all : {
        ko : '건강 더보기',
        en : 'Shop All Health'
      },
      sub : [
        {
          name : {
            ko : '건강기능식품',
            en : 'Vitamins & Dietary Supplements'
          },
          slug : 'vitamins-and-dietary-supplements',
          href : 'pantry-and-household/health/vitamins-and-dietary-supplements'
        },
        {
          name : {
            ko : '헬스·다이어트',
            en : 'Sports Nutrition & Diet'
          },
          slug : 'sports-nutrition-and-diet',
          href : 'pantry-and-household/health/sports-nutrition-and-diet'
        },
        {
          name : {
            ko : '의약품',
            en : 'Medicine Cabinet'
          },
          slug : 'medicine-cabinet',
          href : 'pantry-and-household/health/medicine-cabinet'
        },
        {
          name : {
            ko : '의료용품',
            en : 'Medical Supplies & Equipment'
          },
          slug : 'medical-supplies-and-equipment',
          href : 'pantry-and-household/health/medical-supplies-and-equipment'
        },
      ],
    }
  ],
  recommandCategory : [
      {
        name : {
          ko : '양념·향신료',
          en : 'Spices & Seasonings'
        },
        slug : 'spices-and-seasonings',
        href : 'pantry-and-household/grocery/pantry/spices-and-seasonings'
      },
      {
        name : {
          ko : '반려용품',
          en : 'Pet Supplies'
        },
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
  }
