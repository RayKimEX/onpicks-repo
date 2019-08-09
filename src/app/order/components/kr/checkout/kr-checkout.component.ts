
// Angular
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnDestroy,
  ViewChildren,
  ViewChild,
  ElementRef,
  Inject,
  Renderer2,
  ChangeDetectorRef,
  LOCALE_ID
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

// Global Constant
import {
  CURRENCY,
  DOMAIN_HOST,
  REGION_ID,
  RESPONSIVE_MAP
} from '../../../../core/global-constant/app.config';
import { DISPLAY_ALERT_MESSAGE_MAP } from '../../../../core/global-constant/app.locale';

// Miscell
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';
import { DisplayAlertMessage } from '../../../../core/store/ui/ui.actions';
import { OrderDataService } from '../../../../core/service/data-pages/order/order-data.service';

@Component({
  selector: 'onpicks-kr-checkout',
  templateUrl: './kr-checkout.component.html',
  styleUrls: ['./kr-checkout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class KrCheckoutComponent implements OnInit, OnDestroy {

  @ViewChildren('inputSearchBoxOuter') inputSearchBoxOuter;
  @ViewChildren('inputSearchBox') inputSearchBox;
  @ViewChild('inputSearchBox', {read: ElementRef}) inputSearchBoxEL;
  @ViewChild('inputOrderName', { read : ElementRef }) inputOrderNameRef;
  @ViewChild('inputOrderNumber', { read : ElementRef }) inputOrderNumberRef;
  @ViewChild('checkoutAdditionNumber', { read : ElementRef}) checkoutAdditionNumberRef;
  @ViewChild('addDeliveryView') addDeliveryView;

  readonly EMPTY_ORDER_NAME          = 0b00000000001;
  readonly EMPTY_ORDER_NUMBER        = 0b00000000010;
  readonly INVALID_ORDER_NUMBER      = 0b00000100000;
  readonly EMPTY_CUSTOMS_ID_NUMBER   = 0b00010000000;
  readonly INVALID_CUSTOMS_ID_NUMBER = 0b00100000000;
  readonly EMPTY_AGREEMENT_DIRECT_BUYING = 0b10000000000;

  deliveryOption = {
    title : {
      ko : '배송시 요청 사항 (선택사항)',
      en : '배송시 요청 사항 (선택사항) ( 영어 )',
    },
    list : [
      {
        title : {
          ko : '직접 받고 부재시에는 문 앞에 놔주세요',
          en : '직접 받고 부재시에는 문 앞에 놔주세요 ( 영어 )'
        },
        value : '직접 받고 부재시에는 문 앞에 놔주세요'
      },
      {
        title : {
          ko : '문 앞에 놔주세요',
          en : '문 앞에 놔주세요 ( 영어 )'
        },
        value : '문 앞에 놔주세요'
      },
      {
        title : {
          ko : '경비실에 맡겨주세요',
          en : '경비실에 맡겨주세요 ( 영어 )'
        },
        value : '경비실에 맡겨주세요'
      },
      {
        title : {
          ko : '배송전에 연락 주세요',
          en : '배송전에 연락 주세요 ( 영어 )'
        },
        value : '배송전에 연락 주세요'
      },
    ]};


  // MUST TODO : 이미지 안보인는건 src를 초기화 해서 memory낭비 적게 하기
  initialGroup: FormGroup;

  errorStatus = 0;
  isAgreementDirectBuyingInfo = false;
  checkoutStore$;

  userStore$;
  userStore;

  deliveryDataStore$;
  deliveryDataStore;

  searchFirst$;
  searchLast$;

  paymentScript = null;

  formData = {
    'buyer_name': '',
    'buyer_contact': '',
    'full_name': '',
    'street_address_1': '',
    'street_address_2': '',
    'city': '',
    'state': '',
    'country': '',
    'zip_code': '',
    'phone_number': '',
    'shipping_message': '',
    'customs_id_owner': '',
    'customs_id_number': '',
    'payment_method': 'card'
  };

  /*********checkout-mobile*******/
  isThirdBreakPoint = false;
  isShowMobilePriceInfo = true;

  constructor(
    @Inject(CURRENCY) public currency: BehaviorSubject<any>,
    @Inject(DOMAIN_HOST) private BASE_URL: string,
    @Inject(RESPONSIVE_MAP) public responsiveMap,
    @Inject(REGION_ID) public region: string,
    @Inject( LOCALE_ID ) public locale: string,
    @Inject( DISPLAY_ALERT_MESSAGE_MAP ) private alertMap,
    private orderDataService: OrderDataService,
    private renderer: Renderer2,
    private httpClient: HttpClient,
    private store: Store<any>,
    private router: Router,
    private cd: ChangeDetectorRef,
    private breakpointObserver:  BreakpointObserver,
  ) {

    this.checkoutStore$ = this.orderDataService.getCheckoutData().pipe(
      tap( v => console.log(v)),
    );

    this.deliveryDataStore$ =
      this.store.select(state => state.ui.deliveryAddress).subscribe(
        deliveryDataStore => {
          this.deliveryDataStore = deliveryDataStore;
        }
      )

    this.userStore$ = this.store.pipe( select( state => state.auth.user))
      .subscribe( v => {
        this.userStore = v;
        if ( v ===  null ) { return; }
      });
  }

  ngOnInit() {
    this.initialGroup = new FormGroup({
      dummy: new FormControl( null),
    });

    this.breakpointObserver
      .observe([this.responsiveMap['tb']])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.isThirdBreakPoint = false;
          this.cd.markForCheck();
        } else {
          this.isThirdBreakPoint = true;
          this.cd.markForCheck();
        }
      });
  }


  ngOnDestroy() {
    if ( this.userStore$ !== undefined ) {
      this.userStore$.unsubscribe();
    }

    if ( this.searchLast$ !== undefined ) {
      this.searchLast$.unsubscribe();
    }

    if ( this.searchFirst$ !== undefined ) {
      this.searchFirst$.unsubscribe();
    }

    if ( this.deliveryDataStore$ !== undefined ) {
      this.deliveryDataStore$.unsubscribe();
    }
  }

  changePaymentMethod(value, xId) {
    this.formData.payment_method = value;
    this.cd.markForCheck();
  }

  markForCheck(e) {
    this.cd.markForCheck();
  }

  payment(form, deliveryComponent) {
    this.errorStatus = 0;
    this.validate(deliveryComponent);

    if ( this.errorStatus === 0 ) {

      this.formData.buyer_name = this.inputOrderNameRef.nativeElement.children[0].value;
      this.formData.buyer_contact = this.inputOrderNumberRef.nativeElement.children[0].value;

      // 0인 경우가 배송지 default이므로,
      // full_name 수신자 성함
      // 서버에 저장된 배송지 정보가 없을 경우

      if ( this.deliveryDataStore.length === 0 ) {

        this.formData = {
          ...this.formData,
          ...this.setDeliveryInfo(deliveryComponent)
        };

      } else {
        this.formData.phone_number = this.deliveryDataStore[0].phone_number;
        this.formData.full_name = this.deliveryDataStore[0].full_name;
        this.formData.zip_code = this.deliveryDataStore[0].zip_code;
        this.formData.street_address_1 = this.deliveryDataStore[0].street_address_1;
        this.formData.street_address_2 = this.deliveryDataStore[0].street_address_2;

      }

      this.formData.customs_id_number = this.checkoutAdditionNumberRef.nativeElement.children[0].value;

      this.formData.city = '';
      this.formData.country = '';

      this.httpClient.post<any>( this.BASE_URL + '/api/orders/', this.formData )
        .subscribe( response => {

          // mobile 일경우
          if ( response.is_mobile ) {
            Object.keys(response.form_data).forEach(key => {
              const input = document.createElement('input');
              input.type = 'text';
              input.hidden = true;
              input.name = key;
              input.value = response.form_data[key];
              form.appendChild(input);
            });
            form.action = response.action_url;
            form.acceptCharset = 'euc-kr';
            form.submit();
          } else {
            // desktop 일경우
            if ( this.paymentScript === null ) {
              this.paymentScript = document.createElement('script');
              this.paymentScript.src = response.pay_script;
              this.paymentScript.async = true;
              this.paymentScript.onload = function() {
                // @ts-ignore
                INIStdPay.pay(form);
              };
              document.head.appendChild(this.paymentScript);

              Object.keys(response.form_data).forEach(key => {
                const input = document.createElement('input');
                input.type = 'text';
                input.hidden = true;
                input.name = key;
                input.value = response.form_data[key];
                form.appendChild(input);
              });
            } else {
              form.innerHTML = '';
              Object.keys(response.form_data).forEach(key => {
                const input = document.createElement('input');
                input.type = 'text';
                input.hidden = true;
                input.name = key;
                input.value = response.form_data[key];
                form.appendChild(input);
              });
              // @ts-ignore
              INIStdPay.pay(form);
            }
          }
        });
    }

  }

  setDeliveryInfo(deliveryComponent) {
    const temp = {
      'full_name': '',
      'zip_code': '',
      'street_address_1': '',
      'street_address_2': '',
      'city': '',
      'state': '',
      'phone_number': '',
      // default를 false로 주던 true로주던 값이 API에서 허용 안되도록 막힘
      'default': false
    };

    temp.full_name = deliveryComponent.inputRecipientNameRef.last.nativeElement.children[0].value;
    temp.street_address_1 = deliveryComponent.inputJusoRef.last.nativeElement.children[0].value;
    temp.street_address_2 = deliveryComponent.inputDetailJusoRef.last.nativeElement.children[0].value;
    temp.zip_code = deliveryComponent.inputZipnumberRef.last.nativeElement.children[0].value;
    temp.phone_number = deliveryComponent.inputRecipientNumberRef.last.nativeElement.children[0].value;
    return temp;
  }

  // Personal Custom Clearance Code, PCC Code, PCCC
  addCustomIdNumber() {
    this.orderDataService.addCustomIdNumber(this.userStore.id, { customs_id_number :  this.checkoutAdditionNumberRef.nativeElement.children[0].value })
      .subscribe( response => {
        this.store.dispatch(new DisplayAlertMessage(this.alertMap['changes-saved'][this.locale]));
      }, error => {
        this.store.dispatch(new DisplayAlertMessage(this.alertMap['unstable-network'][this.locale]));
    });
  }


  checkBitWise( data ) {
    return ((this.errorStatus & data) > 0);
  }
  validate(deliveryComponent) {
    this.errorStatus = 0;

    if ( this.inputOrderNameRef.nativeElement.children[0].value === '') {
      this.inputOrderNameRef.nativeElement.children[0].focus();
      this.errorStatus |= this.EMPTY_ORDER_NAME;

    }

    if ( this.inputOrderNumberRef.nativeElement.children[0].value === '') {
      if ( this.errorStatus === 0 ) {this.inputOrderNumberRef.nativeElement.children[0].focus();}
      this.errorStatus |= this.EMPTY_ORDER_NUMBER;
    } else {
      const patt = new RegExp('^(?:\\+?\\d{1,2} ?)?[ -]?\\d{2,3}[ -]?\\d{3,4}[ -]?\\d{4}$');
      if ( !patt.test(this.inputOrderNumberRef.nativeElement.children[0].value) ) {

        if ( this.errorStatus === 0 ) {this.inputOrderNumberRef.nativeElement.children[0].focus();}
        this.errorStatus |= this.INVALID_ORDER_NUMBER;
      }
    }

    if ( this.deliveryDataStore.length === 0) {
      this.errorStatus = deliveryComponent.validate(this.errorStatus);
    }

    if ( this.checkoutAdditionNumberRef.nativeElement.children[0].value === '') {
      if ( this.errorStatus === 0 ) {this.checkoutAdditionNumberRef.nativeElement.children[0].focus();}
      this.errorStatus |= this.EMPTY_CUSTOMS_ID_NUMBER;
    } else {
      const patt = new RegExp('^[pP][0-9]{12}$');
      if ( !(patt.test(this.checkoutAdditionNumberRef.nativeElement.children[0].value))) {
        if ( this.errorStatus === 0 ) {this.checkoutAdditionNumberRef.nativeElement.children[0].focus();}
        this.errorStatus |= this.INVALID_CUSTOMS_ID_NUMBER;
      }
    }

    if ( this.isAgreementDirectBuyingInfo === false ) {
      this.errorStatus |= this.EMPTY_AGREEMENT_DIRECT_BUYING;
    }

    this.cd.markForCheck();
  }

  setShippingMessage(xShippingMessage) {
    this.formData.shipping_message = xShippingMessage.value;
  }
}
