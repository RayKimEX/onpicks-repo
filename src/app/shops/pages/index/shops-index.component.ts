import {AfterViewInit, ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {UiService} from '../../../core/service/ui/ui.service';

@Component({
  selector: 'onpicks-shops-index',
  templateUrl: './shops-index.component.html',
  styleUrls: ['./shops-index.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})

export class ShopsIndexComponent implements OnInit, AfterViewInit {


  shopsBannerImages = [
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
    }
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

  popularBrand = [
    {
      imgSrc : 'http://img.onpicks.com/brands/brand-hyredo.jpg',
      name : '바이레도',
    },
    {
      imgSrc : 'http://img.onpicks.com/brands/brand-aveda.jpg',
      name : '아베다',
    },
    {
      imgSrc : 'http://img.onpicks.com/brands/brand-mac.jpg',
      name : '맥',
    },
    {
      imgSrc : 'http://img.onpicks.com/brands/brand-natures-way.jpg',
      name : '네이처스 웨이',
    },
    {
      imgSrc : 'http://img.onpicks.com/brands/brand-thayers.jpg',
      name : '세이어스',
    },
    {
      imgSrc : 'http://img.onpicks.com/brands/brand-polum-organics.jpg',
      name : '플럼 오가닉스',
    },
    {
      imgSrc : 'http://img.onpicks.com/brands/brand-4th-and-heart.jpg',
      name : '4Th & Heart',
    },
    {
      imgSrc : 'http://img.onpicks.com/brands/brand-avalon-organics.jpg',
      name : '아발론 오가닉스',
    },
    {
      imgSrc : 'http://img.onpicks.com/brands/brand-simply-organic.jpg',
      name : '심플리 오가닉'
    },
    {
      imgSrc : 'http://img.onpicks.com/brands/brand-jomalone.jpg',
      name : '조 말론'
    },
    {
      imgSrc : 'http://img.onpicks.com/brands/brand-shu-uemura.jpg',
      name : '슈에무라'
    },
    {
      imgSrc : 'http://img.onpicks.com/brands/brand-diptqyue.jpg',
      name : '딥디크'
    },
    {
      imgSrc : 'http://img.onpicks.com/brands/brand-looccitane.jpg',
      name : '록시땅'
    },
    {
      imgSrc : 'http://img.onpicks.com/brands/brand-dior.jpg',
      name : '디올'
    },

  ]

  weeklyBest$;
  recentlyViewed$;
  constructor(
    private uiDataService: UiService,
  ) {
    this.weeklyBest$ = this.uiDataService.getWeeklyBestGoods();
    this.recentlyViewed$ = this.uiDataService.getRecentlyViewed();

  }

  ngOnInit() {

  }

  ngAfterViewInit() {

  }
}


