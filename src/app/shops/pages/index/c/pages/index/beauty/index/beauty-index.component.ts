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
      imgSrc : 'http://img.onpicks.com/brands/brand-jomalone.jpg',
      name : '조 말론'
    },
    {
      imgSrc : 'http://img.onpicks.com/brands/brand-hyredo.jpg',
      name : '바이레도'
    },
    {
      imgSrc : 'http://img.onpicks.com/brands/brand-aveda.jpg',
      name : '아베다'
    },
    {
      imgSrc : 'http://img.onpicks.com/brands/brand-mac.jpg',
      name : '맥'
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

  constructor() { }

  ngOnInit() {
  }

}
