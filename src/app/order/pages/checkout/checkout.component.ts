import {
  AfterViewInit,
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  ElementRef,
  Inject,
  OnDestroy,
  OnInit,
  Renderer2,
  ViewChild,
  ViewChildren
} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {BehaviorSubject, fromEvent, of, pipe} from 'rxjs';
import {catchError, debounceTime, distinctUntilChanged, flatMap, map, tap} from 'rxjs/operators';
import {select, Store} from '@ngrx/store';
import {Router} from '@angular/router';
import {CartToCheckoutService} from '../../share/cart-to-checkout.service';
import {CURRENCY, DOMAIN_HOST, RESPONSIVE_MAP} from '../../../app.config';
import {FormControl, FormGroup} from '@angular/forms';
import {OrderDataService} from '../../../core/service/data-pages/order/order-data.service';
import {BreakpointObserver, BreakpointState} from '../../../../../node_modules/@angular/cdk/layout';

@Component({
  selector: 'onpicks-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})
export class CheckoutComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChildren('inputSearchBoxOuter') inputSearchBoxOuter;
  @ViewChild('inputSearchBox', {read: ElementRef}) inputSearchBoxEL;
  @ViewChildren('inputSearchBox') inputSearchBox;

  ////
  @ViewChild('inputOrderName', { read : ElementRef }) inputOrderName;
  @ViewChild('inputOrderNumber', { read : ElementRef }) inputOrderNumber;
  @ViewChildren('inputRecipientName', { read : ElementRef }) inputRecipientName;
  @ViewChildren('inputRecipientNumber', { read : ElementRef }) inputRecipientNumber;

  @ViewChildren('inputZipnumber', { read : ElementRef }) inputZipnumber;
  @ViewChildren('inputJuso', { read : ElementRef }) inputJuso;
  @ViewChildren('inputDetailJuso', { read : ElementRef }) inputDetailJuso;

  @ViewChild('checkoutAdditionNumber', { read : ElementRef}) checkoutAdditionNumber;
  @ViewChild('addDeliveryView') addDeliveryView;


  isShowDeliveryModal = false;

  deliveryOption = {
    title : '배송시 요청 사항 (선택사항)',
    list : [
      {
        title : '택배기사 아저씨한테 부탁해주세요',
        value : '택배기사 아저씨한테 부탁해주세요'
      },
      {
        title : '문 앞에 냅둬주세요!',
        value : '문 앞에 냅둬주세요!'
      }
  ]};

  readonly
  EMPTY_ORDER_NAME          = 0b00000000001;
  readonly EMPTY_ORDER_NUMBER        = 0b00000000010;
  readonly INVALID_ORDER_NUMBER      = 0b00000100000;

  readonly EMPTY_RECIPIENT_NAME      = 0b00000000100;
  readonly EMPTY_RECIPIENT_NUMBER    = 0b00000001000;
  readonly INVALID_RECIPIENT_NUMBER  = 0b00001000000;
  readonly EMPTY_DELIVERY_ADDRESS    = 0b00000010000;

  readonly EMPTY_CUSTOMS_ID_NUMBER   = 0b00010000000;
  readonly INVALID_CUSTOMS_ID_NUMBER = 0b00100000000;

  readonly EMPTY_AGREEMENT_DIRECT_BUYING = 0b10000000000;


  // MUST TODO : 이미지 안보인는건 src를 초기화 해서 memory낭비 적게 하기

  jusoList;
  initialGroup: FormGroup;

  //
  errorStatus = 0;
  isAgreementDirectBuyingInfo = false;
  isShowSearchBox = false;

  // popup
  isShowDeliveryView = true;
  updateDeliveryIndex = 0;

  // 0 : init
  // 1 : result
  // 2 : not searched
  searchState = 0;

  //
  checkoutStore$;
  userStore$;
  userStore;

  deliveryData$;
  deliveryData;

  searchInputFirstEvent$;
  searchInputLastEvent$;

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
    'payment_method': 'card',
    'is_mobile' : true,
  };

  /*********checkout-mobile*******/
  isThirdBreakPoint = false;
  isShowMobilePriceInfo = true;
  isShowMobileOrderInfo = false;
  isShowMobileDeliveryInfo = false;
  isShowMobileAdditionInfo = false;

  constructor(
    @Inject(CURRENCY) public currency: BehaviorSubject<any>,
    @Inject(DOMAIN_HOST) private BASE_URL: string,
    private orderDataService: OrderDataService,
    private renderer: Renderer2,
    private httpClient: HttpClient,
    private store: Store<any>,
    private router: Router,
    private cd: ChangeDetectorRef,
    @Inject(RESPONSIVE_MAP) public categoryMap,
    private breakpointObserver:  BreakpointObserver,
  ) {

    this.checkoutStore$ = this.orderDataService.getCheckoutData().pipe(
      tap( v => console.log(v)),
    );

    this.userStore$ = this.store.pipe( select( state => state.auth.user))
      .subscribe( v => {
        this.userStore = v;
        console.log(v);
        if ( v ===  null ) { return; };
        console.log(v);
        // userStore정보가 usbscribe되면, 그때 다시 배송지 정보를 갖고옴
        this.deliveryData$ = this.orderDataService.getDeliveryData(this.userStore.id)
          .pipe(
            map( value => value['results'] ),
            tap( results => {
              console.log(results);
              this.deliveryData = results;
              if ( results.length > 0 ) {
                this.isShowDeliveryView = false;
              }


            }),
            catchError( error => {
              this.deliveryData = [];
              return of();
            })
          );

        console.log(this.deliveryData$);
      });
  }


  ngAfterViewInit() {
    console.log(this.inputSearchBox);
    this.searchInputFirstEvent$ = fromEvent(this.inputSearchBox.first.searchInputBox.nativeElement, 'input');
    this.searchInputLastEvent$ = fromEvent(this.inputSearchBox.last.searchInputBox.nativeElement, 'input');

    this.searchFirst$ = this.searchInputFirstEvent$.pipe(
      debounceTime(80),
      distinctUntilChanged(),
      map( (val: KeyboardEvent) => val.target),
      map( (val: HTMLInputElement) => val.value),
      map( val => new HttpParams()
        .set('currentPage', '0')
        .set('countPerPage', '10')
        // onpicks-search-box에서 발생하는 이벤트는, InputEvent가 아니고 그냥 Event이기 때문에,
        // 같은 값이 아니므로 아래와 같이 3항 연산자를 씀
        // @ts-ignore
        .set('keyword', val === undefined ?  '' : val )
        .set('confmKey', 'U01TX0FVVEgyMDE4MTAwNTE1NDIxNTEwODIxNDQ=')
        .set('resultType', 'json')),
      // json으로 바꿔주기 위해 flatMap 사용
      flatMap( (val: HttpParams) =>
        this.httpClient.get<any>(location.protocol + '//www.juso.go.kr/addrlink/addrLinkApi.do', { params: val, responseType : 'json' }, )
      ),
      map( val => val['results'].juso ),
    ).subscribe(val => {
      if ( val !== null ) {

        if ( val.length === 0 ) {
          this.searchState = 2;
        } else {
          this.searchState = 1;
        }
      } else {
        this.searchState = 0;
      }

      this.jusoList = val;
      this.cd.markForCheck();
    });

    this.searchLast$ = this.searchInputLastEvent$.pipe(
      debounceTime(80),
      distinctUntilChanged(),
      map( (val: KeyboardEvent) => val.target),
      map( (val: HTMLInputElement) => val.value),
      map( val => new HttpParams()
        .set('currentPage', '0')
        .set('countPerPage', '10')
        // onpicks-search-box에서 발생하는 이벤트는, InputEvent가 아니고 그냥 Event이기 때문에,
        // 같은 값이 아니므로 아래와 같이 3항 연산자를 씀
        // @ts-ignore
        .set('keyword', val === undefined ?  '' : val )
        .set('confmKey', 'U01TX0FVVEgyMDE4MTAwNTE1NDIxNTEwODIxNDQ=')
        .set('resultType', 'json')),
      // json으로 바꿔주기 위해 flatMap 사용
      flatMap( (val: HttpParams) =>
        this.httpClient.get<any>(location.protocol + '//www.juso.go.kr/addrlink/addrLinkApi.do', { params: val, responseType : 'json' }, )
      ),
      map( val => val['results'].juso ),
    ).subscribe(val => {
      if ( val !== null ) {

        if ( val.length === 0 ) {
          this.searchState = 2;
        } else {
          this.searchState = 1;
        }
      } else {
        this.searchState = 0;
      }

      this.jusoList = val;
      this.cd.markForCheck();
    });
  }

  ngOnInit() {
    this.initialGroup = new FormGroup({
      dummy: new FormControl( null),
    });

    this.breakpointObserver
      .observe([this.categoryMap['tb']])
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

  }

  changePaymentMethod(value, xId) {
    this.formData.payment_method = value;
  }


  payment(form) {
    this.errorStatus = 0;
    this.validate();

    if ( this.errorStatus === 0 ) {

      this.formData.buyer_name = this.inputOrderName.nativeElement.children[0].value;
      this.formData.buyer_contact = this.inputOrderNumber.nativeElement.children[0].value;
      // 0인 경우가 배송지 default이므로,
      // full_name 수신자 성함
      // 서버에 저장된 배송지 정보가 없을 경우
      if ( this.deliveryData.length === 0 ) {
        // inputRecipientName
        // inputRecipientNumber
        // inputZipnumber
        // inputJuso
        // inputDetailJuso
        this.formData = {
          ...this.formData,
          ...this.setDeliveryInfo()
        };

        console.log(this.formData);

      } else {
        this.formData.phone_number = this.deliveryData[0].phone_number;
        this.formData.full_name = this.deliveryData[0].full_name;
        this.formData.zip_code = this.deliveryData[0].zip_code;
        this.formData.street_address_1 = this.deliveryData[0].street_address_1;
        this.formData.street_address_2 = this.deliveryData[0].street_address_2;
      }

      this.formData.customs_id_number = this.checkoutAdditionNumber.nativeElement.children[0].value;

      this.formData.city = 'helloCity';
      this.formData.country = 'helloCountry';

      this.httpClient.post<any>( this.BASE_URL + '/api/orders/', this.formData )
        .subscribe( response => {

          if ( response.is_mobile ) {
            console.log('hello');
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

  showSearchBox( xParam ) {
    // 내용이 있으면 show안되게

    this.jusoList = [];
    this.searchState = 0;
    if( this.isShowDeliveryModal === true ){
      if ( this.isShowSearchBox === false ) {
        if ( xParam === 'input' && this.inputJuso.first.nativeElement.children[0].value !== ''  ) {
          return;
        }
        this.isShowSearchBox = true;

        this.renderer.setStyle( this.inputSearchBoxOuter.first.nativeElement, 'display', 'block' );

        this.inputSearchBox.first.inputTag.nativeElement.focus();
      } else {
        if ( xParam === 'input' ) {
          return;
        }
        this.isShowSearchBox = false;
        this.renderer.setStyle( this.inputSearchBoxOuter.first.nativeElement, 'display', 'none' );
      }
    } else {
      if ( this.isShowSearchBox === false ) {
        if ( xParam === 'input' && this.inputJuso.last.nativeElement.children[0].value !== ''  ) {
          return;
        }
        this.isShowSearchBox = true;

        this.renderer.setStyle( this.inputSearchBoxOuter.last.nativeElement, 'display', 'block' );
        this.inputSearchBox.last.inputTag.nativeElement.focus();
      } else {
        if ( xParam === 'input' ) {
          return;
        }
        this.isShowSearchBox = false;
        this.renderer.setStyle( this.inputSearchBoxOuter.last.nativeElement, 'display', 'none' );
      }
    }
  }

  setDeliveryInfo() {
    const temp = {
      'full_name': '',
      'zip_code': '',
      'street_address_1': '',
      'street_address_2': '',
      'city': 'hellocity',
      'state': '',
      'phone_number': '',
      // default를 false로 주던 true로주던 값이 API에서 허용 안되도록 막힘
      'default': false
    }

    temp.full_name = this.inputRecipientName.last.nativeElement.children[0].value;
    temp.street_address_1 = this.inputJuso.last.nativeElement.children[0].value;
    temp.street_address_2 = this.inputDetailJuso.last.nativeElement.children[0].value;
    temp.zip_code = this.inputZipnumber.last.nativeElement.children[0].value;
    temp.phone_number = this.inputRecipientNumber.last.nativeElement.children[0].value;
    return temp;
  }

  removeDeliveryInfo(index) {
    if ( index === 0  ) { alert( '기본 배송지는 삭제할 수 없습니다. '); return;}
    alert()
    this.orderDataService.deleteDeliveryData( this.userStore.id, this.deliveryData[index].id )
      .subscribe( v => {
        this.deliveryData.splice(index , 1);
        // this.deliveryData = this.deliveryData.slice(1, index);
        this.deliveryData$ = of(this.deliveryData);
        this.cd.markForCheck();
      });
  }

  exitModifyDeliveryModal() {
    this.isShowDeliveryModal = false;
    this.isShowSearchBox = false;

    // this.renderer.setProperty( this.inputRecipientName.nativeElement.children[0], 'value', '');
    // this.renderer.setProperty( this.inputJuso.nativeElement.children[0], 'value', '');
    // this.renderer.setProperty( this.inputDetailJuso.nativeElement.children[0], 'value', '');
    // this.renderer.setProperty( this.inputZipnumber.nativeElement.children[0], 'value', '');
    // this.renderer.setProperty( this.inputRecipientNumber.nativeElement.children[0], 'value', '');
  }

  showModifyDeliveryModal(index) {
    this.isShowDeliveryModal = true;
    this.isShowSearchBox = false;
    this.renderer.setStyle( this.inputSearchBoxOuter.first.nativeElement, 'display', 'none' );
    this.renderer.setStyle( this.inputSearchBoxOuter.last.nativeElement, 'display', 'none' );
    this.updateDeliveryIndex = index;

    this.renderer.setProperty( this.inputRecipientName.first.nativeElement.children[0], 'value', this.deliveryData[this.updateDeliveryIndex].full_name);
    this.renderer.setProperty( this.inputJuso.first.nativeElement.children[0], 'value', this.deliveryData[this.updateDeliveryIndex].street_address_1);
    this.renderer.setProperty( this.inputDetailJuso.first.nativeElement.children[0], 'value', this.deliveryData[this.updateDeliveryIndex].street_address_2);
    this.renderer.setProperty( this.inputZipnumber.first.nativeElement.children[0], 'value', this.deliveryData[this.updateDeliveryIndex].zip_code);
    this.renderer.setProperty( this.inputRecipientNumber.first.nativeElement.children[0], 'value', this.deliveryData[this.updateDeliveryIndex].phone_number);

    this.cd.markForCheck();
  }

  updateDeliveryInfo() {
    const temp = {
      'id': this.deliveryData[this.updateDeliveryIndex].id,
      'full_name': '',
      'zip_code': '',
      'street_address_1': '',
      'street_address_2': '',
      'city': 'hellocity',
      'state': '',
      'phone_number': '',
      // default를 false로 주던 true로주던 값이 API에서 허용 안되도록 막힘
      'default': this.deliveryData[this.updateDeliveryIndex].default,
    }

    temp.full_name = this.inputRecipientName.first.nativeElement.children[0].value;
    temp.street_address_1 = this.inputJuso.first.nativeElement.children[0].value;
    temp.street_address_2 = this.inputDetailJuso.first.nativeElement.children[0].value;
    temp.zip_code = this.inputZipnumber.first.nativeElement.children[0].value;
    temp.phone_number = this.inputRecipientNumber.first.nativeElement.children[0].value;
    this.deliveryData[this.updateDeliveryIndex] = temp;
    this.orderDataService.updateDeliveryData(
      this.userStore.id,
      this.deliveryData[this.updateDeliveryIndex].id,
      temp
    ).subscribe( v => {


      this.exitModifyDeliveryModal();
      this.cd.markForCheck();
    }, error => {

    });
  }

  addDeliveryInfo() {

    this.validateDeliveryInfo();

    if ( this.errorStatus === 0 ) {

      const JSON_deliveryInfo = this.setDeliveryInfo();

      this.orderDataService.addDeliveryData(this.userStore.id, JSON_deliveryInfo).subscribe( v => {

        this.deliveryData.push(v);
        this.deliveryData$ = of(this.deliveryData);
        this.isShowDeliveryView = false;
        this.cd.markForCheck();
      });
    }
  }




  updateDeliveryDataToDefault( index ) {
    this.orderDataService.updateDeliveryDataToDefault(this.userStore.id, this.deliveryData[index].id).subscribe(
      v => {

        const temp = [];
        this.deliveryData.forEach( (value, forEachIndex) => {

          if(forEachIndex === index) {
            const valueTemp = {
              ...value,
              default : true,
            }
            temp.unshift(valueTemp);
          } else {
            const valueTemp = {
              ...value,
              default : false,
            }
            temp.push(valueTemp);
          }
        })

        this.deliveryData = temp;
        this.deliveryData$ = of(temp);

        this.cd.markForCheck();
      }
    );
  }

  validateDeliveryInfo(){

    this.errorStatus = 0;


    if ( this.inputRecipientName.last.nativeElement.children[0].value === '') {
      if ( this.errorStatus === 0 ) {this.inputRecipientName.last.nativeElement.children[0].focus();}
      this.errorStatus |= this.EMPTY_RECIPIENT_NAME;
    }

    if ( this.inputRecipientNumber.last.nativeElement.children[0].value === '') {
      if ( this.errorStatus === 0 ) {this.inputRecipientNumber.last.nativeElement.children[0].focus();}
      this.errorStatus |= this.EMPTY_RECIPIENT_NUMBER;
    } else {
      const patt = new RegExp('[a-zA-Z]');
      if ( patt.test(this.inputRecipientNumber.last.nativeElement.children[0].value) ) {
        if ( this.errorStatus === 0 ) {this.inputRecipientNumber.last.nativeElement.children[0].focus();}
        this.errorStatus |= this.INVALID_RECIPIENT_NUMBER;
      }
    }

    if ( this.inputZipnumber.last.nativeElement.children[0].value === ''
      || this.inputJuso.last.nativeElement.children[0].value === ''
    ) {
      if ( this.errorStatus === 0 ) {this.inputZipnumber.last.nativeElement.children[0].focus();}
      this.errorStatus |= this.EMPTY_DELIVERY_ADDRESS;
    }
  }

  getCurrentText(event) {
    if( this.isShowDeliveryModal === true ) {
      this.renderer.setProperty(this.inputJuso.first.nativeElement.children[0], 'value', event.target.innerText);
      this.renderer.setProperty(this.inputZipnumber.first.nativeElement.children[0], 'value', event.target.getAttribute('data-zipnumber'));
      this.isShowSearchBox = false;
      this.renderer.setStyle(this.inputSearchBoxOuter.first.nativeElement, 'display', 'none');
    } else {
      this.renderer.setProperty(this.inputJuso.last.nativeElement.children[0], 'value', event.target.innerText);
      this.renderer.setProperty(this.inputZipnumber.last.nativeElement.children[0], 'value', event.target.getAttribute('data-zipnumber'));
      this.isShowSearchBox = false;
      this.renderer.setStyle( this.inputSearchBoxOuter.last.nativeElement, 'display', 'none' );
    }
  }

  checkBitWise( data ) {
    return ((this.errorStatus & data) > 0);
  }



  validate() {

    if ( this.inputOrderName.nativeElement.children[0].value === '') {
      this.inputOrderName.nativeElement.children[0].focus();
      this.errorStatus |= this.EMPTY_ORDER_NAME;

    }

    if ( this.inputOrderNumber.nativeElement.children[0].value === '') {
      if ( this.errorStatus === 0 ) {this.inputOrderNumber.nativeElement.children[0].focus();}
      this.errorStatus |= this.EMPTY_ORDER_NUMBER;
    } else {
      const patt = new RegExp('[a-zA-Z]');
      if ( patt.test(this.inputOrderNumber.nativeElement.children[0].value) ) {

        if ( this.errorStatus === 0 ) {this.inputOrderNumber.nativeElement.children[0].focus();}
        this.errorStatus |= this.INVALID_RECIPIENT_NUMBER;
      }
    }

    if ( this.deliveryData.length === 0 ) {
      if ( this.inputRecipientName.last.nativeElement.children[0].value === '') {
        if ( this.errorStatus === 0 ) {this.inputRecipientName.last.nativeElement.children[0].focus();}
        this.errorStatus |= this.EMPTY_RECIPIENT_NAME;
      }

      if ( this.inputRecipientNumber.last.nativeElement.children[0].value === '') {
        if ( this.errorStatus === 0 ) {this.inputRecipientNumber.last.nativeElement.children[0].focus();}
        this.errorStatus |= this.EMPTY_RECIPIENT_NUMBER;
      } else {
        const patt = new RegExp('[a-zA-Z]');
        if ( patt.test(this.inputRecipientNumber.last.nativeElement.children[0].value) ) {
          if ( this.errorStatus === 0 ) {this.inputRecipientNumber.last.nativeElement.children[0].focus();}
          this.errorStatus |= this.INVALID_RECIPIENT_NUMBER;
        }
      }

      if ( this.inputZipnumber.last.nativeElement.children[0].value === ''
        || this.inputJuso.last.nativeElement.children[0].value === ''
      ) {

        if ( this.errorStatus === 0 ) {this.inputZipnumber.last.nativeElement.children[0].focus();}
        this.errorStatus |= this.EMPTY_DELIVERY_ADDRESS;
      }
    }



    if ( this.checkoutAdditionNumber.nativeElement.children[0].value === '') {
      if ( this.errorStatus === 0 ) {this.checkoutAdditionNumber.nativeElement.children[0].focus();}
      this.errorStatus |= this.EMPTY_CUSTOMS_ID_NUMBER;
    } else {
      const patt = new RegExp('^P[0-9]{12}$');
      if ( !(patt.test(this.checkoutAdditionNumber.nativeElement.children[0].value))) {
        if ( this.errorStatus === 0 ) {this.checkoutAdditionNumber.nativeElement.children[0].focus();}
        this.errorStatus |= this.INVALID_CUSTOMS_ID_NUMBER;
      }
    }

    if ( this.isAgreementDirectBuyingInfo === false ) {
      this.errorStatus |= this.EMPTY_AGREEMENT_DIRECT_BUYING;
    }
  }


  setShippingMessage(xShippingMessage) {
    this.formData.shipping_message = xShippingMessage.value;
  }

}
