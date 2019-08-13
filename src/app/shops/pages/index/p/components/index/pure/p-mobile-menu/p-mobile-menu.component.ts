import {
  Component,
  ChangeDetectionStrategy, Input, HostListener
} from '@angular/core';
import {DisplayAlertMessage, UpdateGlobalKakaoPlusFriendForDetailPage, UpdateGlobalKakaoPlusFriendForNormal, UpdateGlobalKakaoPlusFriendForPurchase} from '../../../../../../../../core/store/ui/ui.actions';
import {select, Store} from '@ngrx/store';
import {TryAddOrCreateToCart} from '../../../../../../../../core/store/cart/cart.actions';

@Component({
  selector: 'p-mobile-menu',
  templateUrl: './p-mobile-menu.component.html',
  styleUrls: ['./p-mobile-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PMobileMenuComponent {
  @Input('data') data;
  @Input('isFB') isFB;
  @Input('locale') locale;
  @Input('currency') currency;
  @Input('cartStore') cartStore;
  @Input('alertMap') alertMap;
  @Input('locationMap') locationMap;
  @Input('numberOptionList') numberOptionList;
  @Input('discountPercent') discountPercent;

  previousYOffset = 0;
  isShowMobileMenu = true;
  isExpendMobileMenu = false;

  pUI$;
  pUI;

  keyListForSlug = [];
  keyMapForSlug = {};


  currentSelectOption = {
    amount : 1,
    slug : ''
  }

  constructor(
    private store: Store<any>,
  ) {
    this.pUI$ = this.store.pipe(
      select( state => state.p.ui)
    ).subscribe( xPUI => {
      this.pUI = xPUI;
      if ( this.pUI.isShowCommunicateBox === true ) {
        this.isShowMobileMenu = false;
      }
    });
  }

  expandMobileMenu() {
    this.isExpendMobileMenu = true;
    this.store.dispatch(new UpdateGlobalKakaoPlusFriendForPurchase());
  }

  revertMobileMenu() {
    this.isExpendMobileMenu = false;
    this.store.dispatch(new UpdateGlobalKakaoPlusFriendForDetailPage());
  }


  amountSelect(xValue ) {
    this.currentSelectOption.amount = xValue.value;
  }

  addToCart(xPackIndex, data) {
    let keyForSlug = '';
    this.keyListForSlug.forEach( (value, index) => {
      if ( (this.keyListForSlug.length - 1) === index ){
        keyForSlug += value;
      } else {
        keyForSlug += value + '_';
      }
    })

    let currentProductSlug = undefined;
    if ( data.attributes.length === 0 ) {
      currentProductSlug = data.slug;
    } else {
      currentProductSlug = this.keyMapForSlug[keyForSlug];
    }

    if ( currentProductSlug === undefined ) {
      this.store.dispatch(new DisplayAlertMessage(this.alertMap['select-option'][this.locale]));
    }

    this.store.dispatch(new TryAddOrCreateToCart({
      isPopUp : true,
      data: data,
      amount: this.currentSelectOption.amount,
      packIndex: xPackIndex,
      increaseOrCreate: data.slug in this.cartStore.cartList
    }));
  }
}
