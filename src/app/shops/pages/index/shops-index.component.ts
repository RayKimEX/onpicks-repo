import {AfterViewInit, ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {UiService} from '../../../core/service/ui/ui.service';
import {tap} from 'rxjs/operators';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'onpicks-shops-index',
  templateUrl: './shops-index.component.html',
  styleUrls: ['./shops-index.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})

export class ShopsIndexComponent implements OnInit, AfterViewInit {
  //
  // shopsValueImages = {
  //   imgSrc : '',
  //   title : 'Zero Calories',
  // }

  shopsBannerImage = {
    imgSrc : 'https://img.onpicks.com/banners/pantry-and-household/2019-02-27/PAH-banner1.jpg?d=w2576-h800',
    // marginLeftForText : '6.2%',
    title : [
      '모든 피부에 적합한',
      '마법같은 토너 세이어스'
    ],
    titleFontType : 'h2-regular',
    description : [
      '170년 전통의 미국 오리지널 위치하젤 토너 전문 브랜드',
      '피부타입과 취향에 따라 골라쓰는 재미를 느껴보세요.'
    ],
    descriptionFontType : 'subtitle-1-regular'
  };

  shopsCarouselBannerImages = [
    {
      imgSrcForDesktop : 'https://img.onpicks.com/banners/main/2019-04-01/main-banner1.jpg',
      srcSetForDesktop : 'https://img.onpicks.com/banners/main/2019-04-01/main-banner1.jpg?d=w1920-h400 1920w,https://img.onpicks.com/banners/main/2019-04-01/main-banner1.jpg?d=w2400-h500 2400w, https://img.onpicks.com/banners/main/2019-04-01/main-banner1.jpg 3840w',
      imgSrcForMobile : 'https://img.onpicks.com/banners/main/2019-04-01/main-mobile-banner1.jpg',
      srcSetForMobile : 'https://img.onpicks.com/banners/main/2019-04-01/main-mobile-banner1.jpg 640w',
      // marginLeftForText : '6.2%',
      title : [],
      titleFontType : '',
      description : [],
      descriptionFontType : ''
    },
    {
      // imgSrc : 'https://img.onpicks.com/banners/main/2019-04-01/main-banner2.jpg',
      imgSrcForDesktop : 'https://img.onpicks.com/banners/main/2019-04-01/main-banner2.jpg',
      srcSetForDesktop : 'https://img.onpicks.com/banners/main/2019-04-01/main-banner2.jpg?d=w1920-h400 1920w,https://img.onpicks.com/banners/main/2019-04-01/main-banner2.jpg?d=w2400-h500 2400w, https://img.onpicks.com/banners/main/2019-04-01/main-banner2.jpg 3840w',
      imgSrcForMobile : 'https://img.onpicks.com/banners/main/2019-04-01/main-mobile-banner2.jpg',
      srcSetForMobile : 'https://img.onpicks.com/banners/main/2019-04-01/main-mobile-banner2.jpg 640w',
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
      imgSrc : 'http://img.onpicks.com/categories/category-grocery.png',
      name : '식품',
      href : '/shops/c/pantry-and-household/grocery'
    },
    {
      imgSrc : 'http://img.onpicks.com/categories/category-household.png',
      name : '생활용품',
      href : '/shops/c/pantry-and-household/household-supplies'
    },
    {
      imgSrc : 'http://img.onpicks.com/categories/category-body.png',
      name : '바디케어',
      href : '/shops/c/beauty/body-care'
    },
    {
      imgSrc : 'http://img.onpicks.com/categories/category-health.png',
      name : '건강',
      href : '/shops/c/pantry-and-household/health'
    },
    {
      imgSrc : 'http://img.onpicks.com/categories/cateogry-makeup.png',
      name : '메이크업',
      href : '/shops/c/beauty/makeup'
    },
    {
      imgSrc : 'http://img.onpicks.com/categories/category-fragrance.png',
      name : '향수',
      href : '/shops/c/beauty/fragrance'
    }
  ];


  todayCollection = [
    {
      imgSrc : 'http://img.onpicks.com/collections/collections-paleo.jpg',
      todayCategoryName : '식품·생활용품',
      todayTitle : '팔레오 다이어트',
      todayDiscription: '헐리웃 셀럽들 사이에서 hot한 건강&체중을 동시에 잡는 식이요법을 경험해보세요.',
      filterSlug : {
        value : ['paleo']
      }
    },
    {
      imgSrc : 'http://img.onpicks.com/collections/collections-USDA.jpg',
      todayCategoryName : '식품·생활용품',
      todayTitle : 'USDA 인증',
      todayDiscription: '깐깐하기로 소문난 United States Department of Agriculture 의 인증, Real Organic 을 소개합니다.',
      filterSlug : {
        value : [
          'organic-95', 'organic-100'
        ]
      }
    },
    {
      imgSrc : 'http://img.onpicks.com/collections/collections-gluten.jpg',
      todayCategoryName : '식품·생활용품',
      todayTitle : '글루텐프리',
      todayDiscription: '미국의 3대 글루텐프리 인증 단체인 GFCO, CSA, ACG의 인증, 미국 본토의 글루텐프리 컬렉션.',
      filterSlug : {
        value : ['certified-gluten-free']
      }
    },
    {
      imgSrc : 'https://img.onpicks.com/collections/collection-flower.jpg?d=w528-h352',
      todayCategoryName : '뷰티',
      todayTitle : '봄을 맞이하는 아이템!',
      todayDiscription : '인간 벚꽃이 되어 당신 주변에 이른 봄을 선물하는 건 어떨까요?',

      filterSlug : {
        router : 'shops/c/beauty/fragrance',
      }
    },
    {
      imgSrc : 'https://img.onpicks.com/collections/collection-byredo.jpg?d=w528-h352',
      todayCategoryName : '뷰티',
      todayTitle : '페피들의 잇 아이템',
      todayDiscription : '바이레도의 감성으로 북유럽의 서정적인 향기를 입어보세요',
      filterSlug : {
        brand : ['byredo']
      }
    }
  ];

  trendingReviews = [
      {
        'slug': 'thayers-witch-hazel-toner-aloevera-formula-rose-petal-12fl-oz',
        'brand': {
          'slug' : 'thayers',
          'name' : '세이어스'
        },
        'title': '세이어스 위치 하젤 알로에 베라 포뮬라 무알콜 로즈 페탈 토너',
        'condition': 'new',
        'adult': false,
        'pack_of': 1,
        'attributes': [

        ],
        'thumbnail': 'http://img.staging.onpicks.com.s3.amazonaws.com/products/0e31905b-e86d-49ba-ba31-9efb5468ca3e.jpg',
        'msrp': 70780.0,
        'price': 48460.0,
        'discount_rate': 0.3153,
        'package_unit': 'kg',
        'package_size': 0.91,
        'unit_pricing_base': 1,
        'review_info' : {
          'author' : {
            'nickname' : '7jaydxb7',
            'avatar' : 'https://scontent-icn1-1.cdninstagram.com/vp/9075995f7bf89f6c0811b03aed4bd5d2/5D253F2A/t51.2885-19/s150x150/41704357_483269682192554_8250464087775903744_n.jpg?_nc_ht=scontent-icn1-1.cdninstagram.com',
          },
          'img_src' : 'https://scontent-icn1-1.cdninstagram.com/vp/bfcfb605c2991e6a1e3fad9c584e7b76/5D2879BC/t51.2885-15/sh0.08/e35/s640x640/44631402_566008033861086_2552127599648334866_n.jpg?_nc_ht=scontent-icn1-1.cdninstagram.com',
          'rating' : 5
        },
        'location': {
          'code': 'LAX',
          'name': '엘에이',
          'base_shipping_fee': 9000,
          'free_shipping_threshold': 150000
        },
        'ship_alone': false,
        'in_stock': true,
        'stock_quantity': 85,
        'review_count': 0,
        'review_avg_rating': 0.0
      },
      {
        'slug': 'diptyque-eau-de-toilette-do-son-50ml',
        'brand': {
          'slug' : 'diptyque',
          'name' : '딥티크'
        },
        'title': '딥티크 도손 오드뚜왈렛 50ml, 0개',
        'condition': 'new',
        'adult': false,
        'pack_of': 1,
        'attributes': [

        ],
        'thumbnail': 'http://img.dev.onpicks.com.s3.amazonaws.com/products/fe9f4bb4-572f-49f0-b9de-8570dd38c920.jpg',
        'msrp': 123600.0,
        'price': 111240.0,
        'discount_rate': 0.1,
        'package_unit': 'count',
        'package_size': 0.0,
        'unit_pricing_base': 1,
        'review_info' : {
          'author' : {
            'nickname' : 'okja1718',
            'avatar' : 'https://scontent-icn1-1.cdninstagram.com/vp/5718446587bc753cce1e050a58ee9cff/5D2350B8/t51.2885-19/s150x150/52717195_1081737998666379_2603202943943442432_n.jpg?_nc_ht=scontent-icn1-1.cdninstagram.com',
          },
          'img_src' : 'https://scontent-icn1-1.cdninstagram.com/vp/b2984571adaab3c5dc15e49202680878/5D1AF1A1/t51.2885-15/sh0.08/e35/s640x640/51960967_639510296506064_4572844112408261937_n.jpg?_nc_ht=scontent-icn1-1.cdninstagram.com',
          'rating' : 4
        },
        'location': {
          'code': 'HKG',
          'name': '홍콩',
          'base_shipping_fee': 9000,
          'free_shipping_threshold': 150000
        },
        'ship_alone': false,
        'in_stock': true,
        'stock_quantity': 3,
        'review_count': 0,
        'review_avg_rating': 0.0
      },
      {
        'slug': 'jo-malone-cologne-grapefruit-30ml1floz',
        'brand': {
          'slug' : 'jo-malone',
          'name' : '조 말론'
        },
        'title': '조 말론 그레이프프루트 코롱 30ml',
        'condition': 'new',
        'adult': false,
        'pack_of': 12,
        'attributes': [

        ],
        'thumbnail': 'http://img.staging.onpicks.com.s3.amazonaws.com/products/16892629-f6fb-43a8-8489-d4fc22fdf39c.jpg',
        'msrp': 43640.0,
        'price': 36920.0,
        'discount_rate': 0.154,
        'package_unit': 'g',
        'package_size': 60.0,
        'unit_pricing_base': 1,
        'review_info' : {
          'author' : {
            'nickname' : 'd_uk25',
            'avatar' : 'https://scontent-icn1-1.cdninstagram.com/vp/f9440d476ee5694656508a17a85cdfa8/5D06D9A7/t51.2885-19/s150x150/41532580_266296104216628_9030194385089724416_n.jpg?_nc_ht=scontent-icn1-1.cdninstagram.com',
          },
          'img_src' : 'https://scontent-icn1-1.cdninstagram.com/vp/3243decc9d593bbedf64e7ec12d2872c/5D1EAC3E/t51.2885-15/sh0.08/e35/s640x640/52864795_268505384042553_8261323545731653846_n.jpg?_nc_ht=scontent-icn1-1.cdninstagram.com',
          'rating' : 4.5
        },
        'location': {
          'code': 'JFK',
          'name': '뉴저지',
          'base_shipping_fee': 9000,
          'free_shipping_threshold': 150000
        },
        'ship_alone': false,
        'in_stock': true,
        'stock_quantity': 11,
        'review_count': 0,
        'review_avg_rating': 0.0
      },
      {
        'slug': 'simply-organic-garlic-powder-3-64oz',
        'brand': {
          'slug' : 'simply-organic',
          'name' : '심플리 오가닉'
        },
        'title': '심플리 오가닉 갈릭 파우더, 6개 묶음',
        'condition': 'new',
        'adult': false,
        'pack_of': 1,
        'attributes': [

        ],
        'thumbnail': 'http://img.staging.onpicks.com.s3.amazonaws.com/products/4523fb47-1ce0-4c13-9091-30b2a7e0667b.jpg',
        'msrp': 70780.0,
        'price': 48460.0,
        'discount_rate': 0.3153,
        'package_unit': 'kg',
        'package_size': 0.91,
        'unit_pricing_base': 1,
        'review_info' : {
          'author' : {
            'nickname' : 'kkangnation',
            'avatar' : 'https://scontent-icn1-1.cdninstagram.com/vp/642fd9c9d37124bfc401a83855d5a160/5D1801C7/t51.2885-19/s150x150/32271951_273072116567320_3960036335984574464_n.jpg?_nc_ht=scontent-icn1-1.cdninstagram.com',
          },
          'img_src' : 'https://scontent-icn1-1.cdninstagram.com/vp/fbc2333bbe335d82b614de42e95532af/5D1D794F/t51.2885-15/sh0.08/e35/s640x640/32178403_454908898302360_7887830472737161216_n.jpg?_nc_ht=scontent-icn1-1.cdninstagram.com',
          'rating' : 4.2
        },
        'location': {
          'code': 'HKG',
          'name': '홍콩',
          'base_shipping_fee': 9000,
          'free_shipping_threshold': 150000
        },
        'ship_alone': false,
        'in_stock': true,
        'stock_quantity': 42,
        'review_count': 0,
        'review_avg_rating': 0.0
      },
      {
        'slug': 'bobs-red-mill-organic-extra-thick-rolled-oats-32oz',
        'brand': {
          'slug' : 'bobs-red-mill',
          'name' : '밥스 레드 밀'
        },
        'title': '밥스 레드 밀 오가닉 롤드 오트, 4개 묶음',
        'condition': 'new',
        'adult': false,
        'pack_of': 1,
        'attributes': [

        ],
        'thumbnail': '',
        'msrp': 72000.0,
        'price': 64800.0,
        'discount_rate': 0.1,
        'package_unit': 'count',
        'package_size': 0.0,
        'unit_pricing_base': 1,
        'review_info' : {
          'author' : {
            'nickname' : 'bulletproof',
            'avatar' : 'https://scontent-icn1-1.cdninstagram.com/vp/14c02261f5fb70e416e2d761bf5e5e6d/5D24196B/t51.2885-19/s150x150/28156968_178741116070301_5929122757794070528_n.jpg?_nc_ht=scontent-icn1-1.cdninstagram.com',
          },
          'img_src' : 'https://scontent-icn1-1.cdninstagram.com/vp/7f737dc38a918d32a05de63c7f07ff12/5D1B5427/t51.2885-15/sh0.08/e35/s640x640/40000413_283447112489136_3449802261398552576_n.jpg?_nc_ht=scontent-icn1-1.cdninstagram.com',
          'rating' : 4
        },
        'location': {
          'code': 'HKG',
          'name': '홍콩',
          'base_shipping_fee': 9000,
          'free_shipping_threshold': 150000
        },
        'ship_alone': false,
        'in_stock': true,
        'stock_quantity': 12,
        'review_count': 0,
        'review_avg_rating': 0.0
      },
    ];

  weeklyBest$;
  recentlyViewed$;
  popularBrands$;
  valueList$;

  constructor(
    private uiDataService: UiService,
    private titleService: Title
  ) {
    this.titleService.setTitle( '온픽스, 건강하고 아름다운 삶을 위한 선택' );
    this.weeklyBest$ = this.uiDataService.getWeeklyBestGoods().pipe( tap( v => {
      console.log(v);
    }) );
    this.recentlyViewed$ = this.uiDataService.getRecentlyViewed();
    this.popularBrands$ = this.uiDataService.getPopularBrands();
    this.valueList$ = this.uiDataService.getValueList();
  }

  ngOnInit() {

  }

  ngAfterViewInit() {

  }
}


