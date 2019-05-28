import {AfterViewInit, ChangeDetectionStrategy, Component, Inject, LOCALE_ID, OnInit} from '@angular/core';
import {UiService} from '../../../core/service/ui/ui.service';
import {tap} from 'rxjs/operators';
import {Title} from '@angular/platform-browser';
import {IMAGE_HOST} from '../../../core/global-constant/app.config';
import {TITLE_MAP} from '../../../core/global-constant/app.locale';

@Component({
  selector: 'onpicks-shops-index',
  templateUrl: './shops-index.component.html',
  styleUrls: ['./shops-index.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})

export class ShopsIndexComponent implements OnInit, AfterViewInit {

  shopsBannerImage = {
    imgSrc : this.imageHost + '/intro/pantry-and-household/2019-02-27/PAH1.jpg?d=w2576-h800',
    // marginLeftForText : '6.2%',
    title : {
      ko : [
        '모든 피부에 적합한',
        '마법같은 토너 세이어스'
      ],
      en : [
        'Thayers'
      ]
    },
    titleFontType : 'h2-regular',
    description : {
      ko : [
        '170년 전통의 미국 오리지널 위치하젤 토너 전문 브랜드',
        '피부타입과 취향에 따라 골라쓰는 재미를 느껴보세요.'
      ],
      en : [
        'Not made by witches, but magic for your skin',
        'Natural remedies since 1847'
      ]
    },
    descriptionFontType : 'subtitle-1-regular'
  };

  shopsCarouselBannerImages = [
    {
      imgSrcForDesktop : this.imageHost + '/intro/main/2019-04-01/main1.jpg',
      srcSetForDesktop : this.imageHost + '/intro/main/2019-04-01/main1.jpg?d=w1920-h400 1920w,' + this.imageHost + '/intro/main/2019-04-01/main1.jpg?d=w2400-h500 2400w,' + this.imageHost + '/intro/main/2019-04-01/main1.jpg 3840w',
      imgSrcForMobile : this.imageHost + '/intro/main/2019-04-01/main-mobile1.jpg',
      srcSetForMobile : this.imageHost + '/intro/main/2019-04-01/main-mobile1.jpg 640w',
      // marginLeftForText : '6.2%',
      title : [],
      titleFontType : '',
      description : [],
      descriptionFontType : ''
    },
    {
      // imgSrc : 'https://img.onpicks.com/intro/main/2019-04-01/main2.jpg',
      imgSrcForDesktop : this.imageHost + '/intro/main/2019-04-01/main2.jpg',
      srcSetForDesktop : this.imageHost + '/intro/main/2019-04-01/main2.jpg?d=w1920-h400 1920w,' + this.imageHost + '/intro/main/2019-04-01/main2.jpg?d=w2400-h500 2400w,' + this.imageHost + '/intro/main/2019-04-01/main2.jpg 3840w',
      imgSrcForMobile : this.imageHost + '/intro/main/2019-04-01/main-mobile2.jpg',
      srcSetForMobile : this.imageHost + '/intro/main/2019-04-01/main-mobile2.jpg 640w',
      // marginLeftForText : '6.2%',
      title : [],
      titleFontType : '',
      description : [],
      descriptionFontType : ''
    }
  ];

  // https://s3.ap-northeast-2.amazonaws.com/img.onpicks.com/onpicks_banner_banner_3840x800.png
  popularCategory = [
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
      imgSrc : this.imageHost + '/categories/category-body.png',
      name : {
        ko : '바디케어',
        en : 'Body Care'
      },
      href : '/shops/c/beauty/body-care'
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
      imgSrc : this.imageHost + '/categories/cateogry-makeup.png',
      name : {
        ko : '메이크업',
        en : 'Makeup'
      },
      href : '/shops/c/beauty/makeup'
    },
    {
      imgSrc : this.imageHost + '/categories/category-fragrance.png',
      name : {
        ko : '향수',
        en : 'Fragrance'
      },
      href : '/shops/c/beauty/fragrance'
    }
  ];


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
    {
      imgSrc : {
        ko : this.imageHost + '/collections/ko/flower.jpg?d=w528-h352',
        en : this.imageHost + '/collections/en/flower.jpg?d=w528-h352'
      },
      todayCategoryName : {
        ko : '뷰티',
        en : 'Beauty'
      },
      categoryCode : 2000000,
      todayTitle : {
        ko : '봄을 맞이하는 아이템!',
        en : 'Spring Is In the Air'
      },
      todayDiscription : {
        ko : '인간 벚꽃이 되어 당신 주변에 이른 봄을 선물하는 건 어떨까요?',
        en : 'Discover our top selection of essential spring fragrances.'
      },

      filterSlug : {
        router : 'shops/c/beauty/fragrance',
      }
    },
    {
      imgSrc : {
        ko : this.imageHost + '/collections/ko/byredo.jpg?d=w528-h352',
        en : this.imageHost + '/collections/en/byredo.jpg?d=w528-h352',
      },
      todayCategoryName : {
        ko : '뷰티',
        en : 'Beauty'
      },
      categoryCode : 2000000,
      todayTitle : {
        ko : '페피들의 잇 아이템',
        en : 'BYREDO Must-Haves'
      },
      todayDiscription : {
        ko : '바이레도의 감성으로 북유럽의 서정적인 향기를 입어보세요',
        en : 'Shop our collection of BYREDO must-have fragrances.'
      },
      filterSlug : {
        brand : ['byredo']
      }
    }
  ];

  trendingReviews = [];
  trendingReviews$;

  weeklyBest$;
  recentlyViewed$;
  popularBrands$;
  valueList$;

  constructor(
    @Inject(IMAGE_HOST) public imageHost: string,
    private uiDataService: UiService,
  ) {
    this.weeklyBest$ = this.uiDataService.getWeeklyBestGoods().pipe( tap( v => {
      console.log(v);
    }) );

    this.trendingReviews$ = this.uiDataService.getTrendingReviews();
    this.recentlyViewed$ = this.uiDataService.getRecentlyViewed();
    this.popularBrands$ = this.uiDataService.getPopularBrands();
    this.valueList$ = this.uiDataService.getValueList();
  }

  ngOnInit() {

  }

  ngAfterViewInit() {

  }
}


