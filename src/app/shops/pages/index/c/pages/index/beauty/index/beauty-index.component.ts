import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'onpicks-beauty',
  templateUrl: './beauty-index.component.html',
  styleUrls: ['./beauty-index.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})
export class BeautyIndexComponent implements OnInit {
  pantryAndHouseHoldBannerImages = [
    {
      imgSrc : 'https://img.onpicks.com/assets/beauty_banner3.jpg',
      // marginLeftForText : '6.2%',
      title : [],
      description : []
    }
  ]

  popularPantryCategory = [
    {
      imgSrc : 'http://img.onpicks.com/categories/category-skincare.png',
      name : '스킨케어',
      href : '/shops/c/beauty/skincare'
    },
    {
      imgSrc : 'http://img.onpicks.com/categories/category-hair.png',
      name : '헤어',
      href : '/shops/c/beauty/hair'
    },
    {
      imgSrc : 'http://img.onpicks.com/categories/category-fragrance.png',
      name : '향수',
      href : '/shops/c/beauty/fragrance'
    },
    {
      imgSrc : 'http://img.onpicks.com/categories/cateogry-makeup.png',
      name : '메이크업',
      href : '/shops/c/beauty/makeup'
    },
    {
      imgSrc : 'http://img.onpicks.com/categories/category-body.png',
      name : '바디',
      href : '/shops/c/beauty/bath-and-body'
    },
  ]
  popularBeautyBrand = [
    {
      icon : 'http://img.onpicks.com/brands/brand-jomalone.jpg',
      name : '조 말론'
    },
    {
      icon : 'http://img.onpicks.com/brands/brand-hyredo.jpg',
      name : '바이레도'
    },
    {
      icon : 'http://img.onpicks.com/brands/brand-aveda.jpg',
      name : '아베다'
    },
    {
      icon : 'http://img.onpicks.com/brands/brand-mac.jpg',
      name : '맥'
    },
    {
      icon : 'http://img.onpicks.com/brands/brand-shu-uemura.jpg',
      name : '슈에무라'
    },
    {
      icon : 'http://img.onpicks.com/brands/brand-diptqyue.jpg',
      name : '딥디크'
    },
    {
      icon : 'http://img.onpicks.com/brands/brand-looccitane.jpg',
      name : '록시땅'
    },
    {
      icon : 'http://img.onpicks.com/brands/brand-dior.jpg',
      name : '디올'
    },

  ]



  todayCollection = [
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

  constructor() { }

  ngOnInit() {
  }

}
