import {AfterViewInit, ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {UiService} from '../../../core/service/ui/ui.service';

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
  //
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
  }

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
  ]

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
      imgSrc : 'http://img.onpicks.com/categories/category-baby.png',
      name : '유아동',
      href : '/shops/c/pantry-and-household/baby'
    },
    {
      imgSrc : 'http://img.onpicks.com/categories/category-health.png',
      name : '건강',
      href : '/shops/c/pantry-and-household/health'
    },
    {
      imgSrc : 'http://img.onpicks.com/categories/category-skincare.png',
      name : '스킨케어',
      href : '/shops/c/beauty/skincare'
    },
    {
      imgSrc : 'http://img.onpicks.com/categories/category-fragrance.png',
      name : '향수',
      href : '/shops/c/beauty/fragrance'
    }
  ]


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
  ]

  weeklyBest$;
  recentlyViewed$;
  popularBrands$;
  valueList$;

  constructor(
    private uiDataService: UiService,
  ) {
    this.weeklyBest$ = this.uiDataService.getWeeklyBestGoods();
    this.recentlyViewed$ = this.uiDataService.getRecentlyViewed();
    this.popularBrands$ = this.uiDataService.getPopularBrands();
    this.valueList$ = this.uiDataService.getValueList();
  }

  ngOnInit() {

  }

  ngAfterViewInit() {

  }
}


