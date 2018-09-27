import {AfterViewInit, Component, OnInit, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'ui-banner-carousel',
  templateUrl: './banner-carousel.component.html',
  styleUrls: ['./banner-carousel.component.scss']
})
export class BannerCarouselComponent implements OnInit, AfterViewInit {
  @ViewChild('container') container;

  imagesLargeList = [
    'https://picsum.photos/1920/440?image=93',
    'https://picsum.photos/1920/440?image=96',
    // 'https://s3.amazonaws.com/img.onpicks.com/p-customer__image--large-4.png',
    // 'https://s3.amazonaws.com/img.onpicks.com/p-customer__image--large-5.png',
    // 'https://s3.amazonaws.com/img.onpicks.com/p-customer__image--large-4.png',
    // 'https://s3.amazonaws.com/img.onpicks.com/p-customer__image--large-5.png',
  ];

  // infoList = [
  //   {
  //     brand: 'Larabar',
  //     productName: 'Larabar Fruit and Nut Bar - Cashew Cookie 16ct, 1.7oz',
  //     rating: 4.4,
  //     reviewCount: 15,
  //     msrpDiscountPrice: 50,
  //     discountPercent: 50,
  //     currentPrice: 25,
  //     imgSrc: 'https://s3.amazonaws.com/img.onpicks.com/p-similar-1.jpg'
  //   },{
  //     brand: 'Endangered Species Chocolate',
  //     productName: 'ONE Protein Bar, Birthday Cake, 2.12 oz. (12 Pack), Gluten-Free Protein Bar with High Protein (20g) and Low Sugar (1g), Guilt Free…',
  //     rating: 3.9,
  //     reviewCount: 99,
  //     msrpDiscountPrice: 30,
  //     discountPercent: 25,
  //     currentPrice: 10,
  //     imgSrc: 'https://s3.amazonaws.com/img.onpicks.com/p-similar-2.jpg'
  //   },
  //   {
  //     brand: 'Rxbar',
  //     productName: 'RXBAR Whole Food Protein Bar, Chocolate Sea Salt, 1.83 Ounce (Pack of 12)',
  //     rating: 1.5,
  //     reviewCount: 15,
  //     msrpDiscountPrice: 50,
  //     discountPercent: 50,
  //     currentPrice: 25,
  //     imgSrc: 'https://s3.amazonaws.com/img.onpicks.com/p-similar-3.jpg'
  //   },
  //   {
  //     brand: 'Shanti Bar',
  //     productName: 'Shanti Stainless Steel Flat Speed Bar Bottle Openet',
  //     rating: 2.3,
  //     reviewCount: 15,
  //     msrpDiscountPrice: 50,
  //     discountPercent: 50,
  //     currentPrice: 25,
  //     imgSrc: 'https://s3.amazonaws.com/img.onpicks.com/p-similar-4.jpg'
  //   },
  //   {
  //     brand: 'Endangered Species Chocolate',
  //     productName: 'ONE Protein Bar, Birthday Cake, 2.12 oz. (12 Pack), Gluten-Free Protein Bar with High Protein (20g) and Low Sugar (1g), Guilt Free…',
  //     rating: 3.9,
  //     reviewCount: 99,
  //     msrpDiscountPrice: 30,
  //     discountPercent: 25,
  //     currentPrice: 10,
  //     imgSrc: 'https://s3.amazonaws.com/img.onpicks.com/p-similar-2.jpg'
  //   },
  //   {
  //     brand: 'Rxbar',
  //     productName: 'RXBAR Whole Food Protein Bar, Chocolate Sea Salt, 1.83 Ounce (Pack of 12)',
  //     rating: 1.5,
  //     reviewCount: 15,
  //     msrpDiscountPrice: 50,
  //     discountPercent: 50,
  //     currentPrice: 25,
  //     imgSrc: 'https://s3.amazonaws.com/img.onpicks.com/p-similar-3.jpg'
  //   },
  //   {
  //     brand: 'Shanti Bar',
  //     productName: 'Shanti Stainless Steel Flat Speed Bar Bottle Openet',
  //     rating: 2.3,
  //     reviewCount: 15,
  //     msrpDiscountPrice: 50,
  //     discountPercent: 50,
  //     currentPrice: 25,
  //     imgSrc: 'https://s3.amazonaws.com/img.onpicks.com/p-similar-4.jpg'
  //   },   {
  //     brand: 'Endangered Species Chocolate',
  //     productName: 'ONE Protein Bar, Birthday Cake, 2.12 oz. (12 Pack), Gluten-Free Protein Bar with High Protein (20g) and Low Sugar (1g), Guilt Free…',
  //     rating: 3.9,
  //     reviewCount: 99,
  //     msrpDiscountPrice: 30,
  //     discountPercent: 25,
  //     currentPrice: 10,
  //     imgSrc: 'https://s3.amazonaws.com/img.onpicks.com/p-similar-2.jpg'
  //   },
  //   {
  //     brand: 'Rxbar',
  //     productName: 'RXBAR Whole Food Protein Bar, Chocolate Sea Salt, 1.83 Ounce (Pack of 12)',
  //     rating: 1.5,
  //     reviewCount: 15,
  //     msrpDiscountPrice: 50,
  //     discountPercent: 50,
  //     currentPrice: 25,
  //     imgSrc: 'https://s3.amazonaws.com/img.onpicks.com/p-similar-3.jpg'
  //   },
  //   {
  //     brand: 'Shanti Bar',
  //     productName: 'Shanti Stainless Steel Flat Speed Bar Bottle Openet',
  //     rating: 2.3,
  //     reviewCount: 15,
  //     msrpDiscountPrice: 50,
  //     discountPercent: 50,
  //     currentPrice: 25,
  //     imgSrc: 'https://s3.amazonaws.com/img.onpicks.com/p-similar-4.jpg'
  //   },
  //   {
  //     brand: 'Endangered Species Chocolate',
  //     productName: 'ONE Protein Bar, Birthday Cake, 2.12 oz. (12 Pack), Gluten-Free Protein Bar with High Protein (20g) and Low Sugar (1g), Guilt Free…',
  //     rating: 3.9,
  //     reviewCount: 99,
  //     msrpDiscountPrice: 30,
  //     discountPercent: 25,
  //     currentPrice: 10,
  //     imgSrc: 'https://s3.amazonaws.com/img.onpicks.com/p-similar-2.jpg'
  //   },
  //   {
  //     brand: 'Rxbar',
  //     productName: 'RXBAR Whole Food Protein Bar, Chocolate Sea Salt, 1.83 Ounce (Pack of 12)',
  //     rating: 1.5,
  //     reviewCount: 15,
  //     msrpDiscountPrice: 50,
  //     discountPercent: 50,
  //     currentPrice: 25,
  //     imgSrc: 'https://s3.amazonaws.com/img.onpicks.com/p-similar-3.jpg'
  //   },
  //   {
  //     brand: 'Shanti Bar',
  //     productName: 'Shanti Stainless Steel Flat Speed Bar Bottle Openet',
  //     rating: 2.3,
  //     reviewCount: 15,
  //     msrpDiscountPrice: 50,
  //     discountPercent: 50,
  //     currentPrice: 25,
  //     imgSrc: 'https://s3.amazonaws.com/img.onpicks.com/p-similar-4.jpg'
  //   },   {
  //     brand: 'Endangered Species Chocolate',
  //     productName: 'ONE Protein Bar, Birthday Cake, 2.12 oz. (12 Pack), Gluten-Free Protein Bar with High Protein (20g) and Low Sugar (1g), Guilt Free…',
  //     rating: 3.9,
  //     reviewCount: 99,
  //     msrpDiscountPrice: 30,
  //     discountPercent: 25,
  //     currentPrice: 10,
  //     imgSrc: 'https://s3.amazonaws.com/img.onpicks.com/p-similar-2.jpg'
  //   },
  //   {
  //     brand: 'Rxbar',
  //     productName: 'RXBAR Whole Food Protein Bar, Chocolate Sea Salt, 1.83 Ounce (Pack of 12)',
  //     rating: 1.5,
  //     reviewCount: 15,
  //     msrpDiscountPrice: 50,
  //     discountPercent: 50,
  //     currentPrice: 25,
  //     imgSrc: 'https://s3.amazonaws.com/img.onpicks.com/p-similar-3.jpg'
  //   },
  //   {
  //     brand: 'Shanti Bar',
  //     productName: 'Shanti Stainless Steel Flat Speed Bar Bottle Openet',
  //     rating: 2.3,
  //     reviewCount: 15,
  //     msrpDiscountPrice: 50,
  //     discountPercent: 50,
  //     currentPrice: 25,
  //     imgSrc: 'https://s3.amazonaws.com/img.onpicks.com/p-similar-4.jpg'
  //   },   {
  //     brand: 'Endangered Species Chocolate',
  //     productName: 'ONE Protein Bar, Birthday Cake, 2.12 oz. (12 Pack), Gluten-Free Protein Bar with High Protein (20g) and Low Sugar (1g), Guilt Free…',
  //     rating: 3.9,
  //     reviewCount: 99,
  //     msrpDiscountPrice: 30,
  //     discountPercent: 25,
  //     currentPrice: 10,
  //     imgSrc: 'https://s3.amazonaws.com/img.onpicks.com/p-similar-2.jpg'
  //   },
  //   {
  //     brand: 'Rxbar',
  //     productName: 'RXBAR Whole Food Protein Bar, Chocolate Sea Salt, 1.83 Ounce (Pack of 12)',
  //     rating: 1.5,
  //     reviewCount: 15,
  //     msrpDiscountPrice: 50,
  //     discountPercent: 50,
  //     currentPrice: 25,
  //     imgSrc: 'https://s3.amazonaws.com/img.onpicks.com/p-similar-3.jpg'
  //   },
  //   {
  //     brand: 'Shanti Bar',
  //     productName: 'Shanti Stainless Steel Flat Speed Bar Bottle Openet',
  //     rating: 2.3,
  //     reviewCount: 15,
  //     msrpDiscountPrice: 50,
  //     discountPercent: 50,
  //     currentPrice: 25,
  //     imgSrc: 'https://s3.amazonaws.com/img.onpicks.com/p-similar-4.jpg'
  //   },   {
  //     brand: 'Endangered Species Chocolate',
  //     productName: 'ONE Protein Bar, Birthday Cake, 2.12 oz. (12 Pack), Gluten-Free Protein Bar with High Protein (20g) and Low Sugar (1g), Guilt Free…',
  //     rating: 3.9,
  //     reviewCount: 99,
  //     msrpDiscountPrice: 30,
  //     discountPercent: 25,
  //     currentPrice: 10,
  //     imgSrc: 'https://s3.amazonaws.com/img.onpicks.com/p-similar-2.jpg'
  //   },
  //   {
  //     brand: 'Rxbar',
  //     productName: 'RXBAR Whole Food Protein Bar, Chocolate Sea Salt, 1.83 Ounce (Pack of 12)',
  //     rating: 1.5,
  //     reviewCount: 15,
  //     msrpDiscountPrice: 50,
  //     discountPercent: 50,
  //     currentPrice: 25,
  //     imgSrc: 'https://s3.amazonaws.com/img.onpicks.com/p-similar-3.jpg'
  //   },
  //   {
  //     brand: 'Shanti Bar',
  //     productName: 'Shanti Stainless Steel Flat Speed Bar Bottle Openet',
  //     rating: 2.3,
  //     reviewCount: 15,
  //     msrpDiscountPrice: 50,
  //     discountPercent: 50,
  //     currentPrice: 25,
  //     imgSrc: 'https://s3.amazonaws.com/img.onpicks.com/p-similar-4.jpg'
  //   },   {
  //     brand: 'Endangered Species Chocolate',
  //     productName: 'ONE Protein Bar, Birthday Cake, 2.12 oz. (12 Pack), Gluten-Free Protein Bar with High Protein (20g) and Low Sugar (1g), Guilt Free…',
  //     rating: 3.9,
  //     reviewCount: 99,
  //     msrpDiscountPrice: 30,
  //     discountPercent: 25,
  //     currentPrice: 10,
  //     imgSrc: 'https://s3.amazonaws.com/img.onpicks.com/p-similar-2.jpg'
  //   },
  //   {
  //     brand: 'Rxbar',
  //     productName: 'RXBAR Whole Food Protein Bar, Chocolate Sea Salt, 1.83 Ounce (Pack of 12)',
  //     rating: 1.5,
  //     reviewCount: 15,
  //     msrpDiscountPrice: 50,
  //     discountPercent: 50,
  //     currentPrice: 25,
  //     imgSrc: 'https://s3.amazonaws.com/img.onpicks.com/p-similar-3.jpg'
  //   },
  //   {
  //     brand: 'Shanti Bar',
  //     productName: 'Shanti Stainless Steel Flat Speed Bar Bottle Openet',
  //     rating: 2.3,
  //     reviewCount: 15,
  //     msrpDiscountPrice: 50,
  //     discountPercent: 50,
  //     currentPrice: 25,
  //     imgSrc: 'https://s3.amazonaws.com/img.onpicks.com/p-similar-4.jpg'
  //   }
  // ];
  imageIndex = 0;
  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }



  ngAfterViewInit() {
    // console.log(this.setTitle);
    // this.itemListArray = this.itemList.toArray();
    // this.renderer.setProperty( this.insertTitle.nativeElement, 'innerHTML', this.setTitle);

  }

  nextButton() {

    this.imageIndex--;
    this.renderer.setStyle(this.container.nativeElement, 'transform', 'translateX(100%)');
  }

  prevButton() {

    this.imageIndex++;
    this.renderer.setStyle(this.container.nativeElement, 'transform', 'translateX(-100%)');
  }
}
