import {AfterViewInit, ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'onpicks-shops-index',
  templateUrl: './shops-index.component.html',
  styleUrls: ['./shops-index.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})

export class ShopsIndexComponent implements OnInit, AfterViewInit {

  infoList = [
    {
      brand: '라라바',
      productName: '라라바 글루텐프리 레몬 바 1.6oz 5개입 박스',
      rating: 4.4,
      reviewCount: 15,
      msrpDiscountPrice: 57200,
      discountPercent: 50,
      currentPrice: 28600,
      imgSrc: 'http://img.onpicks.com/p-similar-2.jpg',
      deliveryPoint : 1,
    } , {
      brand: '오예',
      productName: '오예바 원 바 벌쓰데이 케이크 프로틴바 12개',
      rating: 3.9,
      reviewCount: 99,
      msrpDiscountPrice: 57200,
      discountPercent: 50,
      currentPrice: 28600,
      imgSrc: 'http://img.onpicks.com/p-similar-5.jpg',
      deliveryPoint : 2,
    },
    {
      brand: '알엑스바',
      productName: '알엑스바 리얼 푸드 프로틴 에너지바 믹스드 베리 52G / 1.83OZ',
      rating: 1.5,
      reviewCount: 15,
      msrpDiscountPrice: 57200,
      discountPercent: 50,
      currentPrice: 28600,
      imgSrc: 'http://img.onpicks.com/p-similar-3.jpg',
      deliveryPoint : 3,
    },
    {
      brand: '샨티바',
      productName: '샨티바 리얼 푸드 프로틴 에너지바 코코넛 52G/ 1.83OZ',
      rating: 2.3,
      reviewCount: 15,
      msrpDiscountPrice: 57200,
      discountPercent: 50,
      currentPrice: 28600,
      imgSrc: 'http://img.onpicks.com/p-similar-4.jpg',
      deliveryPoint : 4,
    },
    {
      brand: 'Endangered Species Chocolate',
      productName: 'ONE Protein Bar, Birthday Cake, 2.12 oz. (12 Pack), Gluten-Free Protein Bar with High Protein (20g) and Low Sugar (1g), Guilt Free…',
      rating: 3.9,
      reviewCount: 99,
      msrpDiscountPrice: 57200,
      discountPercent: 50,
      currentPrice: 28600,
      imgSrc: 'http://img.onpicks.com/p-similar-1.jpg',
      deliveryPoint : 5,
    },
    {
      brand: 'Rxbar',
      productName: 'RXBAR Whole Food Protein Bar, Chocolate Sea Salt, 1.83 Ounce (Pack of 12)',
      rating: 1.5,
      reviewCount: 15,
      msrpDiscountPrice: 57200,
      discountPercent: 50,
      currentPrice: 28600,
      imgSrc: 'https://picsum.photos/264/264?image=55'
    },
    {
      brand: 'Shanti Bar',
      productName: 'Shanti Stainless Steel Flat Speed Bar Bottle Openet',
      rating: 2.3,
      reviewCount: 15,
      msrpDiscountPrice: 57200,
      discountPercent: 50,
      currentPrice: 28600,
      imgSrc: 'https://picsum.photos/264/264?image=98'
    },   {
      brand: 'Endangered Species Chocolate',
      productName: 'ONE Protein Bar, Birthday Cake, 2.12 oz. (12 Pack), Gluten-Free Protein Bar with High Protein (20g) and Low Sugar (1g), Guilt Free…',
      rating: 3.9,
      reviewCount: 99,
      msrpDiscountPrice: 57200,
      discountPercent: 50,
      currentPrice: 28600,
      imgSrc: 'http://img.onpicks.com/p-similar-2.jpg'
    },
    {
      brand: 'Rxbar',
      productName: 'RXBAR Whole Food Protein Bar, Chocolate Sea Salt, 1.83 Ounce (Pack of 12)',
      rating: 1.5,
      reviewCount: 15,
      msrpDiscountPrice: 57200,
      discountPercent: 50,
      currentPrice: 28600,
      imgSrc: 'http://img.onpicks.com/p-similar-3.jpg'
    },
    {
      brand: 'Shanti Bar',
      productName: 'Shanti Stainless Steel Flat Speed Bar Bottle Openet',
      rating: 2.3,
      reviewCount: 15,
      msrpDiscountPrice: 50,
      discountPercent: 50,
      currentPrice: 25,
      imgSrc: 'http://img.onpicks.com/p-similar-4.jpg'
    },
    {
      brand: 'Endangered Species Chocolate',
      productName: 'ONE Protein Bar, Birthday Cake, 2.12 oz. (12 Pack), Gluten-Free Protein Bar with High Protein (20g) and Low Sugar (1g), Guilt Free…',
      rating: 3.9,
      reviewCount: 99,
      msrpDiscountPrice: 30,
      discountPercent: 25,
      currentPrice: 10,
      imgSrc: 'http://img.onpicks.com/p-similar-2.jpg'
    },
    {
      brand: 'Rxbar',
      productName: 'RXBAR Whole Food Protein Bar, Chocolate Sea Salt, 1.83 Ounce (Pack of 12)',
      rating: 1.5,
      reviewCount: 15,
      msrpDiscountPrice: 50,
      discountPercent: 50,
      currentPrice: 25,
      imgSrc: 'http://img.onpicks.com/p-similar-3.jpg'
    },
    {
      brand: 'Shanti Bar',
      productName: 'Shanti Stainless Steel Flat Speed Bar Bottle Openet',
      rating: 2.3,
      reviewCount: 15,
      msrpDiscountPrice: 50,
      discountPercent: 50,
      currentPrice: 25,
      imgSrc: 'http://img.onpicks.com/p-similar-4.jpg'
    },   {
      brand: 'Endangered Species Chocolate',
      productName: 'ONE Protein Bar, Birthday Cake, 2.12 oz. (12 Pack), Gluten-Free Protein Bar with High Protein (20g) and Low Sugar (1g), Guilt Free…',
      rating: 3.9,
      reviewCount: 99,
      msrpDiscountPrice: 30,
      discountPercent: 25,
      currentPrice: 10,
      imgSrc: 'http://img.onpicks.com/p-similar-2.jpg'
    },
    {
      brand: 'Rxbar',
      productName: 'RXBAR Whole Food Protein Bar, Chocolate Sea Salt, 1.83 Ounce (Pack of 12)',
      rating: 1.5,
      reviewCount: 15,
      msrpDiscountPrice: 50,
      discountPercent: 50,
      currentPrice: 25,
      imgSrc: 'http://img.onpicks.com/p-similar-3.jpg'
    },
    {
      brand: 'Shanti Bar',
      productName: 'Shanti Stainless Steel Flat Speed Bar Bottle Openet',
      rating: 2.3,
      reviewCount: 15,
      msrpDiscountPrice: 50,
      discountPercent: 50,
      currentPrice: 25,
      imgSrc: 'http://img.onpicks.com/p-similar-4.jpg'
    },   {
      brand: 'Endangered Species Chocolate',
      productName: 'ONE Protein Bar, Birthday Cake, 2.12 oz. (12 Pack), Gluten-Free Protein Bar with High Protein (20g) and Low Sugar (1g), Guilt Free…',
      rating: 3.9,
      reviewCount: 99,
      msrpDiscountPrice: 30,
      discountPercent: 25,
      currentPrice: 10,
      imgSrc: 'http://img.onpicks.com/p-similar-2.jpg'
    },
    {
      brand: 'Rxbar',
      productName: 'RXBAR Whole Food Protein Bar, Chocolate Sea Salt, 1.83 Ounce (Pack of 12)',
      rating: 1.5,
      reviewCount: 15,
      msrpDiscountPrice: 50,
      discountPercent: 50,
      currentPrice: 25,
      imgSrc: 'http://img.onpicks.com/p-similar-3.jpg'
    },
    {
      brand: 'Shanti Bar',
      productName: 'Shanti Stainless Steel Flat Speed Bar Bottle Openet',
      rating: 2.3,
      reviewCount: 15,
      msrpDiscountPrice: 50,
      discountPercent: 50,
      currentPrice: 25,
      imgSrc: 'http://img.onpicks.com/p-similar-4.jpg'
    },   {
      brand: 'Endangered Species Chocolate',
      productName: 'ONE Protein Bar, Birthday Cake, 2.12 oz. (12 Pack), Gluten-Free Protein Bar with High Protein (20g) and Low Sugar (1g), Guilt Free…',
      rating: 3.9,
      reviewCount: 99,
      msrpDiscountPrice: 30,
      discountPercent: 25,
      currentPrice: 10,
      imgSrc: 'http://img.onpicks.com/p-similar-2.jpg'
    },
    {
      brand: 'Rxbar',
      productName: 'RXBAR Whole Food Protein Bar, Chocolate Sea Salt, 1.83 Ounce (Pack of 12)',
      rating: 1.5,
      reviewCount: 15,
      msrpDiscountPrice: 50,
      discountPercent: 50,
      currentPrice: 25,
      imgSrc: 'http://img.onpicks.com/p-similar-3.jpg'
    },
    {
      brand: 'Shanti Bar',
      productName: 'Shanti Stainless Steel Flat Speed Bar Bottle Openet',
      rating: 2.3,
      reviewCount: 15,
      msrpDiscountPrice: 50,
      discountPercent: 50,
      currentPrice: 25,
      imgSrc: 'http://img.onpicks.com/p-similar-4.jpg'
    },   {
      brand: 'Endangered Species Chocolate',
      productName: 'ONE Protein Bar, Birthday Cake, 2.12 oz. (12 Pack), Gluten-Free Protein Bar with High Protein (20g) and Low Sugar (1g), Guilt Free…',
      rating: 3.9,
      reviewCount: 99,
      msrpDiscountPrice: 30,
      discountPercent: 25,
      currentPrice: 10,
      imgSrc: 'http://img.onpicks.com/p-similar-2.jpg'
    },
    {
      brand: 'Rxbar',
      productName: 'RXBAR Whole Food Protein Bar, Chocolate Sea Salt, 1.83 Ounce (Pack of 12)',
      rating: 1.5,
      reviewCount: 15,
      msrpDiscountPrice: 50,
      discountPercent: 50,
      currentPrice: 25,
      imgSrc: 'http://img.onpicks.com/p-similar-3.jpg'
    },
    {
      brand: 'Shanti Bar',
      productName: 'Shanti Stainless Steel Flat Speed Bar Bottle Openet',
      rating: 2.3,
      reviewCount: 15,
      msrpDiscountPrice: 50,
      discountPercent: 50,
      currentPrice: 25,
      imgSrc: 'http://img.onpicks.com/p-similar-4.jpg'
    }
  ];


  shopsBannerImages = [
    'https://picsum.photos/1920/440?image=120',
    'https://picsum.photos/1920/440?image=200',
    'https://picsum.photos/1920/440?image=130',
    'https://picsum.photos/1920/440?image=210',
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


  // MUST TODO : Login관련 pycharm과 연관지어 작업하기, image folder convention지정
  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    console.log('i`ve loadded!! ');
  }
}


