import {
  AfterViewInit,
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  ElementRef,
  Inject,
  OnDestroy,
  OnInit,
  Renderer2,
  ViewChild
} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {fromEvent, pipe} from 'rxjs';
import {debounceTime, distinctUntilChanged, flatMap, map, tap} from 'rxjs/operators';
import {select, Store} from '@ngrx/store';
import {Router} from '@angular/router';
import {CartToCheckoutService} from '../../share/cart-to-checkout.service';
import {DOMAIN_HOST} from '../../../app.config';

@Component({
  selector: 'onpicks-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})
export class CheckoutComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('inputSearchBoxOuter') inputSearchBoxOuter;
  @ViewChild('inputSearchBox', {read: ElementRef}) inputSearchBoxEL;
  @ViewChild('inputSearchBox') inputSearchBox;


  ////
  @ViewChild('inputOrderName', { read : ElementRef }) inputOrderName;
  @ViewChild('inputOrderNumber', { read : ElementRef }) inputOrderNumber;
  @ViewChild('inputRecipientName', { read : ElementRef }) inputRecipientName;
  @ViewChild('inputRecipientNumber', { read : ElementRef }) inputRecipientNumber;

  @ViewChild('inputZipnumber', { read : ElementRef }) inputZipnumber;
  @ViewChild('inputJuso', { read : ElementRef }) inputJuso;
  @ViewChild('inputDetailJuso', { read : ElementRef }) inputDetailJuso;
  @ViewChild('selectDeliveryRequirement') selectDeliveryRequirement;

  @ViewChild('checkoutAdditionNumber', { read : ElementRef}) checkoutAdditionNumber;


  deliveryOption = {
    list : [
      {
        title : '배송시 요청 사항 (선택사항)'
      },
      {
        title : '택배기사 아저씨한테 부탁해주세요',
        value : 0
      },
      {
        title : '문 앞에 냅둬주세요!',
        value : 1
      }
  ]};

  readonly EMPTY_ORDER_NAME          = 0b00000000001;
  readonly EMPTY_ORDER_NUMBER        = 0b00000000010;
  readonly INVALID_ORDER_NUMBER      = 0b00000100000;


  readonly EMPTY_RECIPIENT_NAME      = 0b00000000100;
  readonly EMPTY_RECIPIENT_NUMBER    = 0b00000001000;
  readonly INVALID_RECIPIENT_NUMBER  = 0b00001000000;
  readonly EMPTY_DELIVERY_ADDRESS    = 0b00000010000;


  readonly EMPTY_CUSTOMS_ID_NUMBER   = 0b00010000000;
  readonly INVALID_CUSTOMS_ID_NUMBER = 0b00100000000;

  readonly EMPTY_PAYMENT_METHOD      = 0b01000000000;

  // readonly INVALID_COUPON_NUMBER = 0b00000001;
  // readonly EMPTY_CUSTOMS_ID_NUMBER = 0b01000000;
  // readonly INVALID_COUPON_NUMBER = 0b00000001;


  // MUST TODO : 이미지 안보인는건 src를 초기화 해서 memory낭비 적게 하기

  //
  errorStatus = 0;
  checkG9DeliveryInfo = false;
  isShowSearchBox = false;
  params: HttpParams;
  jusoList;

  // 0 : init
  // 1 : result
  // 2 : not searched
  searchState = 0;


  //
  search$;
  checkoutStore$;


  ///
  totalProductPrice = 0;

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
    'payment_method': null
  };

  constructor(
    @Inject(DOMAIN_HOST) private BASE_URL: string,
    private renderer: Renderer2,
    private httpClient: HttpClient,
    private store: Store<any>,
    private router: Router,
    private cd: ChangeDetectorRef
  ) {
    // this.cartStore$ = this.store.pipe(
    //   select( state => state.cart)
    // );
    this.checkoutStore$ =
      this.httpClient.get<{}>( this.BASE_URL + '/api/cart/checkout/').pipe(
        tap( v => {
          console.log(v);
          v['items'].forEach( item => {
            console.log(item.sale_price);
            this.totalProductPrice += item.sale_price * item.quantity;
          });
        })
      );
  }

  ngOnInit() {
  }

  showSearchBox( xParam ) {
    // 내용이 있으면 show안되게
    if ( this.inputJuso.nativeElement.children[0].value !== '' ) { return; }
    if ( this.isShowSearchBox === false ) {
      this.isShowSearchBox = true;
      this.renderer.setStyle( this.inputSearchBoxOuter.nativeElement, 'display', 'block' );
    } else {
      if ( xParam === 'input' ) { return; }
      this.isShowSearchBox = false;
      this.renderer.setStyle( this.inputSearchBoxOuter.nativeElement, 'display', 'none' );
    }
  }

  ngOnDestroy() {
    this.search$.unsubscribe();
  }

  checkBox(value, xId) {
    this.formData.payment_method = value;
  }

  payment() {

    this.errorStatus = 0;

    // readonly EMPTY_ORDER_NAME          = 0b0000000001;
    // readonly EMPTY_ORDER_NUMBER        = 0b0000000010;
    // readonly INVALID_ORDER_NUMBER      = 0b0000100000;
    //
    //
    // readonly EMPTY_RECIPIENT_NAME      = 0b0000000100;
    // readonly EMPTY_RECIPIENT_NUMBER    = 0b0000001000;
    // readonly INVALID_RECIPIENT_NUMBER  = 0b0001000000;
    // readonly EMPTY_DELIVERY_ADDRESS    = 0b0000010000;
    //
    //
    // readonly EMPTY_CUSTOMS_ID_NUMBER   = 0b0010000000;
    // readonly INVALID_CUSTOMS_ID_NUMBER = 0b0100000000;





    // formData = {
    //   'buyer_name' : '',
    //   'buyer_contact' : '',
    //   'full_name' : '',
    //   'street_address_1' : '',
    //   'street_address_2' : '',
    //   'city' : '',
    //   'state' : '',
    //   'country' : '',
    //   'zip_code' : '',
    //   'phone_number' : '',
    //   'shipping_message' : '',
    //   'customs_id_owner' : '',
    //   'customs_id_number' : '',
    //   'payment_method' : null;
    // }

    this.validate();


    if ( this.errorStatus === 0 ) {
      console.log('hello');
      this.formData.buyer_name = this.inputOrderName.nativeElement.children[0].value;
      this.formData.buyer_contact = this.inputOrderNumber.nativeElement.children[0].value;
      this.formData.full_name = this.inputRecipientName.nativeElement.children[0].value;
      this.formData.street_address_1 = this.inputJuso.nativeElement.children[0].value;
      this.formData.street_address_2 = this.inputOrderName.nativeElement.children[0].value;
      this.formData.zip_code = this.inputZipnumber.nativeElement.children[0].value;
      this.formData.phone_number = this.inputOrderNumber.nativeElement.children[0].value;
      this.formData.shipping_message = this.selectDeliveryRequirement.value !== undefined ?  this.selectDeliveryRequirement.title : '';
      this.formData.customs_id_number = this.checkoutAdditionNumber.nativeElement.children[0].value;


      this.formData.city = 'helloCity';
      this.formData.country = 'helloCountry';
      console.log('sending');
      this.httpClient.post<any>( this.BASE_URL + '/api/orders/', this.formData )
        .subscribe( response => {
          const {pay_script, form_data} = response;
          const script = document.createElement('script');
          script.src = response.pay_script;
          script.async = true;
          script.onload = function() {
            console.log('Script loaded');
            // @ts-ignore
            INIStdPay.pay(form);
          }
          document.head.appendChild(script);

          console.log(form)

          Object.keys(form_data).forEach(key => {
            const input = document.createElement('input');
            input.type = 'text';
            input.name = key;
            input.value = form_data[key];
            input.hidden = true;

            form.appendChild(input);
          });
          console.log('Form created.');
        });
    }


    console.log(this.checkG9DeliveryInfo);
    console.log(this.selectDeliveryRequirement);
    // this.formData.buyer_name = this.inputOrderName
    // this.httpClient.post<any>( this.BASE_URL + '/api/orders/', this.formData );
  }

  checkBitWise( data ) {
    return ((this.errorStatus & data) > 0);
  }

  ngAfterViewInit() {

    const event$ = fromEvent(this.inputSearchBox.searchInputBox.nativeElement, 'input');

    // TODO : 20정도가 딱 적당하게 바로바로 반응함.
    this.search$ = event$.pipe(
      debounceTime(80),
      distinctUntilChanged(), ]
      map( (val: KeyboardEvent) => val.target),
      map( (val: HTMLInputElement) => val.value),
      map( val => new HttpParams()
        .set('currentPage', '0')
        .set('countPerPage', '20')
        // onpicks-search-box에서 발생하는 이벤트는, InputEvent가 아니고 그냥 Event이기 때문에,
        // 같은 값이 아니므로 아래와 같이 3항 연산자를 씀
        .set('keyword', val === undefined ?  '' : val )
        .set('confmKey', 'U01TX0FVVEgyMDE4MTAwNTE1NDIxNTEwODIxNDQ=')
        .set('resultType', 'json')),
      // json으로 바꿔주기 위해 flatMap 사용
      flatMap( (val: HttpParams) =>
        this.httpClient.get<any>('http://www.juso.go.kr/addrlink/addrLinkApi.do', { params: val, responseType : 'json' }, )
      ),
      map( val => val.results.juso ),
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
    });
  }

  getCurrentText(event) {
    console.log(this.inputJuso);
    this.renderer.setProperty(this.inputJuso.nativeElement.children[0], 'value', event.target.innerText);
    this.renderer.setProperty(this.inputZipnumber.nativeElement.children[0], 'value', event.target.getAttribute('data-zipnumber'));
    this.isShowSearchBox = false;
    this.renderer.setStyle( this.inputSearchBoxOuter.nativeElement, 'display', 'none' );
  }


  validate() {
    if ( this.inputOrderName.nativeElement.children[0].value === '') {
      this.inputOrderName.nativeElement.children[0].focus();
      this.errorStatus = this.EMPTY_ORDER_NAME;

    }

    if ( this.inputOrderNumber.nativeElement.children[0].value === '') {

      if ( this.errorStatus === 0 ) {this.inputOrderNumber.nativeElement.children[0].focus();}
      this.errorStatus += this.EMPTY_ORDER_NUMBER;
    } else {
      const patt = new RegExp('[a-zA-Z]');
      if ( patt.test(this.inputOrderNumber.nativeElement.children[0].value) ) {
        if ( this.errorStatus === 0 ) {this.inputOrderNumber.nativeElement.children[0].focus();}
        this.errorStatus += this.INVALID_RECIPIENT_NUMBER;
      }
    }

    if ( this.inputRecipientName.nativeElement.children[0].value === '') {
      if ( this.errorStatus === 0 ) {this.inputRecipientName.nativeElement.children[0].focus();}
      this.errorStatus += this.EMPTY_RECIPIENT_NAME;
    }

    if ( this.inputRecipientNumber.nativeElement.children[0].value === '') {
      if ( this.errorStatus === 0 ) {this.inputRecipientNumber.nativeElement.children[0].focus();}
      this.errorStatus += this.EMPTY_RECIPIENT_NUMBER;
    } else {
      const patt = new RegExp('[a-zA-Z]');
      if ( patt.test(this.inputRecipientNumber.nativeElement.children[0].value) ) {
        if ( this.errorStatus === 0 ) {this.inputRecipientNumber.nativeElement.children[0].focus();}
        this.errorStatus += this.INVALID_RECIPIENT_NUMBER;
      }
    }

    if ( this.inputZipnumber.nativeElement.children[0].value === ''
      || this.inputJuso.nativeElement.children[0].value === ''
    ) {
      if ( this.errorStatus === 0 ) {this.inputZipnumber.nativeElement.children[0].focus();}
      this.errorStatus += this.EMPTY_DELIVERY_ADDRESS;
    }


    if ( this.checkoutAdditionNumber.nativeElement.children[0].value === '') {
      if ( this.errorStatus === 0 ) {this.checkoutAdditionNumber.nativeElement.children[0].focus();}
      this.errorStatus += this.EMPTY_CUSTOMS_ID_NUMBER;
    } else {
      const patt = new RegExp('^P[0-9]{12}$');
      if ( !(patt.test(this.checkoutAdditionNumber.nativeElement.children[0].value))) {
        if ( this.errorStatus === 0 ) {this.checkoutAdditionNumber.nativeElement.children[0].focus();}
        this.errorStatus += this.INVALID_CUSTOMS_ID_NUMBER;
      }
    }

    if ( this.formData.payment_method === null ) {

      this.errorStatus += this.EMPTY_PAYMENT_METHOD;
    }
  }

}
