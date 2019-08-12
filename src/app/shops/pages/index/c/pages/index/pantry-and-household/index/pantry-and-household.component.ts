import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  LOCALE_ID,
  OnDestroy,
  OnInit
} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {UiService} from '../../../../../../../../core/service/ui/ui.service';
import {Meta, Title} from '@angular/platform-browser';
import {IMAGE_HOST} from '../../../../../../../../core/global-constant/app.config';
import {TITLE_MAP} from '../../../../../../../../core/global-constant/app.locale';

@Component({
  selector: 'onpicks-pantry-and-household',
  templateUrl: './pantry-and-household.component.html',
  styleUrls: ['./pantry-and-household.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})

export class PantryAndHouseholdComponent implements OnInit, OnDestroy {

  pantryAndHouseHoldBannerImages =  [
    {
      imgSrc : this.imageHost + '/intro/pantry-and-household/2019-02-27/PAH1.jpg?d=w2576-h800',
      imgSrcForDesktop : this.imageHost + '/intro/pantry-and-household/2019-02-27/PAH1.jpg',
      // srcSetForDesktop : '',
      // imgSrcForMobile : 'https://img.onpicks.com/intro/main/2019-04-01/main-mobile1.jpg',
      // srcSetForMobile : 'https://img.onpicks.com/intro/main/2019-04-01/main-mobile1.jpg 640w',
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
      imgSrc : this.imageHost + '/intro/pantry-and-household/2019-02-27/PAH2.jpg?d=w2576-h800',
      imgSrcForDesktop : this.imageHost + '/intro/pantry-and-household/2019-02-27/PAH2.jpg',
      // imgSrcForMobile : 'https://img.onpicks.com/intro/main/2019-04-01/main-mobile1.jpg',
      // srcSetForMobile : 'https://img.onpicks.com/intro/main/2019-04-01/main-mobile1.jpg 640w',
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
      imgSrc : this.imageHost + '/categories/category-grocery.png',
      name : {
        ko : '식품',
        en : 'Grocery'
      },
      href : '/shops/c/pantry-and-household/grocery'
    },
    {
      imgSrc : this.imageHost + '/categories/category-household.png',
      name : {
        ko : '생활용품',
        en : 'Household'
      },
      href : '/shops/c/pantry-and-household/household-supplies'
    },
    {
      imgSrc : this.imageHost + '/categories/category-personalcare.png',
      name : {
        ko : '퍼스널케어',
        en : 'Personal Care'
      },
      href : '/shops/c/pantry-and-household/personal-care'
    },
    {
      imgSrc : this.imageHost + '/categories/category-health.png',
      name : {
        ko : '건강',
        en : 'Health'
      },
      href : '/shops/c/pantry-and-household/health'
    },
    {
      imgSrc : this.imageHost + '/categories/category-baby.png',
      name : {
        ko : '유아동',
        en : 'Baby'
      },
      href : '/shops/c/pantry-and-household/baby'
    },
    {
      imgSrc : this.imageHost + '/categories/category-pet.png',
      name : {
        ko : '반려용품',
        en : 'Pet'
      },
      href : '/shops/c/pantry-and-household/pet-supplies'
    }
  ]

  todayCollection = [
    {
      imgSrc : {
        ko : this.imageHost + '/collections/ko/paleo.jpg?d=w528-h352',
        en : this.imageHost + '/collections/en/paleo.jpg?d=w528-h352',
      },
      todayCategoryName : {
        ko : '식품·생활용품',
        en : 'Pantry & Household'
      },
      categoryCode : 1000000,
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
      imgSrc : {
        ko : this.imageHost + '/collections/ko/USDA.jpg?d=w528-h352',
        en : this.imageHost + '/collections/en/USDA.jpg?d=w528-h352'
      },
      todayCategoryName : {
        ko : '식품·생활용품',
        en : 'Pantry & Household'
      },
      categoryCode : 1000000,
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
      imgSrc : {
        ko : this.imageHost + '/collections/ko/gluten.jpg?d=w528-h352',
        en : this.imageHost + '/collections/en/gluten.jpg?d=w528-h352'
      },
      todayCategoryName : {
        ko : '식품·생활용품',
        en : 'Pantry & Household'
      },
      categoryCode : 1000000,
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
  getCategoryOneDepth;
  routeSubScription$;

  constructor(
    @Inject(IMAGE_HOST) public imageHost: string,
    @Inject(TITLE_MAP) public titleMap: string,
    @Inject(LOCALE_ID) public locale: string,
    public route: ActivatedRoute,
    private uiDataService: UiService,
    private titleService: Title,
  ) {
    this.titleService.setTitle(this.titleMap['pantry-and-household'][this.locale]);
    this.popularBrand$ = this.uiDataService.getPopularBrands('pantry-and-household');
  }

  ngOnInit() {
    this.routeSubScription$ = this.route.params.subscribe((params: Params) => {
      this.getCategoryOneDepth = params['categoryOneDepth'];
    });
  }

  ngOnDestroy() {
    this.routeSubScription$.unsubscribe();
  }
}
