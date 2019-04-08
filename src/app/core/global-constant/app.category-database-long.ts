import {InjectionToken} from '@angular/core';

export const CATEGORY_CODE_MAP = new InjectionToken<any>( './core/global-constant/app.category-database');
export const CATEGORY_MAP = new InjectionToken<any>( './core/global-constant/app.category-database');

export const CATEGORY_MAP_CONST = {
  '1000000': {
    'slug': 'pantry-and-household',
    'id': 1000000,
    'name': '식품·생활용품',
    'children': [
      {
        'slug': 'grocery',
        'id': 1010000,
        'name': '식품',
        'children': [
          {
            'slug': 'beverages',
            'id': 1010100,
            'name': '음료',
            'children': [
              {
                'slug': 'water',
                'id': 1010101,
                'name': '물',
                'children': []
              },
              {
                'slug': 'sports-and-energy-drinks',
                'id': 1010102,
                'name': '스포츠음료',
                'children': []
              },
              {
                'slug': 'soft-drinks',
                'id': 1010103,
                'name': '청량음료',
                'children': []
              },
              {
                'slug': 'coffee',
                'id': 1010104,
                'name': '커피',
                'children': []
              },
              {
                'slug': 'tea',
                'id': 1010105,
                'name': '차',
                'children': []
              },
              {
                'slug': 'milk',
                'id': 1010106,
                'name': '우유',
                'children': []
              },
              {
                'slug': 'non-dairy-milk',
                'id': 1010107,
                'name': 'Non-Dairy Milk',
                'children': []
              },
              {
                'slug': 'juice',
                'id': 1010108,
                'name': '주스',
                'children': []
              },
              {
                'slug': 'applesauce-fruit-cups-and-squeezes',
                'id': 1010201,
                'name': '프루츠컵·스퀴즈',
                'children': []
              },
              {
                'slug': 'chips-and-pretzels',
                'id': 1010202,
                'name': '칩·프레첼',
                'children': []
              },
              {
                'slug': 'cookies',
                'id': 1010203,
                'name': '쿠키',
                'children': []
              },
              {
                'slug': 'bread-and-crackers',
                'id': 1010204,
                'name': '빵·크래커',
                'children': []
              },
              {
                'slug': 'fruit-and-vegetable-snacks',
                'id': 1010205,
                'name': '과일·야채스낵',
                'children': []
              },
              {
                'slug': 'protein-and-granola-bars',
                'id': 1010206,
                'name': '프로틴·곡물바',
                'children': []
              },
              {
                'slug': 'ice-cream-cones-and-toppings',
                'id': 1010207,
                'name': '아이스크림콘·토핑',
                'children': []
              },
              {
                'slug': 'jerky-and-dried-meats',
                'id': 1010208,
                'name': '육포·건어물',
                'children': []
              },
              {
                'slug': 'nuts-seeds-and-trail-mix',
                'id': 1010209,
                'name': '견과류·믹스',
                'children': []
              },
              {
                'slug': 'popcorn-and-puffed-snacks',
                'id': 1010210,
                'name': '팝콘',
                'children': []
              },
              {
                'slug': 'pudding-and-gelatin',
                'id': 1010211,
                'name': '푸딩·젤라틴',
                'children': []
              }
            ]
          },
          {
            'slug': 'candy-gum-and-chocolate',
            'id': 1010300,
            'name': '캔디·껌·초콜릿',
            'children': [
              {
                'slug': 'chocolate',
                'id': 1010301,
                'name': ' ',
                'children': []
              },
              {
                'slug': 'chewing-gum',
                'id': 1010302,
                'name': '껌',
                'children': []
              },
              {
                'slug': 'candy',
                'id': 1010303,
                'name': '캔디',
                'children': []
              },
              {
                'slug': 'other-sweets',
                'id': 1010304,
                'name': '디저트',
                'children': []
              }
            ]
          },
          {
            'slug': 'breakfast-foods',
            'id': 1010400,
            'name': '아침식사',
            'children': [
              {
                'slug': 'cold-cereals',
                'id': 1010401,
                'name': '콜드시리얼',
                'children': []
              },
              {
                'slug': 'hot-cereals-and-oats',
                'id': 1010402,
                'name': '핫시리얼·오트밀',
                'children': []
              },
              {
                'slug': 'toaster-pastries',
                'id': 1010403,
                'name': '토스터페이스트리',
                'children': []
              },
              {
                'slug': 'granola-and-museli',
                'id': 1010404,
                'name': '그래놀라·무슬리',
                'children': []
              },
              {
                'slug': 'meal-replacement-proein-and-granola-bars',
                'id': 1010405,
                'name': '식사대용프로틴바·그래놀라바',
                'children': []
              }
            ]
          },
          {
            'slug': 'soups-meals-and-side-dishes',
            'id': 1010500,
            'name': '식사·후식',
            'children': [
              {
                'slug': 'macaroni-and-cheese',
                'id': 1010501,
                'name': '마카로니·치즈',
                'children': []
              },
              {
                'slug': 'soups',
                'id': 1010502,
                'name': '수프',
                'children': []
              },
              {
                'slug': 'broth',
                'id': 1010503,
                'name': '죽',
                'children': []
              },
              {
                'slug': 'chilis-and-stews',
                'id': 1010504,
                'name': '칠리·스튜',
                'children': []
              },
              {
                'slug': 'asian-meals',
                'id': 1010505,
                'name': '아시아식사',
                'children': []
              },
              {
                'slug': 'italian-meals',
                'id': 1010506,
                'name': '이탈리아식사',
                'children': []
              },
              {
                'slug': 'mexican-meals-and-taco-kits',
                'id': 1010507,
                'name': '멕시코식사·타코',
                'children': []
              },
              {
                'slug': 'indian-meals',
                'id': 1010508,
                'name': '인도식사',
                'children': []
              },
              {
                'slug': 'potatoes-and-stuffings',
                'id': 1010509,
                'name': '감자·속재료',
                'children': []
              }
            ]
          },
          {
            'slug': 'pantry',
            'id': 1010600,
            'name': '주방',
            'children': [
              {
                'slug': 'spices-and-seasonings',
                'id': 1010601,
                'name': '양념·향신료',
                'children': []
              },
              {
                'slug': 'salt-and-pepper',
                'id': 1010602,
                'name': '소금·후추',
                'children': []
              },
              {
                'slug': 'condiments',
                'id': 1010603,
                'name': '조미료',
                'children': []
              },
              {
                'slug': 'oils',
                'id': 1010604,
                'name': '오일',
                'children': []
              },
              {
                'slug': 'vinegars',
                'id': 1010605,
                'name': '식초',
                'children': []
              },
              {
                'slug': 'salad-dressings',
                'id': 1010606,
                'name': '샐러드드레싱',
                'children': []
              },
              {
                'slug': 'salad-toppings',
                'id': 1010607,
                'name': '샐러드토핑',
                'children': []
              },
              {
                'slug': 'sauces-and-marinades',
                'id': 1010608,
                'name': '소스·마리네이드',
                'children': []
              },
              {
                'slug': 'salsas-and-dips',
                'id': 1010609,
                'name': '샐러드·딥스',
                'children': []
              },
              {
                'slug': 'butters',
                'id': 1010610,
                'name': '버터',
                'children': []
              },
              {
                'slug': 'jams-jellies-and-preserves',
                'id': 1010611,
                'name': '잼·젤리',
                'children': []
              },
              {
                'slug': 'sweet-spreads',
                'id': 1010612,
                'name': '스위트스프레드',
                'children': []
              },
              {
                'slug': 'flours-and-meals',
                'id': 1010613,
                'name': '곡물분말',
                'children': []
              },
              {
                'slug': 'sugar-and-other-sweeteners',
                'id': 1010614,
                'name': '설탕·감미료',
                'children': []
              },
              {
                'slug': 'baking-ingredients',
                'id': 1010615,
                'name': '제빵재료',
                'children': []
              },
              {
                'slug': 'baking-mixes',
                'id': 1010616,
                'name': '제빵분말',
                'children': []
              },
              {
                'slug': 'honey-and-syrups',
                'id': 1010617,
                'name': '꿀·시럽',
                'children': []
              }
            ]
          },
          {
            'slug': 'pasta-and-pasta-sauce',
            'id': 1010700,
            'name': '파스타·파스타소스',
            'children': [
              {
                'slug': 'pasta-and-noodles',
                'id': 1010701,
                'name': '파스타',
                'children': []
              },
              {
                'slug': 'pasta-sauces',
                'id': 1010702,
                'name': '파스타소스',
                'children': []
              }
            ]
          },
          {
            'slug': 'canned-and-jarred-food',
            'id': 1010800,
            'name': '통조림',
            'children': [
              {
                'slug': 'canned-beans',
                'id': 1010801,
                'name': '콩통조림',
                'children': []
              },
              {
                'slug': 'canned-fruit',
                'id': 1010802,
                'name': '과일통조림',
                'children': []
              },
              {
                'slug': 'canned-meat-and-seafood',
                'id': 1010803,
                'name': '해산물·육류통조림',
                'children': []
              },
              {
                'slug': 'canned-vegetables',
                'id': 1010804,
                'name': '야채통조림',
                'children': []
              },
              {
                'slug': 'canned-tomatoes-and-paste',
                'id': 1010805,
                'name': '토마토통조림',
                'children': []
              },
              {
                'slug': 'pickled-vegetables-and-olives',
                'id': 1010806,
                'name': '피클·올리브통조림',
                'children': []
              }
            ]
          },
          {
            'slug': 'cooking-and-baking-supplies',
            'id': 1010900,
            'name': '제과제빵',
            'children': [
              {
                'slug': 'baking-mixes',
                'id': 1010901,
                'name': '제빵분말',
                'children': []
              },
              {
                'slug': 'baking-ingredients',
                'id': 1010902,
                'name': '제빵재료',
                'children': []
              },
              {
                'slug': 'breadcrumbs',
                'id': 1010903,
                'name': '빵가루',
                'children': []
              },
              {
                'slug': 'doughs-shells-and-crusts',
                'id': 1010904,
                'name': '도우·크러스트',
                'children': []
              },
              {
                'slug': 'extracts',
                'id': 1010905,
                'name': '추출물',
                'children': []
              },
              {
                'slug': 'flours-and-meals',
                'id': 1010906,
                'name': '곡물 분말',
                'children': []
              },
              {
                'slug': 'frosting-and-decoration',
                'id': 1010907,
                'name': '데코레이션',
                'children': []
              },
              {
                'slug': 'marshmallows',
                'id': 1010908,
                'name': '마시멜로우',
                'children': []
              },
              {
                'slug': 'sugar-and-other-sweeteners',
                'id': 1010909,
                'name': '설탕·감미료',
                'children': []
              },
              {
                'slug': 'honey-and-syrups',
                'id': 1010910,
                'name': '꿀·시럽',
                'children': []
              }
            ]
          },
          {
            'slug': 'rice-beans-and-grains',
            'id': 1011000,
            'name': '쌀·콩·곡물',
            'children': [
              {
                'slug': 'dry-beans',
                'id': 1011001,
                'name': '콩',
                'children': []
              },
              {
                'slug': 'grains',
                'id': 1011002,
                'name': '곡물',
                'children': []
              },
              {
                'slug': 'quinoa',
                'id': 1011003,
                'name': '퀴노아',
                'children': []
              },
              {
                'slug': 'rice',
                'id': 1011004,
                'name': '쌀',
                'children': []
              },
              {
                'slug': 'couscous',
                'id': 1011005,
                'name': '쿠스쿠스',
                'children': []
              }
            ]
          },
          {
            'slug': 'international-food',
            'id': 1011100,
            'name': '해외식품',
            'children': [
              {
                'slug': 'indian-cuisine',
                'id': 1011101,
                'name': '인도요리',
                'children': []
              },
              {
                'slug': 'chinese-cuisine',
                'id': 1011102,
                'name': '중식',
                'children': []
              },
              {
                'slug': 'japanese-cuisine',
                'id': 1011103,
                'name': '일식',
                'children': []
              },
              {
                'slug': 'korean-cuisine',
                'id': 1011104,
                'name': '한식',
                'children': []
              },
              {
                'slug': 'asian-cuisine',
                'id': 1011105,
                'name': '아시아요리',
                'children': []
              },
              {
                'slug': 'mexican-cuisine',
                'id': 1011106,
                'name': '멕시코요리',
                'children': []
              },
              {
                'slug': 'latin-american-cuisine',
                'id': 1011107,
                'name': '라틴요리',
                'children': []
              },
              {
                'slug': 'european-cuisine',
                'id': 1011108,
                'name': '호주요리',
                'children': []
              }
            ]
          }
        ]
      },
      {
        'slug': 'household-supplies',
        'id': 1020000,
        'name': '생활용품',
        'children': [
          {
            'slug': 'paper-and-plastic-products',
            'id': 1020100,
            'name': '화장지·일회용품',
            'children': [
              {
                'slug': 'paper-towels',
                'id': 1020101,
                'name': '종이타월',
                'children': []
              },
              {
                'slug': 'toilet-paper',
                'id': 1020102,
                'name': '화장지',
                'children': []
              },
              {
                'slug': 'facial-tissues',
                'id': 1020103,
                'name': '미용티슈',
                'children': []
              },
              {
                'slug': 'disposable-tableware',
                'id': 1020104,
                'name': '일회용식탁용품',
                'children': []
              },
              {
                'slug': 'paper-napkins',
                'id': 1020105,
                'name': '넵킨',
                'children': []
              },
              {
                'slug': 'disposable-coffee-filters',
                'id': 1020106,
                'name': '일회용커피필터',
                'children': []
              }
            ]
          },
          {
            'slug': 'laundry',
            'id': 1020200,
            'name': '세탁',
            'children': [
              {
                'slug': 'laundry-detergent',
                'id': 1020201,
                'name': '세제',
                'children': []
              },
              {
                'slug': 'fabric-softener',
                'id': 1020202,
                'name': '섬유유연제',
                'children': []
              },
              {
                'slug': 'dryer-sheets-and-balls',
                'id': 1020203,
                'name': '건조시트·볼',
                'children': []
              },
              {
                'slug': 'stain-removers',
                'id': 1020204,
                'name': '얼룩제거제',
                'children': []
              },
              {
                'slug': 'scent-boosters',
                'id': 1020205,
                'name': '세탁방향제',
                'children': []
              },
              {
                'slug': 'bleach',
                'id': 1020206,
                'name': '표백제',
                'children': []
              },
              {
                'slug': 'washing-machine-cleaners',
                'id': 1020207,
                'name': '세탁조청소',
                'children': []
              },
              {
                'slug': 'other-laundry-care',
                'id': 1020208,
                'name': '기타세탁용품',
                'children': []
              }
            ]
          },
          {
            'slug': 'cleaning-products',
            'id': 1020300,
            'name': '청소용품',
            'children': [
              {
                'slug': 'all-purpose-cleaners',
                'id': 1020301,
                'name': '다목적클리너',
                'children': []
              },
              {
                'slug': 'cleaning-wipes',
                'id': 1020302,
                'name': '청소용티슈',
                'children': []
              },
              {
                'slug': 'bleach',
                'id': 1020303,
                'name': '표백제',
                'children': []
              },
              {
                'slug': 'sponges-and-brushes',
                'id': 1020304,
                'name': '스펀지·브러쉬',
                'children': []
              },
              {
                'slug': 'dishwashing-detergent',
                'id': 1020305,
                'name': '주방세제',
                'children': []
              },
              {
                'slug': 'dish-soap',
                'id': 1020306,
                'name': '주방비누',
                'children': []
              },
              {
                'slug': 'bathroom-cleaners',
                'id': 1020307,
                'name': '욕실청소',
                'children': []
              },
              {
                'slug': 'kitchen-cleaners',
                'id': 1020308,
                'name': '주방청소',
                'children': []
              },
              {
                'slug': 'produce-wash',
                'id': 1020309,
                'name': '식품세척',
                'children': []
              },
              {
                'slug': 'drain-cleaners',
                'id': 1020310,
                'name': '배수관청소',
                'children': []
              },
              {
                'slug': 'floor-cleaners',
                'id': 1020311,
                'name': '거실청소',
                'children': []
              },
              {
                'slug': 'specialty-cleaners',
                'id': 1020312,
                'name': '특수청소',
                'children': []
              },
              {
                'slug': 'glass-cleaners',
                'id': 1020313,
                'name': '유리청소',
                'children': []
              }
            ]
          },
          {
            'slug': 'cleaning-tools',
            'id': 1020400,
            'name': 'Cleaning Tools',
            'children': [
              {
                'slug': 'sponges-and-brushes',
                'id': 1020401,
                'name': '스펀지·브러쉬',
                'children': []
              },
              {
                'slug': 'mops-and-accessories',
                'id': 1020402,
                'name': '대걸레·액세서리',
                'children': []
              },
              {
                'slug': 'dusting-tools-and-cloths',
                'id': 1020403,
                'name': '먼지청소',
                'children': []
              },
              {
                'slug': 'cleaning-gloves',
                'id': 1020404,
                'name': '청소용장갑',
                'children': []
              },
              {
                'slug': 'brooms',
                'id': 1020405,
                'name': '빗자루',
                'children': []
              },
              {
                'slug': 'bowl-brushes-and-plungers',
                'id': 1020406,
                'name': '볼브러쉬·플런저',
                'children': []
              },
              {
                'slug': 'dustbins',
                'id': 1020407,
                'name': '휴지통',
                'children': []
              }
            ]
          },
          {
            'slug': 'food-storage-and-trash-bags',
            'id': 1020500,
            'name': '보관용기·팩',
            'children': [
              {
                'slug': 'food-storage-bags',
                'id': 1020501,
                'name': '비닐팩',
                'children': []
              },
              {
                'slug': 'foil',
                'id': 1020502,
                'name': '호일',
                'children': []
              },
              {
                'slug': 'food-storage-containers',
                'id': 1020503,
                'name': '음식보관용기',
                'children': []
              },
              {
                'slug': 'plastic-wrap',
                'id': 1020504,
                'name': '비닐랩',
                'children': []
              },
              {
                'slug': 'wax-and-parchment-paper',
                'id': 1020505,
                'name': '왁스·파치먼트페이퍼',
                'children': []
              },
              {
                'slug': 'trash-bags',
                'id': 1020506,
                'name': 'Trash Bags',
                'children': []
              }
            ]
          },
          {
            'slug': 'home-fragrance',
            'id': 1020600,
            'name': '방향',
            'children': [
              {
                'slug': 'air-fresheners',
                'id': 1020601,
                'name': '방향제',
                'children': []
              },
              {
                'slug': 'candles',
                'id': 1020602,
                'name': '향초',
                'children': []
              },
              {
                'slug': 'fragrance-diffusers',
                'id': 1020603,
                'name': '디퓨저',
                'children': []
              }
            ]
          },
          {
            'slug': 'light-bulbs',
            'id': 1020700,
            'name': '백열전구',
            'children': []
          },
          {
            'slug': 'insect-and-pest-control',
            'id': 1020800,
            'name': '방충용품',
            'children': [
              {
                'slug': 'indoor-pest-control',
                'id': 1020801,
                'name': '실내용해충',
                'children': []
              },
              {
                'slug': 'outdoor-pest-control',
                'id': 1020802,
                'name': '야외용해충',
                'children': []
              },
              {
                'slug': 'insect-repellent',
                'id': 1020803,
                'name': '방충제',
                'children': []
              }
            ]
          }
        ]
      },
      {
        'slug': 'personal-care',
        'id': 1030000,
        'name': '퍼스날케어',
        'children': [
          {
            'slug': 'oral-and-personal-care',
            'id': 1030100,
            'name': '위생용품',
            'children': [
              {
                'slug': 'deodorant',
                'id': 1030101,
                'name': '데오드란트',
                'children': []
              },
              {
                'slug': 'ear-care',
                'id': 1030102,
                'name': '귀건강',
                'children': []
              },
              {
                'slug': 'eye-care',
                'id': 1030103,
                'name': '눈건강',
                'children': []
              },
              {
                'slug': 'feminine-care',
                'id': 1030104,
                'name': '여성청결제',
                'children': []
              },
              {
                'slug': 'toothbrushes',
                'id': 1030105,
                'name': 'Toothbrushes',
                'children': []
              },
              {
                'slug': 'toothpaste',
                'id': 1030106,
                'name': '치약',
                'children': []
              },
              {
                'slug': 'mouthwash',
                'id': 1030107,
                'name': '구강청결제',
                'children': []
              },
              {
                'slug': 'dental-floss',
                'id': 1030108,
                'name': '치실',
                'children': []
              },
              {
                'slug': 'manual-toothbrushes',
                'id': 1030109,
                'name': '칫솔',
                'children': []
              },
              {
                'slug': 'electric-toothbrushes',
                'id': 1030110,
                'name': '전동칫솔',
                'children': []
              },
              {
                'slug': 'other-oral-care',
                'id': 1030111,
                'name': '구강관리',
                'children': []
              },
              {
                'slug': 'razors',
                'id': 1030112,
                'name': '면도기',
                'children': []
              },
              {
                'slug': 'shaving-cream',
                'id': 1030113,
                'name': '면도크림',
                'children': []
              },
              {
                'slug': 'waxing-and-hair-removal',
                'id': 1030114,
                'name': '왁싱·제모',
                'children': []
              },
              {
                'slug': 'safer-sex-and-contraceptives',
                'id': 1030115,
                'name': '피임기구',
                'children': []
              },
              {
                'slug': 'cotton-balls-and-rounds',
                'id': 1030116,
                'name': '코튼볼',
                'children': []
              },
              {
                'slug': 'incontinence',
                'id': 1030117,
                'name': '요실금',
                'children': []
              },
              {
                'slug': 'wet-shave',
                'id': 1030118,
                'name': '면도',
                'children': []
              },
              {
                'slug': 'electric-shavers',
                'id': 1030119,
                'name': '전기면도',
                'children': []
              }
            ]
          },
          {
            'slug': 'tools-and-accessories',
            'id': 1030200,
            'name': '뷰티액세서리',
            'children': [
              {
                'slug': 'bath-sponges-and-tools',
                'id': 1030201,
                'name': '목욕용품·스펀지',
                'children': []
              },
              {
                'slug': 'eye-masks',
                'id': 1030202,
                'name': '아이마스크',
                'children': []
              },
              {
                'slug': 'beauty-and-spa-tools',
                'id': 1030203,
                'name': '스파용품',
                'children': []
              },
              {
                'slug': 'cotton-balls-and-rounds',
                'id': 1030204,
                'name': '화장솜',
                'children': []
              },
              {
                'slug': 'mirrors',
                'id': 1030205,
                'name': '거울',
                'children': []
              },
              {
                'slug': 'toiletry-kits-and-cases',
                'id': 1030206,
                'name': '화장품주머니',
                'children': []
              },
              {
                'slug': 'tweezers',
                'id': 1030207,
                'name': '핀셋',
                'children': []
              },
              {
                'slug': 'facial-tissues',
                'id': 1030208,
                'name': '미용티슈',
                'children': []
              },
              {
                'slug': 'nail-care-tools',
                'id': 1030209,
                'name': '네일케어',
                'children': []
              },
              {
                'slug': 'top-beauty-tools-and-accessories',
                'id': 1030210,
                'name': '뷰티베스트',
                'children': []
              }
            ]
          },
          {
            'slug': 'hair-care-products',
            'id': 1030300,
            'name': '헤어케어',
            'children': [
              {
                'slug': 'shampoos',
                'id': 1030301,
                'name': '샴푸',
                'children': []
              },
              {
                'slug': 'conditioners',
                'id': 1030302,
                'name': '컨디셔너',
                'children': []
              },
              {
                'slug': 'styling-products',
                'id': 1030303,
                'name': '스타일링',
                'children': []
              },
              {
                'slug': 'scalp-treatments',
                'id': 1030304,
                'name': '두피관리',
                'children': []
              },
              {
                'slug': 'hair-color',
                'id': 1030305,
                'name': '염색',
                'children': []
              },
              {
                'slug': 'hair-loss-products',
                'id': 1030306,
                'name': '탈모관리',
                'children': []
              },
              {
                'slug': 'hair-perms-and-texturizers',
                'id': 1030307,
                'name': '펌·텍스처',
                'children': []
              },
              {
                'slug': 'hair-relaxers-and-treatments',
                'id': 1030308,
                'name': '트리트먼트',
                'children': []
              },
              {
                'slug': 'multicultural-hair-care-products',
                'id': 1030309,
                'name': 'Multicultural Hair Care Products',
                'children': []
              },
              {
                'slug': 'innovative-hair-care',
                'id': 1030310,
                'name': '집중관리',
                'children': []
              }
            ]
          },
          {
            'slug': 'hair-tools-and-accessories',
            'id': 1030400,
            'name': '헤어액세서리',
            'children': [
              {
                'slug': 'brushes',
                'id': 1030401,
                'name': '브러쉬',
                'children': []
              },
              {
                'slug': 'dryers-irons-and-diffusers',
                'id': 1030402,
                'name': '드라이어·고데기',
                'children': []
              },
              {
                'slug': 'hair-rollers',
                'id': 1030403,
                'name': '롤러',
                'children': []
              },
              {
                'slug': 'hair-accessories',
                'id': 1030404,
                'name': '액세서리',
                'children': []
              },
              {
                'slug': 'haircutting-tools',
                'id': 1030405,
                'name': '이발용품',
                'children': []
              },
              {
                'slug': 'combs',
                'id': 1030406,
                'name': '빗',
                'children': []
              }
            ]
          },
          {
            'slug': 'makeup',
            'id': 1030500,
            'name': '메이크업',
            'children': [
              {
                'slug': 'body-art-and-makeup',
                'id': 1030501,
                'name': '바디아트',
                'children': []
              },
              {
                'slug': 'makeup-brushes',
                'id': 1030502,
                'name': '메이크업브러쉬',
                'children': []
              },
              {
                'slug': 'face-makeup',
                'id': 1030503,
                'name': '페이스메이크업',
                'children': []
              },
              {
                'slug': 'lip-makeup',
                'id': 1030504,
                'name': '립메이크업',
                'children': []
              },
              {
                'slug': 'makeup-sets',
                'id': 1030505,
                'name': '메이크업세트',
                'children': []
              },
              {
                'slug': 'eyeliner-and-brow-pencils',
                'id': 1030506,
                'name': '아이라이너·브로우펜슬',
                'children': []
              },
              {
                'slug': 'mascara-and-lashes',
                'id': 1030507,
                'name': '마스카라·래쉬',
                'children': []
              },
              {
                'slug': 'eye-shadow',
                'id': 1030508,
                'name': '아이섀도',
                'children': []
              },
              {
                'slug': 'makeup-sponges',
                'id': 1030509,
                'name': '메이크업스펀지',
                'children': []
              },
              {
                'slug': 'makeup-tools',
                'id': 1030510,
                'name': '메이크업용품',
                'children': []
              }
            ]
          },
          {
            'slug': 'nail-care',
            'id': 1030600,
            'name': '네일케어',
            'children': [
              {
                'slug': 'cuticle-care',
                'id': 1030601,
                'name': '큐티클케어',
                'children': []
              },
              {
                'slug': 'nail-care-tools',
                'id': 1030602,
                'name': '네일케어용품',
                'children': []
              },
              {
                'slug': 'nail-polish',
                'id': 1030603,
                'name': '매니큐어',
                'children': []
              },
              {
                'slug': 'nail-polish-remover',
                'id': 1030604,
                'name': '매니큐어리무버',
                'children': []
              }
            ]
          },
          {
            'slug': 'skin-care',
            'id': 1030700,
            'name': '스킨케어',
            'children': [
              {
                'slug': 'bath-salts-and-bubbles',
                'id': 1030701,
                'name': '입욕제',
                'children': []
              },
              {
                'slug': 'makeup-remover',
                'id': 1030702,
                'name': '메이크업리무버',
                'children': []
              },
              {
                'slug': 'hand-soap',
                'id': 1030703,
                'name': '핸드워시',
                'children': []
              },
              {
                'slug': 'lip-care',
                'id': 1030704,
                'name': '립케어',
                'children': []
              },
              {
                'slug': 'suncare',
                'id': 1030705,
                'name': '선케어',
                'children': []
              },
              {
                'slug': 'toners-and-astringents',
                'id': 1030706,
                'name': '스킨토너',
                'children': []
              },
              {
                'slug': 'body-powder',
                'id': 1030707,
                'name': '바디파우더',
                'children': []
              },
              {
                'slug': 'body-moisturizers',
                'id': 1030708,
                'name': '바디모이스처',
                'children': []
              },
              {
                'slug': 'massage-oil-and-aromatherapy',
                'id': 1030709,
                'name': '마사지오일·아로마',
                'children': []
              },
              {
                'slug': 'hand-sanitizers-and-wipes',
                'id': 1030710,
                'name': '손세정제',
                'children': []
              },
              {
                'slug': 'facial-cleansers',
                'id': 1030711,
                'name': '클랜저',
                'children': []
              },
              {
                'slug': 'facial-moisturizers-and-treatment',
                'id': 1030712,
                'name': '보습·미백',
                'children': []
              },
              {
                'slug': 'soap-and-body-wash',
                'id': 1030713,
                'name': '바디워시',
                'children': []
              },
              {
                'slug': 'shaving-cream',
                'id': 1030714,
                'name': '쉐이빙크림',
                'children': []
              }
            ]
          },
          {
            'slug': 'mens-essentials',
            'id': 1030800,
            'name': '남성용품',
            'children': [
              {
                'slug': 'beard-and-shave',
                'id': 1030801,
                'name': '면도',
                'children': []
              },
              {
                'slug': 'body',
                'id': 1030802,
                'name': '바디',
                'children': []
              },
              {
                'slug': 'face',
                'id': 1030803,
                'name': '페이스',
                'children': []
              },
              {
                'slug': 'hair',
                'id': 1030804,
                'name': '헤어',
                'children': []
              },
              {
                'slug': 'cologne',
                'id': 1030805,
                'name': '향수',
                'children': []
              },
              {
                'slug': 'wellness',
                'id': 1030806,
                'name': '건강',
                'children': []
              }
            ]
          }
        ]
      },
      {
        'slug': 'health',
        'id': 1040000,
        'name': '건강',
        'children': [
          {
            'slug': 'medicine-cabinet',
            'id': 1040100,
            'name': '의약품',
            'children': [
              {
                'slug': 'allergy-sinus-and-asthma',
                'id': 1040101,
                'name': '알러지·천식',
                'children': []
              },
              {
                'slug': 'childrens-medicine',
                'id': 1040102,
                'name': '어린이용약품',
                'children': []
              },
              {
                'slug': 'cold-sore-and-blister-treatments',
                'id': 1040103,
                'name': '물집·발진',
                'children': []
              },
              {
                'slug': 'cough-and-cold',
                'id': 1040104,
                'name': '감기',
                'children': []
              },
              {
                'slug': 'diabetes',
                'id': 1040105,
                'name': '당뇨',
                'children': []
              },
              {
                'slug': 'digestion-and-nausea',
                'id': 1040106,
                'name': '소화불량',
                'children': []
              },
              {
                'slug': 'foot-healthcare',
                'id': 1040107,
                'name': '발건강',
                'children': []
              },
              {
                'slug': 'incontinence',
                'id': 1040108,
                'name': '요실금',
                'children': []
              },
              {
                'slug': 'pain-relievers',
                'id': 1040109,
                'name': '진통제',
                'children': []
              },
              {
                'slug': 'sleep-and-snoring',
                'id': 1040110,
                'name': '수면·코골이',
                'children': []
              },
              {
                'slug': 'smoking-cessation',
                'id': 1040111,
                'name': '금연용품',
                'children': []
              },
              {
                'slug': 'therapeutic-ointments-and-powders',
                'id': 1040112,
                'name': '연고',
                'children': []
              },
              {
                'slug': 'thermometers',
                'id': 1040113,
                'name': '체온계',
                'children': []
              },
              {
                'slug': 'ear-care',
                'id': 1040114,
                'name': '귀건강',
                'children': []
              },
              {
                'slug': 'eye-care',
                'id': 1040115,
                'name': '눈건강',
                'children': []
              }
            ]
          },
          {
            'slug': 'medical-supplies-and-equipment',
            'id': 1040200,
            'name': '의료용품',
            'children': [
              {
                'slug': 'pills-cases-and-splitters',
                'id': 1040201,
                'name': '약케이스',
                'children': []
              },
              {
                'slug': 'bathroom-aids-and-safety',
                'id': 1040202,
                'name': '욕실안전',
                'children': []
              },
              {
                'slug': 'beds-and-accessories',
                'id': 1040203,
                'name': '침대·액세서리',
                'children': []
              },
              {
                'slug': 'braces-splints-and-slings',
                'id': 1040204,
                'name': '보조기',
                'children': []
              },
              {
                'slug': 'daily-living-aids',
                'id': 1040205,
                'name': '상비약품',
                'children': []
              },
              {
                'slug': 'mobility-aids-and-equipment',
                'id': 1040206,
                'name': '이동장비',
                'children': []
              },
              {
                'slug': 'occupational-and-physical-therapy-aids',
                'id': 1040207,
                'name': '치료장비',
                'children': []
              },
              {
                'slug': 'pen-lights',
                'id': 1040208,
                'name': '손전등',
                'children': []
              },
              {
                'slug': 'tests',
                'id': 1040209,
                'name': '테스터',
                'children': []
              },
              {
                'slug': 'first-aid',
                'id': 1040210,
                'name': '구급약품',
                'children': []
              },
              {
                'slug': 'dehumidifiers',
                'id': 1040211,
                'name': '제습기',
                'children': []
              },
              {
                'slug': 'humidifiers',
                'id': 1040212,
                'name': '가습기',
                'children': []
              },
              {
                'slug': 'health-monitors',
                'id': 1040213,
                'name': '헬스모니터',
                'children': []
              }
            ]
          },
          {
            'slug': 'sports-nutrition-and-diet',
            'id': 1040300,
            'name': '헬스·다이어트',
            'children': [
              {
                'slug': 'protein-and-meal-replacement',
                'id': 1040301,
                'name': '프로틴·식사대용',
                'children': []
              },
              {
                'slug': 'energy-and-endurance',
                'id': 1040302,
                'name': '에너지·지구력',
                'children': []
              },
              {
                'slug': 'weight-loss-supplements-and-cleanses',
                'id': 1040303,
                'name': '체중감량',
                'children': []
              },
              {
                'slug': 'mass-gainers',
                'id': 1040304,
                'name': '체중증가',
                'children': []
              },
              {
                'slug': 'amino-acids-and-creatine',
                'id': 1040305,
                'name': '크레아틴·아미노산',
                'children': []
              },
              {
                'slug': 'on-the-go-nutrition',
                'id': 1040306,
                'name': '테이크아웃',
                'children': []
              },
              {
                'slug': 'slimfast-campaign',
                'id': 1040307,
                'name': '슬림패스트캠페인',
                'children': []
              }
            ]
          },
          {
            'slug': 'vitamins-and-dietary-supplements',
            'id': 1040400,
            'name': '건강기능식품',
            'children': [
              {
                'slug': 'minerals',
                'id': 1040401,
                'name': '미네랄',
                'children': []
              },
              {
                'slug': 'supplements',
                'id': 1040402,
                'name': '영양제',
                'children': []
              },
              {
                'slug': 'letter-vitamins',
                'id': 1040403,
                'name': '비타민',
                'children': []
              },
              {
                'slug': 'fish-oils-and-omegas',
                'id': 1040404,
                'name': '오메가3·피쉬오일',
                'children': []
              },
              {
                'slug': 'probiotics',
                'id': 1040405,
                'name': '프로바이오틱스',
                'children': []
              },
              {
                'slug': 'multivitamins',
                'id': 1040406,
                'name': '종합비타민',
                'children': []
              },
              {
                'slug': 'protein-and-meal-replacements',
                'id': 1040407,
                'name': '프로틴·식사대용',
                'children': []
              },
              {
                'slug': 'pill-cases-and-splitters',
                'id': 1040408,
                'name': '약케이스',
                'children': []
              },
              {
                'slug': 'amino-acids-and-creatine',
                'id': 1040409,
                'name': '크레아틴·아미노산',
                'children': []
              },
              {
                'slug': 'weight-loss-supplements',
                'id': 1040410,
                'name': '체중감량',
                'children': []
              },
              {
                'slug': 'new-and-noteworthy-vitamins-and-supplements',
                'id': 1040411,
                'name': '베스트·추천',
                'children': []
              },
              {
                'slug': 'herbs-and-homeopathy',
                'id': 1040412,
                'name': '허브',
                'children': []
              }
            ]
          }
        ]
      },
      {
        'slug': 'baby',
        'id': 1050000,
        'name': '유아동',
        'children': [
          {
            'slug': 'baby-food-and-formula',
            'id': 1050100,
            'name': '이유식·분유',
            'children': [
              {
                'slug': 'baby-and-toddler-snacks',
                'id': 1050101,
                'name': '유아스낵',
                'children': []
              },
              {
                'slug': 'baby-food',
                'id': 1050102,
                'name': '이유식',
                'children': []
              },
              {
                'slug': 'baby-formula',
                'id': 1050103,
                'name': '분유',
                'children': []
              },
              {
                'slug': 'toddler-juices-and-milk',
                'id': 1050104,
                'name': '유아주스·우유',
                'children': []
              }
            ]
          },
          {
            'slug': 'diapering',
            'id': 1050200,
            'name': '기저귀·교체용품',
            'children': [
              {
                'slug': 'diapers',
                'id': 1050201,
                'name': '기저귀',
                'children': []
              },
              {
                'slug': 'baby-wipes',
                'id': 1050202,
                'name': '아기티슈',
                'children': []
              },
              {
                'slug': 'baby-wipe-holders-and-warmers',
                'id': 1050203,
                'name': '아기티슈워머',
                'children': []
              },
              {
                'slug': 'changing-table-accessories',
                'id': 1050204,
                'name': '아기탁자',
                'children': []
              },
              {
                'slug': 'cloth-diapers',
                'id': 1050205,
                'name': '천기저귀',
                'children': []
              },
              {
                'slug': 'cloth-diaper-accessories',
                'id': 1050206,
                'name': '천기저귀액세서리',
                'children': []
              },
              {
                'slug': 'diaper-bags',
                'id': 1050207,
                'name': '기저귀가방',
                'children': []
              },
              {
                'slug': 'diaper-cakes',
                'id': 1050208,
                'name': '기저귀케이크',
                'children': []
              },
              {
                'slug': 'diaper-changing-pads',
                'id': 1050209,
                'name': '기저귀교체패드',
                'children': []
              },
              {
                'slug': 'diaper-creams-and-ointments',
                'id': 1050210,
                'name': '기저귀크림',
                'children': []
              },
              {
                'slug': 'diaper-pails-and-refills',
                'id': 1050211,
                'name': '기저귀휴지통',
                'children': []
              },
              {
                'slug': 'diaper-stackers-and-caddies',
                'id': 1050212,
                'name': '기저귀정리함',
                'children': []
              }
            ]
          },
          {
            'slug': 'baby-gear',
            'id': 1050300,
            'name': '유아용품',
            'children': [
              {
                'slug': 'baby-monitors',
                'id': 1050301,
                'name': '아기모니터',
                'children': []
              },
              {
                'slug': 'baby-seats',
                'id': 1050302,
                'name': '아기의자',
                'children': []
              },
              {
                'slug': 'bouncers-and-walkers',
                'id': 1050303,
                'name': '보행기',
                'children': []
              },
              {
                'slug': 'car-seats',
                'id': 1050304,
                'name': '카시트',
                'children': []
              },
              {
                'slug': 'carriers',
                'id': 1050305,
                'name': '캐리어',
                'children': []
              },
              {
                'slug': 'harnesses-and-leashes',
                'id': 1050306,
                'name': '아기띠',
                'children': []
              },
              {
                'slug': 'play-mats-and-activity-gyms',
                'id': 1050307,
                'name': '아기매트',
                'children': []
              },
              {
                'slug': 'playards-and-travel-beds',
                'id': 1050308,
                'name': '아기침대',
                'children': []
              },
              {
                'slug': 'strollers',
                'id': 1050309,
                'name': '유모차',
                'children': []
              }
            ]
          },
          {
            'slug': 'baby-gear-accessories',
            'id': 1050400,
            'name': '유아액세서리',
            'children': [
              {
                'slug': 'car-seat-and-stroller-toys',
                'id': 1050401,
                'name': '카시트·유모차 장난감',
                'children': []
              },
              {
                'slug': 'car-seat-accessories',
                'id': 1050402,
                'name': '카시트액세서리',
                'children': []
              },
              {
                'slug': 'carrier-accessories',
                'id': 1050403,
                'name': '캐리어액세서리',
                'children': []
              },
              {
                'slug': 'crib-netting',
                'id': 1050404,
                'name': '침대커튼',
                'children': []
              },
              {
                'slug': 'shopping-cart-covers',
                'id': 1050405,
                'name': '쇼핑카트덮개',
                'children': []
              },
              {
                'slug': 'stroller-accessories',
                'id': 1050406,
                'name': '유모차액세서리',
                'children': []
              }
            ]
          },
          {
            'slug': 'feeding-and-nursing',
            'id': 1050500,
            'name': '수유·이유용품',
            'children': [
              {
                'slug': 'baby-bottles-and-accessories',
                'id': 1050501,
                'name': '젖병·액세서리',
                'children': []
              },
              {
                'slug': 'baby-food',
                'id': 1050502,
                'name': '이유식',
                'children': []
              },
              {
                'slug': 'baby-formula',
                'id': 1050503,
                'name': '분유',
                'children': []
              },
              {
                'slug': 'bibs-and-burp-cloths',
                'id': 1050504,
                'name': '턱받이',
                'children': []
              },
              {
                'slug': 'breast-pump',
                'id': 1050505,
                'name': '유축기',
                'children': []
              },
              {
                'slug': 'breast-pump-accessories',
                'id': 1050506,
                'name': '유축기액세서리',
                'children': []
              },
              {
                'slug': 'food-and-formula-prep',
                'id': 1050507,
                'name': '유아용식기',
                'children': []
              },
              {
                'slug': 'food-storage-and-on-the-go',
                'id': 1050508,
                'name': '보관용기',
                'children': []
              },
              {
                'slug': 'highchairs-and-boosters',
                'id': 1050509,
                'name': '보조의자',
                'children': []
              },
              {
                'slug': 'kids-tabletop',
                'id': 1050510,
                'name': '아기식탁',
                'children': []
              },
              {
                'slug': 'lunch-bags',
                'id': 1050511,
                'name': '런치백',
                'children': []
              },
              {
                'slug': 'nursing-accessories',
                'id': 1050512,
                'name': '식기액세서리',
                'children': []
              },
              {
                'slug': 'pacifiers-and-teethers',
                'id': 1050513,
                'name': '젖꼭지',
                'children': []
              },
              {
                'slug': 'sippys-and-cups',
                'id': 1050514,
                'name': '역류방지컵',
                'children': []
              }
            ]
          },
          {
            'slug': 'babyproofing',
            'id': 1050600,
            'name': '아기안전',
            'children': [
              {
                'slug': 'baby-monitors',
                'id': 1050601,
                'name': '아기모니터',
                'children': []
              },
              {
                'slug': 'bath-safety',
                'id': 1050602,
                'name': '욕실안전',
                'children': []
              },
              {
                'slug': 'edge-and-corner-guards',
                'id': 1050603,
                'name': '모서리안전',
                'children': []
              },
              {
                'slug': 'electrical-safety',
                'id': 1050604,
                'name': '전기안전',
                'children': []
              },
              {
                'slug': 'gates-and-rails',
                'id': 1050605,
                'name': '문·난간',
                'children': []
              },
              {
                'slug': 'kitchen-safety',
                'id': 1050606,
                'name': '주방안전',
                'children': []
              },
              {
                'slug': 'outdoor-safety',
                'id': 1050607,
                'name': '실외안전',
                'children': []
              },
              {
                'slug': 'rails-and-rail-guards',
                'id': 1050608,
                'name': '난간안전',
                'children': []
              },
              {
                'slug': 'sleep-positioners',
                'id': 1050609,
                'name': 'Sleep Positioners',
                'children': []
              }
            ]
          },
          {
            'slug': 'baby-care',
            'id': 1050700,
            'name': '아기스킨케어',
            'children': [
              {
                'slug': 'baby-bubble-bath',
                'id': 1050701,
                'name': '아기거품목욕',
                'children': []
              },
              {
                'slug': 'baby-oil-and-lotion',
                'id': 1050702,
                'name': '베이비로션·오일',
                'children': []
              },
              {
                'slug': 'baby-powder',
                'id': 1050703,
                'name': '베이비파우더',
                'children': []
              },
              {
                'slug': 'baby-shampoo-and-wash',
                'id': 1050704,
                'name': '아기샴푸',
                'children': []
              }
            ]
          },
          {
            'slug': 'potty-training',
            'id': 1050800,
            'name': '배변훈련',
            'children': [
              {
                'slug': 'potties',
                'id': 1050801,
                'name': '유아용변기',
                'children': []
              },
              {
                'slug': 'potty-training-aids',
                'id': 1050802,
                'name': '배변훈련용품',
                'children': []
              },
              {
                'slug': 'seat-covers',
                'id': 1050803,
                'name': '변기커버',
                'children': []
              },
              {
                'slug': 'step-stools',
                'id': 1050804,
                'name': '발판',
                'children': []
              },
              {
                'slug': 'training-pants',
                'id': 1050805,
                'name': '트레이닝팬츠',
                'children': []
              }
            ]
          },
          {
            'slug': 'baby-bathing',
            'id': 1050900,
            'name': '아기목욕',
            'children': [
              {
                'slug': 'baby-bath-accessories',
                'id': 1050901,
                'name': '아기목욕액세서리',
                'children': []
              },
              {
                'slug': 'baby-grooming',
                'id': 1050902,
                'name': '아기단장',
                'children': []
              },
              {
                'slug': 'baby-tubs',
                'id': 1050903,
                'name': '아기욕조',
                'children': []
              },
              {
                'slug': 'baby-washcloths-and-towels',
                'id': 1050904,
                'name': '목욕가운·타월',
                'children': []
              },
              {
                'slug': 'bath-toys',
                'id': 1050905,
                'name': '욕조장난감',
                'children': []
              }
            ]
          },
          {
            'slug': 'baby-gifts',
            'id': 1051000,
            'name': '아기선물',
            'children': [
              {
                'slug': 'baby-gift-sets-and-baskets',
                'id': 1051001,
                'name': '유아선물세트',
                'children': []
              },
              {
                'slug': 'keepsakes-and-albums',
                'id': 1051002,
                'name': '기념품·앨범',
                'children': []
              },
              {
                'slug': 'new-mom-gifts',
                'id': 1051003,
                'name': 'New Mom Gifts',
                'children': []
              },
              {
                'slug': 'toy-banks',
                'id': 1051004,
                'name': '장난감은행',
                'children': []
              }
            ]
          }
        ]
      },
      {
        'slug': 'pet-supplies',
        'id': 1060000,
        'name': '반려용품',
        'children': [
          {
            'slug': 'dog-supplies',
            'id': 1060100,
            'name': '강아지',
            'children': [
              {
                'slug': 'collars-harnesses-and-leashes',
                'id': 1060101,
                'name': '강아지끈',
                'children': []
              },
              {
                'slug': 'dog-apparel',
                'id': 1060102,
                'name': '강아지옷',
                'children': []
              },
              {
                'slug': 'dog-beds',
                'id': 1060103,
                'name': '강아지침구',
                'children': []
              },
              {
                'slug': 'dog-bowls-and-feeders',
                'id': 1060104,
                'name': '강아지식기',
                'children': []
              },
              {
                'slug': 'travel-supplies',
                'id': 1060105,
                'name': '강아지여행용품',
                'children': []
              },
              {
                'slug': 'cleaning-supplies',
                'id': 1060106,
                'name': '강아지목욕용품',
                'children': []
              },
              {
                'slug': 'crates-and-kennels',
                'id': 1060107,
                'name': '강아지집',
                'children': []
              },
              {
                'slug': 'flea-and-tick-control',
                'id': 1060108,
                'name': '벼룩·진드기관리',
                'children': []
              },
              {
                'slug': 'dog-food',
                'id': 1060109,
                'name': '강아지사료',
                'children': []
              },
              {
                'slug': 'grooming',
                'id': 1060110,
                'name': '강아지단장',
                'children': []
              },
              {
                'slug': 'dog-houses',
                'id': 1060111,
                'name': 'Dog Houses',
                'children': []
              },
              {
                'slug': 'medication-and-health-supplies',
                'id': 1060112,
                'name': '강아지건강용품',
                'children': []
              },
              {
                'slug': 'modern-furniture',
                'id': 1060113,
                'name': '강아지가구',
                'children': []
              },
              {
                'slug': 'dog-technology',
                'id': 1060114,
                'name': '강아지기술용품',
                'children': []
              },
              {
                'slug': 'toys',
                'id': 1060115,
                'name': '장난감',
                'children': []
              },
              {
                'slug': 'training-and-behavior',
                'id': 1060116,
                'name': '훈련',
                'children': []
              },
              {
                'slug': 'treats',
                'id': 1060117,
                'name': '강아지치료',
                'children': []
              },
              {
                'slug': 'gates-and-ramps',
                'id': 1060118,
                'name': '문·통로',
                'children': []
              },
              {
                'slug': 'poop-bags-and-housebreaking',
                'id': 1060119,
                'name': '배변봉지',
                'children': []
              }
            ]
          },
          {
            'slug': 'cat-supplies',
            'id': 1060200,
            'name': '고양이',
            'children': [
              {
                'slug': 'cat-beds',
                'id': 1060201,
                'name': '고양이침대',
                'children': []
              },
              {
                'slug': 'carriers',
                'id': 1060202,
                'name': '캐리어',
                'children': []
              },
              {
                'slug': 'cleaning-supplies',
                'id': 1060203,
                'name': '목욕용품',
                'children': []
              },
              {
                'slug': 'flea-and-tick-control',
                'id': 1060204,
                'name': '벼룩·진드기관리',
                'children': []
              },
              {
                'slug': 'cat-food',
                'id': 1060205,
                'name': '고양이사료',
                'children': []
              },
              {
                'slug': 'cat-grooming',
                'id': 1060206,
                'name': '고양이단장',
                'children': []
              },
              {
                'slug': 'health-supplies',
                'id': 1060207,
                'name': '건강용품',
                'children': []
              },
              {
                'slug': 'litter',
                'id': 1060208,
                'name': '고양이배변',
                'children': []
              },
              {
                'slug': 'litter-boxes',
                'id': 1060209,
                'name': '배변박스',
                'children': []
              },
              {
                'slug': 'scratchers',
                'id': 1060210,
                'name': '스크래쳐',
                'children': []
              },
              {
                'slug': 'cat-toys',
                'id': 1060211,
                'name': '고양이장난감',
                'children': []
              },
              {
                'slug': 'training-and-behavior-aids',
                'id': 1060212,
                'name': '고양이훈련',
                'children': []
              },
              {
                'slug': 'cat-treats',
                'id': 1060213,
                'name': '고양이치료',
                'children': []
              },
              {
                'slug': 'cat-trees-and-condos',
                'id': 1060214,
                'name': '캣타워',
                'children': []
              },
              {
                'slug': 'collars-harnesses-and-leashes',
                'id': 1060215,
                'name': '고양이끈',
                'children': []
              },
              {
                'slug': 'feeding-and-watering-supplies',
                'id': 1060216,
                'name': '고양이식기',
                'children': []
              }
            ]
          }
        ]
      },
      // {
      //   'slug': 'office-supplies',
      //   'id': 1070000,
      //   'name': '사무용품',
      //   'children': [
      //     {
      //       'slug': 'pens-pencils-and-markers',
      //       'id': 1070100,
      //       'name': '필기구',
      //       'children': []
      //     },
      //     {
      //       'slug': 'tape-and-adhesives',
      //       'id': 1070200,
      //       'name': '테이프·접착제',
      //       'children': []
      //     },
      //     {
      //       'slug': 'office-paper',
      //       'id': 1070300,
      //       'name': '종이',
      //       'children': []
      //     },
      //     {
      //       'slug': 'presentation-boards',
      //       'id': 1070400,
      //       'name': '프레젠테이션보드',
      //       'children': []
      //     },
      //     {
      //       'slug': 'workspace-organizers',
      //       'id': 1070500,
      //       'name': '정리함',
      //       'children': []
      //     },
      //     {
      //       'slug': 'staplers-and-punches',
      //       'id': 1070600,
      //       'name': '스테이플러',
      //       'children': []
      //     },
      //     {
      //       'slug': 'labels-indexes-and-stamps',
      //       'id': 1070700,
      //       'name': '라벨·인덱스',
      //       'children': []
      //     },
      //     {
      //       'slug': 'filing-products',
      //       'id': 1070800,
      //       'name': '서류철',
      //       'children': []
      //     },
      //     {
      //       'slug': 'binders-and-binding-systems',
      //       'id': 1070900,
      //       'name': '바인더',
      //       'children': []
      //     },
      //     {
      //       'slug': 'scissors-cutters-and-measuring-devices',
      //       'id': 1071000,
      //       'name': '문구용품',
      //       'children': []
      //     },
      //     {
      //       'slug': 'envelopes-and-shipping-supplies',
      //       'id': 1071100,
      //       'name': '봉투',
      //       'children': []
      //     },
      //     {
      //       'slug': 'calendars-and-planners',
      //       'id': 1071200,
      //       'name': '캘린더·플래너',
      //       'children': []
      //     },
      //     {
      //       'slug': 'stationary',
      //       'id': 1071300,
      //       'name': 'Stationary',
      //       'children': []
      //     }
      //   ]
      // }
    ]
  },
  '2000000' : {
    'slug': 'beauty',
    'id': 2000000,
    'name': '뷰티',
    'children': [
      {
        'slug': 'skin-care',
        'id': 2010000,
        'name': '스킨케어',
        'children': [
          {
            'slug': 'skin-and-toner',
            'id': 2010100,
            'name': '스킨·토너',
            'children': [
              {
                'slug': 'skin',
                'id': 2010101,
                'name': '스킨',
                'children': []
              },
              {
                'slug': 'toner',
                'id': 2010102,
                'name': '토너',
                'children': []
              }
            ]
          },
          {
            'slug': 'mist',
            'id': 2010200,
            'name': '미스트',
            'children': []
          },
          {
            'slug': 'face-moisturizer-and-treatment',
            'id': 2010300,
            'name': '페이스 모이스쳐·트리트먼트',
            'children': [
              {
                'slug': 'lotion',
                'id': 2010301,
                'name': '로션',
                'children': []
              },
              {
                'slug': 'emulsion',
                'id': 2010302,
                'name': '에멀젼',
                'children': []
              },
              {
                'slug': 'oil',
                'id': 2010303,
                'name': '오일',
                'children': []
              },
              {
                'slug': 'essence',
                'id': 2010304,
                'name': '에센스',
                'children': []
              },
              {
                'slug': 'ample',
                'id': 2010305,
                'name': '엠플',
                'children': []
              },
              {
                'slug': 'serum',
                'id': 2010306,
                'name': '세럼',
                'children': []
              }
            ]
          },
          {
            'slug': 'cream-and-gel',
            'id': 2010400,
            'name': '크림·젤',
            'children': []
          },
          {
            'slug': 'mask-and-pack',
            'id': 2010500,
            'name': '마스크·팩',
            'children': []
          },
          {
            'slug': 'eye-care',
            'id': 2010600,
            'name': '아이케어',
            'children': []
          },
          {
            'slug': 'lip-care',
            'id': 2010700,
            'name': '립케어',
            'children': []
          },
          {
            'slug': 'sun-care',
            'id': 2010800,
            'name': '선케어',
            'children': [
              {
                'slug': 'stick-and-balm',
                'id': 2010801,
                'name': '스틱·밤',
                'children': []
              },
              {
                'slug': 'cream-and-gel',
                'id': 2010802,
                'name': '크림·젤',
                'children': []
              }
            ]
          }
        ]
      },
      {
        'slug': 'cleansing-and-peeling',
        'id': 2020000,
        'name': '클렌징/필링',
        'children': [
          {
            'slug': 'cleansing-foam-and-gel',
            'id': 2020100,
            'name': '클렌징 폼·젤',
            'children': []
          },
          {
            'slug': 'cleansing-water',
            'id': 2020200,
            'name': '클렌징 워터',
            'children': []
          },
          {
            'slug': 'cleansing-oil',
            'id': 2020300,
            'name': '클렌징 오일',
            'children': []
          },
          {
            'slug': 'cleansing-lotion-and-cream',
            'id': 2020400,
            'name': '클렌징 로션·크림',
            'children': []
          },
          {
            'slug': 'cleansing-soap',
            'id': 2020500,
            'name': '클렌징 비누',
            'children': []
          },
          {
            'slug': 'cleansing-wipe',
            'id': 2020600,
            'name': '클렌징 티슈',
            'children': []
          },
          {
            'slug': 'lip-and-eye-cleanser',
            'id': 2020700,
            'name': '립·아이 리무버',
            'children': []
          },
          {
            'slug': 'scrubs-and-peeling',
            'id': 2020800,
            'name': '스크럽·필링',
            'children': []
          }
        ]
      },
      {
        'slug': 'sun-care',
        'id': 2030000,
        'name': '선케어',
        'children': [
          {
            'slug': 'face',
            'id': 2030100,
            'name': '페이스',
            'children': [
              {
                'slug': 'stick-and-balm',
                'id': 2030101,
                'name': '스틱·밤',
                'children': []
              },
              {
                'slug': 'cream-and-gel',
                'id': 2030102,
                'name': '크림·젤',
                'children': []
              }
            ]
          },
          {
            'slug': 'body',
            'id': 2030200,
            'name': '바디',
            'children': [
              {
                'slug': 'stick-and-balm',
                'id': 2030201,
                'name': '스틱·밤',
                'children': []
              },
              {
                'slug': 'cream-and-gel',
                'id': 2030202,
                'name': '크림·젤',
                'children': []
              }
            ]
          }
        ]
      },
      {
        'slug': 'makeup',
        'id': 2040000,
        'name': '메이크업',
        'children': [
          {
            'slug': 'face',
            'id': 2040100,
            'name': '페이스',
            'children': [
              {
                'slug': 'makeup-base',
                'id': 2040101,
                'name': '메이크업 베이스',
                'children': []
              },
              {
                'slug': 'primer',
                'id': 2040102,
                'name': '프라이머',
                'children': []
              },
              {
                'slug': 'bb-and-cc-cream',
                'id': 2040103,
                'name': 'BB·CC 크림',
                'children': []
              },
              {
                'slug': 'foundation',
                'id': 2040104,
                'name': '파운데이션',
                'children': []
              },
              {
                'slug': 'cushion-and-powder-and-pact',
                'id': 2040105,
                'name': '쿠션·파우더·팩트',
                'children': []
              },
              {
                'slug': 'concealer',
                'id': 2040106,
                'name': '컨실러',
                'children': []
              },
              {
                'slug': 'blusher',
                'id': 2040107,
                'name': '블러셔',
                'children': []
              },
              {
                'slug': 'highlighter-and-shading',
                'id': 2040108,
                'name': '하이라이터·셰이딩',
                'children': []
              }
            ]
          },
          {
            'slug': 'eye',
            'id': 2040200,
            'name': '아이 ',
            'children': [
              {
                'slug': 'eyeshadow',
                'id': 2040201,
                'name': '아이섀도',
                'children': []
              },
              {
                'slug': 'eyeliner',
                'id': 2040202,
                'name': '아이라이너',
                'children': []
              },
              {
                'slug': 'eyebrow',
                'id': 2040203,
                'name': '아이브로우',
                'children': []
              },
              {
                'slug': 'mascara',
                'id': 2040204,
                'name': '마스카라',
                'children': []
              }
            ]
          },
          {
            'slug': 'lip',
            'id': 2040300,
            'name': '립 ',
            'children': [
              {
                'slug': 'lipstick',
                'id': 2040301,
                'name': '립스틱',
                'children': []
              },
              {
                'slug': 'lip-tint',
                'id': 2040302,
                'name': '립틴트',
                'children': []
              },
              {
                'slug': 'lip-glosse',
                'id': 2040303,
                'name': '립글로스',
                'children': []
              },
              {
                'slug': 'lip-treatment-and-balm',
                'id': 2040304,
                'name': '립케어·립밤',
                'children': []
              }
            ]
          },
          {
            'slug': 'makeup-brush-and-applicator',
            'id': 2040400,
            'name': '메이크업 브러쉬·도구',
            'children': []
          }
        ]
      },
      {
        'slug': 'body-care',
        'id': 2050000,
        'name': '바디케어',
        'children': [
          {
            'slug': 'body-wash',
            'id': 2050100,
            'name': '바디워시',
            'children': []
          },
          {
            'slug': 'body-lotion',
            'id': 2050200,
            'name': '바디로션',
            'children': []
          },
          {
            'slug': 'body-cream-and-gel',
            'id': 2050300,
            'name': '바디크림·젤',
            'children': []
          },
          {
            'slug': 'body-oil-and-essence',
            'id': 2050400,
            'name': '바디오일·에센스',
            'children': []
          },
          {
            'slug': 'body-scrub',
            'id': 2050500,
            'name': '바디스크럽',
            'children': []
          },
          {
            'slug': 'body-mist',
            'id': 2050600,
            'name': '바디미스트',
            'children': []
          },
          {
            'slug': 'hand-and-foot-treatment',
            'id': 2050700,
            'name': '핸드·풋케어',
            'children': []
          },
          {
            'slug': 'bath-salt-and-bubble',
            'id': 2050800,
            'name': '입욕제',
            'children': []
          },
          {
            'slug': 'feminine-care',
            'id': 2050900,
            'name': '여성청결제',
            'children': []
          },
          {
            'slug': 'deodorant',
            'id': 2051000,
            'name': '데오드란트',
            'children': []
          },
          {
            'slug': 'other-body-product',
            'id': 2051100,
            'name': '바디 기타',
            'children': []
          }
        ]
      },
      {
        'slug': 'hair-care',
        'id': 2060000,
        'name': '헤어케어',
        'children': [
          {
            'slug': 'shampoo',
            'id': 2060100,
            'name': '샴푸',
            'children': []
          },
          {
            'slug': 'conditioner-and-treatment',
            'id': 2060200,
            'name': '린스·트리트먼트',
            'children': []
          },
          {
            'slug': 'essence-and-oil',
            'id': 2060300,
            'name': '에센스·오일',
            'children': []
          },
          {
            'slug': 'mist',
            'id': 2060400,
            'name': '미스트',
            'children': []
          },
          {
            'slug': 'styling-product',
            'id': 2060500,
            'name': '스타일링',
            'children': []
          },
          {
            'slug': 'other-hair-product',
            'id': 2060600,
            'name': '헤어기타',
            'children': []
          }
        ]
      },
      {
        'slug': 'fragrance',
        'id': 2070000,
        'name': '향수',
        'children': [
          {
            'slug': 'women',
            'id': 2070100,
            'name': '여자향수',
            'children': []
          },
          {
            'slug': 'men',
            'id': 2070200,
            'name': '남자향수',
            'children': []
          },
          {
            'slug': 'fragrance-set',
            'id': 2070300,
            'name': '향수세트',
            'children': []
          }
        ]
      },
      {
        'slug': 'candle-and-diffuser',
        'id': 2080000,
        'name': '캔들·디퓨저',
        'children': [
          {
            'slug': 'candle',
            'id': 2080100,
            'name': '캔들',
            'children': []
          },
          {
            'slug': 'diffuser',
            'id': 2080200,
            'name': '디퓨저',
            'children': []
          }
        ]
      },
      {
        'slug': 'mens-grooming',
        'id': 2090000,
        'name': '남성',
        'children': [
          {
            'slug': 'skin',
            'id': 2090100,
            'name': '스킨케어',
            'children': []
          },
          {
            'slug': 'body',
            'id': 2090200,
            'name': '바디케어',
            'children': []
          },
          {
            'slug': 'hair',
            'id': 2090300,
            'name': '헤어케어',
            'children': []
          },
          {
            'slug': 'makeup',
            'id': 2090400,
            'name': '메이크업 ',
            'children': []
          },
          {
            'slug': 'cologne-and-deodorant',
            'id': 2090500,
            'name': '향수·데오드란트',
            'children': []
          },
          {
            'slug': 'shave',
            'id': 2090600,
            'name': '쉐이빙·잡화',
            'children': []
          }
        ]
      },
      {
        'slug': 'k-beauty',
        'id': 2100000,
        'name': 'K BEAUTY',
        'children': []
      }
    ]
  }
};







