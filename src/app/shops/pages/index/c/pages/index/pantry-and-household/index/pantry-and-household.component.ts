import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'onpicks-pantry-and-household',
  templateUrl: './pantry-and-household.component.html',
  styleUrls: ['./pantry-and-household.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})

export class PantryAndHouseholdComponent implements OnInit {

  pantryAndHouseHoldBannerImages =  [
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
    },
  ]

  popularPantryCategory = [
    {
      imgSrc : 'http://img.onpicks.com/categories/category-grocery.png',
      name : '식품',
    },
    {
      imgSrc : 'http://img.onpicks.com/categories/category-household.png',
      name : '생활용품',
    },
    {
      imgSrc : 'http://img.onpicks.com/categories/category-personalcare.png',
      name : '퍼스널케어',
    },
    {
      imgSrc : 'http://img.onpicks.com/categories/category-health.png',
      name : '건강',
    },
    {
      imgSrc : 'http://img.onpicks.com/categories/category-baby.png',
      name : '유아동',
    },
    {
      imgSrc : 'http://img.onpicks.com/categories/category-pet.png',
      name : '반려용품',
    }
  ]
  // Avalon Organics  아발론 오가닉스
  // Nubian Heritage  누비안 헤리티지
  // Nature’s Way  네이처스 웨이
  // Earth Mama  얼스마마
  // thayers  세이어스
  // Plum Organics  플럼 오가닉스
  // 4Th & Heart  4Th & Heart
  // Hero Nutritional Products  히어로 뉴트리셔널
  // Simply organic  심플리 오가닉
  // Quest Nutrition  퀘스트 뉴트리션 (edited)
  popularBrand = [
    {
      imgSrc : 'http://img.onpicks.com/brands/brand-avalon-organics.jpg',
      name : '아발론 오가닉스'
    },
    {
      imgSrc : 'http://img.onpicks.com/brands/brand-nubian-heritage.jpg',
      name : '누비안 헤리티지'
    },
    {
      imgSrc : 'http://img.onpicks.com/brands/brand-natures-way.jpg',
      name : '네이처스 웨이'
    },
    {
      imgSrc : 'http://img.onpicks.com/brands/brand-earth-mama.jpg',
      name : '얼스마마'
    },
    {
      imgSrc : 'http://img.onpicks.com/brands/brand-thayers.jpg',
      name : '세이어스'
    },
    {
      imgSrc : 'http://img.onpicks.com/brands/brand-polum-organics.jpg',
      name : '플럼 오가닉스'
    },
    {
      imgSrc : 'http://img.onpicks.com/brands/brand-4th-and-heart.jpg',
      name : '4Th & Heart'
    },
    {
      imgSrc : 'http://img.onpicks.com/brands/brand-hero-nutritionals.jpg',
      name : '히어로 뉴트리셔널'
    },
    {
      imgSrc : 'http://img.onpicks.com/brands/brand-simply-organic.jpg',
      name : '심플리 오가닉'
    },
    {
      imgSrc : 'http://img.onpicks.com/brands/brand-quest-nutrition.jpg',
      name : '퀘스트 뉴트리션'
    },


  ]

  constructor(
    public route: ActivatedRoute,
  ) {

  }

  getCategoryOneDepth;
  routeSubScription$;

  ngOnInit() {
    this.routeSubScription$ = this.route.params.subscribe((params: Params) => {
      this.getCategoryOneDepth = params['categoryOneDepth'];
    });
  }
}
