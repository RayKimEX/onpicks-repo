import {Inject, Injectable} from '@angular/core';
import {DOMAIN_HOST} from '../../../app.config';
import {of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
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

  getRecentlyViewed() {
    return this.httpClient.get<any>(this.BASE_URL + '/api/home/recently_viewed/');
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
      'id': 1000000,
      'slug': 'pantry-and-household',
      'name': '식품·생활용품',
      'depth': 1,
      'parent': null,
      'children': [
        {
          'id': 1010000,
          'slug': 'grocery',
          'name': '식품',
          'depth': 2,
          'parent': 1000000,
          'children': [
            {
              'id': 1010100,
              'slug': 'beverages',
              'name': '음료',
              'depth': 3,
              'parent': 1010000,
              'children': [
                {
                  'id': 1010101,
                  'slug': 'water',
                  'name': '물',
                  'depth': 5,
                  'parent': 1010100,
                  'children': []
                },
                {
                  'id': 1010102,
                  'slug': 'sports-and-energy-drinks',
                  'name': '스포츠음료',
                  'depth': 4,
                  'parent': 1010100,
                  'children': []
                },
                {
                  'id': 1010103,
                  'slug': 'soft-drinks',
                  'name': '청량음료',
                  'depth': 4,
                  'parent': 1010100,
                  'children': []
                },
                {
                  'id': 1010104,
                  'slug': 'coffee',
                  'name': '커피',
                  'depth': 4,
                  'parent': 1010100,
                  'children': []
                },
                {
                  'id': 1010105,
                  'slug': 'tea',
                  'name': '차',
                  'depth': 4,
                  'parent': 1010100,
                  'children': []
                },
                {
                  'id': 1010106,
                  'slug': 'milk',
                  'name': '우유',
                  'depth': 4,
                  'parent': 1010100,
                  'children': []
                },
                {
                  'id': 1010107,
                  'slug': 'non-dairy-milk',
                  'name': 'Non-Dairy Milk',
                  'depth': 4,
                  'parent': 1010100,
                  'children': []
                },
                {
                  'id': 1010108,
                  'slug': 'juice',
                  'name': '주스',
                  'depth': 4,
                  'parent': 1010100,
                  'children': []
                },
                {
                  'id': 1010201,
                  'slug': 'applesauce-fruit-cups-and-squeezes',
                  'name': '프루츠컵·스퀴즈',
                  'depth': 4,
                  'parent': 1010100,
                  'children': []
                },
                {
                  'id': 1010202,
                  'slug': 'chips-and-pretzels',
                  'name': '칩·프레첼',
                  'depth': 4,
                  'parent': 1010100,
                  'children': []
                },
                {
                  'id': 1010203,
                  'slug': 'cookies',
                  'name': '쿠키',
                  'depth': 4,
                  'parent': 1010100,
                  'children': []
                },
                {
                  'id': 1010204,
                  'slug': 'bread-and-crackers',
                  'name': '빵·크래커',
                  'depth': 4,
                  'parent': 1010100,
                  'children': []
                },
                {
                  'id': 1010205,
                  'slug': 'fruit-and-vegetable-snacks',
                  'name': '과일·야채스낵',
                  'depth': 4,
                  'parent': 1010100,
                  'children': []
                },
                {
                  'id': 1010206,
                  'slug': 'protein-and-granola-bars',
                  'name': '프로틴·곡물바',
                  'depth': 4,
                  'parent': 1010100,
                  'children': []
                },
                {
                  'id': 1010207,
                  'slug': 'ice-cream-cones-and-toppings',
                  'name': '아이스크림콘·토핑',
                  'depth': 4,
                  'parent': 1010100,
                  'children': []
                },
                {
                  'id': 1010208,
                  'slug': 'jerky-and-dried-meats',
                  'name': '육포·건어물',
                  'depth': 4,
                  'parent': 1010100,
                  'children': []
                },
                {
                  'id': 1010209,
                  'slug': 'nuts-seeds-and-trail-mix',
                  'name': '견과류·믹스',
                  'depth': 4,
                  'parent': 1010100,
                  'children': []
                },
                {
                  'id': 1010210,
                  'slug': 'popcorn-and-puffed-snacks',
                  'name': '팝콘',
                  'depth': 4,
                  'parent': 1010100,
                  'children': []
                },
                {
                  'id': 1010211,
                  'slug': 'pudding-and-gelatin',
                  'name': '푸딩·젤라틴',
                  'depth': 4,
                  'parent': 1010100,
                  'children': []
                }
              ]
            },
            {
              'id': 1010300,
              'slug': 'candy-gum-and-chocolate',
              'name': '캔디·껌·초콜릿',
              'depth': 3,
              'parent': 1010000,
              'children': [
                {
                  'id': 1010301,
                  'slug': 'chocolate',
                  'name': ' ',
                  'depth': 4,
                  'parent': 1010300,
                  'children': []
                },
                {
                  'id': 1010302,
                  'slug': 'chewing-gum',
                  'name': '껌',
                  'depth': 4,
                  'parent': 1010300,
                  'children': []
                },
                {
                  'id': 1010303,
                  'slug': 'candy',
                  'name': '캔디',
                  'depth': 4,
                  'parent': 1010300,
                  'children': []
                },
                {
                  'id': 1010304,
                  'slug': 'other-sweets',
                  'name': '디저트',
                  'depth': 4,
                  'parent': 1010300,
                  'children': []
                }
              ]
            },
            {
              'id': 1010400,
              'slug': 'breakfast-foods',
              'name': '아침식사',
              'depth': 3,
              'parent': 1010000,
              'children': [
                {
                  'id': 1010401,
                  'slug': 'cold-cereals',
                  'name': '콜드시리얼',
                  'depth': 4,
                  'parent': 1010400,
                  'children': []
                },
                {
                  'id': 1010402,
                  'slug': 'hot-cereals-and-oats',
                  'name': '핫시리얼·오트밀',
                  'depth': 4,
                  'parent': 1010400,
                  'children': []
                },
                {
                  'id': 1010403,
                  'slug': 'toaster-pastries',
                  'name': '토스터페이스트리',
                  'depth': 4,
                  'parent': 1010400,
                  'children': []
                },
                {
                  'id': 1010404,
                  'slug': 'granola-and-museli',
                  'name': '그래놀라·무슬리',
                  'depth': 4,
                  'parent': 1010400,
                  'children': []
                },
                {
                  'id': 1010405,
                  'slug': 'meal-replacement-proein-and-granola-bars',
                  'name': '식다대용프로틴바·그래놀라바',
                  'depth': 4,
                  'parent': 1010400,
                  'children': []
                }
              ]
            },
            {
              'id': 1010500,
              'slug': 'soups-meals-and-side-dishes',
              'name': '식사·후식',
              'depth': 3,
              'parent': 1010000,
              'children': [
                {
                  'id': 1010501,
                  'slug': 'macaroni-and-cheese',
                  'name': '마카로니·치즈',
                  'depth': 4,
                  'parent': 1010500,
                  'children': []
                },
                {
                  'id': 1010502,
                  'slug': 'soups',
                  'name': '수프',
                  'depth': 4,
                  'parent': 1010500,
                  'children': []
                },
                {
                  'id': 1010503,
                  'slug': 'broth',
                  'name': '죽',
                  'depth': 4,
                  'parent': 1010500,
                  'children': []
                },
                {
                  'id': 1010504,
                  'slug': 'chilis-and-stews',
                  'name': '칠리·스튜',
                  'depth': 4,
                  'parent': 1010500,
                  'children': []
                },
                {
                  'id': 1010505,
                  'slug': 'asian-meals',
                  'name': '아시아식사',
                  'depth': 4,
                  'parent': 1010500,
                  'children': []
                },
                {
                  'id': 1010506,
                  'slug': 'italian-meals',
                  'name': '이탈리아식사',
                  'depth': 4,
                  'parent': 1010500,
                  'children': []
                },
                {
                  'id': 1010507,
                  'slug': 'mexican-meals-and-taco-kits',
                  'name': '멕시코식사·타코',
                  'depth': 4,
                  'parent': 1010500,
                  'children': []
                },
                {
                  'id': 1010508,
                  'slug': 'indian-meals',
                  'name': '인도식사',
                  'depth': 4,
                  'parent': 1010500,
                  'children': []
                },
                {
                  'id': 1010509,
                  'slug': 'potatoes-and-stuffings',
                  'name': '감자·속재료',
                  'depth': 4,
                  'parent': 1010500,
                  'children': []
                }
              ]
            },
            {
              'id': 1010600,
              'slug': 'pantry',
              'name': '주방',
              'depth': 3,
              'parent': 1010000,
              'children': [
                {
                  'id': 1010601,
                  'slug': 'spices-and-seasonings',
                  'name': '양념·향신료',
                  'depth': 4,
                  'parent': 1010600,
                  'children': []
                },
                {
                  'id': 1010602,
                  'slug': 'salt-and-pepper',
                  'name': '소금·후추',
                  'depth': 4,
                  'parent': 1010600,
                  'children': []
                },
                {
                  'id': 1010603,
                  'slug': 'condiments',
                  'name': '조미료',
                  'depth': 4,
                  'parent': 1010600,
                  'children': []
                },
                {
                  'id': 1010604,
                  'slug': 'oils',
                  'name': '오일',
                  'depth': 4,
                  'parent': 1010600,
                  'children': []
                },
                {
                  'id': 1010605,
                  'slug': 'vinegars',
                  'name': '식초',
                  'depth': 4,
                  'parent': 1010600,
                  'children': []
                },
                {
                  'id': 1010606,
                  'slug': 'salad-dressings',
                  'name': '샐러드드레싱',
                  'depth': 4,
                  'parent': 1010600,
                  'children': []
                },
                {
                  'id': 1010607,
                  'slug': 'salad-toppings',
                  'name': '샐러드토핑',
                  'depth': 4,
                  'parent': 1010600,
                  'children': []
                },
                {
                  'id': 1010608,
                  'slug': 'sauces-and-marinades',
                  'name': '소스·마리네이드',
                  'depth': 4,
                  'parent': 1010600,
                  'children': []
                },
                {
                  'id': 1010609,
                  'slug': 'salsas-and-dips',
                  'name': '샐러드·딥스',
                  'depth': 4,
                  'parent': 1010600,
                  'children': []
                },
                {
                  'id': 1010610,
                  'slug': 'butters',
                  'name': '버터',
                  'depth': 4,
                  'parent': 1010600,
                  'children': []
                },
                {
                  'id': 1010611,
                  'slug': 'jams-jellies-and-preserves',
                  'name': '잼·젤리',
                  'depth': 4,
                  'parent': 1010600,
                  'children': []
                },
                {
                  'id': 1010612,
                  'slug': 'sweet-spreads',
                  'name': '스위트스프레드',
                  'depth': 4,
                  'parent': 1010600,
                  'children': []
                },
                {
                  'id': 1010613,
                  'slug': 'flours-and-meals',
                  'name': '곡물분말',
                  'depth': 4,
                  'parent': 1010600,
                  'children': []
                },
                {
                  'id': 1010614,
                  'slug': 'sugar-and-other-sweeteners',
                  'name': '설탕·감미료',
                  'depth': 4,
                  'parent': 1010600,
                  'children': []
                },
                {
                  'id': 1010615,
                  'slug': 'baking-ingredients',
                  'name': '제빵재료',
                  'depth': 4,
                  'parent': 1010600,
                  'children': []
                },
                {
                  'id': 1010616,
                  'slug': 'baking-mixes',
                  'name': '제빵분말',
                  'depth': 4,
                  'parent': 1010600,
                  'children': []
                },
                {
                  'id': 1010617,
                  'slug': 'honey-and-syrups',
                  'name': '꿀·시럽',
                  'depth': 4,
                  'parent': 1010600,
                  'children': []
                }
              ]
            },
            {
              'id': 1010700,
              'slug': 'pasta-and-pasta-sauce',
              'name': '파스타·파스타소스',
              'depth': 3,
              'parent': 1010000,
              'children': [
                {
                  'id': 1010701,
                  'slug': 'pasta-and-noodles',
                  'name': '파스타',
                  'depth': 4,
                  'parent': 1010700,
                  'children': []
                },
                {
                  'id': 1010702,
                  'slug': 'pasta-sauces',
                  'name': '파스타소스',
                  'depth': 4,
                  'parent': 1010700,
                  'children': []
                }
              ]
            },
            {
              'id': 1010800,
              'slug': 'canned-and-jarred-food',
              'name': '통조림',
              'depth': 3,
              'parent': 1010000,
              'children': [
                {
                  'id': 1010801,
                  'slug': 'canned-beans',
                  'name': '콩통조림',
                  'depth': 4,
                  'parent': 1010800,
                  'children': []
                },
                {
                  'id': 1010802,
                  'slug': 'canned-fruit',
                  'name': '과일통조림',
                  'depth': 4,
                  'parent': 1010800,
                  'children': []
                },
                {
                  'id': 1010803,
                  'slug': 'canned-meat-and-seafood',
                  'name': '해산물·육류통조림',
                  'depth': 4,
                  'parent': 1010800,
                  'children': []
                },
                {
                  'id': 1010804,
                  'slug': 'canned-vegetables',
                  'name': '야채통조림',
                  'depth': 4,
                  'parent': 1010800,
                  'children': []
                },
                {
                  'id': 1010805,
                  'slug': 'canned-tomatoes-and-paste',
                  'name': '토마토통조림',
                  'depth': 4,
                  'parent': 1010800,
                  'children': []
                },
                {
                  'id': 1010806,
                  'slug': 'pickled-vegetables-and-olives',
                  'name': '피클·올리브통조림',
                  'depth': 4,
                  'parent': 1010800,
                  'children': []
                }
              ]
            },
            {
              'id': 1010900,
              'slug': 'cooking-and-baking-supplies',
              'name': '제과제빵',
              'depth': 3,
              'parent': 1010000,
              'children': [
                {
                  'id': 1010901,
                  'slug': 'baking-mixes',
                  'name': '제빵분말',
                  'depth': 4,
                  'parent': 1010900,
                  'children': []
                },
                {
                  'id': 1010902,
                  'slug': 'baking-ingredients',
                  'name': '제빵재료',
                  'depth': 4,
                  'parent': 1010900,
                  'children': []
                },
                {
                  'id': 1010903,
                  'slug': 'breadcrumbs',
                  'name': '빵가루',
                  'depth': 4,
                  'parent': 1010900,
                  'children': []
                },
                {
                  'id': 1010904,
                  'slug': 'doughs-shells-and-crusts',
                  'name': '도우·크러스트',
                  'depth': 4,
                  'parent': 1010900,
                  'children': []
                },
                {
                  'id': 1010905,
                  'slug': 'extracts',
                  'name': '추출물',
                  'depth': 4,
                  'parent': 1010900,
                  'children': []
                },
                {
                  'id': 1010906,
                  'slug': 'flours-and-meals',
                  'name': '곡물 분말',
                  'depth': 4,
                  'parent': 1010900,
                  'children': []
                },
                {
                  'id': 1010907,
                  'slug': 'frosting-and-decoration',
                  'name': '데코레이션',
                  'depth': 4,
                  'parent': 1010900,
                  'children': []
                },
                {
                  'id': 1010908,
                  'slug': 'marshmallows',
                  'name': '마시멜로우',
                  'depth': 4,
                  'parent': 1010900,
                  'children': []
                },
                {
                  'id': 1010909,
                  'slug': 'sugar-and-other-sweeteners',
                  'name': '설탕·감미료',
                  'depth': 4,
                  'parent': 1010900,
                  'children': []
                },
                {
                  'id': 1010910,
                  'slug': 'honey-and-syrups',
                  'name': '꿀·시럽',
                  'depth': 4,
                  'parent': 1010900,
                  'children': []
                }
              ]
            },
            {
              'id': 1011000,
              'slug': 'rice-beans-and-grains',
              'name': '쌀·콩·곡물',
              'depth': 3,
              'parent': 1010000,
              'children': [
                {
                  'id': 1011001,
                  'slug': 'dry-beans',
                  'name': '콩',
                  'depth': 4,
                  'parent': 1011000,
                  'children': []
                },
                {
                  'id': 1011002,
                  'slug': 'grains',
                  'name': '곡물',
                  'depth': 4,
                  'parent': 1011000,
                  'children': []
                },
                {
                  'id': 1011003,
                  'slug': 'quinoa',
                  'name': '퀴노아',
                  'depth': 4,
                  'parent': 1011000,
                  'children': []
                },
                {
                  'id': 1011004,
                  'slug': 'rice',
                  'name': '쌀',
                  'depth': 4,
                  'parent': 1011000,
                  'children': []
                },
                {
                  'id': 1011005,
                  'slug': 'couscous',
                  'name': '쿠스쿠스',
                  'depth': 4,
                  'parent': 1011000,
                  'children': []
                }
              ]
            },
            {
              'id': 1011100,
              'slug': 'international-food',
              'name': '해외식품',
              'depth': 3,
              'parent': 1010000,
              'children': [
                {
                  'id': 1011101,
                  'slug': 'indian-cuisine',
                  'name': '인도요리',
                  'depth': 4,
                  'parent': 1011100,
                  'children': []
                },
                {
                  'id': 1011102,
                  'slug': 'chinese-cuisine',
                  'name': '중식',
                  'depth': 4,
                  'parent': 1011100,
                  'children': []
                },
                {
                  'id': 1011103,
                  'slug': 'japanese-cuisine',
                  'name': '일식',
                  'depth': 4,
                  'parent': 1011100,
                  'children': []
                },
                {
                  'id': 1011104,
                  'slug': 'korean-cuisine',
                  'name': '한식',
                  'depth': 4,
                  'parent': 1011100,
                  'children': []
                },
                {
                  'id': 1011105,
                  'slug': 'asian-cuisine',
                  'name': '아시아요리',
                  'depth': 4,
                  'parent': 1011100,
                  'children': []
                },
                {
                  'id': 1011106,
                  'slug': 'mexican-cuisine',
                  'name': '멕시코요리',
                  'depth': 4,
                  'parent': 1011100,
                  'children': []
                },
                {
                  'id': 1011107,
                  'slug': 'latin-american-cuisine',
                  'name': '라틴요리',
                  'depth': 4,
                  'parent': 1011100,
                  'children': []
                },
                {
                  'id': 1011108,
                  'slug': 'australian-cuisine',
                  'name': '호주요리',
                  'depth': 4,
                  'parent': 1011100,
                  'children': []
                },
                {
                  'id': 1011109,
                  'slug': 'european-cuisine',
                  'name': '유럽요리',
                  'depth': 4,
                  'parent': 1011100,
                  'children': []
                }
              ]
            }
          ]
        },
        {
          'id': 1020000,
          'slug': 'household-supplies',
          'name': '생활용품',
          'depth': 2,
          'parent': 1000000,
          'children': [
            {
              'id': 1020100,
              'slug': 'paper-and-plastic-products',
              'name': '화장지·일회용품',
              'depth': 3,
              'parent': 1020000,
              'children': [
                {
                  'id': 1020101,
                  'slug': 'paper-towels',
                  'name': '종이타월',
                  'depth': 4,
                  'parent': 1020100,
                  'children': []
                },
                {
                  'id': 1020102,
                  'slug': 'toilet-paper',
                  'name': '화장지',
                  'depth': 4,
                  'parent': 1020100,
                  'children': []
                },
                {
                  'id': 1020103,
                  'slug': 'facial-tissues',
                  'name': '미용티슈',
                  'depth': 4,
                  'parent': 1020100,
                  'children': []
                },
                {
                  'id': 1020104,
                  'slug': 'disposable-tableware',
                  'name': '일회용식탁용품',
                  'depth': 4,
                  'parent': 1020100,
                  'children': []
                },
                {
                  'id': 1020105,
                  'slug': 'paper-napkins',
                  'name': '넵킨',
                  'depth': 4,
                  'parent': 1020100,
                  'children': []
                },
                {
                  'id': 1020106,
                  'slug': 'disposable-coffee-filters',
                  'name': '일회용커피필터',
                  'depth': 4,
                  'parent': 1020100,
                  'children': []
                }
              ]
            },
            {
              'id': 1020200,
              'slug': 'laundry',
              'name': '세탁',
              'depth': 3,
              'parent': 1020000,
              'children': [
                {
                  'id': 1020201,
                  'slug': 'laundry-detergent',
                  'name': '세제',
                  'depth': 4,
                  'parent': 1020200,
                  'children': []
                },
                {
                  'id': 1020202,
                  'slug': 'fabric-softener',
                  'name': '섬유유연제',
                  'depth': 4,
                  'parent': 1020200,
                  'children': []
                },
                {
                  'id': 1020203,
                  'slug': 'dryer-sheets-and-balls',
                  'name': '건조시트·볼',
                  'depth': 4,
                  'parent': 1020200,
                  'children': []
                },
                {
                  'id': 1020204,
                  'slug': 'stain-removers',
                  'name': '얼룩제거제',
                  'depth': 4,
                  'parent': 1020200,
                  'children': []
                },
                {
                  'id': 1020205,
                  'slug': 'scent-boosters',
                  'name': '세탁방향제',
                  'depth': 4,
                  'parent': 1020200,
                  'children': []
                },
                {
                  'id': 1020206,
                  'slug': 'bleach',
                  'name': '표백제',
                  'depth': 4,
                  'parent': 1020200,
                  'children': []
                },
                {
                  'id': 1020207,
                  'slug': 'washing-machine-cleaners',
                  'name': '세탁조청소',
                  'depth': 4,
                  'parent': 1020200,
                  'children': []
                },
                {
                  'id': 1020208,
                  'slug': 'other-laundry-care',
                  'name': '기타세탁용품',
                  'depth': 4,
                  'parent': 1020200,
                  'children': []
                }
              ]
            },
            {
              'id': 1020300,
              'slug': 'cleaning-products',
              'name': '청소용품',
              'depth': 3,
              'parent': 1020000,
              'children': [
                {
                  'id': 1020301,
                  'slug': 'all-purpose-cleaners',
                  'name': '다목적클리너',
                  'depth': 4,
                  'parent': 1020300,
                  'children': []
                },
                {
                  'id': 1020302,
                  'slug': 'cleaning-wipes',
                  'name': '청소용티슈',
                  'depth': 4,
                  'parent': 1020300,
                  'children': []
                },
                {
                  'id': 1020303,
                  'slug': 'bleach',
                  'name': '표백제',
                  'depth': 4,
                  'parent': 1020300,
                  'children': []
                },
                {
                  'id': 1020304,
                  'slug': 'sponges-and-brushes',
                  'name': '스펀지·브러쉬',
                  'depth': 4,
                  'parent': 1020300,
                  'children': []
                },
                {
                  'id': 1020305,
                  'slug': 'dishwashing-detergent',
                  'name': '주방세제',
                  'depth': 4,
                  'parent': 1020300,
                  'children': []
                },
                {
                  'id': 1020306,
                  'slug': 'dish-soap',
                  'name': '주방비누',
                  'depth': 4,
                  'parent': 1020300,
                  'children': []
                },
                {
                  'id': 1020307,
                  'slug': 'bathroom-cleaners',
                  'name': '욕실청소',
                  'depth': 4,
                  'parent': 1020300,
                  'children': []
                },
                {
                  'id': 1020308,
                  'slug': 'kitchen-cleaners',
                  'name': '주방청소',
                  'depth': 4,
                  'parent': 1020300,
                  'children': []
                },
                {
                  'id': 1020309,
                  'slug': 'produce-wash',
                  'name': '식품세척',
                  'depth': 4,
                  'parent': 1020300,
                  'children': []
                },
                {
                  'id': 1020310,
                  'slug': 'drain-cleaners',
                  'name': '배수관청소',
                  'depth': 4,
                  'parent': 1020300,
                  'children': []
                },
                {
                  'id': 1020311,
                  'slug': 'floor-cleaners',
                  'name': '거실청소',
                  'depth': 4,
                  'parent': 1020300,
                  'children': []
                },
                {
                  'id': 1020312,
                  'slug': 'specialty-cleaners',
                  'name': '특수청소',
                  'depth': 4,
                  'parent': 1020300,
                  'children': []
                },
                {
                  'id': 1020313,
                  'slug': 'glass-cleaners',
                  'name': '유리청소',
                  'depth': 4,
                  'parent': 1020300,
                  'children': []
                }
              ]
            },
            {
              'id': 1020400,
              'slug': 'cleaning-tools',
              'name': '유리청소',
              'depth': 3,
              'parent': 1020000,
              'children': [
                {
                  'id': 1020401,
                  'slug': 'sponges-and-brushes',
                  'name': '스펀지·브러쉬',
                  'depth': 4,
                  'parent': 1020400,
                  'children': []
                },
                {
                  'id': 1020402,
                  'slug': 'mops-and-accessories',
                  'name': '대걸레·액세서리',
                  'depth': 4,
                  'parent': 1020400,
                  'children': []
                },
                {
                  'id': 1020403,
                  'slug': 'dusting-tools-and-cloths',
                  'name': '먼지청소',
                  'depth': 4,
                  'parent': 1020400,
                  'children': []
                },
                {
                  'id': 1020404,
                  'slug': 'cleaning-gloves',
                  'name': '청소용장갑',
                  'depth': 4,
                  'parent': 1020400,
                  'children': []
                },
                {
                  'id': 1020405,
                  'slug': 'brooms',
                  'name': '빗자루',
                  'depth': 4,
                  'parent': 1020400,
                  'children': []
                },
                {
                  'id': 1020406,
                  'slug': 'bowl-brushes-and-plungers',
                  'name': '볼브러쉬·플런저',
                  'depth': 4,
                  'parent': 1020400,
                  'children': []
                },
                {
                  'id': 1020407,
                  'slug': 'dustbins',
                  'name': '휴지통',
                  'depth': 4,
                  'parent': 1020400,
                  'children': []
                }
              ]
            },
            {
              'id': 1020500,
              'slug': 'food-storage-and-trash-bags',
              'name': '보관용기·팩',
              'depth': 3,
              'parent': 1020000,
              'children': [
                {
                  'id': 1020501,
                  'slug': 'food-storage-bags',
                  'name': '비닐팩',
                  'depth': 4,
                  'parent': 1020500,
                  'children': []
                },
                {
                  'id': 1020502,
                  'slug': 'foil',
                  'name': '호일',
                  'depth': 4,
                  'parent': 1020500,
                  'children': []
                },
                {
                  'id': 1020503,
                  'slug': 'food-storage-containers',
                  'name': '음식보관용기',
                  'depth': 4,
                  'parent': 1020500,
                  'children': []
                },
                {
                  'id': 1020504,
                  'slug': 'plastic-wrap',
                  'name': '비닐랩',
                  'depth': 4,
                  'parent': 1020500,
                  'children': []
                },
                {
                  'id': 1020505,
                  'slug': 'wax-and-parchment-paper',
                  'name': '왁스·파치먼트페이퍼',
                  'depth': 4,
                  'parent': 1020500,
                  'children': []
                },
                {
                  'id': 1020506,
                  'slug': 'trash-bags',
                  'name': '왁스·파치먼트페이퍼',
                  'depth': 4,
                  'parent': 1020500,
                  'children': []
                }
              ]
            },
            {
              'id': 1020600,
              'slug': 'home-fragrance',
              'name': '방향',
              'depth': 3,
              'parent': 1020000,
              'children': [
                {
                  'id': 1020601,
                  'slug': 'air-fresheners',
                  'name': '방향제',
                  'depth': 4,
                  'parent': 1020600,
                  'children': []
                },
                {
                  'id': 1020602,
                  'slug': 'candles',
                  'name': '향초',
                  'depth': 4,
                  'parent': 1020600,
                  'children': []
                },
                {
                  'id': 1020603,
                  'slug': 'fragrance-diffusers',
                  'name': '디퓨저',
                  'depth': 4,
                  'parent': 1020600,
                  'children': []
                }
              ]
            },
            {
              'id': 1020700,
              'slug': 'light-bulbs',
              'name': '백열전구',
              'depth': 3,
              'parent': 1020000,
              'children': []
            },
            {
              'id': 1020800,
              'slug': 'insect-and-pest-control',
              'name': '방충용품',
              'depth': 3,
              'parent': 1020000,
              'children': [
                {
                  'id': 1020801,
                  'slug': 'indoor-pest-control',
                  'name': '실내용해충',
                  'depth': 4,
                  'parent': 1020800,
                  'children': []
                },
                {
                  'id': 1020802,
                  'slug': 'outdoor-pest-control',
                  'name': '야외용해충',
                  'depth': 4,
                  'parent': 1020800,
                  'children': []
                },
                {
                  'id': 1020803,
                  'slug': 'insect-repellent',
                  'name': '방충제',
                  'depth': 4,
                  'parent': 1020800,
                  'children': []
                }
              ]
            }
          ]
        },
        {
          'id': 1030000,
          'slug': 'personal-care',
          'name': '퍼스날케어',
          'depth': 2,
          'parent': 1000000,
          'children': [
            {
              'id': 1030100,
              'slug': 'oral-and-personal-care',
              'name': '위생용품',
              'depth': 3,
              'parent': 1030000,
              'children': [
                {
                  'id': 1030101,
                  'slug': 'deodorant',
                  'name': '데오드란트',
                  'depth': 4,
                  'parent': 1030100,
                  'children': []
                },
                {
                  'id': 1030102,
                  'slug': 'ear-care',
                  'name': '귀건강',
                  'depth': 4,
                  'parent': 1030100,
                  'children': []
                },
                {
                  'id': 1030103,
                  'slug': 'eye-care',
                  'name': '눈건강',
                  'depth': 4,
                  'parent': 1030100,
                  'children': []
                },
                {
                  'id': 1030104,
                  'slug': 'feminine-care',
                  'name': '여성청결제',
                  'depth': 4,
                  'parent': 1030100,
                  'children': []
                },
                {
                  'id': 1030105,
                  'slug': 'toothbrushes',
                  'name': '여성청결제',
                  'depth': 4,
                  'parent': 1030100,
                  'children': []
                },
                {
                  'id': 1030106,
                  'slug': 'toothpaste',
                  'name': '치약',
                  'depth': 4,
                  'parent': 1030100,
                  'children': []
                },
                {
                  'id': 1030107,
                  'slug': 'mouthwash',
                  'name': '구강청결제',
                  'depth': 4,
                  'parent': 1030100,
                  'children': []
                },
                {
                  'id': 1030108,
                  'slug': 'dental-floss',
                  'name': '치실',
                  'depth': 4,
                  'parent': 1030100,
                  'children': []
                },
                {
                  'id': 1030109,
                  'slug': 'manual-toothbrushes',
                  'name': '칫솔',
                  'depth': 4,
                  'parent': 1030100,
                  'children': []
                },
                {
                  'id': 1030110,
                  'slug': 'electric-toothbrushes',
                  'name': '전동칫솔',
                  'depth': 4,
                  'parent': 1030100,
                  'children': []
                },
                {
                  'id': 1030111,
                  'slug': 'other-oral-care',
                  'name': '구강관리',
                  'depth': 4,
                  'parent': 1030100,
                  'children': []
                },
                {
                  'id': 1030112,
                  'slug': 'razors',
                  'name': '면도기',
                  'depth': 4,
                  'parent': 1030100,
                  'children': []
                },
                {
                  'id': 1030113,
                  'slug': 'shaving-cream',
                  'name': '면도크림',
                  'depth': 4,
                  'parent': 1030100,
                  'children': []
                },
                {
                  'id': 1030114,
                  'slug': 'waxing-and-hair-removal',
                  'name': '왁싱·제모',
                  'depth': 4,
                  'parent': 1030100,
                  'children': []
                },
                {
                  'id': 1030115,
                  'slug': 'safer-sex-and-contraceptives',
                  'name': '피임기구',
                  'depth': 4,
                  'parent': 1030100,
                  'children': []
                },
                {
                  'id': 1030116,
                  'slug': 'cotton-balls-and-rounds',
                  'name': '코튼볼',
                  'depth': 4,
                  'parent': 1030100,
                  'children': []
                },
                {
                  'id': 1030117,
                  'slug': 'incontinence',
                  'name': '요실금',
                  'depth': 4,
                  'parent': 1030100,
                  'children': []
                },
                {
                  'id': 1030118,
                  'slug': 'wet-shave',
                  'name': '면도',
                  'depth': 4,
                  'parent': 1030100,
                  'children': []
                },
                {
                  'id': 1030119,
                  'slug': 'electric-shavers',
                  'name': '전기면도',
                  'depth': 4,
                  'parent': 1030100,
                  'children': []
                }
              ]
            },
            {
              'id': 1030200,
              'slug': 'tools-and-accessories',
              'name': '뷰티액세서리',
              'depth': 3,
              'parent': 1030000,
              'children': [
                {
                  'id': 1030201,
                  'slug': 'bath-sponges-and-tools',
                  'name': '목욕용품·스펀지',
                  'depth': 4,
                  'parent': 1030200,
                  'children': []
                },
                {
                  'id': 1030202,
                  'slug': 'eye-masks',
                  'name': '아이마스크',
                  'depth': 4,
                  'parent': 1030200,
                  'children': []
                },
                {
                  'id': 1030203,
                  'slug': 'beauty-and-spa-tools',
                  'name': '스파용품',
                  'depth': 4,
                  'parent': 1030200,
                  'children': []
                },
                {
                  'id': 1030204,
                  'slug': 'cotton-balls-and-rounds',
                  'name': '화장솜',
                  'depth': 4,
                  'parent': 1030200,
                  'children': []
                },
                {
                  'id': 1030205,
                  'slug': 'mirrors',
                  'name': '거울',
                  'depth': 4,
                  'parent': 1030200,
                  'children': []
                },
                {
                  'id': 1030206,
                  'slug': 'toiletry-kits-and-cases',
                  'name': '화장품주머니',
                  'depth': 4,
                  'parent': 1030200,
                  'children': []
                },
                {
                  'id': 1030207,
                  'slug': 'tweezers',
                  'name': '핀셋',
                  'depth': 4,
                  'parent': 1030200,
                  'children': []
                },
                {
                  'id': 1030208,
                  'slug': 'facial-tissues',
                  'name': '미용티슈',
                  'depth': 4,
                  'parent': 1030200,
                  'children': []
                },
                {
                  'id': 1030209,
                  'slug': 'nail-care-tools',
                  'name': '네일케어',
                  'depth': 4,
                  'parent': 1030200,
                  'children': []
                },
                {
                  'id': 1030210,
                  'slug': 'top-beauty-tools-and-accessories',
                  'name': '뷰티베스트',
                  'depth': 4,
                  'parent': 1030200,
                  'children': []
                }
              ]
            },
            {
              'id': 1030300,
              'slug': 'hair-care-products',
              'name': '헤어케어',
              'depth': 3,
              'parent': 1030000,
              'children': [
                {
                  'id': 1030301,
                  'slug': 'shampoos',
                  'name': '샴푸',
                  'depth': 4,
                  'parent': 1030300,
                  'children': []
                },
                {
                  'id': 1030302,
                  'slug': 'conditioners',
                  'name': '컨디셔너',
                  'depth': 4,
                  'parent': 1030300,
                  'children': []
                },
                {
                  'id': 1030303,
                  'slug': 'styling-products',
                  'name': '스타일링',
                  'depth': 4,
                  'parent': 1030300,
                  'children': []
                },
                {
                  'id': 1030304,
                  'slug': 'scalp-treatments',
                  'name': '두피관리',
                  'depth': 4,
                  'parent': 1030300,
                  'children': []
                },
                {
                  'id': 1030305,
                  'slug': 'hair-color',
                  'name': '염색',
                  'depth': 4,
                  'parent': 1030300,
                  'children': []
                },
                {
                  'id': 1030306,
                  'slug': 'hair-loss-products',
                  'name': '탈모관리',
                  'depth': 4,
                  'parent': 1030300,
                  'children': []
                },
                {
                  'id': 1030307,
                  'slug': 'hair-perms-and-texturizers',
                  'name': '펌·텍스처',
                  'depth': 4,
                  'parent': 1030300,
                  'children': []
                },
                {
                  'id': 1030308,
                  'slug': 'hair-relaxers-and-treatments',
                  'name': '트리트먼트',
                  'depth': 4,
                  'parent': 1030300,
                  'children': []
                },
                {
                  'id': 1030309,
                  'slug': 'multicultural-hair-care-products',
                  'name': '트리트먼트',
                  'depth': 4,
                  'parent': 1030300,
                  'children': []
                },
                {
                  'id': 1030310,
                  'slug': 'innovative-hair-care',
                  'name': '집중관리',
                  'depth': 4,
                  'parent': 1030300,
                  'children': []
                }
              ]
            },
            {
              'id': 1030400,
              'slug': 'hair-tools-and-accessories',
              'name': '헤어액세서리',
              'depth': 3,
              'parent': 1030000,
              'children': [
                {
                  'id': 1030401,
                  'slug': 'brushes',
                  'name': '브러쉬',
                  'depth': 4,
                  'parent': 1030400,
                  'children': []
                },
                {
                  'id': 1030402,
                  'slug': 'dryers-irons-and-diffusers',
                  'name': '드라이어·고데기',
                  'depth': 4,
                  'parent': 1030400,
                  'children': []
                },
                {
                  'id': 1030403,
                  'slug': 'hair-rollers',
                  'name': '롤러',
                  'depth': 4,
                  'parent': 1030400,
                  'children': []
                },
                {
                  'id': 1030404,
                  'slug': 'hair-accessories',
                  'name': '액세서리',
                  'depth': 4,
                  'parent': 1030400,
                  'children': []
                },
                {
                  'id': 1030405,
                  'slug': 'haircutting-tools',
                  'name': '이발용품',
                  'depth': 4,
                  'parent': 1030400,
                  'children': []
                },
                {
                  'id': 1030406,
                  'slug': 'combs',
                  'name': '빗',
                  'depth': 4,
                  'parent': 1030400,
                  'children': []
                }
              ]
            },
            {
              'id': 1030500,
              'slug': 'makeup',
              'name': '메이크업',
              'depth': 3,
              'parent': 1030000,
              'children': [
                {
                  'id': 1030501,
                  'slug': 'body-art-and-makeup',
                  'name': '바디아트',
                  'depth': 4,
                  'parent': 1030500,
                  'children': []
                },
                {
                  'id': 1030502,
                  'slug': 'makeup-brushes',
                  'name': '메이크업브러쉬',
                  'depth': 4,
                  'parent': 1030500,
                  'children': []
                },
                {
                  'id': 1030503,
                  'slug': 'face-makeup',
                  'name': '페이스메이크업',
                  'depth': 4,
                  'parent': 1030500,
                  'children': []
                },
                {
                  'id': 1030504,
                  'slug': 'lip-makeup',
                  'name': '립메이크업',
                  'depth': 4,
                  'parent': 1030500,
                  'children': []
                },
                {
                  'id': 1030505,
                  'slug': 'makeup-sets',
                  'name': '메이크업세트',
                  'depth': 4,
                  'parent': 1030500,
                  'children': []
                },
                {
                  'id': 1030506,
                  'slug': 'eyeliner-and-brow-pencils',
                  'name': '아이라이너·브로우펜슬',
                  'depth': 4,
                  'parent': 1030500,
                  'children': []
                },
                {
                  'id': 1030507,
                  'slug': 'mascara-and-lashes',
                  'name': '마스카라·래쉬',
                  'depth': 4,
                  'parent': 1030500,
                  'children': []
                },
                {
                  'id': 1030508,
                  'slug': 'eye-shadow',
                  'name': '아이섀도',
                  'depth': 4,
                  'parent': 1030500,
                  'children': []
                },
                {
                  'id': 1030509,
                  'slug': 'makeup-sponges',
                  'name': '메이크업스펀지',
                  'depth': 4,
                  'parent': 1030500,
                  'children': []
                },
                {
                  'id': 1030510,
                  'slug': 'makeup-tools',
                  'name': '메이크업용품',
                  'depth': 4,
                  'parent': 1030500,
                  'children': []
                }
              ]
            },
            {
              'id': 1030600,
              'slug': 'nail-care',
              'name': '네일케어',
              'depth': 3,
              'parent': 1030000,
              'children': [
                {
                  'id': 1030601,
                  'slug': 'cuticle-care',
                  'name': '큐티클케어',
                  'depth': 4,
                  'parent': 1030600,
                  'children': []
                },
                {
                  'id': 1030602,
                  'slug': 'nail-care-tools',
                  'name': '네일케어용품',
                  'depth': 4,
                  'parent': 1030600,
                  'children': []
                },
                {
                  'id': 1030603,
                  'slug': 'nail-polish',
                  'name': '매니큐어',
                  'depth': 4,
                  'parent': 1030600,
                  'children': []
                },
                {
                  'id': 1030604,
                  'slug': 'nail-polish-remover',
                  'name': '매니큐어리무버',
                  'depth': 4,
                  'parent': 1030600,
                  'children': []
                }
              ]
            },
            {
              'id': 1030700,
              'slug': 'skin-care',
              'name': '스킨케어',
              'depth': 3,
              'parent': 1030000,
              'children': [
                {
                  'id': 1030701,
                  'slug': 'bath-salts-and-bubbles',
                  'name': '입욕제',
                  'depth': 4,
                  'parent': 1030700,
                  'children': []
                },
                {
                  'id': 1030702,
                  'slug': 'makeup-remover',
                  'name': '메이크업리무버',
                  'depth': 4,
                  'parent': 1030700,
                  'children': []
                },
                {
                  'id': 1030703,
                  'slug': 'hand-soap',
                  'name': '핸드워시',
                  'depth': 4,
                  'parent': 1030700,
                  'children': []
                },
                {
                  'id': 1030704,
                  'slug': 'lip-care',
                  'name': '립케어',
                  'depth': 4,
                  'parent': 1030700,
                  'children': []
                },
                {
                  'id': 1030705,
                  'slug': 'suncare',
                  'name': '선케어',
                  'depth': 4,
                  'parent': 1030700,
                  'children': []
                },
                {
                  'id': 1030706,
                  'slug': 'toners-and-astringents',
                  'name': '스킨토너',
                  'depth': 4,
                  'parent': 1030700,
                  'children': []
                },
                {
                  'id': 1030707,
                  'slug': 'body-powder',
                  'name': '바디파우더',
                  'depth': 4,
                  'parent': 1030700,
                  'children': []
                },
                {
                  'id': 1030708,
                  'slug': 'body-moisturizers',
                  'name': '바디모이스처',
                  'depth': 4,
                  'parent': 1030700,
                  'children': []
                },
                {
                  'id': 1030709,
                  'slug': 'massage-oil-and-aromatherapy',
                  'name': '마사지오일·아로마',
                  'depth': 4,
                  'parent': 1030700,
                  'children': []
                },
                {
                  'id': 1030710,
                  'slug': 'hand-sanitizers-and-wipes',
                  'name': '손세정제',
                  'depth': 4,
                  'parent': 1030700,
                  'children': []
                },
                {
                  'id': 1030711,
                  'slug': 'facial-cleansers',
                  'name': '클랜저',
                  'depth': 4,
                  'parent': 1030700,
                  'children': []
                },
                {
                  'id': 1030712,
                  'slug': 'facial-moisturizers-and-treatment',
                  'name': '보습·미백',
                  'depth': 4,
                  'parent': 1030700,
                  'children': []
                },
                {
                  'id': 1030713,
                  'slug': 'soap-and-body-wash',
                  'name': '바디워시',
                  'depth': 4,
                  'parent': 1030700,
                  'children': []
                },
                {
                  'id': 1030714,
                  'slug': 'shaving-cream',
                  'name': '쉐이빙크림',
                  'depth': 4,
                  'parent': 1030700,
                  'children': []
                }
              ]
            },
            {
              'id': 1030800,
              'slug': 'mens-essentials',
              'name': '남성용품',
              'depth': 3,
              'parent': 1030000,
              'children': [
                {
                  'id': 1030801,
                  'slug': 'beard-and-shave',
                  'name': '면도',
                  'depth': 4,
                  'parent': 1030800,
                  'children': []
                },
                {
                  'id': 1030802,
                  'slug': 'body',
                  'name': '바디',
                  'depth': 4,
                  'parent': 1030800,
                  'children': []
                },
                {
                  'id': 1030803,
                  'slug': 'face',
                  'name': '페이스',
                  'depth': 4,
                  'parent': 1030800,
                  'children': []
                },
                {
                  'id': 1030804,
                  'slug': 'hair',
                  'name': '헤어',
                  'depth': 4,
                  'parent': 1030800,
                  'children': []
                },
                {
                  'id': 1030805,
                  'slug': 'cologne',
                  'name': '향수',
                  'depth': 4,
                  'parent': 1030800,
                  'children': []
                },
                {
                  'id': 1030806,
                  'slug': 'wellness',
                  'name': '건강',
                  'depth': 4,
                  'parent': 1030800,
                  'children': []
                }
              ]
            }
          ]
        },
        {
          'id': 1040000,
          'slug': 'health',
          'name': '건강',
          'depth': 2,
          'parent': 1000000,
          'children': [
            {
              'id': 1040100,
              'slug': 'medicine-cabinet',
              'name': '의약품',
              'depth': 3,
              'parent': 1040000,
              'children': [
                {
                  'id': 1040101,
                  'slug': 'allergy-sinus-and-asthma',
                  'name': '알러지·천식',
                  'depth': 4,
                  'parent': 1040100,
                  'children': []
                },
                {
                  'id': 1040102,
                  'slug': 'childrens-medicine',
                  'name': '어린이용약품',
                  'depth': 4,
                  'parent': 1040100,
                  'children': []
                },
                {
                  'id': 1040103,
                  'slug': 'cold-sore-and-blister-treatments',
                  'name': '물집·발진',
                  'depth': 4,
                  'parent': 1040100,
                  'children': []
                },
                {
                  'id': 1040104,
                  'slug': 'cough-and-cold',
                  'name': '감기',
                  'depth': 4,
                  'parent': 1040100,
                  'children': []
                },
                {
                  'id': 1040105,
                  'slug': 'diabetes',
                  'name': '당뇨',
                  'depth': 4,
                  'parent': 1040100,
                  'children': []
                },
                {
                  'id': 1040106,
                  'slug': 'digestion-and-nausea',
                  'name': '소화불량',
                  'depth': 4,
                  'parent': 1040100,
                  'children': []
                },
                {
                  'id': 1040107,
                  'slug': 'foot-healthcare',
                  'name': '발건강',
                  'depth': 4,
                  'parent': 1040100,
                  'children': []
                },
                {
                  'id': 1040108,
                  'slug': 'incontinence',
                  'name': '요실금',
                  'depth': 4,
                  'parent': 1040100,
                  'children': []
                },
                {
                  'id': 1040109,
                  'slug': 'pain-relievers',
                  'name': '진통제',
                  'depth': 4,
                  'parent': 1040100,
                  'children': []
                },
                {
                  'id': 1040110,
                  'slug': 'sleep-and-snoring',
                  'name': '수면·코골이',
                  'depth': 4,
                  'parent': 1040100,
                  'children': []
                },
                {
                  'id': 1040111,
                  'slug': 'smoking-cessation',
                  'name': '금연용품',
                  'depth': 4,
                  'parent': 1040100,
                  'children': []
                },
                {
                  'id': 1040112,
                  'slug': 'therapeutic-ointments-and-powders',
                  'name': '연고',
                  'depth': 4,
                  'parent': 1040100,
                  'children': []
                },
                {
                  'id': 1040113,
                  'slug': 'thermometers',
                  'name': '체온계',
                  'depth': 4,
                  'parent': 1040100,
                  'children': []
                },
                {
                  'id': 1040114,
                  'slug': 'ear-care',
                  'name': '귀건강',
                  'depth': 4,
                  'parent': 1040100,
                  'children': []
                },
                {
                  'id': 1040115,
                  'slug': 'eye-care',
                  'name': '눈건강',
                  'depth': 4,
                  'parent': 1040100,
                  'children': []
                }
              ]
            },
            {
              'id': 1040200,
              'slug': 'medical-supplies-and-equipment',
              'name': '의료용품',
              'depth': 3,
              'parent': 1040000,
              'children': [
                {
                  'id': 1040201,
                  'slug': 'pills-cases-and-splitters',
                  'name': '약케이스',
                  'depth': 4,
                  'parent': 1040200,
                  'children': []
                },
                {
                  'id': 1040202,
                  'slug': 'bathroom-aids-and-safety',
                  'name': '욕실안전',
                  'depth': 4,
                  'parent': 1040200,
                  'children': []
                },
                {
                  'id': 1040203,
                  'slug': 'beds-and-accessories',
                  'name': '침대·액세서리',
                  'depth': 4,
                  'parent': 1040200,
                  'children': []
                },
                {
                  'id': 1040204,
                  'slug': 'braces-splints-and-slings',
                  'name': '보조기',
                  'depth': 4,
                  'parent': 1040200,
                  'children': []
                },
                {
                  'id': 1040205,
                  'slug': 'daily-living-aids',
                  'name': '상비약품',
                  'depth': 4,
                  'parent': 1040200,
                  'children': []
                },
                {
                  'id': 1040206,
                  'slug': 'mobility-aids-and-equipment',
                  'name': '이동장비',
                  'depth': 4,
                  'parent': 1040200,
                  'children': []
                },
                {
                  'id': 1040207,
                  'slug': 'occupational-and-physical-therapy-aids',
                  'name': '치료장비',
                  'depth': 4,
                  'parent': 1040200,
                  'children': []
                },
                {
                  'id': 1040208,
                  'slug': 'pen-lights',
                  'name': '손전등',
                  'depth': 4,
                  'parent': 1040200,
                  'children': []
                },
                {
                  'id': 1040209,
                  'slug': 'tests',
                  'name': '테스터',
                  'depth': 4,
                  'parent': 1040200,
                  'children': []
                },
                {
                  'id': 1040210,
                  'slug': 'first-aid',
                  'name': '구급약품',
                  'depth': 4,
                  'parent': 1040200,
                  'children': []
                },
                {
                  'id': 1040211,
                  'slug': 'dehumidifiers',
                  'name': '제습기',
                  'depth': 4,
                  'parent': 1040200,
                  'children': []
                },
                {
                  'id': 1040212,
                  'slug': 'humidifiers',
                  'name': '가습기',
                  'depth': 4,
                  'parent': 1040200,
                  'children': []
                },
                {
                  'id': 1040213,
                  'slug': 'health-monitors',
                  'name': '헬스모니터',
                  'depth': 4,
                  'parent': 1040200,
                  'children': []
                }
              ]
            },
            {
              'id': 1040300,
              'slug': 'sports-nutrition-and-diet',
              'name': '헬스·다이어트',
              'depth': 3,
              'parent': 1040000,
              'children': [
                {
                  'id': 1040301,
                  'slug': 'protein-and-meal-replacement',
                  'name': '프로틴·식사대용',
                  'depth': 4,
                  'parent': 1040300,
                  'children': []
                },
                {
                  'id': 1040302,
                  'slug': 'energy-and-endurance',
                  'name': '에너지·지구력',
                  'depth': 4,
                  'parent': 1040300,
                  'children': []
                },
                {
                  'id': 1040303,
                  'slug': 'weight-loss-supplements-and-cleanses',
                  'name': '체중감량',
                  'depth': 4,
                  'parent': 1040300,
                  'children': []
                },
                {
                  'id': 1040304,
                  'slug': 'mass-gainers',
                  'name': '체중증가',
                  'depth': 4,
                  'parent': 1040300,
                  'children': []
                },
                {
                  'id': 1040305,
                  'slug': 'amino-acids-and-creatine',
                  'name': '크레아틴·아미노산',
                  'depth': 4,
                  'parent': 1040300,
                  'children': []
                },
                {
                  'id': 1040306,
                  'slug': 'on-the-go-nutrition',
                  'name': '테이크아웃',
                  'depth': 4,
                  'parent': 1040300,
                  'children': []
                },
                {
                  'id': 1040307,
                  'slug': 'slimfast-campaign',
                  'name': '슬림패스트캠페인',
                  'depth': 4,
                  'parent': 1040300,
                  'children': []
                }
              ]
            },
            {
              'id': 1040400,
              'slug': 'vitamins-and-dietary-supplements',
              'name': '건강기능식품',
              'depth': 3,
              'parent': 1040000,
              'children': [
                {
                  'id': 1040401,
                  'slug': 'minerals',
                  'name': '미네랄',
                  'depth': 4,
                  'parent': 1040400,
                  'children': []
                },
                {
                  'id': 1040402,
                  'slug': 'supplements',
                  'name': '영양제',
                  'depth': 4,
                  'parent': 1040400,
                  'children': []
                },
                {
                  'id': 1040403,
                  'slug': 'letter-vitamins',
                  'name': '비타민',
                  'depth': 4,
                  'parent': 1040400,
                  'children': []
                },
                {
                  'id': 1040404,
                  'slug': 'fish-oils-and-omegas',
                  'name': '오메가3·피쉬오일',
                  'depth': 4,
                  'parent': 1040400,
                  'children': []
                },
                {
                  'id': 1040405,
                  'slug': 'probiotics',
                  'name': '프로바이오틱스',
                  'depth': 4,
                  'parent': 1040400,
                  'children': []
                },
                {
                  'id': 1040406,
                  'slug': 'multivitamins',
                  'name': '종합비타민',
                  'depth': 4,
                  'parent': 1040400,
                  'children': []
                },
                {
                  'id': 1040407,
                  'slug': 'protein-and-meal-replacements',
                  'name': '프로틴·식사대용',
                  'depth': 4,
                  'parent': 1040400,
                  'children': []
                },
                {
                  'id': 1040408,
                  'slug': 'pill-cases-and-splitters',
                  'name': '약케이스',
                  'depth': 4,
                  'parent': 1040400,
                  'children': []
                },
                {
                  'id': 1040409,
                  'slug': 'amino-acids-and-creatine',
                  'name': '크레아틴·아미노산',
                  'depth': 4,
                  'parent': 1040400,
                  'children': []
                },
                {
                  'id': 1040410,
                  'slug': 'weight-loss-supplements',
                  'name': '체중감량',
                  'depth': 4,
                  'parent': 1040400,
                  'children': []
                },
                {
                  'id': 1040411,
                  'slug': 'new-and-noteworthy-vitamins-and-supplements',
                  'name': '베스트·추천',
                  'depth': 4,
                  'parent': 1040400,
                  'children': []
                },
                {
                  'id': 1040412,
                  'slug': 'herbs-and-homeopathy',
                  'name': '허브',
                  'depth': 4,
                  'parent': 1040400,
                  'children': []
                }
              ]
            }
          ]
        },
        {
          'id': 1050000,
          'slug': 'baby',
          'name': '유아동',
          'depth': 2,
          'parent': 1000000,
          'children': [
            {
              'id': 1050100,
              'slug': 'baby-food-and-formula',
              'name': '이유식·분유',
              'depth': 3,
              'parent': 1050000,
              'children': [
                {
                  'id': 1050101,
                  'slug': 'baby-and-toddler-snacks',
                  'name': '유아스낵',
                  'depth': 4,
                  'parent': 1050100,
                  'children': []
                },
                {
                  'id': 1050102,
                  'slug': 'baby-food',
                  'name': '이유식',
                  'depth': 4,
                  'parent': 1050100,
                  'children': []
                },
                {
                  'id': 1050103,
                  'slug': 'baby-formula',
                  'name': '분유',
                  'depth': 4,
                  'parent': 1050100,
                  'children': []
                },
                {
                  'id': 1050104,
                  'slug': 'toddler-juices-and-milk',
                  'name': '유아주스·우유',
                  'depth': 4,
                  'parent': 1050100,
                  'children': []
                }
              ]
            },
            {
              'id': 1050200,
              'slug': 'diapering',
              'name': '기저귀·교체용품',
              'depth': 3,
              'parent': 1050000,
              'children': [
                {
                  'id': 1050201,
                  'slug': 'diapers',
                  'name': '기저귀',
                  'depth': 4,
                  'parent': 1050200,
                  'children': []
                },
                {
                  'id': 1050202,
                  'slug': 'baby-wipes',
                  'name': '아기티슈',
                  'depth': 4,
                  'parent': 1050200,
                  'children': []
                },
                {
                  'id': 1050203,
                  'slug': 'baby-wipe-holders-and-warmers',
                  'name': '아기티슈워머',
                  'depth': 4,
                  'parent': 1050200,
                  'children': []
                },
                {
                  'id': 1050204,
                  'slug': 'changing-table-accessories',
                  'name': '아기탁자',
                  'depth': 4,
                  'parent': 1050200,
                  'children': []
                },
                {
                  'id': 1050205,
                  'slug': 'cloth-diapers',
                  'name': '천기저귀',
                  'depth': 4,
                  'parent': 1050200,
                  'children': []
                },
                {
                  'id': 1050206,
                  'slug': 'cloth-diaper-accessories',
                  'name': '천기저귀액세서리',
                  'depth': 4,
                  'parent': 1050200,
                  'children': []
                },
                {
                  'id': 1050207,
                  'slug': 'diaper-bags',
                  'name': '기저귀가방',
                  'depth': 4,
                  'parent': 1050200,
                  'children': []
                },
                {
                  'id': 1050208,
                  'slug': 'diaper-cakes',
                  'name': '기저귀케이크',
                  'depth': 4,
                  'parent': 1050200,
                  'children': []
                },
                {
                  'id': 1050209,
                  'slug': 'diaper-changing-pads',
                  'name': '기저귀교체패드',
                  'depth': 4,
                  'parent': 1050200,
                  'children': []
                },
                {
                  'id': 1050210,
                  'slug': 'diaper-creams-and-ointments',
                  'name': '기저귀크림',
                  'depth': 4,
                  'parent': 1050200,
                  'children': []
                },
                {
                  'id': 1050211,
                  'slug': 'diaper-pails-and-refills',
                  'name': '기저귀휴지통',
                  'depth': 4,
                  'parent': 1050200,
                  'children': []
                },
                {
                  'id': 1050212,
                  'slug': 'diaper-stackers-and-caddies',
                  'name': '기저귀정리함',
                  'depth': 4,
                  'parent': 1050200,
                  'children': []
                }
              ]
            },
            {
              'id': 1050300,
              'slug': 'baby-gear',
              'name': '유아용품',
              'depth': 3,
              'parent': 1050000,
              'children': [
                {
                  'id': 1050301,
                  'slug': 'baby-monitors',
                  'name': '아기모니터',
                  'depth': 4,
                  'parent': 1050300,
                  'children': []
                },
                {
                  'id': 1050302,
                  'slug': 'baby-seats',
                  'name': '아기의자',
                  'depth': 4,
                  'parent': 1050300,
                  'children': []
                },
                {
                  'id': 1050303,
                  'slug': 'bouncers-and-walkers',
                  'name': '보행기',
                  'depth': 4,
                  'parent': 1050300,
                  'children': []
                },
                {
                  'id': 1050304,
                  'slug': 'car-seats',
                  'name': '카시트',
                  'depth': 4,
                  'parent': 1050300,
                  'children': []
                },
                {
                  'id': 1050305,
                  'slug': 'carriers',
                  'name': '캐리어',
                  'depth': 4,
                  'parent': 1050300,
                  'children': []
                },
                {
                  'id': 1050306,
                  'slug': 'harnesses-and-leashes',
                  'name': '아기띠',
                  'depth': 4,
                  'parent': 1050300,
                  'children': []
                },
                {
                  'id': 1050307,
                  'slug': 'play-mats-and-activity-gyms',
                  'name': '아기매트',
                  'depth': 4,
                  'parent': 1050300,
                  'children': []
                },
                {
                  'id': 1050308,
                  'slug': 'playards-and-travel-beds',
                  'name': '아기침대',
                  'depth': 4,
                  'parent': 1050300,
                  'children': []
                },
                {
                  'id': 1050309,
                  'slug': 'strollers',
                  'name': '유모차',
                  'depth': 4,
                  'parent': 1050300,
                  'children': []
                }
              ]
            },
            {
              'id': 1050400,
              'slug': 'baby-gear-accessories',
              'name': '유아액세서리',
              'depth': 3,
              'parent': 1050000,
              'children': [
                {
                  'id': 1050401,
                  'slug': 'car-seat-and-stroller-toys',
                  'name': '카시트·유모차 장난감',
                  'depth': 4,
                  'parent': 1050400,
                  'children': []
                },
                {
                  'id': 1050402,
                  'slug': 'car-seat-accessories',
                  'name': '카시트액세서리',
                  'depth': 4,
                  'parent': 1050400,
                  'children': []
                },
                {
                  'id': 1050403,
                  'slug': 'carrier-accessories',
                  'name': '캐리어액세서리',
                  'depth': 4,
                  'parent': 1050400,
                  'children': []
                },
                {
                  'id': 1050404,
                  'slug': 'crib-netting',
                  'name': '침대커튼',
                  'depth': 4,
                  'parent': 1050400,
                  'children': []
                },
                {
                  'id': 1050405,
                  'slug': 'shopping-cart-covers',
                  'name': '쇼핑카트덮개',
                  'depth': 4,
                  'parent': 1050400,
                  'children': []
                },
                {
                  'id': 1050406,
                  'slug': 'stroller-accessories',
                  'name': '유모차액세서리',
                  'depth': 4,
                  'parent': 1050400,
                  'children': []
                }
              ]
            },
            {
              'id': 1050500,
              'slug': 'feeding-and-nursing',
              'name': '수유·이유용품',
              'depth': 3,
              'parent': 1050000,
              'children': [
                {
                  'id': 1050501,
                  'slug': 'baby-bottles-and-accessories',
                  'name': '젖병·액세서리',
                  'depth': 4,
                  'parent': 1050500,
                  'children': []
                },
                {
                  'id': 1050502,
                  'slug': 'baby-food',
                  'name': '이유식',
                  'depth': 4,
                  'parent': 1050500,
                  'children': []
                },
                {
                  'id': 1050503,
                  'slug': 'baby-formula',
                  'name': '분유',
                  'depth': 4,
                  'parent': 1050500,
                  'children': []
                },
                {
                  'id': 1050504,
                  'slug': 'bibs-and-burp-cloths',
                  'name': '턱받이',
                  'depth': 4,
                  'parent': 1050500,
                  'children': []
                },
                {
                  'id': 1050505,
                  'slug': 'breast-pump',
                  'name': '유축기',
                  'depth': 4,
                  'parent': 1050500,
                  'children': []
                },
                {
                  'id': 1050506,
                  'slug': 'breast-pump-accessories',
                  'name': '유축기액세서리',
                  'depth': 4,
                  'parent': 1050500,
                  'children': []
                },
                {
                  'id': 1050507,
                  'slug': 'food-and-formula-prep',
                  'name': '유아용식기',
                  'depth': 4,
                  'parent': 1050500,
                  'children': []
                },
                {
                  'id': 1050508,
                  'slug': 'food-storage-and-on-the-go',
                  'name': '보관용기',
                  'depth': 4,
                  'parent': 1050500,
                  'children': []
                },
                {
                  'id': 1050509,
                  'slug': 'highchairs-and-boosters',
                  'name': '보조의자',
                  'depth': 4,
                  'parent': 1050500,
                  'children': []
                },
                {
                  'id': 1050510,
                  'slug': 'kids-tabletop',
                  'name': '아기식탁',
                  'depth': 4,
                  'parent': 1050500,
                  'children': []
                },
                {
                  'id': 1050511,
                  'slug': 'lunch-bags',
                  'name': '런치백',
                  'depth': 4,
                  'parent': 1050500,
                  'children': []
                },
                {
                  'id': 1050512,
                  'slug': 'nursing-accessories',
                  'name': '식기액세서리',
                  'depth': 4,
                  'parent': 1050500,
                  'children': []
                },
                {
                  'id': 1050513,
                  'slug': 'pacifiers-and-teethers',
                  'name': '젖꼭지',
                  'depth': 4,
                  'parent': 1050500,
                  'children': []
                },
                {
                  'id': 1050514,
                  'slug': 'sippys-and-cups',
                  'name': '역류방지컵',
                  'depth': 4,
                  'parent': 1050500,
                  'children': []
                }
              ]
            },
            {
              'id': 1050600,
              'slug': 'babyproofing',
              'name': '아기안전',
              'depth': 3,
              'parent': 1050000,
              'children': [
                {
                  'id': 1050601,
                  'slug': 'baby-monitors',
                  'name': '아기모니터',
                  'depth': 4,
                  'parent': 1050600,
                  'children': []
                },
                {
                  'id': 1050602,
                  'slug': 'bath-safety',
                  'name': '욕실안전',
                  'depth': 4,
                  'parent': 1050600,
                  'children': []
                },
                {
                  'id': 1050603,
                  'slug': 'edge-and-corner-guards',
                  'name': '모서리안전',
                  'depth': 4,
                  'parent': 1050600,
                  'children': []
                },
                {
                  'id': 1050604,
                  'slug': 'electrical-safety',
                  'name': '전기안전',
                  'depth': 4,
                  'parent': 1050600,
                  'children': []
                },
                {
                  'id': 1050605,
                  'slug': 'gates-and-rails',
                  'name': '문·난간',
                  'depth': 4,
                  'parent': 1050600,
                  'children': []
                },
                {
                  'id': 1050606,
                  'slug': 'kitchen-safety',
                  'name': '주방안전',
                  'depth': 4,
                  'parent': 1050600,
                  'children': []
                },
                {
                  'id': 1050607,
                  'slug': 'outdoor-safety',
                  'name': '실외안전',
                  'depth': 4,
                  'parent': 1050600,
                  'children': []
                },
                {
                  'id': 1050608,
                  'slug': 'rails-and-rail-guards',
                  'name': '난간안전',
                  'depth': 4,
                  'parent': 1050600,
                  'children': []
                },
                {
                  'id': 1050609,
                  'slug': 'sleep-positioners',
                  'name': '난간안전',
                  'depth': 4,
                  'parent': 1050600,
                  'children': []
                }
              ]
            },
            {
              'id': 1050700,
              'slug': 'baby-care',
              'name': '아기스킨케어',
              'depth': 3,
              'parent': 1050000,
              'children': [
                {
                  'id': 1050701,
                  'slug': 'baby-bubble-bath',
                  'name': '아기거품목욕',
                  'depth': 4,
                  'parent': 1050700,
                  'children': []
                },
                {
                  'id': 1050702,
                  'slug': 'baby-oil-and-lotion',
                  'name': '베이비로션·오일',
                  'depth': 4,
                  'parent': 1050700,
                  'children': []
                },
                {
                  'id': 1050703,
                  'slug': 'baby-powder',
                  'name': '베이비파우더',
                  'depth': 4,
                  'parent': 1050700,
                  'children': []
                },
                {
                  'id': 1050704,
                  'slug': 'baby-shampoo-and-wash',
                  'name': '아기샴푸',
                  'depth': 4,
                  'parent': 1050700,
                  'children': []
                }
              ]
            },
            {
              'id': 1050800,
              'slug': 'potty-training',
              'name': '배변훈련',
              'depth': 3,
              'parent': 1050000,
              'children': [
                {
                  'id': 1050801,
                  'slug': 'potties',
                  'name': '유아용변기',
                  'depth': 4,
                  'parent': 1050800,
                  'children': []
                },
                {
                  'id': 1050802,
                  'slug': 'potty-training-aids',
                  'name': '배변훈련용품',
                  'depth': 4,
                  'parent': 1050800,
                  'children': []
                },
                {
                  'id': 1050803,
                  'slug': 'seat-covers',
                  'name': '변기커버',
                  'depth': 4,
                  'parent': 1050800,
                  'children': []
                },
                {
                  'id': 1050804,
                  'slug': 'step-stools',
                  'name': '발판',
                  'depth': 4,
                  'parent': 1050800,
                  'children': []
                },
                {
                  'id': 1050805,
                  'slug': 'training-pants',
                  'name': '트레이닝팬츠',
                  'depth': 4,
                  'parent': 1050800,
                  'children': []
                }
              ]
            },
            {
              'id': 1050900,
              'slug': 'baby-bathing',
              'name': '아기목욕',
              'depth': 3,
              'parent': 1050000,
              'children': [
                {
                  'id': 1050901,
                  'slug': 'baby-bath-accessories',
                  'name': '아기목욕액세서리',
                  'depth': 4,
                  'parent': 1050900,
                  'children': []
                },
                {
                  'id': 1050902,
                  'slug': 'baby-grooming',
                  'name': '아기단장',
                  'depth': 4,
                  'parent': 1050900,
                  'children': []
                },
                {
                  'id': 1050903,
                  'slug': 'baby-tubs',
                  'name': '아기욕조',
                  'depth': 4,
                  'parent': 1050900,
                  'children': []
                },
                {
                  'id': 1050904,
                  'slug': 'baby-washcloths-and-towels',
                  'name': '목욕가운·타월',
                  'depth': 4,
                  'parent': 1050900,
                  'children': []
                },
                {
                  'id': 1050905,
                  'slug': 'bath-toys',
                  'name': '욕조장난감',
                  'depth': 4,
                  'parent': 1050900,
                  'children': []
                }
              ]
            },
            {
              'id': 1051000,
              'slug': 'baby-gifts',
              'name': '아기선물',
              'depth': 3,
              'parent': 1050000,
              'children': [
                {
                  'id': 1051001,
                  'slug': 'baby-gift-sets-and-baskets',
                  'name': '유아선물세트',
                  'depth': 4,
                  'parent': 1051000,
                  'children': []
                },
                {
                  'id': 1051002,
                  'slug': 'keepsakes-and-albums',
                  'name': '기념품·앨범',
                  'depth': 4,
                  'parent': 1051000,
                  'children': []
                },
                {
                  'id': 1051003,
                  'slug': 'new-mom-gifts',
                  'name': '기념품·앨범',
                  'depth': 4,
                  'parent': 1051000,
                  'children': []
                },
                {
                  'id': 1051004,
                  'slug': 'toy-banks',
                  'name': '장난감은행',
                  'depth': 4,
                  'parent': 1051000,
                  'children': []
                }
              ]
            }
          ]
        },
        {
          'id': 1060000,
          'slug': 'pet-supplies',
          'name': '반려용품',
          'depth': 2,
          'parent': 1000000,
          'children': [
            {
              'id': 1060100,
              'slug': 'dog-supplies',
              'name': '강아지',
              'depth': 3,
              'parent': 1060000,
              'children': [
                {
                  'id': 1060101,
                  'slug': 'collars-harnesses-and-leashes',
                  'name': '강아지끈',
                  'depth': 4,
                  'parent': 1060100,
                  'children': []
                },
                {
                  'id': 1060102,
                  'slug': 'dog-apparel',
                  'name': '강아지옷',
                  'depth': 4,
                  'parent': 1060100,
                  'children': []
                },
                {
                  'id': 1060103,
                  'slug': 'dog-beds',
                  'name': '강아지침구',
                  'depth': 4,
                  'parent': 1060100,
                  'children': []
                },
                {
                  'id': 1060104,
                  'slug': 'dog-bowls-and-feeders',
                  'name': '강아지식기',
                  'depth': 4,
                  'parent': 1060100,
                  'children': []
                },
                {
                  'id': 1060105,
                  'slug': 'travel-supplies',
                  'name': '강아지여행용품',
                  'depth': 4,
                  'parent': 1060100,
                  'children': []
                },
                {
                  'id': 1060106,
                  'slug': 'cleaning-supplies',
                  'name': '강아지목욕용품',
                  'depth': 4,
                  'parent': 1060100,
                  'children': []
                },
                {
                  'id': 1060107,
                  'slug': 'crates-and-kennels',
                  'name': '강아지집',
                  'depth': 4,
                  'parent': 1060100,
                  'children': []
                },
                {
                  'id': 1060108,
                  'slug': 'flea-and-tick-control',
                  'name': '벼룩·진드기관리',
                  'depth': 4,
                  'parent': 1060100,
                  'children': []
                },
                {
                  'id': 1060109,
                  'slug': 'dog-food',
                  'name': '강아지사료',
                  'depth': 4,
                  'parent': 1060100,
                  'children': []
                },
                {
                  'id': 1060110,
                  'slug': 'grooming',
                  'name': '강아지단장',
                  'depth': 4,
                  'parent': 1060100,
                  'children': []
                },
                {
                  'id': 1060111,
                  'slug': 'dog-houses',
                  'name': '강아지단장',
                  'depth': 4,
                  'parent': 1060100,
                  'children': []
                },
                {
                  'id': 1060112,
                  'slug': 'medication-and-health-supplies',
                  'name': '강아지건강용품',
                  'depth': 4,
                  'parent': 1060100,
                  'children': []
                },
                {
                  'id': 1060113,
                  'slug': 'modern-furniture',
                  'name': '강아지가구',
                  'depth': 4,
                  'parent': 1060100,
                  'children': []
                },
                {
                  'id': 1060114,
                  'slug': 'dog-technology',
                  'name': '강아지기술용품',
                  'depth': 4,
                  'parent': 1060100,
                  'children': []
                },
                {
                  'id': 1060115,
                  'slug': 'toys',
                  'name': '장난감',
                  'depth': 4,
                  'parent': 1060100,
                  'children': []
                },
                {
                  'id': 1060116,
                  'slug': 'training-and-behavior',
                  'name': '훈련',
                  'depth': 4,
                  'parent': 1060100,
                  'children': []
                },
                {
                  'id': 1060117,
                  'slug': 'treats',
                  'name': '강아지치료',
                  'depth': 4,
                  'parent': 1060100,
                  'children': []
                },
                {
                  'id': 1060118,
                  'slug': 'gates-and-ramps',
                  'name': '문·통로',
                  'depth': 4,
                  'parent': 1060100,
                  'children': []
                },
                {
                  'id': 1060119,
                  'slug': 'poop-bags-and-housebreaking',
                  'name': '배변봉지',
                  'depth': 4,
                  'parent': 1060100,
                  'children': []
                }
              ]
            },
            {
              'id': 1060200,
              'slug': 'cat-supplies',
              'name': '고양이',
              'depth': 3,
              'parent': 1060000,
              'children': [
                {
                  'id': 1060201,
                  'slug': 'cat-beds',
                  'name': '고양이침대',
                  'depth': 4,
                  'parent': 1060200,
                  'children': []
                },
                {
                  'id': 1060202,
                  'slug': 'carriers',
                  'name': '캐리어',
                  'depth': 4,
                  'parent': 1060200,
                  'children': []
                },
                {
                  'id': 1060203,
                  'slug': 'cleaning-supplies',
                  'name': '목욕용품',
                  'depth': 4,
                  'parent': 1060200,
                  'children': []
                },
                {
                  'id': 1060204,
                  'slug': 'flea-and-tick-control',
                  'name': '벼룩·진드기관리',
                  'depth': 4,
                  'parent': 1060200,
                  'children': []
                },
                {
                  'id': 1060205,
                  'slug': 'cat-food',
                  'name': '고양이사료',
                  'depth': 4,
                  'parent': 1060200,
                  'children': []
                },
                {
                  'id': 1060206,
                  'slug': 'cat-grooming',
                  'name': '고양이단장',
                  'depth': 4,
                  'parent': 1060200,
                  'children': []
                },
                {
                  'id': 1060207,
                  'slug': 'health-supplies',
                  'name': '건강용품',
                  'depth': 4,
                  'parent': 1060200,
                  'children': []
                },
                {
                  'id': 1060208,
                  'slug': 'litter',
                  'name': '고양이배변',
                  'depth': 4,
                  'parent': 1060200,
                  'children': []
                },
                {
                  'id': 1060209,
                  'slug': 'litter-boxes',
                  'name': '배변박스',
                  'depth': 4,
                  'parent': 1060200,
                  'children': []
                },
                {
                  'id': 1060210,
                  'slug': 'scratchers',
                  'name': '스크래쳐',
                  'depth': 4,
                  'parent': 1060200,
                  'children': []
                },
                {
                  'id': 1060211,
                  'slug': 'cat-toys',
                  'name': '고양이장난감',
                  'depth': 4,
                  'parent': 1060200,
                  'children': []
                },
                {
                  'id': 1060212,
                  'slug': 'training-and-behavior-aids',
                  'name': '고양이훈련',
                  'depth': 4,
                  'parent': 1060200,
                  'children': []
                },
                {
                  'id': 1060213,
                  'slug': 'cat-treats',
                  'name': '고양이치료',
                  'depth': 4,
                  'parent': 1060200,
                  'children': []
                },
                {
                  'id': 1060214,
                  'slug': 'cat-trees-and-condos',
                  'name': '캣타워',
                  'depth': 4,
                  'parent': 1060200,
                  'children': []
                },
                {
                  'id': 1060215,
                  'slug': 'collars-harnesses-and-leashes',
                  'name': '고양이끈',
                  'depth': 4,
                  'parent': 1060200,
                  'children': []
                },
                {
                  'id': 1060216,
                  'slug': 'feeding-and-watering-supplies',
                  'name': '고양이식기',
                  'depth': 4,
                  'parent': 1060200,
                  'children': []
                }
              ]
            }
          ]
        },
        {
          'id': 1070000,
          'slug': 'office-supplies',
          'name': '사무용품',
          'depth': 2,
          'parent': 1000000,
          'children': [
            {
              'id': 1070100,
              'slug': 'pens-pencils-and-markers',
              'name': '필기구',
              'depth': 3,
              'parent': 1070000,
              'children': []
            },
            {
              'id': 1070200,
              'slug': 'tape-and-adhesives',
              'name': '테이프·접착제',
              'depth': 3,
              'parent': 1070000,
              'children': []
            },
            {
              'id': 1070300,
              'slug': 'office-paper',
              'name': '종이',
              'depth': 3,
              'parent': 1070000,
              'children': []
            },
            {
              'id': 1070400,
              'slug': 'presentation-boards',
              'name': '프레젠테이션보드',
              'depth': 3,
              'parent': 1070000,
              'children': []
            },
            {
              'id': 1070500,
              'slug': 'workspace-organizers',
              'name': '정리함',
              'depth': 3,
              'parent': 1070000,
              'children': []
            },
            {
              'id': 1070600,
              'slug': 'staplers-and-punches',
              'name': '스테이플러',
              'depth': 3,
              'parent': 1070000,
              'children': []
            },
            {
              'id': 1070700,
              'slug': 'labels-indexes-and-stamps',
              'name': '라벨·인덱스',
              'depth': 3,
              'parent': 1070000,
              'children': []
            },
            {
              'id': 1070800,
              'slug': 'filing-products',
              'name': '서류철',
              'depth': 3,
              'parent': 1070000,
              'children': []
            },
            {
              'id': 1070900,
              'slug': 'binders-and-binding-systems',
              'name': '바인더',
              'depth': 3,
              'parent': 1070000,
              'children': []
            },
            {
              'id': 1071000,
              'slug': 'scissors-cutters-and-measuring-devices',
              'name': '문구용품',
              'depth': 3,
              'parent': 1070000,
              'children': []
            },
            {
              'id': 1071100,
              'slug': 'envelopes-and-shipping-supplies',
              'name': '봉투',
              'depth': 3,
              'parent': 1070000,
              'children': []
            },
            {
              'id': 1071200,
              'slug': 'calendars-and-planners',
              'name': '캘린더·플래너',
              'depth': 3,
              'parent': 1070000,
              'children': []
            },
            {
              'id': 1071300,
              'slug': 'stationary',
              'name': '캘린더·플래너',
              'depth': 3,
              'parent': 1070000,
              'children': []
            }
          ]
        }
      ]
    },
    '4000000' : {
      'slug': 'beauty',
      'id': 4000000,
      'name': 'BEAUTY',
      'children': [
        {
          'slug': 'skincare',
          'id': 4010000,
          'name': 'SKINCARE',
          'children': [
            {
              'slug': 'face-cleansers',
              'id': 4010100,
              'name': 'Face Cleansers',
              'children': [
                {
                  'slug': 'combination',
                  'id': 4010101,
                  'name': 'Combination',
                  'children': []
                },
                {
                  'slug': 'dry',
                  'id': 4010102,
                  'name': 'Dry',
                  'children': []
                },
                {
                  'slug': 'normal',
                  'id': 4010103,
                  'name': 'Normal',
                  'children': []
                }
                ]
            },
            {
              'slug': 'face-moisturizers-and-treatments',
              'id': 4010200,
              'name': 'Face Moisturizers & Treatments',
              'children': [
                {
                  'slug': 'moisturizers',
                  'id': 4010201,
                  'name': 'Moisturizers',
                  'children': []
                },
                {
                  'slug': 'night-creams',
                  'id': 4010202,
                  'name': 'Night Creams',
                  'children': []
                },
                {
                  'slug': 'serums',
                  'id': 4010203,
                  'name': 'Serums',
                  'children': []
                }
                ]
            },
            {
              'slug': 'exfoliators-and-scrubs',
              'id': 4010300,
              'name': 'Exfoliators & Scrubs',
              'children': []
            },
            {
              'slug': 'face-mask',
              'id': 4010400,
              'name': 'Face Mask',
              'children': [
                {
                  'slug': 'face-masks',
                  'id': 4010401,
                  'name': 'Face Masks',
                  'children': []
                },
                {
                  'slug': 'sheet-masks',
                  'id': 4010402,
                  'name': 'Sheet Masks',
                  'children': []
                }
                ]
            },
            {
              'slug': 'eye-cream-and-treatments',
              'id': 4010500,
              'name': 'Eye Cream & Treatments',
              'children': [
                {
                  'slug': 'simply-moisture',
                  'id': 4010501,
                  'name': 'Simply Moisture',
                  'children': []
                },
                {
                  'slug': 'fine-lines-wrinkles',
                  'id': 4010502,
                  'name': 'Fine Lines · Wrinkles',
                  'children': []
                },
                {
                  'slug': 'dark-circles-puffness',
                  'id': 4010503,
                  'name': 'Dark Circles · Puffness',
                  'children': []
                }
                ]
            },
            {
              'slug': 'lip-care',
              'id': 4010600,
              'name': 'Lip Care',
              'children': [
                {
                  'slug': 'lip-balms-and-treatments',
                  'id': 4010601,
                  'name': 'Lip Balms & Treatments',
                  'children': []
                },
                {
                  'slug': 'lip-sunscreen',
                  'id': 4010602,
                  'name': 'Lip Sunscreen',
                  'children': []
                }
                ]
            },
            {
              'slug': 'toners-and-mists',
              'id': 4010700,
              'name': 'Toners and Mists',
              'children': [
                {
                  'slug': 'toners',
                  'id': 4010701,
                  'name': 'Toners',
                  'children': []
                },
                {
                  'slug': 'mists',
                  'id': 4010702,
                  'name': 'Mists',
                  'children': []
                }
                ]
            },
            {
              'slug': 'sun-care-and-sunscreens',
              'id': 4010800,
              'name': 'Sun Care & Sunscreens',
              'children': []
            },
            {
              'slug': 'tools-and-devices',
              'id': 4010900,
              'name': 'Tools & Devices',
              'children': []
            },
            {
              'slug': 'gift-sets',
              'id': 4011000,
              'name': 'Gift Sets',
              'children': []
            },
            {
              'slug': 'top-brands',
              'id': 4011100,
              'name': 'Top Brands',
              'children': []
            }
            ]
        },
        {
          'slug': 'makeup',
          'id': 4020000,
          'name': 'MAKEUP',
          'children': [
            {
              'slug': 'face',
              'id': 4020100,
              'name': 'Face',
              'children': [
                {
                  'slug': 'foundation',
                  'id': 4020101,
                  'name': 'Foundation',
                  'children': []
                },
                {
                  'slug': 'face-primers',
                  'id': 4020102,
                  'name': 'Face Primers',
                  'children': []
                },
                {
                  'slug': 'bb-and-cc-cream',
                  'id': 4020103,
                  'name': 'BB & CC Cream',
                  'children': []
                },
                {
                  'slug': 'tinted-moisturizer',
                  'id': 4020104,
                  'name': 'Tinted Moisturizer',
                  'children': []
                },
                {
                  'slug': 'setting-powder',
                  'id': 4020105,
                  'name': 'Setting Powder',
                  'children': []
                },
                {
                  'slug': 'concealer',
                  'id': 4020106,
                  'name': 'Concealer',
                  'children': []
                }
                ]
            },
            {
              'slug': 'cheek',
              'id': 4020200,
              'name': 'Cheek',
              'children': [
                {
                  'slug': 'blush',
                  'id': 4020201,
                  'name': 'Blush',
                  'children': []
                },
                {
                  'slug': 'bronzer',
                  'id': 4020202,
                  'name': 'Bronzer',
                  'children': []
                },
                {
                  'slug': 'contour',
                  'id': 4020203,
                  'name': 'Contour',
                  'children': []
                },
                {
                  'slug': 'highlighter',
                  'id': 4020204,
                  'name': 'Highlighter',
                  'children': []
                },
                {
                  'slug': 'cheek-palettes',
                  'id': 4020205,
                  'name': 'Cheek Palettes',
                  'children': []
                }
                ]
            },
            {
              'slug': 'eyes',
              'id': 4020300,
              'name': 'Eyes',
              'children': [
                {
                  'slug': 'eyeshadows',
                  'id': 4020301,
                  'name': 'Eyeshadows',
                  'children': []
                },
                {
                  'slug': 'mascara',
                  'id': 4020302,
                  'name': 'Mascara',
                  'children': []
                },
                {
                  'slug': 'eyeliner',
                  'id': 4020303,
                  'name': 'Eyeliner',
                  'children': []
                },
                {
                  'slug': 'eyebrow',
                  'id': 4020304,
                  'name': 'Eyebrow',
                  'children': []
                },
                {
                  'slug': 'eye-palettes',
                  'id': 4020305,
                  'name': 'Eye Palettes',
                  'children': []
                },
                {
                  'slug': 'eye-sets',
                  'id': 4020306,
                  'name': 'Eye Sets',
                  'children': []
                }
                ]
            },
            {
              'slug': 'lip',
              'id': 4020400,
              'name': 'Lip',
              'children': [
                {
                  'slug': 'lipstick',
                  'id': 4020401,
                  'name': 'Lipstick',
                  'children': []
                },
                {
                  'slug': 'lip-gloss',
                  'id': 4020402,
                  'name': 'Lip Gloss',
                  'children': []
                },
                {
                  'slug': 'lip-stain',
                  'id': 4020403,
                  'name': 'Lip Stain',
                  'children': []
                },
                {
                  'slug': 'lip-liner',
                  'id': 4020404,
                  'name': 'Lip Liner',
                  'children': []
                },
                {
                  'slug': 'lip-palettes',
                  'id': 4020405,
                  'name': 'Lip Palettes',
                  'children': []
                },
                {
                  'slug': 'lip-sets',
                  'id': 4020406,
                  'name': 'Lip Sets',
                  'children': []
                }
                ]
            },
            {
              'slug': 'makeup-brushes-and-applicators',
              'id': 4020500,
              'name': 'Makeup Brushes & Applicators',
              'children': [
                {
                  'slug': 'face-brushes',
                  'id': 4020501,
                  'name': 'Face Brushes',
                  'children': []
                },
                {
                  'slug': 'cheek-brushes',
                  'id': 4020502,
                  'name': 'Cheek Brushes',
                  'children': []
                },
                {
                  'slug': 'eye-brushes',
                  'id': 4020503,
                  'name': 'Eye Brushes',
                  'children': []
                },
                {
                  'slug': 'lip-brushes',
                  'id': 4020504,
                  'name': 'Lip Brushes',
                  'children': []
                },
                {
                  'slug': 'sponges-and-applicators',
                  'id': 4020505,
                  'name': 'Sponges & Applicators',
                  'children': []
                },
                {
                  'slug': 'brush-cleaners',
                  'id': 4020506,
                  'name': 'Brush Cleaners',
                  'children': []
                },
                {
                  'slug': 'brush-sets',
                  'id': 4020507,
                  'name': 'Brush Sets',
                  'children': []
                }
                ]
            },
            {
              'slug': 'lash-bar',
              'id': 4020600,
              'name': 'Lash Bar',
              'children': [
                {
                  'slug': 'eyelash-curler',
                  'id': 4020601,
                  'name': 'Eyelash Curler',
                  'children': []
                },
                {
                  'slug': 'false-lashes',
                  'id': 4020602,
                  'name': 'False Lashes',
                  'children': []
                }
                ]
            },
            {
              'slug': 'top-brands',
              'id': 4020700,
              'name': 'Top Brands',
              'children': []
            }
            ]
        },
        {
          'slug': 'bath-and-body',
          'id': 4030000,
          'name': 'BATH & BODY',
          'children': [
            {
              'slug': 'body-wash-and-shower-gels',
              'id': 4030100,
              'name': 'Body Wash & Shower Gels',
              'children': [
                {
                  'slug': 'body-wash',
                  'id': 4030101,
                  'name': 'Body Wash',
                  'children': []
                },
                {
                  'slug': 'shower-gels',
                  'id': 4030102,
                  'name': 'Shower Gels',
                  'children': []
                },
                {
                  'slug': 'bar-soaps',
                  'id': 4030103,
                  'name': 'Bar Soaps',
                  'children': []
                }
                ]
            },
            {
              'slug': 'body-lotions-and-creams',
              'id': 4030200,
              'name': 'Body Lotions & Creams',
              'children': [
                {
                  'slug': 'body-lotions',
                  'id': 4030201,
                  'name': 'Body Lotions',
                  'children': []
                },
                {
                  'slug': 'body-creams',
                  'id': 4030202,
                  'name': 'Body Creams',
                  'children': []
                }
                ]
            },
            {
              'slug': 'body-oils',
              'id': 4030300,
              'name': 'Body Oils',
              'children': []
            },
            {
              'slug': 'body-scrubs-and-exfoliants',
              'id': 4030400,
              'name': 'Body Scrubs & Exfoliants',
              'children': []
            },
            {
              'slug': 'hand-and-foot',
              'id': 4030500,
              'name': 'Hand & Foot',
              'children': [
                {
                  'slug': 'hand-cream-and-lotion',
                  'id': 4030501,
                  'name': 'Hand Cream & Lotion',
                  'children': []
                },
                {
                  'slug': 'foot-cream-and-lotion',
                  'id': 4030502,
                  'name': 'Foot Cream & Lotion',
                  'children': []
                },
                {
                  'slug': 'hand-soaps',
                  'id': 4030503,
                  'name': 'Hand Soaps',
                  'children': []
                }
                ]
            },
            {
              'slug': 'bubble-bath',
              'id': 4030600,
              'name': 'Bubble Bath',
              'children': []
            },
            {
              'slug': 'body-sun-care-and-sunscreens',
              'id': 4030700,
              'name': 'Body Sun Care & Sunscreens',
              'children': []
            },
            {
              'slug': 'gift-sets',
              'id': 4030800,
              'name': 'Gift Sets',
              'children': []
            },
            {
              'slug': 'top-brands',
              'id': 4030900,
              'name': 'Top Brands',
              'children': []
            }
            ]
        },
        {
          'slug': 'hair',
          'id': 4040000,
          'name': 'HAIR',
          'children': [
            {
              'slug': 'shampoos',
              'id': 4040100,
              'name': 'Shampoos',
              'children': [
                {
                  'slug': 'moisturizing',
                  'id': 4040101,
                  'name': 'Moisturizing',
                  'children': []
                },
                {
                  'slug': 'volumizing',
                  'id': 4040102,
                  'name': 'Volumizing',
                  'children': []
                },
                {
                  'slug': 'damaged',
                  'id': 4040103,
                  'name': 'Damaged',
                  'children': []
                },
                {
                  'slug': 'thickening',
                  'id': 4040104,
                  'name': 'Thickening',
                  'children': []
                },
                {
                  'slug': 'dry-shampoos',
                  'id': 4040105,
                  'name': 'Dry Shampoos',
                  'children': []
                }
                ]
            },
            {
              'slug': 'conditioners',
              'id': 4040200,
              'name': 'Conditioners',
              'children': [
                {
                  'slug': 'moisturizing',
                  'id': 4040201,
                  'name': 'Moisturizing',
                  'children': []
                },
                {
                  'slug': 'volumizing',
                  'id': 4040202,
                  'name': 'Volumizing',
                  'children': []
                },
                {
                  'slug': 'damaged',
                  'id': 4040203,
                  'name': 'Damaged',
                  'children': []
                },
                {
                  'slug': 'thickening',
                  'id': 4040204,
                  'name': 'Thickening',
                  'children': []
                },
                {
                  'slug': 'leave-in-conditioners',
                  'id': 4040205,
                  'name': 'Leave-in Conditioners',
                  'children': []
                }
                ]
            },
            {
              'slug': 'hair-treatments',
              'id': 4040300,
              'name': 'Hair Treatments',
              'children': [
                {
                  'slug': 'hair-masques',
                  'id': 4040301,
                  'name': 'Hair Masques',
                  'children': []
                },
                {
                  'slug': 'hair-oils',
                  'id': 4040302,
                  'name': 'Hair Oils',
                  'children': []
                }
                ]
            },
            {
              'slug': 'hair-styling',
              'id': 4040400,
              'name': 'Hair Styling',
              'children': [
                {
                  'slug': 'hair-sprays-and-mousses',
                  'id': 4040401,
                  'name': 'Hair Sprays & Mousses',
                  'children': []
                },
                {
                  'slug': 'hair-creams-gels-and-oils',
                  'id': 4040402,
                  'name': 'Hair Creams, Gels & Oils',
                  'children': []
                },
                {
                  'slug': 'hair-waxes-and-pomades',
                  'id': 4040403,
                  'name': 'Hair Waxes & Pomades',
                  'children': []
                }
                ]
            },
            {
              'slug': 'hair-tools-and-accessories',
              'id': 4040500,
              'name': 'Hair Tools & Accessories',
              'children': [
                {
                  'slug': 'hair-dryers-and-irons',
                  'id': 4040501,
                  'name': 'Hair Dryers & Irons',
                  'children': []
                },
                {
                  'slug': 'hair-brushes-and-combs',
                  'id': 4040502,
                  'name': 'Hair brushes & Combs',
                  'children': []
                }
                ]
            },
            {
              'slug': 'gift-sets',
              'id': 4040600,
              'name': 'Gift Sets',
              'children': []
            },
            {
              'slug': 'top-brands',
              'id': 4040700,
              'name': 'Top Brands',
              'children': []
            }
            ]
        },
        {
          'slug': 'fragrance',
          'id': 4050000,
          'name': 'FRAGRANCE',
          'children': [
            {
              'slug': 'women',
              'id': 4050100,
              'name': 'Women',
              'children': [
                {
                  'slug': 'edp',
                  'id': 4050101,
                  'name': 'edp',
                  'children': []
                },
                {
                  'slug': 'edt',
                  'id': 4050102,
                  'name': 'edt',
                  'children': []
                },
                {
                  'slug': 'cologne',
                  'id': 4050103,
                  'name': 'cologne',
                  'children': []
                }
                ]
            },
            {
              'slug': 'men',
              'id': 4050200,
              'name': 'Men',
              'children': [
                {
                  'slug': 'edp',
                  'id': 4050201,
                  'name': 'edp',
                  'children': []
                },
                {
                  'slug': 'edt',
                  'id': 4050202,
                  'name': 'edt',
                  'children': []
                },
                {
                  'slug': 'cologne',
                  'id': 4050203,
                  'name': 'cologne',
                  'children': []
                }
                ]
            },
            {
              'slug': 'candles',
              'id': 4050300,
              'name': 'Candles',
              'children': []
            },
            {
              'slug': 'fragrance-sets',
              'id': 4050400,
              'name': 'Fragrance Sets',
              'children': []
            },
            {
              'slug': 'travel-size',
              'id': 4050500,
              'name': 'Travel Size',
              'children': [
                {
                  'slug': 'citrus',
                  'id': 4050501,
                  'name': 'Citrus',
                  'children': []
                },
                {
                  'slug': 'floral',
                  'id': 4050502,
                  'name': 'Floral',
                  'children': []
                },
                {
                  'slug': 'woody',
                  'id': 4050503,
                  'name': 'Woody',
                  'children': []
                },
                {
                  'slug': 'spicy',
                  'id': 4050504,
                  'name': 'Spicy',
                  'children': []
                }
                ]
            },
            {
              'slug': 'top-brands',
              'id': 4050600,
              'name': 'Top Brands',
              'children': []
            }
            ]
        },
        {
          'slug': 'men',
          'id': 4060000,
          'name': 'MEN',
          'children': [
            {
              'slug': 'face-wash',
              'id': 4060100,
              'name': 'Face Wash',
              'children': []
            },
            {
              'slug': 'face-moisturizers-and-treatments',
              'id': 4060200,
              'name': 'Face Moisturizers & Treatments',
              'children': []
            },
            {
              'slug': 'eye-creams',
              'id': 4060300,
              'name': 'Eye Creams',
              'children': []
            },
            {
              'slug': 'sunscreens',
              'id': 4060400,
              'name': 'Sunscreens',
              'children': []
            },
            {
              'slug': 'shaving',
              'id': 4060500,
              'name': 'Shaving',
              'children': [
                {
                  'slug': 'pre-shave',
                  'id': 4060501,
                  'name': 'Pre-Shave',
                  'children': []
                },
                {
                  'slug': 'shaving-creams-gels',
                  'id': 4060502,
                  'name': 'Shaving Creams · Gels',
                  'children': []
                },
                {
                  'slug': 'after-shave',
                  'id': 4060503,
                  'name': 'After-Shave',
                  'children': []
                },
                {
                  'slug': 'tools',
                  'id': 4060504,
                  'name': 'Tools',
                  'children': []
                }
                ]
            },
            {
              'slug': 'bath-and-body',
              'id': 4060600,
              'name': 'Bath & Body',
              'children': []
            },
            {
              'slug': 'deodorant-for-men',
              'id': 4060700,
              'name': 'Deodorant for Men',
              'children': []
            },
            {
              'slug': 'hair',
              'id': 4060800,
              'name': 'Hair',
              'children': []
            },
            {
              'slug': 'top-brands',
              'id': 4060900,
              'name': 'Top Brands',
              'children': []
            }
            ]
        },
        {
          'slug': 'k-beauty',
          'id': 4070000,
          'name': 'K-BEAUTY',
          'children': []
        }
        ]
    }
  };
}
