import {Component, OnInit, Renderer2} from '@angular/core';

@Component({
  selector: 'onpicks-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartList = [
    {
      imgSrc : 'https://picsum.photos/112/112?image=180',
      title : '알엑스바',
      name : '알엑스바 리얼 푸드 프로틴 에너지바 믹스드 베리 52G / RxBar Real Food Protein Bars Mixed Berry 1.83OZ',
      price : '40,900원',
      amount : 0,
      deliveryWhere : '뉴저지',
      deliveryPrice : '9000원',
      deliveryDescription : '뉴저지 단독 배송 상품으로 개별 배송료가 발생합니다.'
    },
    {
      imgSrc : 'https://picsum.photos/112/112?image=180',
      title : '알엑스바',
      name : '알엑스바 리얼 푸드 프로틴 에너지바 믹스드 베리 52G / RxBar Real Food Protein Bars Mixed Berry 1.83OZ',
      price : '40,900원',
      amount : 10,
      deliveryWhere : '뉴저지',
      deliveryPrice : '9000원',
      deliveryDescription : '뉴저지 단독 배송 상품으로 개별 배송료가 발생합니다.'
    },
    {
      imgSrc : 'https://picsum.photos/112/112?image=180',
      title : '알엑스바',
      name : '알엑스바 리얼 푸드 프로틴 에너지바 믹스드 베리 52G / RxBar Real Food Protein Bars Mixed Berry 1.83OZ',
      price : '40,900원',
      amount : 10,
      deliveryWhere : '뉴저지',
      deliveryPrice : '9000원',
      deliveryDescription : '뉴저지 단독 배송 상품으로 개별 배송료가 발생합니다.'
    },
    {
      imgSrc : 'https://picsum.photos/112/112?image=180',
      title : '알엑스바',
      name : '알엑스바 리얼 푸드 프로틴 에너지바 믹스드 베리 52G / RxBar Real Food Protein Bars Mixed Berry 1.83OZ',
      price : '40,900원',
      amount : 10,
      deliveryWhere : '뉴저지',
      deliveryPrice : '9000원',
      deliveryDescription : '뉴저지 단독 배송 상품으로 개별 배송료가 발생합니다.'
    }
  ]

  constructor(
    private renderer: Renderer2
  ) { }

  ngOnInit(  ) {
    // this.cartList = this.utilService.getBuyList();
  }

  toggleWishList(item) {

    if ( item.style.display === 'block') {
      this.renderer.setStyle(item, 'display', 'none');
    } else {
      this.renderer.setStyle(item, 'display', 'block');
    }


  }

  // minusAmount(index) {
  //   if ( this.cartList[index].amount !== 1) {
  //     this.cartList[index].amount--;
  //   }
  // }

  //}

}
