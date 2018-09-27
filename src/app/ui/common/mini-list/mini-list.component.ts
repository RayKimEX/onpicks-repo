import {AfterViewInit, Component, OnDestroy, OnInit, Renderer2, ViewChild, ViewChildren} from '@angular/core';
import {fromEvent} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'ui-mini-list',
  templateUrl: './mini-list.component.html',
  styleUrls: ['./mini-list.component.scss']
})
export class MiniListComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChildren('itemList') itemList;
  @ViewChild('container') container;

  infoList = [
    {
      brand: 'Larabar',
      productName: 'Larabar Fruit and Nut Bar - Cashew Cookie 16ct, 1.7oz',
      rating: 4.4,
      reviewCount: 15,
      msrpDiscountPrice: 50,
      discountPercent: 50,
      currentPrice: 25,
      imgSrc: 'https://s3.amazonaws.com/img.onpicks.com/p-similar-1.jpg'
    },
    {
      brand: 'Endangered Species Chocolate',
      productName: 'ONE Protein Bar, Birthday Cake, 2.12 oz. (12 Pack), Gluten-Free Protein Bar with High Protein (20g) and Low Sugar (1g), Guilt Free…',
      rating: 3.9,
      reviewCount: 99,
      msrpDiscountPrice: 30,
      discountPercent: 25,
      currentPrice: 10,
      imgSrc: 'https://s3.amazonaws.com/img.onpicks.com/p-similar-2.jpg'
    },
    {
      brand: 'Rxbar',
      productName: 'RXBAR Whole Food Protein Bar, Chocolate Sea Salt, 1.83 Ounce (Pack of 12)',
      rating: 1.5,
      reviewCount: 15,
      msrpDiscountPrice: 50,
      discountPercent: 50,
      currentPrice: 25,
      imgSrc: 'https://s3.amazonaws.com/img.onpicks.com/p-similar-3.jpg'
    },
    {
      brand: 'Shanti Bar',
      productName: 'Shanti Stainless Steel Flat Speed Bar Bottle Openet',
      rating: 2.3,
      reviewCount: 15,
      msrpDiscountPrice: 50,
      discountPercent: 50,
      currentPrice: 25,
      imgSrc: 'https://s3.amazonaws.com/img.onpicks.com/p-similar-4.jpg'
    },
    {
      brand: 'Endangered Species Chocolate',
      productName: 'ONE Protein Bar, Birthday Cake, 2.12 oz. (12 Pack), Gluten-Free Protein Bar with High Protein (20g) and Low Sugar (1g), Guilt Free…',
      rating: 3.9,
      reviewCount: 99,
      msrpDiscountPrice: 30,
      discountPercent: 25,
      currentPrice: 10,
      imgSrc: 'https://s3.amazonaws.com/img.onpicks.com/p-similar-2.jpg'
    },
    {
      brand: 'Rxbar',
      productName: 'RXBAR Whole Food Protein Bar, Chocolate Sea Salt, 1.83 Ounce (Pack of 12)',
      rating: 1.5,
      reviewCount: 15,
      msrpDiscountPrice: 50,
      discountPercent: 50,
      currentPrice: 25,
      imgSrc: 'https://s3.amazonaws.com/img.onpicks.com/p-similar-3.jpg'
    },
    {
      brand: 'Shanti Bar',
      productName: 'Shanti Stainless Steel Flat Speed Bar Bottle Openet',
      rating: 2.3,
      reviewCount: 15,
      msrpDiscountPrice: 50,
      discountPercent: 50,
      currentPrice: 25,
      imgSrc: 'https://s3.amazonaws.com/img.onpicks.com/p-similar-4.jpg'
    },   {
      brand: 'Endangered Species Chocolate',
      productName: 'ONE Protein Bar, Birthday Cake, 2.12 oz. (12 Pack), Gluten-Free Protein Bar with High Protein (20g) and Low Sugar (1g), Guilt Free…',
      rating: 3.9,
      reviewCount: 99,
      msrpDiscountPrice: 30,
      discountPercent: 25,
      currentPrice: 10,
      imgSrc: 'https://s3.amazonaws.com/img.onpicks.com/p-similar-2.jpg'
    },
    {
      brand: 'Rxbar',
      productName: 'RXBAR Whole Food Protein Bar, Chocolate Sea Salt, 1.83 Ounce (Pack of 12)',
      rating: 1.5,
      reviewCount: 15,
      msrpDiscountPrice: 50,
      discountPercent: 50,
      currentPrice: 25,
      imgSrc: 'https://s3.amazonaws.com/img.onpicks.com/p-similar-3.jpg'
    },
    {
      brand: 'Shanti Bar',
      productName: 'Shanti Stainless Steel Flat Speed Bar Bottle Openet',
      rating: 2.3,
      reviewCount: 15,
      msrpDiscountPrice: 50,
      discountPercent: 50,
      currentPrice: 25,
      imgSrc: 'https://s3.amazonaws.com/img.onpicks.com/p-similar-4.jpg'
    },
    {
      brand: 'Endangered Species Chocolate',
      productName: 'ONE Protein Bar, Birthday Cake, 2.12 oz. (12 Pack), Gluten-Free Protein Bar with High Protein (20g) and Low Sugar (1g), Guilt Free…',
      rating: 3.9,
      reviewCount: 99,
      msrpDiscountPrice: 30,
      discountPercent: 25,
      currentPrice: 10,
      imgSrc: 'https://s3.amazonaws.com/img.onpicks.com/p-similar-2.jpg'
    },
    {
      brand: 'Rxbar',
      productName: 'RXBAR Whole Food Protein Bar, Chocolate Sea Salt, 1.83 Ounce (Pack of 12)',
      rating: 1.5,
      reviewCount: 15,
      msrpDiscountPrice: 50,
      discountPercent: 50,
      currentPrice: 25,
      imgSrc: 'https://s3.amazonaws.com/img.onpicks.com/p-similar-3.jpg'
    },
    {
      brand: 'Shanti Bar',
      productName: 'Shanti Stainless Steel Flat Speed Bar Bottle Openet',
      rating: 2.3,
      reviewCount: 15,
      msrpDiscountPrice: 50,
      discountPercent: 50,
      currentPrice: 25,
      imgSrc: 'https://s3.amazonaws.com/img.onpicks.com/p-similar-4.jpg'
    },   {
      brand: 'Endangered Species Chocolate',
      productName: 'ONE Protein Bar, Birthday Cake, 2.12 oz. (12 Pack), Gluten-Free Protein Bar with High Protein (20g) and Low Sugar (1g), Guilt Free…',
      rating: 3.9,
      reviewCount: 99,
      msrpDiscountPrice: 30,
      discountPercent: 25,
      currentPrice: 10,
      imgSrc: 'https://s3.amazonaws.com/img.onpicks.com/p-similar-2.jpg'
    },
    {
      brand: 'Rxbar',
      productName: 'RXBAR Whole Food Protein Bar, Chocolate Sea Salt, 1.83 Ounce (Pack of 12)',
      rating: 1.5,
      reviewCount: 15,
      msrpDiscountPrice: 50,
      discountPercent: 50,
      currentPrice: 25,
      imgSrc: 'https://s3.amazonaws.com/img.onpicks.com/p-similar-3.jpg'
    },
    {
      brand: 'Shanti Bar',
      productName: 'Shanti Stainless Steel Flat Speed Bar Bottle Openet',
      rating: 2.3,
      reviewCount: 15,
      msrpDiscountPrice: 50,
      discountPercent: 50,
      currentPrice: 25,
      imgSrc: 'https://s3.amazonaws.com/img.onpicks.com/p-similar-4.jpg'
    },   {
      brand: 'Endangered Species Chocolate',
      productName: 'ONE Protein Bar, Birthday Cake, 2.12 oz. (12 Pack), Gluten-Free Protein Bar with High Protein (20g) and Low Sugar (1g), Guilt Free…',
      rating: 3.9,
      reviewCount: 99,
      msrpDiscountPrice: 30,
      discountPercent: 25,
      currentPrice: 10,
      imgSrc: 'https://s3.amazonaws.com/img.onpicks.com/p-similar-2.jpg'
    },
    {
      brand: 'Rxbar',
      productName: 'RXBAR Whole Food Protein Bar, Chocolate Sea Salt, 1.83 Ounce (Pack of 12)',
      rating: 1.5,
      reviewCount: 15,
      msrpDiscountPrice: 50,
      discountPercent: 50,
      currentPrice: 25,
      imgSrc: 'https://s3.amazonaws.com/img.onpicks.com/p-similar-3.jpg'
    },
    {
      brand: 'Shanti Bar',
      productName: 'Shanti Stainless Steel Flat Speed Bar Bottle Openet',
      rating: 2.3,
      reviewCount: 15,
      msrpDiscountPrice: 50,
      discountPercent: 50,
      currentPrice: 25,
      imgSrc: 'https://s3.amazonaws.com/img.onpicks.com/p-similar-4.jpg'
    },   {
      brand: 'Endangered Species Chocolate',
      productName: 'ONE Protein Bar, Birthday Cake, 2.12 oz. (12 Pack), Gluten-Free Protein Bar with High Protein (20g) and Low Sugar (1g), Guilt Free…',
      rating: 3.9,
      reviewCount: 99,
      msrpDiscountPrice: 30,
      discountPercent: 25,
      currentPrice: 10,
      imgSrc: 'https://s3.amazonaws.com/img.onpicks.com/p-similar-2.jpg'
    },
    {
      brand: 'Rxbar',
      productName: 'RXBAR Whole Food Protein Bar, Chocolate Sea Salt, 1.83 Ounce (Pack of 12)',
      rating: 1.5,
      reviewCount: 15,
      msrpDiscountPrice: 50,
      discountPercent: 50,
      currentPrice: 25,
      imgSrc: 'https://s3.amazonaws.com/img.onpicks.com/p-similar-3.jpg'
    },
    {
      brand: 'Shanti Bar',
      productName: 'Shanti Stainless Steel Flat Speed Bar Bottle Openet',
      rating: 2.3,
      reviewCount: 15,
      msrpDiscountPrice: 50,
      discountPercent: 50,
      currentPrice: 25,
      imgSrc: 'https://s3.amazonaws.com/img.onpicks.com/p-similar-4.jpg'
    },   {
      brand: 'Endangered Species Chocolate',
      productName: 'ONE Protein Bar, Birthday Cake, 2.12 oz. (12 Pack), Gluten-Free Protein Bar with High Protein (20g) and Low Sugar (1g), Guilt Free…',
      rating: 3.9,
      reviewCount: 99,
      msrpDiscountPrice: 30,
      discountPercent: 25,
      currentPrice: 10,
      imgSrc: 'https://s3.amazonaws.com/img.onpicks.com/p-similar-2.jpg'
    },
    {
      brand: 'Rxbar',
      productName: 'RXBAR Whole Food Protein Bar, Chocolate Sea Salt, 1.83 Ounce (Pack of 12)',
      rating: 1.5,
      reviewCount: 15,
      msrpDiscountPrice: 50,
      discountPercent: 50,
      currentPrice: 25,
      imgSrc: 'https://s3.amazonaws.com/img.onpicks.com/p-similar-3.jpg'
    },
    {
      brand: 'Shanti Bar',
      productName: 'Shanti Stainless Steel Flat Speed Bar Bottle Openet',
      rating: 2.3,
      reviewCount: 15,
      msrpDiscountPrice: 50,
      discountPercent: 50,
      currentPrice: 25,
      imgSrc: 'https://s3.amazonaws.com/img.onpicks.com/p-similar-4.jpg'
    }
  ];

  imageIndex = 0;

  animationEndEvent;

  itemListArray;

  constructor(private renderer: Renderer2) {

  }



  ngOnInit() {
  }

  ngOnDestroy() {

  }

  ngAfterViewInit() {
    this.itemListArray = this.itemList.toArray();

    const offsetLeft = 26.4 + 2.4;

    // this.itemList.forEach( (el, index) => {
    //
    //   this.animationEndEvent = fromEvent(el.nativeElement.parentNode, 'animationend');
    //
    //   if ( index >= 4 ) {
    //     this.renderer.setStyle(el.nativeElement, 'left', (offsetLeft * 4) + 'rem');
    //   } else {
    //     this.renderer.setStyle(el.nativeElement, 'left', (offsetLeft * index) + 'rem');
    //   }
    //
    // });


    let getStyle;
    let getEl;
    let getAnimationName;
    // this.animationEndEvent.subscribe(val => {
    //
    //   getEl = val.target;
    //   getStyle = getComputedStyle(( getEl ), null);
    //   getAnimationName = val.animationName;
    //
    //
    //   if( getAnimationName === 'mini-animate-left') {
    //     this.renderer.removeClass(getEl, getAnimationName);
    //     this.renderer.setStyle(
    //       getEl, 'left', (parseInt(getStyle.left, 10) - (parseInt(getStyle.width, 10))) + 'px');
    //
    //   } else {
    //     this.renderer.removeClass(getEl, getAnimationName);
    //     this.renderer.setStyle(
    //       getEl, 'left', (parseInt(getStyle.left, 10) + (parseInt(getStyle.width, 10))) + 'px');
    //   }
    //
    // });

    // this.animationEndEvent = this.animationEndEvent.pipe(map(val => val.target));
    // this.animationEndEvent.subscribe( val => {
    //
    //   console.log(val);
    //   const temp = getComputedStyle(( val ), null);
    //   this.renderer.removeClass(val, 'animate-left');
    //   this.renderer.setStyle(
    //     val, 'left', (parseInt(temp.left, 10) - (parseInt(temp.width, 10))) + 'px');
    //
    // });

  }

  nextButton() {


    this.imageIndex--;
    this.renderer.setStyle(this.container.nativeElement, 'transform', 'translateX(' + this.imageIndex * 288 + 'px)');
    console.log(this.imageIndex);
  }

  prevButton() {

    this.imageIndex++;
    this.renderer.setStyle(this.container.nativeElement, 'transform', 'translateX(' + this.imageIndex * 288 + 'px)');
    console.log(this.imageIndex);
  }
}
