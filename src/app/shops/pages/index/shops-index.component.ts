import {AfterViewInit, ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {UiService} from '../../../core/service/ui/ui.service';
import {tap} from 'rxjs/operators';

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
    imgSrc : 'https://img.onpicks.com/assets/beauty_banner1.jpg',
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
      imgSrc : 'https://img.onpicks.com/assets/beauty_banner2.jpg',
      // marginLeftForText : '6.2%',
      title : [
        '온가족이 사용하는',
        '유기농 화장품, 닥터 브로너스'
      ],
      titleFontType : 'h2-regular',
      description : [
        '추출물과 비교불가! 유기농 오일이 주는 피부 본연의 힘',
        '피부 자극 걱정없는 클렌징으로 안심하고 사용하세요.'
      ],
      descriptionFontType : 'subtitle-1-regular'
    },
    {
      imgSrc : 'https://img.onpicks.com/assets/beauty_banner1.jpg',
      // marginLeftForText : '6.2%',
      title : [
        '세이어스'
      ],
      titleFontType : 'h2-regular',
      description : [
        '170년 전통의 위치하젤 토너 전문 브랜드.',
        '피부타입과 취향에 따라 골라쓰는 재미가 있는 토너.'
      ],
      descriptionFontType : 'subtitle-1-regular'
    },
  ];

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
      todayDiscription: '건강&체중을 한 번에! 수천년 전에 인간 사냥꾼 조상이 먹은 것과 유사하도록 고안된 구석기 다이어트...',
    },
    {
      imgSrc : 'http://img.onpicks.com/collections/collections-USDA.jpg',
      todayCategoryName : '식품·생활용품',
      todayTitle : 'USDA 인증',
      todayDiscription: '미국 유기농 인증마크 USDA',
    },
    {
      imgSrc : 'http://img.onpicks.com/collections/collections-gluten.jpg',
      todayCategoryName : '식품·생활용품',
      todayTitle : '글루텐프리',
      todayDiscription: '밀가루 무첨가 영양만점 글루텐프리',
    },
    {
      imgSrc : 'https://img.onpicks.com/collections/collection-flower.jpg?d=w528-h352',
      todayCategoryName : '뷰티',
      todayTitle : '봄을 맞이하는 아이템!',
      todayDiscription : '인간 벚꽃이 되어 당신 주변에 이른 봄을 선물하는 건 어떨까요?'
    },
    {
      imgSrc : 'https://img.onpicks.com/collections/collection-byredo.jpg?d=w528-h352',
      todayCategoryName : '뷰티',
      todayTitle : '페피들의 잇 아이템',
      todayDiscription : '바이레도의 감성으로 북유럽의 서정적인 향기를 입어보세요'
    }
  ];

  trendingReviews = [
    {
      'slug': 'diptyque-nourishing-lip-balm-15ml',
      'brand': '딥티크',
      'title': '딥티크 너리싱 립밤 15ml',
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
          'nickname' : 'moon_pilates_',
          'avatar' : 'https://scontent-icn1-1.cdninstagram.com/vp/7ec07a3574cade39307119a1f80ede21/5D28C7DE/t51.2885-19/s150x150/51049451_983185548547718_8326170789107728384_n.jpg?_nc_ht=scontent-icn1-1.cdninstagram.com',
        },
        'img_src' : 'https://scontent-icn1-1.cdninstagram.com/vp/0421299cc3eab907ba5fba0f3640953b/5D1B8531/t51.2885-15/sh0.08/e35/s640x640/51936973_400845247129834_8790677930792109302_n.jpg?_nc_ht=scontent-icn1-1.cdninstagram.com',
        'rating' : 4
      },
      'location': {
        'slug': 'hkg',
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
    {
      'slug': 'orgain-organic-meal-nutrition-powder-all-in-one-creamy-chocolate-fudge-2-01lb',
      'brand': '올게인',
      'title': '올게인 오가닉 올인원 영양 분말 크리미 초콜릿 퍼지',
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
          'nickname' : 'soyoung_kil',
          'avatar' : 'https://scontent-icn1-1.cdninstagram.com/vp/79b2d07b5ea50e4ca15e35a4caa33dde/5D0DF99C/t51.2885-19/s150x150/43521348_294202318089206_8013713150979342336_n.jpg?_nc_ht=scontent-icn1-1.cdninstagram.com',
        },
        'img_src' : 'https://scontent-icn1-1.cdninstagram.com/vp/7c37e3ca16dd0a603141844f6eca4e56/5D0A8B64/t51.2885-15/sh0.08/e35/c0.130.1056.1056/s640x640/52620840_469854616882511_6462090831768924602_n.jpg?_nc_ht=scontent-icn1-1.cdninstagram.com',
        'rating' : 5
      },
      'location': {
        'slug': 'lax',
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
        'brand': '딥티크',
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
            'nickname' : 'cherrykoko_korea',
            'avatar' : 'https://scontent-icn1-1.cdninstagram.com/vp/d77f424f9795f9452238e70d9f393ab0/5D0C073D/t51.2885-19/s150x150/30087046_178103436243269_1243021977082396672_n.jpg?_nc_ht=scontent-icn1-1.cdninstagram.com',
          },
          'img_src' : 'https://scontent-icn1-1.cdninstagram.com/vp/cc947c003fce987ad01237471e8eb1b0/5D25E36A/t51.2885-15/sh0.08/e35/s640x640/53551264_130507744672323_2871472206323493495_n.jpg?_nc_ht=scontent-icn1-1.cdninstagram.com',
          'rating' : 4
        },
        'location': {
          'slug': 'hkg',
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
        'slug': 'quest-protein-bar-vanilla-amond-crunch-2-12oz',
        'brand': '퀘스트 뉴트리션',
        'title': '퀘스트 뉴트리션 프로틴 바 바닐라 아몬드 크런치, 60g, 12개 묶음',
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
            'nickname' : 'chungha',
            'avatar' : 'https://scontent-icn1-1.cdninstagram.com/vp/c02b41ec6192f646ddbbd578da1619aa/5D279B40/t51.2885-19/s150x150/25038945_530878020613923_1456719062737354752_n.jpg?_nc_ht=scontent-icn1-1.cdninstagram.com',
          },
          'img_src' : 'https://scontent-icn1-1.cdninstagram.com/vp/c0283e584b56a37592a65bcbb26288cb/5D242FDB/t51.2885-15/sh0.08/e35/p640x640/51906523_247534739526226_7183228415503419138_n.jpg?_nc_ht=scontent-icn1-1.cdninstagram.com',
          'rating' : 4.5
        },
        'location': {
          'slug': 'jfk',
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
        'slug': 'mac-amplified-lipstick-morange-3gm1oz',
        'brand': '맥',
        'title': '맥 앰플리파이드 크림립스틱 모란지',
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
            'nickname' : '16.brand',
            'avatar' : 'https://scontent-icn1-1.cdninstagram.com/vp/26ac70225470370d9fe7eee742457c5b/5D0C6366/t51.2885-19/s150x150/12905184_241296066221278_1899852474_a.jpg?_nc_ht=scontent-icn1-1.cdninstagram.com',
          },
          'img_src' : 'https://scontent-icn1-1.cdninstagram.com/vp/960fca54ce1e52168d4dc4aa79da4364/5D06F43B/t51.2885-15/sh0.08/e35/s640x640/52183959_783101582056077_4987984572651173017_n.jpg?_nc_ht=scontent-icn1-1.cdninstagram.com',
          'rating' : 4.2
        },
        'location': {
          'slug': 'hkg',
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
    ];

  weeklyBest$;
  recentlyViewed$;
  popularBrands$;
  valueList$;

  constructor(
    private uiDataService: UiService,
  ) {
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


