import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Inject,
  Input,
  LOCALE_ID,
  OnDestroy,
  OnInit,
  Renderer2,
  ViewChild,
  ViewChildren
} from '@angular/core';
import {fromEvent} from 'rxjs';
import {map} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';
import {AppState} from '../../../../core/store/app.reducer';
import {Store} from '@ngrx/store';

@Component({
  selector: 'ui-mini-list',
  templateUrl: './mini-list.component.html',
  styleUrls: ['./mini-list.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class MiniListComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('insertTitle') insertTitle;
  @ViewChild('container') container;
  @Input('setTitle') setTitle;
  @Input('infoList') infoList;

  // TODO : 보이지 않는 부분에 대해서 img display : none 하는식으로, 메모리 최적화



  imageIndex = 0;
  pressedPrev = false;


  constructor(
    private renderer: Renderer2,
    @Inject(LOCALE_ID) public locale: string,
    @Inject(APP_BASE_HREF) public region: string,
  ) {

  }



  ngOnInit() {
    this.infoList = [
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
  }

  ngOnDestroy() {

  }

  ngAfterViewInit() {

    this.renderer.setProperty( this.insertTitle.nativeElement, 'innerHTML', this.setTitle);
  }

  nextButton() {
    this.pressedPrev = false;
    this.imageIndex++;
    this.renderer.setStyle(this.container.nativeElement, 'transform', 'translateX(' + (-this.imageIndex) * 288 + 'px)');

  }

  prevButton() {
    this.pressedPrev = true;
    this.imageIndex--;
    this.renderer.setStyle(this.container.nativeElement, 'transform', 'translateX(' + (-this.imageIndex) * 288 + 'px)');
  }

  addCart(amountType, index){
    // this.store.dispatch(new )
  };
}
