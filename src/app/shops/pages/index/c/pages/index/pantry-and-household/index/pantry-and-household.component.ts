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
      imgSrc : 'http://img.onpicks.com/pantry-category1.jpg',
      name : '식품',
    },
    {
      imgSrc : 'http://img.onpicks.com/pantry-category2.jpg',
      name : '생활용품',
    },
    {
      imgSrc : 'http://img.onpicks.com/pantry-category3.jpg',
      name : '퍼스널케어',
    },
    {
      imgSrc : 'http://img.onpicks.com/pantry-category4.jpg',
      name : '건강',
    },
    {
      imgSrc : 'http://img.onpicks.com/pantry-category5.jpg',
      name : '유아동',
    },
    {
      imgSrc : 'http://img.onpicks.com/pantry-category6.jpg',
      name : '반려용품',
    },
    {
      imgSrc : 'https://picsum.photos/168/168?image=70',
      name : '홈·데코',
    },
    {
      imgSrc : 'https://picsum.photos/168/168?image=75',
      name : '가전·디지털',
    },
    {
      imgSrc : 'https://picsum.photos/168/168?image=80',
      name : '유아동',
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