export const CATEGORY_CODE_MAP_CONST = {
  'pantry-and-household': {
    'code': 1000000,
    'grocery': {
      'code': 1010000,
      'beverages': {
        'code': 1010100,
        'water': {
          'code': 1010101
        },
        'sports-and-energy-drinks': {
          'code': 1010102
        },
        'soft-drinks': {
          'code': 1010103
        },
        'coffee': {
          'code': 1010104
        },
        'tea': {
          'code': 1010105
        },
        'milk': {
          'code': 1010106
        },
        'non-dairy-milk': {
          'code': 1010107
        },
        'juice': {
          'code': 1010108
        },
        'applesauce-fruit-cups-and-squeezes': {
          'code': 1010201
        },
        'chips-and-pretzels': {
          'code': 1010202
        },
        'cookies': {
          'code': 1010203
        },
        'bread-and-crackers': {
          'code': 1010204
        },
        'fruit-and-vegetable-snacks': {
          'code': 1010205
        },
        'protein-and-granola-bars': {
          'code': 1010206
        },
        'ice-cream-cones-and-toppings': {
          'code': 1010207
        },
        'jerky-and-dried-meats': {
          'code': 1010208
        },
        'nuts-seeds-and-trail-mix': {
          'code': 1010209
        },
        'popcorn-and-puffed-snacks': {
          'code': 1010210
        },
        'pudding-and-gelatin': {
          'code': 1010211
        }
      },
      'candy-gum-and-chocolate': {
        'code': 1010300,
        'chocolate': {
          'code': 1010301
        },
        'chewing-gum': {
          'code': 1010302
        },
        'candy': {
          'code': 1010303
        },
        'other-sweets': {
          'code': 1010304
        }
      },
      'breakfast-foods': {
        'code': 1010400,
        'cold-cereals': {
          'code': 1010401
        },
        'hot-cereals-and-oats': {
          'code': 1010402
        },
        'toaster-pastries': {
          'code': 1010403
        },
        'granola-and-museli': {
          'code': 1010404
        },
        'meal-replacement-proein-and-granola-bars': {
          'code': 1010405
        }
      },
      'soups-meals-and-side-dishes': {
        'code': 1010500,
        'macaroni-and-cheese': {
          'code': 1010501
        },
        'soups': {
          'code': 1010502
        },
        'broth': {
          'code': 1010503
        },
        'chilis-and-stews': {
          'code': 1010504
        },
        'asian-meals': {
          'code': 1010505
        },
        'italian-meals': {
          'code': 1010506
        },
        'mexican-meals-and-taco-kits': {
          'code': 1010507
        },
        'indian-meals': {
          'code': 1010508
        },
        'potatoes-and-stuffings': {
          'code': 1010509
        }
      },
      'pantry': {
        'code': 1010600,
        'spices-and-seasonings': {
          'code': 1010601
        },
        'salt-and-pepper': {
          'code': 1010602
        },
        'condiments': {
          'code': 1010603
        },
        'oils': {
          'code': 1010604
        },
        'vinegars': {
          'code': 1010605
        },
        'salad-dressings': {
          'code': 1010606
        },
        'salad-toppings': {
          'code': 1010607
        },
        'sauces-and-marinades': {
          'code': 1010608
        },
        'salsas-and-dips': {
          'code': 1010609
        },
        'butters': {
          'code': 1010610
        },
        'jams-jellies-and-preserves': {
          'code': 1010611
        },
        'sweet-spreads': {
          'code': 1010612
        },
        'flours-and-meals': {
          'code': 1010613
        },
        'sugar-and-other-sweeteners': {
          'code': 1010614
        },
        'baking-ingredients': {
          'code': 1010615
        },
        'baking-mixes': {
          'code': 1010616
        },
        'honey-and-syrups': {
          'code': 1010617
        }
      },
      'pasta-and-pasta-sauce': {
        'code': 1010700,
        'pasta-and-noodles': {
          'code': 1010701
        },
        'pasta-sauces': {
          'code': 1010702
        }
      },
      'canned-and-jarred-food': {
        'code': 1010800,
        'canned-beans': {
          'code': 1010801
        },
        'canned-fruit': {
          'code': 1010802
        },
        'canned-meat-and-seafood': {
          'code': 1010803
        },
        'canned-vegetables': {
          'code': 1010804
        },
        'canned-tomatoes-and-paste': {
          'code': 1010805
        },
        'pickled-vegetables-and-olives': {
          'code': 1010806
        }
      },
      'cooking-and-baking-supplies': {
        'code': 1010900,
        'baking-mixes': {
          'code': 1010901
        },
        'baking-ingredients': {
          'code': 1010902
        },
        'breadcrumbs': {
          'code': 1010903
        },
        'doughs-shells-and-crusts': {
          'code': 1010904
        },
        'extracts': {
          'code': 1010905
        },
        'flours-and-meals': {
          'code': 1010906
        },
        'frosting-and-decoration': {
          'code': 1010907
        },
        'marshmallows': {
          'code': 1010908
        },
        'sugar-and-other-sweeteners': {
          'code': 1010909
        },
        'honey-and-syrups': {
          'code': 1010910
        }
      },
      'rice-beans-and-grains': {
        'code': 1011000,
        'dry-beans': {
          'code': 1011001
        },
        'grains': {
          'code': 1011002
        },
        'quinoa': {
          'code': 1011003
        },
        'rice': {
          'code': 1011004
        },
        'couscous': {
          'code': 1011005
        }
      },
      'international-food': {
        'code': 1011100,
        'indian-cuisine': {
          'code': 1011101
        },
        'chinese-cuisine': {
          'code': 1011102
        },
        'japanese-cuisine': {
          'code': 1011103
        },
        'korean-cuisine': {
          'code': 1011104
        },
        'asian-cuisine': {
          'code': 1011105
        },
        'mexican-cuisine': {
          'code': 1011106
        },
        'latin-american-cuisine': {
          'code': 1011107
        },
        'european-cuisine': {
          'code': 1011108
        }
      }
    },
    'household-supplies': {
      'code': 1020000,
      'paper-and-plastic-products': {
        'code': 1020100,
        'paper-towels': {
          'code': 1020101
        },
        'toilet-paper': {
          'code': 1020102
        },
        'facial-tissues': {
          'code': 1020103
        },
        'disposable-tableware': {
          'code': 1020104
        },
        'paper-napkins': {
          'code': 1020105
        },
        'disposable-coffee-filters': {
          'code': 1020106
        }
      },
      'laundry': {
        'code': 1020200,
        'laundry-detergent': {
          'code': 1020201
        },
        'fabric-softener': {
          'code': 1020202
        },
        'dryer-sheets-and-balls': {
          'code': 1020203
        },
        'stain-removers': {
          'code': 1020204
        },
        'scent-boosters': {
          'code': 1020205
        },
        'bleach': {
          'code': 1020206
        },
        'washing-machine-cleaners': {
          'code': 1020207
        },
        'other-laundry-care': {
          'code': 1020208
        }
      },
      'cleaning-products': {
        'code': 1020300,
        'all-purpose-cleaners': {
          'code': 1020301
        },
        'cleaning-wipes': {
          'code': 1020302
        },
        'bleach': {
          'code': 1020303
        },
        'sponges-and-brushes': {
          'code': 1020304
        },
        'dishwashing-detergent': {
          'code': 1020305
        },
        'dish-soap': {
          'code': 1020306
        },
        'bathroom-cleaners': {
          'code': 1020307
        },
        'kitchen-cleaners': {
          'code': 1020308
        },
        'produce-wash': {
          'code': 1020309
        },
        'drain-cleaners': {
          'code': 1020310
        },
        'floor-cleaners': {
          'code': 1020311
        },
        'specialty-cleaners': {
          'code': 1020312
        },
        'glass-cleaners': {
          'code': 1020313
        }
      },
      'cleaning-tools': {
        'code': 1020400,
        'sponges-and-brushes': {
          'code': 1020401
        },
        'mops-and-accessories': {
          'code': 1020402
        },
        'dusting-tools-and-cloths': {
          'code': 1020403
        },
        'cleaning-gloves': {
          'code': 1020404
        },
        'brooms': {
          'code': 1020405
        },
        'bowl-brushes-and-plungers': {
          'code': 1020406
        },
        'dustbins': {
          'code': 1020407
        }
      },
      'food-storage-and-trash-bags': {
        'code': 1020500,
        'food-storage-bags': {
          'code': 1020501
        },
        'foil': {
          'code': 1020502
        },
        'food-storage-containers': {
          'code': 1020503
        },
        'plastic-wrap': {
          'code': 1020504
        },
        'wax-and-parchment-paper': {
          'code': 1020505
        },
        'trash-bags': {
          'code': 1020506
        }
      },
      'home-fragrance': {
        'code': 1020600,
        'air-fresheners': {
          'code': 1020601
        },
        'candles': {
          'code': 1020602
        },
        'fragrance-diffusers': {
          'code': 1020603
        }
      },
      'light-bulbs': {
        'code': 1020700
      },
      'insect-and-pest-control': {
        'code': 1020800,
        'indoor-pest-control': {
          'code': 1020801
        },
        'outdoor-pest-control': {
          'code': 1020802
        },
        'insect-repellent': {
          'code': 1020803
        }
      }
    },
    'personal-care': {
      'code': 1030000,
      'oral-and-personal-care': {
        'code': 1030100,
        'deodorant': {
          'code': 1030101
        },
        'ear-care': {
          'code': 1030102
        },
        'eye-care': {
          'code': 1030103
        },
        'feminine-care': {
          'code': 1030104
        },
        'toothbrushes': {
          'code': 1030105
        },
        'toothpaste': {
          'code': 1030106
        },
        'mouthwash': {
          'code': 1030107
        },
        'dental-floss': {
          'code': 1030108
        },
        'manual-toothbrushes': {
          'code': 1030109
        },
        'electric-toothbrushes': {
          'code': 1030110
        },
        'other-oral-care': {
          'code': 1030111
        },
        'razors': {
          'code': 1030112
        },
        'shaving-cream': {
          'code': 1030113
        },
        'waxing-and-hair-removal': {
          'code': 1030114
        },
        'safer-sex-and-contraceptives': {
          'code': 1030115
        },
        'cotton-balls-and-rounds': {
          'code': 1030116
        },
        'incontinence': {
          'code': 1030117
        },
        'wet-shave': {
          'code': 1030118
        },
        'electric-shavers': {
          'code': 1030119
        }
      },
      'tools-and-accessories': {
        'code': 1030200,
        'bath-sponges-and-tools': {
          'code': 1030201
        },
        'eye-masks': {
          'code': 1030202
        },
        'beauty-and-spa-tools': {
          'code': 1030203
        },
        'cotton-balls-and-rounds': {
          'code': 1030204
        },
        'mirrors': {
          'code': 1030205
        },
        'toiletry-kits-and-cases': {
          'code': 1030206
        },
        'tweezers': {
          'code': 1030207
        },
        'facial-tissues': {
          'code': 1030208
        },
        'nail-care-tools': {
          'code': 1030209
        },
        'top-beauty-tools-and-accessories': {
          'code': 1030210
        }
      },
      'hair-care-products': {
        'code': 1030300,
        'shampoos': {
          'code': 1030301
        },
        'conditioners': {
          'code': 1030302
        },
        'styling-products': {
          'code': 1030303
        },
        'scalp-treatments': {
          'code': 1030304
        },
        'hair-color': {
          'code': 1030305
        },
        'hair-loss-products': {
          'code': 1030306
        },
        'hair-perms-and-texturizers': {
          'code': 1030307
        },
        'hair-relaxers-and-treatments': {
          'code': 1030308
        },
        'multicultural-hair-care-products': {
          'code': 1030309
        },
        'innovative-hair-care': {
          'code': 1030310
        }
      },
      'hair-tools-and-accessories': {
        'code': 1030400,
        'brushes': {
          'code': 1030401
        },
        'dryers-irons-and-diffusers': {
          'code': 1030402
        },
        'hair-rollers': {
          'code': 1030403
        },
        'hair-accessories': {
          'code': 1030404
        },
        'haircutting-tools': {
          'code': 1030405
        },
        'combs': {
          'code': 1030406
        }
      },
      'makeup': {
        'code': 1030500,
        'body-art-and-makeup': {
          'code': 1030501
        },
        'makeup-brushes': {
          'code': 1030502
        },
        'face-makeup': {
          'code': 1030503
        },
        'lip-makeup': {
          'code': 1030504
        },
        'makeup-sets': {
          'code': 1030505
        },
        'eyeliner-and-brow-pencils': {
          'code': 1030506
        },
        'mascara-and-lashes': {
          'code': 1030507
        },
        'eye-shadow': {
          'code': 1030508
        },
        'makeup-sponges': {
          'code': 1030509
        },
        'makeup-tools': {
          'code': 1030510
        }
      },
      'nail-care': {
        'code': 1030600,
        'cuticle-care': {
          'code': 1030601
        },
        'nail-care-tools': {
          'code': 1030602
        },
        'nail-polish': {
          'code': 1030603
        },
        'nail-polish-remover': {
          'code': 1030604
        }
      },
      'skin-care': {
        'code': 1030700,
        'bath-salts-and-bubbles': {
          'code': 1030701
        },
        'makeup-remover': {
          'code': 1030702
        },
        'hand-soap': {
          'code': 1030703
        },
        'lip-care': {
          'code': 1030704
        },
        'suncare': {
          'code': 1030705
        },
        'toners-and-astringents': {
          'code': 1030706
        },
        'body-powder': {
          'code': 1030707
        },
        'body-moisturizers': {
          'code': 1030708
        },
        'massage-oil-and-aromatherapy': {
          'code': 1030709
        },
        'hand-sanitizers-and-wipes': {
          'code': 1030710
        },
        'facial-cleansers': {
          'code': 1030711
        },
        'facial-moisturizers-and-treatment': {
          'code': 1030712
        },
        'soap-and-body-wash': {
          'code': 1030713
        },
        'shaving-cream': {
          'code': 1030714
        }
      },
      'mens-essentials': {
        'code': 1030800,
        'beard-and-shave': {
          'code': 1030801
        },
        'body': {
          'code': 1030802
        },
        'face': {
          'code': 1030803
        },
        'hair': {
          'code': 1030804
        },
        'cologne': {
          'code': 1030805
        },
        'wellness': {
          'code': 1030806
        }
      }
    },
    'health': {
      'code': 1040000,
      'medicine-cabinet': {
        'code': 1040100,
        'allergy-sinus-and-asthma': {
          'code': 1040101
        },
        'childrens-medicine': {
          'code': 1040102
        },
        'cold-sore-and-blister-treatments': {
          'code': 1040103
        },
        'cough-and-cold': {
          'code': 1040104
        },
        'diabetes': {
          'code': 1040105
        },
        'digestion-and-nausea': {
          'code': 1040106
        },
        'foot-healthcare': {
          'code': 1040107
        },
        'incontinence': {
          'code': 1040108
        },
        'pain-relievers': {
          'code': 1040109
        },
        'sleep-and-snoring': {
          'code': 1040110
        },
        'smoking-cessation': {
          'code': 1040111
        },
        'therapeutic-ointments-and-powders': {
          'code': 1040112
        },
        'thermometers': {
          'code': 1040113
        },
        'ear-care': {
          'code': 1040114
        },
        'eye-care': {
          'code': 1040115
        }
      },
      'medical-supplies-and-equipment': {
        'code': 1040200,
        'pills-cases-and-splitters': {
          'code': 1040201
        },
        'bathroom-aids-and-safety': {
          'code': 1040202
        },
        'beds-and-accessories': {
          'code': 1040203
        },
        'braces-splints-and-slings': {
          'code': 1040204
        },
        'daily-living-aids': {
          'code': 1040205
        },
        'mobility-aids-and-equipment': {
          'code': 1040206
        },
        'occupational-and-physical-therapy-aids': {
          'code': 1040207
        },
        'pen-lights': {
          'code': 1040208
        },
        'tests': {
          'code': 1040209
        },
        'first-aid': {
          'code': 1040210
        },
        'dehumidifiers': {
          'code': 1040211
        },
        'humidifiers': {
          'code': 1040212
        },
        'health-monitors': {
          'code': 1040213
        }
      },
      'sports-nutrition-and-diet': {
        'code': 1040300,
        'protein-and-meal-replacement': {
          'code': 1040301
        },
        'energy-and-endurance': {
          'code': 1040302
        },
        'weight-loss-supplements-and-cleanses': {
          'code': 1040303
        },
        'mass-gainers': {
          'code': 1040304
        },
        'amino-acids-and-creatine': {
          'code': 1040305
        },
        'on-the-go-nutrition': {
          'code': 1040306
        },
        'slimfast-campaign': {
          'code': 1040307
        }
      },
      'vitamins-and-dietary-supplements': {
        'code': 1040400,
        'minerals': {
          'code': 1040401
        },
        'supplements': {
          'code': 1040402
        },
        'letter-vitamins': {
          'code': 1040403
        },
        'fish-oils-and-omegas': {
          'code': 1040404
        },
        'probiotics': {
          'code': 1040405
        },
        'multivitamins': {
          'code': 1040406
        },
        'protein-and-meal-replacements': {
          'code': 1040407
        },
        'pill-cases-and-splitters': {
          'code': 1040408
        },
        'amino-acids-and-creatine': {
          'code': 1040409
        },
        'weight-loss-supplements': {
          'code': 1040410
        },
        'new-and-noteworthy-vitamins-and-supplements': {
          'code': 1040411
        },
        'herbs-and-homeopathy': {
          'code': 1040412
        }
      }
    },
    'baby': {
      'code': 1050000,
      'baby-food-and-formula': {
        'code': 1050100,
        'baby-and-toddler-snacks': {
          'code': 1050101
        },
        'baby-food': {
          'code': 1050102
        },
        'baby-formula': {
          'code': 1050103
        },
        'toddler-juices-and-milk': {
          'code': 1050104
        }
      },
      'diapering': {
        'code': 1050200,
        'diapers': {
          'code': 1050201
        },
        'baby-wipes': {
          'code': 1050202
        },
        'baby-wipe-holders-and-warmers': {
          'code': 1050203
        },
        'changing-table-accessories': {
          'code': 1050204
        },
        'cloth-diapers': {
          'code': 1050205
        },
        'cloth-diaper-accessories': {
          'code': 1050206
        },
        'diaper-bags': {
          'code': 1050207
        },
        'diaper-cakes': {
          'code': 1050208
        },
        'diaper-changing-pads': {
          'code': 1050209
        },
        'diaper-creams-and-ointments': {
          'code': 1050210
        },
        'diaper-pails-and-refills': {
          'code': 1050211
        },
        'diaper-stackers-and-caddies': {
          'code': 1050212
        }
      },
      'baby-gear': {
        'code': 1050300,
        'baby-monitors': {
          'code': 1050301
        },
        'baby-seats': {
          'code': 1050302
        },
        'bouncers-and-walkers': {
          'code': 1050303
        },
        'car-seats': {
          'code': 1050304
        },
        'carriers': {
          'code': 1050305
        },
        'harnesses-and-leashes': {
          'code': 1050306
        },
        'play-mats-and-activity-gyms': {
          'code': 1050307
        },
        'playards-and-travel-beds': {
          'code': 1050308
        },
        'strollers': {
          'code': 1050309
        }
      },
      'baby-gear-accessories': {
        'code': 1050400,
        'car-seat-and-stroller-toys': {
          'code': 1050401
        },
        'car-seat-accessories': {
          'code': 1050402
        },
        'carrier-accessories': {
          'code': 1050403
        },
        'crib-netting': {
          'code': 1050404
        },
        'shopping-cart-covers': {
          'code': 1050405
        },
        'stroller-accessories': {
          'code': 1050406
        }
      },
      'feeding-and-nursing': {
        'code': 1050500,
        'baby-bottles-and-accessories': {
          'code': 1050501
        },
        'baby-food': {
          'code': 1050502
        },
        'baby-formula': {
          'code': 1050503
        },
        'bibs-and-burp-cloths': {
          'code': 1050504
        },
        'breast-pump': {
          'code': 1050505
        },
        'breast-pump-accessories': {
          'code': 1050506
        },
        'food-and-formula-prep': {
          'code': 1050507
        },
        'food-storage-and-on-the-go': {
          'code': 1050508
        },
        'highchairs-and-boosters': {
          'code': 1050509
        },
        'kids-tabletop': {
          'code': 1050510
        },
        'lunch-bags': {
          'code': 1050511
        },
        'nursing-accessories': {
          'code': 1050512
        },
        'pacifiers-and-teethers': {
          'code': 1050513
        },
        'sippys-and-cups': {
          'code': 1050514
        }
      },
      'babyproofing': {
        'code': 1050600,
        'baby-monitors': {
          'code': 1050601
        },
        'bath-safety': {
          'code': 1050602
        },
        'edge-and-corner-guards': {
          'code': 1050603
        },
        'electrical-safety': {
          'code': 1050604
        },
        'gates-and-rails': {
          'code': 1050605
        },
        'kitchen-safety': {
          'code': 1050606
        },
        'outdoor-safety': {
          'code': 1050607
        },
        'rails-and-rail-guards': {
          'code': 1050608
        },
        'sleep-positioners': {
          'code': 1050609
        }
      },
      'baby-care': {
        'code': 1050700,
        'baby-bubble-bath': {
          'code': 1050701
        },
        'baby-oil-and-lotion': {
          'code': 1050702
        },
        'baby-powder': {
          'code': 1050703
        },
        'baby-shampoo-and-wash': {
          'code': 1050704
        }
      },
      'potty-training': {
        'code': 1050800,
        'potties': {
          'code': 1050801
        },
        'potty-training-aids': {
          'code': 1050802
        },
        'seat-covers': {
          'code': 1050803
        },
        'step-stools': {
          'code': 1050804
        },
        'training-pants': {
          'code': 1050805
        }
      },
      'baby-bathing': {
        'code': 1050900,
        'baby-bath-accessories': {
          'code': 1050901
        },
        'baby-grooming': {
          'code': 1050902
        },
        'baby-tubs': {
          'code': 1050903
        },
        'baby-washcloths-and-towels': {
          'code': 1050904
        },
        'bath-toys': {
          'code': 1050905
        }
      },
      'baby-gifts': {
        'code': 1051000,
        'baby-gift-sets-and-baskets': {
          'code': 1051001
        },
        'keepsakes-and-albums': {
          'code': 1051002
        },
        'new-mom-gifts': {
          'code': 1051003
        },
        'toy-banks': {
          'code': 1051004
        }
      }
    },
    'pet-supplies': {
      'code': 1060000,
      'dog-supplies': {
        'code': 1060100,
        'collars-harnesses-and-leashes': {
          'code': 1060101
        },
        'dog-apparel': {
          'code': 1060102
        },
        'dog-beds': {
          'code': 1060103
        },
        'dog-bowls-and-feeders': {
          'code': 1060104
        },
        'travel-supplies': {
          'code': 1060105
        },
        'cleaning-supplies': {
          'code': 1060106
        },
        'crates-and-kennels': {
          'code': 1060107
        },
        'flea-and-tick-control': {
          'code': 1060108
        },
        'dog-food': {
          'code': 1060109
        },
        'grooming': {
          'code': 1060110
        },
        'dog-houses': {
          'code': 1060111
        },
        'medication-and-health-supplies': {
          'code': 1060112
        },
        'modern-furniture': {
          'code': 1060113
        },
        'dog-technology': {
          'code': 1060114
        },
        'toys': {
          'code': 1060115
        },
        'training-and-behavior': {
          'code': 1060116
        },
        'treats': {
          'code': 1060117
        },
        'gates-and-ramps': {
          'code': 1060118
        },
        'poop-bags-and-housebreaking': {
          'code': 1060119
        }
      },
      'cat-supplies': {
        'code': 1060200,
        'cat-beds': {
          'code': 1060201
        },
        'carriers': {
          'code': 1060202
        },
        'cleaning-supplies': {
          'code': 1060203
        },
        'flea-and-tick-control': {
          'code': 1060204
        },
        'cat-food': {
          'code': 1060205
        },
        'cat-grooming': {
          'code': 1060206
        },
        'health-supplies': {
          'code': 1060207
        },
        'litter': {
          'code': 1060208
        },
        'litter-boxes': {
          'code': 1060209
        },
        'scratchers': {
          'code': 1060210
        },
        'cat-toys': {
          'code': 1060211
        },
        'training-and-behavior-aids': {
          'code': 1060212
        },
        'cat-treats': {
          'code': 1060213
        },
        'cat-trees-and-condos': {
          'code': 1060214
        },
        'collars-harnesses-and-leashes': {
          'code': 1060215
        },
        'feeding-and-watering-supplies': {
          'code': 1060216
        }
      }
    },
    'office-supplies': {
      'code': 1070000,
      'pens-pencils-and-markers': {
        'code': 1070100
      },
      'tape-and-adhesives': {
        'code': 1070200
      },
      'office-paper': {
        'code': 1070300
      },
      'presentation-boards': {
        'code': 1070400
      },
      'workspace-organizers': {
        'code': 1070500
      },
      'staplers-and-punches': {
        'code': 1070600
      },
      'labels-indexes-and-stamps': {
        'code': 1070700
      },
      'filing-products': {
        'code': 1070800
      },
      'binders-and-binding-systems': {
        'code': 1070900
      },
      'scissors-cutters-and-measuring-devices': {
        'code': 1071000
      },
      'envelopes-and-shipping-supplies': {
        'code': 1071100
      },
      'calendars-and-planners': {
        'code': 1071200
      },
      'stationary': {
        'code': 1071300
      }
    }
  },
  'beauty': {
    'code': 2000000,
    'skin-care': {
      'code': 2010000,
      'skin-and-toner': {
        'code': 2010100,
        'skin': {
          'code': 2010101
        },
        'toner': {
          'code': 2010102
        }
      },
      'mist': {
        'code': 2010200
      },
      'face-moisturizer-and-treatment': {
        'code': 2010300,
        'lotion': {
          'code': 2010301
        },
        'emulsion': {
          'code': 2010302
        },
        'oil': {
          'code': 2010303
        },
        'essence': {
          'code': 2010304
        },
        'ample': {
          'code': 2010305
        },
        'serum': {
          'code': 2010306
        }
      },
      'cream-and-gel': {
        'code': 2010400
      },
      'mask-and-pack': {
        'code': 2010500
      },
      'eye-care': {
        'code': 2010600
      },
      'lip-care': {
        'code': 2010700
      },
      'sun-care': {
        'code': 2010800,
        'stick-and-balm': {
          'code': 2010801
        },
        'cream-and-gel': {
          'code': 2010802
        }
      }
    },
    'cleansing-and-peeling': {
      'code': 2020000,
      'cleansing-foam-and-gel': {
        'code': 2020100
      },
      'cleansing-water': {
        'code': 2020200
      },
      'cleansing-oil': {
        'code': 2020300
      },
      'cleansing-lotion-and-cream': {
        'code': 2020400
      },
      'cleansing-soap': {
        'code': 2020500
      },
      'cleansing-wipe': {
        'code': 2020600
      },
      'lip-and-eye-cleanser': {
        'code': 2020700
      },
      'scrubs-and-peeling': {
        'code': 2020800
      }
    },
    'sun-care': {
      'code': 2030000,
      'face': {
        'code': 2030100,
        'stick-and-balm': {
          'code': 2030101
        },
        'cream-and-gel': {
          'code': 2030102
        }
      },
      'body': {
        'code': 2030200,
        'stick-and-balm': {
          'code': 2030201
        },
        'cream-and-gel': {
          'code': 2030202
        }
      }
    },
    'makeup': {
      'code': 2040000,
      'face': {
        'code': 2040100,
        'makeup-base': {
          'code': 2040101
        },
        'primer': {
          'code': 2040102
        },
        'bb-and-cc-cream': {
          'code': 2040103
        },
        'foundation': {
          'code': 2040104
        },
        'cushion-and-powder-and-pact': {
          'code': 2040105
        },
        'concealer': {
          'code': 2040106
        },
        'blusher': {
          'code': 2040107
        },
        'highlighter-and-shading': {
          'code': 2040108
        }
      },
      'eye': {
        'code': 2040200,
        'eyeshadow': {
          'code': 2040201
        },
        'eyeliner': {
          'code': 2040202
        },
        'eyebrow': {
          'code': 2040203
        },
        'mascara': {
          'code': 2040204
        }
      },
      'lip': {
        'code': 2040300,
        'lipstick': {
          'code': 2040301
        },
        'lip-tint': {
          'code': 2040302
        },
        'lip-glosse': {
          'code': 2040303
        },
        'lip-treatment-and-balm': {
          'code': 2040304
        }
      },
      'makeup-brush-and-applicator': {
        'code': 2040400
      }
    },
    'body-care': {
      'code': 2050000,
      'body-wash': {
        'code': 2050100
      },
      'body-lotion': {
        'code': 2050200
      },
      'body-cream-and-gel': {
        'code': 2050300
      },
      'body-oil-and-essence': {
        'code': 2050400
      },
      'body-scrub': {
        'code': 2050500
      },
      'body-mist': {
        'code': 2050600
      },
      'hand-and-foot-treatment': {
        'code': 2050700
      },
      'bath-salt-and-bubble': {
        'code': 2050800
      },
      'feminine-care': {
        'code': 2050900
      },
      'deodorant': {
        'code': 2051000
      },
      'other-body-product': {
        'code': 2051100
      }
    },
    'hair-care': {
      'code': 2060000,
      'shampoo': {
        'code': 2060100
      },
      'conditioner-and-treatment': {
        'code': 2060200
      },
      'essence-and-oil': {
        'code': 2060300
      },
      'mist': {
        'code': 2060400
      },
      'styling-product': {
        'code': 2060500
      },
      'other-hair-product': {
        'code': 2060600
      }
    },
    'fragrance': {
      'code': 2070000,
      'women': {
        'code': 2070100
      },
      'men': {
        'code': 2070200
      },
      'fragrance-set': {
        'code': 2070300
      }
    },
    'candle-and-diffuser': {
      'code': 2080000,
      'candle': {
        'code': 2080100
      },
      'diffuser': {
        'code': 2080200
      }
    },
    'mens-grooming': {
      'code': 2090000,
      'skin': {
        'code': 2090100
      },
      'body': {
        'code': 2090200
      },
      'hair': {
        'code': 2090300
      },
      'makeup': {
        'code': 2090400
      },
      'cologne-and-deodorant': {
        'code': 2090500
      },
      'shave': {
        'code': 2090600
      }
    },
    'k-beauty': {
      'code': 2100000
    }
  },
  'home-and-living': {
    'code': 3000000,
    'furniture': {
      'code': 3010000,
      'bedding-basics': {
        'code': 3010100
      },
      'bedding': {
        'code': 3010200
      },
      'kids-bedding': {
        'code': 3010300
      }
    },
    'bath': {
      'code': 3020000,
      'bath-towels': {
        'code': 3020100
      },
      'bath-rugs-and-mats': {
        'code': 3020200
      },
      'beach-towels': {
        'code': 3020300
      },
      'shower-curtains-and-liners': {
        'code': 3020400
      },
      'shower-curtain-rods-and-hardware': {
        'code': 3020500
      },
      'shower-and-bathtub-caddies': {
        'code': 3020600
      },
      'bath-accessories': {
        'code': 3020700
      },
      'bathroom-storage-and-organization': {
        'code': 3020800
      },
      'bathroom-racks-and-shelves': {
        'code': 3020900
      },
      'bathroom-cabinets': {
        'code': 3021000
      },
      'bathroom-waste-baskets': {
        'code': 3021100
      },
      'bathroom-mirrors': {
        'code': 3021200
      }
    },
    'kitchen': {
      'code': 3030000,
      'kitchen-appliances': {
        'code': 3030100,
        'coffee-makers': {
          'code': 3030101
        },
        'blenders': {
          'code': 3030102
        },
        'toaster-ovens': {
          'code': 3030103
        },
        'mixers': {
          'code': 3030104
        },
        'food-processors': {
          'code': 3030105
        },
        'slow-cookers': {
          'code': 3030106
        },
        'microwaves': {
          'code': 3030107
        }
      },
      'specialty-appliances': {
        'code': 3030200,
        'rice-cookers': {
          'code': 3030201
        },
        'juicers': {
          'code': 3030202
        },
        'bread-machines': {
          'code': 3030203
        },
        'waffle-irons': {
          'code': 3030204
        },
        'ice-cream-machines': {
          'code': 3030205
        }
      },
      'cookware': {
        'code': 3030300,
        'skillets-and-frying-pans': {
          'code': 3030301
        },
        'cookware-sets': {
          'code': 3030302
        },
        'dutch-ovens': {
          'code': 3030303
        },
        'pressure-cookers': {
          'code': 3030304
        },
        'specialty-cookware': {
          'code': 3030305
        },
        'grill-pans': {
          'code': 3030306
        },
        'roasting-pans': {
          'code': 3030307
        }
      },
      'bakeware': {
        'code': 3030400,
        'baking-sheets-and-mats': {
          'code': 3030401
        },
        'cupcake-and-muffin-pans': {
          'code': 3030402
        },
        'cake-pans': {
          'code': 3030403
        },
        'pie-dishes-and-tart-pans': {
          'code': 3030404
        },
        'loaf-and-bread-pans': {
          'code': 3030405
        }
      },
      'utensils-and-gadgets': {
        'code': 3030500,
        'utensils-tongs-and-whisks': {
          'code': 3030501
        },
        'choppers-graters-and-slicers': {
          'code': 3030502
        },
        'measurers-and-timing-tools': {
          'code': 3030503
        },
        'kitchen-knives': {
          'code': 3030504
        },
        'cutting-boards-and-chopping-blocks': {
          'code': 3030505
        },
        'strainers-and-colanders': {
          'code': 3030506
        },
        'ice-cube-trays-and-molds': {
          'code': 3030507
        },
        'can-openers': {
          'code': 3030508
        },
        'mixing-and-prep-bowls': {
          'code': 3030509
        }
      },
      'kitchen-storage': {
        'code': 3030600
      },
      'dish-towels-and-aprons': {
        'code': 3030700
      },
      'oven-mitts-and-pot-holders': {
        'code': 3030800,
        'dinnerware': {
          'code': 3030801
        },
        'flatware': {
          'code': 3030802
        },
        'glassware-and-drinkware': {
          'code': 3030803
        },
        'coffee-mugs-and-tea-cups': {
          'code': 3030804
        },
        'table-linens': {
          'code': 3030805
        },
        'steak-knives': {
          'code': 3030806
        },
        'home-bar-tools': {
          'code': 3030807
        },
        'cheese-boards-and-knives': {
          'code': 3030808
        },
        'salt-and-pepper-shakers': {
          'code': 3030809
        }
      }
    },
    'decor': {
      'code': 3040000,
      'home-accents': {
        'code': 3040100,
        'picture-frames': {
          'code': 3040101
        },
        'decorative-pillows': {
          'code': 3040102
        },
        'throw-blankets': {
          'code': 3040103
        },
        'vases': {
          'code': 3040104
        },
        'faux-flowers-and-plants': {
          'code': 3040105
        },
        'candles': {
          'code': 3040106
        },
        'candle-holders-and-lanterns': {
          'code': 3040107
        },
        'clocks': {
          'code': 3040108
        },
        'decorative-trays': {
          'code': 3040109
        }
      },
      'wall-decor': {
        'code': 3040200,
        'decorative-mirrors': {
          'code': 3040201
        },
        'canvas-art': {
          'code': 3040202
        },
        'wall-accents': {
          'code': 3040203
        },
        'framed-art': {
          'code': 3040204
        },
        'decorative-shelves': {
          'code': 3040205
        }
      },
      'rugs': {
        'code': 3040300
      },
      'window-treatments': {
        'code': 3040400
      },
      'lighting-and-ceiling-fans': {
        'code': 3040500,
        'floor-lamps': {
          'code': 3040501
        },
        'table-lamps': {
          'code': 3040502
        },
        'desk-lamps': {
          'code': 3040503
        },
        'chandeliers-and-pendants': {
          'code': 3040504
        },
        'flush-mount-lighting': {
          'code': 3040505
        },
        'sconces': {
          'code': 3040506
        },
        'swing-arm-lamps': {
          'code': 3040507
        },
        'ceiling-fans': {
          'code': 3040508
        }
      }
    },
    'outdoor': {
      'code': 3050000,
      'outdoor-furniture': {
        'code': 3050100,
        'bistro-sets': {
          'code': 3050101
        },
        'patio-lounge-seating': {
          'code': 3050102
        },
        'garden-stools': {
          'code': 3050103
        }
      },
      'outdoor-decor': {
        'code': 3050200,
        'string-lights': {
          'code': 3050201
        },
        'outdoor-cushions-and-pillows': {
          'code': 3050202
        }
      },
      'outdoor-appliances': {
        'code': 3050300,
        'grills': {
          'code': 3050301
        },
        'smokers': {
          'code': 3050302
        }
      },
      'planters': {
        'code': 3050400,
        'planter-pots': {
          'code': 3050401
        },
        'hanging-planters': {
          'code': 3050402
        },
        'rail-planters': {
          'code': 3050403
        },
        'window-boxes': {
          'code': 3050404
        }
      },
      'gardening': {
        'code': 3050500,
        'gardening-tools': {
          'code': 3050501
        },
        'house-plants': {
          'code': 3050502
        },
        'garden-flowers': {
          'code': 3050503
        },
        'grow-kits': {
          'code': 3050504
        },
        'seeds': {
          'code': 3050505
        }
      }
    },
    'storage-and-organization': {
      'code': 3060000,
      'closet-organization': {
        'code': 3060100,
        'hangers': {
          'code': 3060101
        },
        'shoe-racks-and-organizers': {
          'code': 3060102
        },
        'closet-systems': {
          'code': 3060103
        }
      },
      'laundry-essentials': {
        'code': 3060200,
        'garment-racks': {
          'code': 3060201
        },
        'drying-racks': {
          'code': 3060202
        },
        'laundry-baskets': {
          'code': 3060203
        },
        'hampers': {
          'code': 3060204
        }
      },
      'jewelry-organization': {
        'code': 3060300,
        'jewelry-armoires': {
          'code': 3060301
        },
        'jewelry-boxes-and-organizers': {
          'code': 3060302
        }
      },
      'racks-and-shelves': {
        'code': 3060400
      },
      'storage-containers-and-drawers': {
        'code': 3060500
      },
      'seasonal-storage': {
        'code': 3060600
      },
      'trash-cans-and-recycling-bins': {
        'code': 3060700
      }
    },
    'kids': {
      'code': 3070000,
      'beds': {
        'code': 3070100
      },
      'bunk-bed': {
        'code': 3070200
      },
      'mattresses-and-box-springs': {
        'code': 3070300
      },
      'nightstands': {
        'code': 3070400
      },
      'dressers-and-chests': {
        'code': 3070500
      },
      'seating': {
        'code': 3070600
      },
      'tables-and-desks': {
        'code': 3070700
      },
      'table-and-chair-sets': {
        'code': 3070800
      },
      'step-stools': {
        'code': 3070900
      },
      'toy-storage': {
        'code': 3071000
      },
      'room-decor': {
        'code': 3071100
      }
    },
    'appliiance': {
      'code': 3080000,
      'heating-and-cooling': {
        'code': 3080100,
        'air-conditioners': {
          'code': 3080101
        },
        'household-fans': {
          'code': 3080102
        },
        'ceiling-fans': {
          'code': 3080103
        },
        'air-purifiers': {
          'code': 3080104
        },
        'dehumidifiers': {
          'code': 3080105
        },
        'space-heaters': {
          'code': 3080106
        }
      },
      'household-appliances': {
        'code': 3080200,
        'refrigerators': {
          'code': 3080201
        },
        'mini-refrigerators': {
          'code': 3080202
        },
        'wine-refrigerators': {
          'code': 3080203
        },
        'washers-and-dryers': {
          'code': 3080204
        },
        'dishwashers': {
          'code': 3080205
        }
      },
      'kitchen-appliances': {
        'code': 3080300,
        'coffee-makers': {
          'code': 3080301
        },
        'blenders': {
          'code': 3080302
        },
        'toaster-ovens': {
          'code': 3080303
        },
        'mixers': {
          'code': 3080304
        },
        'food-processors': {
          'code': 3080305
        },
        'slow-cookers': {
          'code': 3080306
        },
        'microwaves': {
          'code': 3080307
        },
        'rice-cookers': {
          'code': 3080308
        },
        'juicers': {
          'code': 3080309
        },
        'bread-machines': {
          'code': 3080310
        },
        'waffle-irons': {
          'code': 3080311
        },
        'ice-cream-machines': {
          'code': 3080312
        },
        'specialty-appliances': {
          'code': 3080313
        }
      },
      'vacuums-and-floor-care': {
        'code': 3080400,
        'vacuums': {
          'code': 3080401
        },
        'carpet-cleaners': {
          'code': 3080402
        },
        'steam-cleaners': {
          'code': 3080403
        },
        'carpet-sweepers': {
          'code': 3080404
        }
      }
    }
  },
  'electronics': {
    'code': 4000000,
    'tv-and-home-theater': {
      'code': 4010000,
      'televisions': {
        'code': 4010100,
        '4k-tvs': {
          'code': 4010101
        },
        'smart-tvs': {
          'code': 4010102
        }
      },
      'media-streaming-devices': {
        'code': 4010200
      },
      'blu-ray-players': {
        'code': 4010300
      },
      'home-theater-systems': {
        'code': 4010400
      },
      'speakers': {
        'code': 4010500,
        'wireless-and-bluetooth-speakers': {
          'code': 4010501
        },
        'bookshelf-speakers': {
          'code': 4010502
        },
        'floor-speakers': {
          'code': 4010503
        },
        'in-wall-and-in-ceiling-speakers': {
          'code': 4010504
        },
        'center-channel-speakers': {
          'code': 4010505
        },
        'subwoofer': {
          'code': 4010506
        }
      },
      'sound-bars': {
        'code': 4010600,
        'smart-sound-bars': {
          'code': 4010601
        }
      },
      'receivers-and-amplifiers': {
        'code': 4010700
      },
      'accessories': {
        'code': 4010800,
        'cables': {
          'code': 4010801
        },
        'speaker-accessories': {
          'code': 4010802
        },
        'remote-controls': {
          'code': 4010803
        },
        'tv-mounts': {
          'code': 4010804
        },
        'hdtv-antennas': {
          'code': 4010805
        },
        'cleaning-accessories': {
          'code': 4010806
        }
      },
      'projectors-and-screens': {
        'code': 4010900
      }
    },
    'computers-and-tablets': {
      'code': 4020000,
      'laptops': {
        'code': 4020100,
        'apple-macbook': {
          'code': 4020101
        },
        'windows-laptops': {
          'code': 4020102
        },
        'chromebooks': {
          'code': 4020103
        },
        '2-in-1-laptops': {
          'code': 4020104
        }
      },
      'all-in-one-desktop-computers': {
        'code': 4020200,
        'apple-imac': {
          'code': 4020201
        },
        'windows-desktops': {
          'code': 4020202
        }
      },
      'computer-accessories': {
        'code': 4020300,
        'wireless-mice': {
          'code': 4020301
        },
        'wireless-keyboards': {
          'code': 4020302
        },
        'printers-and-ink': {
          'code': 4020303
        },
        'external-hard-drives': {
          'code': 4020304
        },
        'usb-flash-drives': {
          'code': 4020305
        },
        'laptop-bags-and-cases': {
          'code': 4020306
        }
      },
      'tablets': {
        'code': 4020400,
        'apple-ipad': {
          'code': 4020401
        },
        'samsung-galaxy-tablets': {
          'code': 4020402
        },
        'android-tablets': {
          'code': 4020403
        },
        '4g-lte-tablets': {
          'code': 4020404
        }
      },
      'tablet-accessories': {
        'code': 4020500,
        'cases-covers-and-keyboard-folios': {
          'code': 4020501
        },
        'stands-and-mounts': {
          'code': 4020502
        },
        'chargers-cables-and-adapters': {
          'code': 4020503
        },
        'tablet-stylus-pens': {
          'code': 4020504
        },
        'tablet-keyboards': {
          'code': 4020505
        },
        'tablet-docking-stations': {
          'code': 4020506
        },
        'tablet-screen-protectors': {
          'code': 4020507
        },
        'portable-chargers-and-power-packs': {
          'code': 4020508
        }
      }
    },
    'audio': {
      'code': 4030000,
      'headphones': {
        'code': 4030100,
        'noise-cancelling': {
          'code': 4030101
        },
        'true-wireless-earbuds': {
          'code': 4030102
        },
        'wireless-headphones': {
          'code': 4030103
        },
        'over-ear-headphones': {
          'code': 4030104
        },
        'in-ear-headphones': {
          'code': 4030105
        },
        'sports-headphones': {
          'code': 4030106
        }
      },
      'bluetooth-speakers': {
        'code': 4030200
      },
      'speakers': {
        'code': 4030300,
        'wireless-and-bluetooth-speakers': {
          'code': 4030301
        },
        'bookshelf-speakers': {
          'code': 4030302
        },
        'floor-speakers': {
          'code': 4030303
        },
        'subwoofer': {
          'code': 4030304
        }
      },
      'sound-bars': {
        'code': 4030400
      },
      'home-theater-systems': {
        'code': 4030500
      },
      'receivers-and-amplifiers': {
        'code': 4030600
      },
      'dolby-atmos-sound': {
        'code': 4030700
      }
    },
    'smart-home': {
      'code': 4040000,
      'voice-assistants': {
        'code': 4040100,
        'google-home': {
          'code': 4040101
        },
        'apple-homepod': {
          'code': 4040102
        }
      },
      'smart-accessories': {
        'code': 4040200,
        'dimmers-and-switches': {
          'code': 4040201
        },
        'sensors-and-motion-detectors': {
          'code': 4040202
        },
        'security-cameras': {
          'code': 4040203
        },
        'smart-lighting': {
          'code': 4040204
        },
        'smart-plugs': {
          'code': 4040205
        }
      },
      'wi-fi-and-networking': {
        'code': 4040300,
        'wireless-routers': {
          'code': 4040301
        },
        'modems': {
          'code': 4040302
        },
        'mesh-wi-fi-systems': {
          'code': 4040303
        },
        'wi-fi-range-extenders': {
          'code': 4040304
        },
        'networking-cables': {
          'code': 4040305
        }
      }
    },
    'wearable-tech': {
      'code': 4050000,
      'activity-trackers': {
        'code': 4050100
      },
      'smart-watches': {
        'code': 4050200
      },
      'wearable-cameras': {
        'code': 4050300
      },
      'wearable-tech-accessories': {
        'code': 4050400
      },
      'featured-brands': {
        'code': 4050500
      }
    },
    'cameras': {
      'code': 4060000,
      'cameras-and-lenses': {
        'code': 4060100,
        'dslr-cameras': {
          'code': 4060101
        },
        'mirrorless-cameras': {
          'code': 4060102
        },
        'instant-print-cameras': {
          'code': 4060103
        },
        'camera-lenses': {
          'code': 4060104
        }
      },
      'camera-accessories': {
        'code': 4060200,
        'memory-cards': {
          'code': 4060201
        },
        'camera-bags-cases-and-straps': {
          'code': 4060202
        },
        'camera-batteries-and-power': {
          'code': 4060203
        },
        'flashes-and-lighting': {
          'code': 4060204
        },
        'lens-filters': {
          'code': 4060205
        },
        'camera-cleaning-equipment': {
          'code': 4060206
        },
        'film': {
          'code': 4060207
        },
        'tripods-and-monopods': {
          'code': 4060208
        }
      },
      'featured-brands': {
        'code': 4060300
      }
    },
    'toys-and-games': {
      'code': 4070000,
      'consoles-and-accessories': {
        'code': 4070100,
        'nintendo': {
          'code': 4070101
        },
        'playstation': {
          'code': 4070102
        },
        'xbox': {
          'code': 4070103
        }
      },
      'pc-gaming': {
        'code': 4070200,
        'laptops': {
          'code': 4070201
        },
        'desktops': {
          'code': 4070202
        },
        'gaming-keyboards': {
          'code': 4070203
        },
        'gaming-mice': {
          'code': 4070204
        }
      },
      'arvr': {
        'code': 4070300
      },
      'smart-toys': {
        'code': 4070400
      },
      'drones': {
        'code': 4070500
      }
    },
    'cellphone': {
      'code': 4080000,
      'cases-and-covers': {
        'code': 4080100
      },
      'cables': {
        'code': 4080200
      },
      'portable-chargers-and-power-packs': {
        'code': 4080300
      }
    }
  },
  'sports-fitness-outdoor': {
    'code': 5000000,
    'exercise-and-fitness': {
      'code': 5010000,
      'cardio-equipment': {
        'code': 5010100
      },
      'strength-training-equipment': {
        'code': 5010200
      },
      'training-apparel': {
        'code': 5010300,
        'towels': {
          'code': 5010301
        },
        'cross-training-shoes': {
          'code': 5010302
        },
        'compression-shorts': {
          'code': 5010303
        },
        'compression-tops': {
          'code': 5010304
        },
        'socks': {
          'code': 5010305
        },
        'sports-bras': {
          'code': 5010306
        },
        'wristbands-and-sweatbands': {
          'code': 5010307
        }
      },
      'training-and-recovery': {
        'code': 5010400
      },
      'yoga-and-studio': {
        'code': 5010500,
        'yoga-and-studio-accessories': {
          'code': 5010501
        },
        'foam-blocks': {
          'code': 5010502
        },
        'mat-bags': {
          'code': 5010503
        },
        'pilates-reformers': {
          'code': 5010504
        },
        'resistance-bands': {
          'code': 5010505
        },
        'yoga-blankets-and-cushions': {
          'code': 5010506
        },
        'yoga-mats': {
          'code': 5010507
        },
        'yoga-straps': {
          'code': 5010508
        },
        'yoga-towels': {
          'code': 5010509
        }
      },
      'sporting-good-accessories': {
        'code': 5010600,
        'water-bottles': {
          'code': 5010601
        },
        'sports-sunglasses': {
          'code': 5010602
        },
        'trophies-medals-and-awards': {
          'code': 5010603
        },
        'wristbands-and-sweatbands': {
          'code': 5010604
        },
        'air-pumps': {
          'code': 5010605
        },
        'ball-carts-and-racks': {
          'code': 5010606
        },
        'flashlights-and-headlamps': {
          'code': 5010607
        },
        'hand-and-foot-warmers': {
          'code': 5010608
        },
        'hydration': {
          'code': 5010609
        },
        'mouthguards': {
          'code': 5010610
        },
        'pads-guards-and-protective-gear': {
          'code': 5010611
        },
        'whristle-and-megaphones': {
          'code': 5010612
        },
        'inflation-devices-and-accessories': {
          'code': 5010613
        },
        'car-sports-racks': {
          'code': 5010614
        },
        'coach-and-referee-gear': {
          'code': 5010615
        },
        'reflective-gear': {
          'code': 5010616
        }
      }
    },
    'adventure-and-outdoor-fun': {
      'code': 5020000,
      'bikes': {
        'code': 5020100,
        'bike-racks-and-bags': {
          'code': 5020101
        },
        'bike-tools-and-maintenance': {
          'code': 5020102
        },
        'bike-trainers-and-accessories': {
          'code': 5020103
        },
        'complete-bikes': {
          'code': 5020104
        },
        'child-seats-and-cargo-trailers': {
          'code': 5020105
        },
        'helmets': {
          'code': 5020106
        },
        'bike-hydration': {
          'code': 5020107
        },
        'kids-bikes-and-accessories': {
          'code': 5020108
        },
        'kids-helmets': {
          'code': 5020109
        },
        'kids-tricycles': {
          'code': 5020110
        },
        'bike-lights-and-reflectors': {
          'code': 5020111
        },
        'bike-parts-and-components': {
          'code': 5020112
        },
        'bike-pedals-and-cleats': {
          'code': 5020113
        },
        'bicycle-tires-and-tubes': {
          'code': 5020114
        },
        'bike-transportation-and-storage': {
          'code': 5020115
        },
        'unicycles': {
          'code': 5020116
        },
        'triathlon-gear': {
          'code': 5020117
        },
        'bike-brakes': {
          'code': 5020118
        },
        'bike-chains-and-cassettes': {
          'code': 5020119
        },
        'bike-cranksets-chainrings-and-bottom-brackets': {
          'code': 5020120
        },
        'bike-derailleurs-and-shifters': {
          'code': 5020121
        },
        'bike-forks-headsets-and-stems': {
          'code': 5020122
        },
        'bike-handlebars-wraps-and-grips': {
          'code': 5020123
        },
        'bike-saddles-seats-and-seat-posts': {
          'code': 5020124
        },
        'bike-wheels': {
          'code': 5020125
        },
        'cycling-shorts-jerseys-and-accessories': {
          'code': 5020126
        },
        'car-bike-racks': {
          'code': 5020127
        },
        'pads-guards-and-protective-gear': {
          'code': 5020128
        }
      },
      'snowboard-shop': {
        'code': 5020200
      },
      'skateboards-skates-and-scooters': {
        'code': 5020300
      },
      'ski-shop': {
        'code': 5020400
      },
      'boating': {
        'code': 5020500
      },
      'camping-and-hiking': {
        'code': 5020600
      },
      'water-sports': {
        'code': 5020700
      }
    },
    'hunting-fishing-and-tactical': {
      'code': 5030000,
      'fishing': {
        'code': 5030100
      },
      'binoculars-and-scopes': {
        'code': 5030200
      }
    },
    'team-sports': {
      'code': 5040000,
      'baseball': {
        'code': 5040100
      },
      'basketball': {
        'code': 5040200
      },
      'field-hockey': {
        'code': 5040300
      },
      'football': {
        'code': 5040400
      },
      'lacrosse': {
        'code': 5040500
      },
      'soccer': {
        'code': 5040600
      },
      'softball': {
        'code': 5040700
      },
      'hockey-and-ice-skating': {
        'code': 5040800
      },
      'gymnastics-and-dance': {
        'code': 5040900
      }
    },
    'individual-sports': {
      'code': 5050000,
      'golf': {
        'code': 5050100,
        'golf-club-sets': {
          'code': 5050101
        },
        'drivers': {
          'code': 5050102
        },
        'woods': {
          'code': 5050103
        },
        'hybrids': {
          'code': 5050104
        },
        'irons': {
          'code': 5050105
        },
        'wedges': {
          'code': 5050106
        },
        'putters': {
          'code': 5050107
        },
        'golf-apparel': {
          'code': 5050108
        },
        'golf-shoes': {
          'code': 5050109
        },
        'golf-balls': {
          'code': 5050110
        },
        'golf-club-bags': {
          'code': 5050111
        },
        'golf-rangefinders-and-shot-trackers': {
          'code': 5050112
        },
        'golf-training-equipment': {
          'code': 5050113
        },
        'head-covers': {
          'code': 5050114
        },
        'golf-tees': {
          'code': 5050115
        },
        'golf-club-parts': {
          'code': 5050116
        },
        'golf-gloves': {
          'code': 5050117
        },
        'golf-club-cleaning-brush': {
          'code': 5050118
        },
        'golf-towels': {
          'code': 5050119
        },
        'golf-umbrella': {
          'code': 5050120
        },
        'golf-markers-and-divot-repair-tools': {
          'code': 5050121
        },
        'golf-cart-accessories': {
          'code': 5050122
        },
        'golf-accessories': {
          'code': 5050123
        }
      },
      'tennis': {
        'code': 5050200
      },
      'boxing': {
        'code': 5050300
      },
      'martial-arts': {
        'code': 5050400
      },
      'track-and-field': {
        'code': 5050500
      },
      'racquetball': {
        'code': 5050600
      },
      'equestrian-sports': {
        'code': 5050700
      }
    }
  },
  'fashion': {
    'code': 6000000,
    'women': {
      'code': 6010000,
      'featured-shops': {
        'code': 6010100
      },
      'clothing': {
        'code': 6010200,
        'activewear': {
          'code': 6010201
        },
        'coats-and-jackets': {
          'code': 6010202
        },
        'dresses': {
          'code': 6010203
        },
        'jeans': {
          'code': 6010204
        },
        'jumpsuits-and-rompers': {
          'code': 6010205
        },
        'lingerie-and-shapewear': {
          'code': 6010206
        },
        'pants-and-leggings': {
          'code': 6010207
        },
        'shorts': {
          'code': 6010208
        },
        'skirts': {
          'code': 6010209
        },
        'sleepwear-and-loungewear': {
          'code': 6010210
        },
        'sweaters': {
          'code': 6010211
        },
        'sweatshirts-and-hoodies': {
          'code': 6010212
        },
        'swimwear': {
          'code': 6010213
        },
        'tops-and-t-shirts': {
          'code': 6010214
        }
      },
      'shoes': {
        'code': 6010300,
        'booties': {
          'code': 6010301
        },
        'boots': {
          'code': 6010302
        },
        'espadrilles': {
          'code': 6010303
        },
        'flats': {
          'code': 6010304
        },
        'heels-and-pumps': {
          'code': 6010305
        },
        'mules-and-slides': {
          'code': 6010306
        },
        'loafers-and-slip-ons': {
          'code': 6010307
        },
        'sandals-and-flip-flops': {
          'code': 6010308
        },
        'slippers': {
          'code': 6010309
        },
        'sneakers-and-athletic': {
          'code': 6010310
        },
        'wedges': {
          'code': 6010311
        }
      },
      'handbags': {
        'code': 6010400,
        'backpacks': {
          'code': 6010401
        },
        'belt-bags': {
          'code': 6010402
        },
        'cosmetic-bags': {
          'code': 6010403
        },
        'clutches-and-pouches': {
          'code': 6010404
        },
        'crossbody-bags': {
          'code': 6010405
        },
        'hobo-bags': {
          'code': 6010406
        },
        'laptops-bags-and-briefcases': {
          'code': 6010407
        },
        'satchels': {
          'code': 6010408
        },
        'shoulder-bags': {
          'code': 6010409
        },
        'tote-bags': {
          'code': 6010410
        },
        'weekenders-and-duffels': {
          'code': 6010411
        }
      },
      'accessories': {
        'code': 6010500,
        'belts': {
          'code': 6010501
        },
        'gloves': {
          'code': 6010502
        },
        'hats': {
          'code': 6010503
        },
        'scarves-and-wraps': {
          'code': 6010504
        },
        'sunglasses-and-eyewear': {
          'code': 6010505
        },
        'tech-accessories-and-cases': {
          'code': 6010506
        },
        'umbrellas': {
          'code': 6010507
        },
        'wallet-and-card-cases': {
          'code': 6010508
        }
      },
      'jewelry-and-watches': {
        'code': 6010600,
        'anklets': {
          'code': 6010601
        },
        'bracelets-and-charms': {
          'code': 6010602
        },
        'earrings': {
          'code': 6010603
        },
        'necklaces': {
          'code': 6010604
        },
        'rings': {
          'code': 6010605
        },
        'watches': {
          'code': 6010606
        }
      }
    },
    'men': {
      'code': 6020000,
      'active-and-workout': {
        'code': 6020100
      },
      'coats-and-jackets': {
        'code': 6020200
      },
      'shirts': {
        'code': 6020300
      },
      'jeans': {
        'code': 6020400
      },
      'pajamas-and-robes': {
        'code': 6020500
      },
      'pants': {
        'code': 6020600
      },
      'shorts': {
        'code': 6020700
      },
      'suits-and-suit-separates': {
        'code': 6020800
      },
      'sweaters': {
        'code': 6020900
      },
      'sweatshirts-and-hoodies': {
        'code': 6021000
      },
      'swimwear-and-boardshorts': {
        'code': 6021100
      },
      't-shirts-and-tank-tops': {
        'code': 6021200
      },
      'underwear-and-socks': {
        'code': 6021300
      }
    },
    'kids-and-baby': {
      'code': 6030000,
      'baby': {
        'code': 6030100,
        'girls-clothing': {
          'code': 6030101
        },
        'boys-clothing': {
          'code': 6030102
        },
        'girls-shoes': {
          'code': 6030103
        },
        'boys-shoes': {
          'code': 6030104
        },
        'girls-accessories': {
          'code': 6030105
        },
        'boys-accessories': {
          'code': 6030106
        }
      },
      'toddler': {
        'code': 6030200,
        'girls-clothing': {
          'code': 6030201
        },
        'boys-clothing': {
          'code': 6030202
        },
        'girls-shoes': {
          'code': 6030203
        },
        'boys-shoes': {
          'code': 6030204
        },
        'girls-accessories': {
          'code': 6030205
        },
        'boys-accessories': {
          'code': 6030206
        }
      },
      'little-kid': {
        'code': 6030300,
        'girls-clothing': {
          'code': 6030301
        },
        'boys-clothing': {
          'code': 6030302
        },
        'girls-shoes': {
          'code': 6030303
        },
        'boys-shoes': {
          'code': 6030304
        },
        'girls-accessories': {
          'code': 6030305
        },
        'boys-accessories': {
          'code': 6030306
        }
      },
      'big-kid': {
        'code': 6030400,
        'girls-clothing': {
          'code': 6030401
        },
        'boys-clothing': {
          'code': 6030402
        },
        'girls-shoes': {
          'code': 6030403
        },
        'boys-shoes': {
          'code': 6030404
        },
        'girls-accessories': {
          'code': 6030405
        },
        'boys-accessories': {
          'code': 6030406
        }
      }
    },
    'travel': {
      'code': 6040000,
      'luggage': {
        'code': 6040100,
        'carry-on': {
          'code': 6040101
        },
        'check-in': {
          'code': 6040102
        },
        'fashion': {
          'code': 6040103
        },
        'hardside': {
          'code': 6040104
        },
        'kids': {
          'code': 6040105
        },
        'luggage-sets': {
          'code': 6040106
        },
        'underseat-luggage': {
          'code': 6040107
        }
      },
      'bags': {
        'code': 6040200,
        'backpacks': {
          'code': 6040201
        },
        'belt-bags': {
          'code': 6040202
        },
        'garment-bags': {
          'code': 6040203
        },
        'laptop-bags-and-briefcases': {
          'code': 6040204
        },
        'weekenders-and-duffels': {
          'code': 6040205
        }
      },
      'travel-accessories': {
        'code': 6040300,
        'eyemasks-pillows-and-blankets': {
          'code': 6040301
        },
        'packing-cubes-and-organization': {
          'code': 6040302
        },
        'passport-cases-and-travel-wallets': {
          'code': 6040303
        },
        'kits-and-cases': {
          'code': 6040304
        }
      }
    }
  }
}
