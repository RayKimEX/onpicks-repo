import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {UiService} from '../../../../../../../../core/service/ui/ui.service';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'onpicks-pantry-and-household',
  templateUrl: './pantry-and-household.component.html',
  styleUrls: ['./pantry-and-household.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})

export class PantryAndHouseholdComponent implements OnInit {

  pantryAndHouseHoldBannerImages =  [
    {
      imgSrc : 'https://img.onpicks.com/banners/pantry-and-household/2019-02-27/PAH-banner1.jpg?d=w2576-h800',
      imgSrcForDesktop : 'https://img.onpicks.com/banners/pantry-and-household/2019-02-27/PAH-banner1.jpg',
      // srcSetForDesktop : '',
      // imgSrcForMobile : 'https://img.onpicks.com/banners/main/2019-04-01/main-mobile-banner1.jpg',
      // srcSetForMobile : 'https://img.onpicks.com/banners/main/2019-04-01/main-mobile-banner1.jpg 640w',
      // marginLeftForText : '6.2%',
      title : {
        ko : [
          '세이어스'
        ],
        en : [
          'Thayers'
        ]
      },
      titleFontType : 'h2-regular',
      description : {
        ko : [
          '170년 전통의 위치하젤 토너 전문 브랜드.',
          '피부타입과 취향에 따라 골라쓰는 재미가 있는 토너.'
        ],
        en : [
          'Not made by witches, but magic for your skin',
          'Natural remedies since 1847'
        ]
      },
      descriptionFontType : 'subtitle-1-regular'
    },
    {
      imgSrc : 'https://img.onpicks.com/banners/pantry-and-household/2019-02-27/PAH-banner2.jpg?d=w2576-h800',
      imgSrcForDesktop : 'https://img.onpicks.com/banners/pantry-and-household/2019-02-27/PAH-banner2.jpg',
      // imgSrcForMobile : 'https://img.onpicks.com/banners/main/2019-04-01/main-mobile-banner1.jpg',
      // srcSetForMobile : 'https://img.onpicks.com/banners/main/2019-04-01/main-mobile-banner1.jpg 640w',
      // marginLeftForText : '6.2%',
      title : {
        ko : [
          '온가족이 사용하는',
          '유기농 화장품, 닥터 브로너스'
        ],
        en : [
          'Dr. Bronner’s',
        ]
      },
      titleFontType : 'h2-regular',
      description : {
        ko : [
          '추출물과 비교불가! 유기농 오일이 주는 피부 본연의 힘',
          '피부 자극 걱정없는 클렌징으로 안심하고 사용하세요.'
        ],
        en : [
          'Dr. Bronner’s makes socially & environmentally',
          'responsible products of the highest quality'
        ]
      },
      descriptionFontType : 'subtitle-1-regular'
    },
  ]

  popularPantryCategory = [
    {
      imgSrc : 'http://img.onpicks.com/categories/category-grocery.png',
      name : {
        ko : '식품',
        en : 'Grocery'
      },
      href : '/shops/c/pantry-and-household/grocery'
    },
    {
      imgSrc : 'http://img.onpicks.com/categories/category-household.png',
      name : {
        ko : '생활용품',
        en : 'Household'
      },
      href : '/shops/c/pantry-and-household/household-supplies'
    },
    {
      imgSrc : 'http://img.onpicks.com/categories/category-personalcare.png',
      name : {
        ko : '퍼스널케어',
        en : 'Personal Care'
      },
      href : '/shops/c/pantry-and-household/grocery'
    },
    {
      imgSrc : 'http://img.onpicks.com/categories/category-health.png',
      name : {
        ko : '건강',
        en : 'Health'
      },
      href : '/shops/c/pantry-and-household/health'
    },
    {
      imgSrc : 'http://img.onpicks.com/categories/category-baby.png',
      name : {
        ko : '유아동',
        en : 'Baby'
      },
      href : '/shops/c/pantry-and-household/baby'
    },
    {
      imgSrc : 'http://img.onpicks.com/categories/category-pet.png',
      name : {
        ko : '반려용품',
        en : 'Pet'
      },
      href : '/shops/c/pantry-and-household/pet-supplies'
    }
  ]

  todayCollection = [
    {
      imgSrc : 'http://img.onpicks.com/collections/collections-paleo.jpg',
      todayCategoryName : {
        ko : '식품·생활용품',
        en : 'Pantry & Household'
      },
      todayTitle : {
        ko : '팔레오 다이어트',
        en : 'Paleo Diet',
      },
      todayDiscription: {
        ko : '헐리웃 셀럽들 사이에서 hot한 건강&체중을 동시에 잡는 식이요법을 경험해보세요.',
        en : 'Experience the trending diet that will help you optimize your health and fitness.'
      },
      filterSlug : {
        value : ['paleo']
      }
    },
    {
      imgSrc : 'http://img.onpicks.com/collections/collections-USDA.jpg',
      todayCategoryName : {
        ko : '식품·생활용품',
        en : 'Pantry & Household'
      },
      todayTitle : {
        ko : 'USDA 인증',
        en : 'Certified Organic'
      },
      todayDiscription: {
        ko : '깐깐하기로 소문난 United States Department of Agriculture 의 인증, Real Organic 을 소개합니다.',
        en : 'Meet our collection of USDA certified organic products.'
      },
      filterSlug : {
        value : [
          'organic-95', 'organic-100'
        ]
      }
    },
    {
      imgSrc : 'http://img.onpicks.com/collections/collections-gluten.jpg',
      todayCategoryName : {
        ko : '식품·생활용품',
        en : 'Pantry & Household'
      },
      todayTitle : {
        ko : '글루텐프리',
        en : 'Certified Gluten-Free'
      },
      todayDiscription: {
        ko : '미국의 3대 글루텐프리 인증 단체인 GFCO, CSA, ACG의 인증, 미국 본토의 글루텐프리 컬렉션.',
        en : 'Go gluten-free with our GFCO, CSA, and ACG certified selection of foods.'
      },
      filterSlug : {
        value : [ 'certified-gluten-free' ]
      }
    },
  ]

  popularBrand$;

  constructor(
    public route: ActivatedRoute,
    private uiDataService: UiService,
    private titleService: Title,
    private meta: Meta
  ) {
    this.titleService.setTitle('식품·생활용품')
    // this.meta.addTag({ name: 'description', content: '프리미엄 라이프스타일' });
    this.popularBrand$ = this.uiDataService.getPopularBrands('pantry-and-household');
  }

  getCategoryOneDepth;
  routeSubScription$;

  ngOnInit() {
    this.routeSubScription$ = this.route.params.subscribe((params: Params) => {
      this.getCategoryOneDepth = params['categoryOneDepth'];
    });
  }
}
