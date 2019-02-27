import {Inject, Injectable} from '@angular/core';
import {DOMAIN_HOST} from '../../../app.config';
import {of} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  constructor(
    @Inject(DOMAIN_HOST) private BASE_URL: string,
    private httpClient: HttpClient
  ) {

  }

  getWeeklyBestGoods() {
    return this.httpClient.get<any>(this.BASE_URL + '/api/home/weekly_best/');
  }

  getPopularBrands(category = '') {
    const params = new HttpParams().set('category', category);
    return this.httpClient.get<any>( this.BASE_URL + '/api/home/popular_brands/', { params });
  }

  getRecentlyViewed() {
    return this.httpClient.get<any>(this.BASE_URL + '/api/home/recently_viewed/');
  }

  getValueList() {
    const params = new HttpParams().set('ordering', 'random');
    return this.httpClient.get<any>(this.BASE_URL + '/api/values/', { params });
  }

  getCategoryAll(oneDepthCode) {
    //
    // return this.httpClient.get<any>(this.BASE_URL + '/api/categories/' + oneDepthCode + '/descendants/' );
    return of(this.dataCategory[oneDepthCode]);
  }

  postLanguageSetting(xLanguageCode) {
    // ko = 한국어
    // en = 영어

    // us = 미국
    // kr = 한국
    return this.httpClient.post<any>( this.BASE_URL + '/api/preferences/language/', { language : xLanguageCode } );
  }

  dataCategory = {
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
        {
          'slug': 'office-supplies',
          'id': 1070000,
          'name': '사무용품',
          'children': [
            {
              'slug': 'pens-pencils-and-markers',
              'id': 1070100,
              'name': '필기구',
              'children': []
            },
            {
              'slug': 'tape-and-adhesives',
              'id': 1070200,
              'name': '테이프·접착제',
              'children': []
            },
            {
              'slug': 'office-paper',
              'id': 1070300,
              'name': '종이',
              'children': []
            },
            {
              'slug': 'presentation-boards',
              'id': 1070400,
              'name': '프레젠테이션보드',
              'children': []
            },
            {
              'slug': 'workspace-organizers',
              'id': 1070500,
              'name': '정리함',
              'children': []
            },
            {
              'slug': 'staplers-and-punches',
              'id': 1070600,
              'name': '스테이플러',
              'children': []
            },
            {
              'slug': 'labels-indexes-and-stamps',
              'id': 1070700,
              'name': '라벨·인덱스',
              'children': []
            },
            {
              'slug': 'filing-products',
              'id': 1070800,
              'name': '서류철',
              'children': []
            },
            {
              'slug': 'binders-and-binding-systems',
              'id': 1070900,
              'name': '바인더',
              'children': []
            },
            {
              'slug': 'scissors-cutters-and-measuring-devices',
              'id': 1071000,
              'name': '문구용품',
              'children': []
            },
            {
              'slug': 'envelopes-and-shipping-supplies',
              'id': 1071100,
              'name': '봉투',
              'children': []
            },
            {
              'slug': 'calendars-and-planners',
              'id': 1071200,
              'name': '캘린더·플래너',
              'children': []
            },
            {
              'slug': 'stationary',
              'id': 1071300,
              'name': 'Stationary',
              'children': []
            }
          ]
        }
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
}
