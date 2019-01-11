import {AfterViewInit, ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

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
      imgSrc : 'https://img.onpicks.com/assets/category_pantry-and-household.jpg',
      name : '식품·생활용품',
    },
    {
      imgSrc : 'https://img.onpicks.com/assets/category_beauty.jpg',
      name : '뷰티',
    },
    {
      imgSrc : 'https://img.onpicks.com/assets/category_home-deco.jpg',
      name : '홈·데코',
    },
    {
      imgSrc :  'https://img.onpicks.com/assets/category_digital.jpg',
      name : '가전·디지털',
    },
    {
      imgSrc : 'https://img.onpicks.com/assets/category_baby.jpg',
      name : '유아동',
    },
  ]
  constructor() {

  }

  ngOnInit() {

  }

  ngAfterViewInit() {

  }
}


