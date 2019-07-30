import {Component, OnInit, ChangeDetectionStrategy, AfterViewInit, OnDestroy, ViewChildren, ViewChild, ElementRef, Inject, Renderer2, ChangeDetectorRef, LOCALE_ID, HostListener} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CURRENCY, DOMAIN_HOST, REGION_ID, RESPONSIVE_MAP} from '../../../../core/global-constant/app.config';
import {BehaviorSubject, fromEvent, of} from 'rxjs';
import {OrderDataService} from '../../../../core/service/data-pages/order/order-data.service';
import {HttpClient, HttpParams} from '../../../../../../node_modules/@angular/common/http';
import {select, Store} from '@ngrx/store';
import {Router} from '@angular/router';
import {BreakpointObserver, BreakpointState} from '../../../../../../node_modules/@angular/cdk/layout';
import {catchError, debounceTime, distinctUntilChanged, flatMap, map, tap} from 'rxjs/operators';
import {DisplayAlertMessage} from '../../../../core/store/ui/ui.actions';
import {DISPLAY_ALERT_MESSAGE_MAP} from '../../../../core/global-constant/app.locale';

@Component({
  selector: 'onpicks-kr-checkout',
  templateUrl: './kr-checkout.component.html',
  styleUrls: ['./kr-checkout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class KrCheckoutComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChildren('inputSearchBoxOuter') inputSearchBoxOuter;
  @ViewChild('inputSearchBox', {read: ElementRef}) inputSearchBoxEL;
  @ViewChildren('inputSearchBox') inputSearchBox;

  ////
  @ViewChild('inputOrderName', { read : ElementRef }) inputOrderNameRef;
  @ViewChild('inputOrderNumber', { read : ElementRef }) inputOrderNumberRef;
  @ViewChildren('inputRecipientName', { read : ElementRef }) inputRecipientNameRef;
  @ViewChildren('inputRecipientNumber', { read : ElementRef }) inputRecipientNumberRef;

  @ViewChildren('inputZipnumber', { read : ElementRef }) inputZipnumberRef;
  @ViewChildren('inputJuso', { read : ElementRef }) inputJusoRef;
  @ViewChildren('inputDetailJuso', { read : ElementRef }) inputDetailJusoRef;

  @ViewChild('checkoutAdditionNumber', { read : ElementRef}) checkoutAdditionNumberRef;
  @ViewChild('addDeliveryView') addDeliveryView;


  isShowDeliveryModal = false;

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
      // {
      //   title : '직접 입력[선택 시 100자정도 텍스트 입력],[이전 입력내용 남아있음]',
      //   value : '직접 입력[선택 시 100자정도 텍스트 입력],[이전 입력내용 남아있음]'
      // },
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

    this.userStore$ = this.store.pipe( select( state => state.auth.user))
      .subscribe( v => {
        this.userStore = v;
        if ( v ===  null ) { return; }
        // userStore정보가 usbscribe되면, 그때 다시 배송지 정보를 갖고옴
        this.deliveryData$ = this.orderDataService.getDeliveryData(this.userStore.id)
          .pipe(
            map( value => value['results'] ),
            tap( results => {
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
      });
  }


  ngAfterViewInit() {
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

      if ( this.deliveryData.length === 0 ) {

        // inputRecipientNameRef
        // inputRecipientNumberRef
        // inputZipnumberRef
        // inputJusoRef
        // inputDetailJusoRef

        this.formData = {
          ...this.formData,
          ...this.setDeliveryInfo()
        };

      } else {

        this.formData.phone_number = this.deliveryData[0].phone_number;
        this.formData.full_name = this.deliveryData[0].full_name;
        this.formData.zip_code = this.deliveryData[0].zip_code;
        this.formData.street_address_1 = this.deliveryData[0].street_address_1;
        this.formData.street_address_2 = this.deliveryData[0].street_address_2;

      }

      this.formData.customs_id_number = this.checkoutAdditionNumberRef.nativeElement.children[0].value;

      this.formData.city = '';
      this.formData.country = '';

      this.httpClient.post<any>( this.BASE_URL + '/api/orders/', this.formData )
        .subscribe( response => {

          // mobile 일경우
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


  showSearchBox( xParam ) {
    // 내용이 있으면 show안되게

    this.jusoList = [];
    this.searchState = 0;
    if ( this.isShowDeliveryModal === true ) {
      if ( this.isShowSearchBox === false ) {
        if ( xParam === 'input' && this.inputJusoRef.first.nativeElement.children[0].value !== ''  ) {
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
        if ( xParam === 'input' && this.inputJusoRef.last.nativeElement.children[0].value !== ''  ) {
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
      'city': '',
      'state': '',
      'phone_number': '',
      // default를 false로 주던 true로주던 값이 API에서 허용 안되도록 막힘
      'default': false
    };

    temp.full_name = this.inputRecipientNameRef.last.nativeElement.children[0].value;
    temp.street_address_1 = this.inputJusoRef.last.nativeElement.children[0].value;
    temp.street_address_2 = this.inputDetailJusoRef.last.nativeElement.children[0].value;
    temp.zip_code = this.inputZipnumberRef.last.nativeElement.children[0].value;
    temp.phone_number = this.inputRecipientNumberRef.last.nativeElement.children[0].value;
    return temp;
  }

  removeDeliveryInfo(index) {
    if ( index === 0  ) { alert( '기본 배송지는 삭제할 수 없습니다. '); return; }
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

    // this.renderer.setProperty( this.inputRecipientNameRef.nativeElement.children[0], 'value', '');
    // this.renderer.setProperty( this.inputJusoRef.nativeElement.children[0], 'value', '');
    // this.renderer.setProperty( this.inputDetailJusoRef.nativeElement.children[0], 'value', '');
    // this.renderer.setProperty( this.inputZipnumberRef.nativeElement.children[0], 'value', '');
    // this.renderer.setProperty( this.inputRecipientNumberRef.nativeElement.children[0], 'value', '');
  }

  showModifyDeliveryModal(index) {
    this.isShowDeliveryModal = true;
    this.isShowSearchBox = false;
    this.renderer.setStyle( this.inputSearchBoxOuter.first.nativeElement, 'display', 'none' );
    this.renderer.setStyle( this.inputSearchBoxOuter.last.nativeElement, 'display', 'none' );
    this.updateDeliveryIndex = index;

    this.renderer.setProperty( this.inputRecipientNameRef.first.nativeElement.children[0], 'value', this.deliveryData[this.updateDeliveryIndex].full_name);
    this.renderer.setProperty( this.inputJusoRef.first.nativeElement.children[0], 'value', this.deliveryData[this.updateDeliveryIndex].street_address_1);
    this.renderer.setProperty( this.inputDetailJusoRef.first.nativeElement.children[0], 'value', this.deliveryData[this.updateDeliveryIndex].street_address_2);
    this.renderer.setProperty( this.inputZipnumberRef.first.nativeElement.children[0], 'value', this.deliveryData[this.updateDeliveryIndex].zip_code);
    this.renderer.setProperty( this.inputRecipientNumberRef.first.nativeElement.children[0], 'value', this.deliveryData[this.updateDeliveryIndex].phone_number);

    this.cd.markForCheck();
  }

  updateDeliveryInfo() {
    const temp = {
      'id': this.deliveryData[this.updateDeliveryIndex].id,
      'full_name': '',
      'zip_code': '',
      'street_address_1': '',
      'street_address_2': '',
      'city': '',
      'state': '',
      'phone_number': '',
      // default를 false로 주던 true로주던 값이 API에서 허용 안되도록 막힘
      'default': this.deliveryData[this.updateDeliveryIndex].default,
    };

    temp.full_name = this.inputRecipientNameRef.first.nativeElement.children[0].value;
    temp.street_address_1 = this.inputJusoRef.first.nativeElement.children[0].value;
    temp.street_address_2 = this.inputDetailJusoRef.first.nativeElement.children[0].value;
    temp.zip_code = this.inputZipnumberRef.first.nativeElement.children[0].value;
    temp.phone_number = this.inputRecipientNumberRef.first.nativeElement.children[0].value;
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

  // Personal Custom Clearance Code, PCC Code, PCCC
  addCustomIdNumber() {
    this.orderDataService.addCustomIdNumber(this.userStore.id, { customs_id_number :  this.checkoutAdditionNumberRef.nativeElement.children[0].value })
      .subscribe( response => {
        this.store.dispatch(new DisplayAlertMessage(this.alertMap['changes-saved'][this.locale]));
      }, error => {
        this.store.dispatch(new DisplayAlertMessage(this.alertMap['unstable-network'][this.locale]));
  });
  }




  updateDeliveryDataToDefault( index ) {
    this.orderDataService.updateDeliveryDataToDefault(this.userStore.id, this.deliveryData[index].id).subscribe(
      v => {
        const temp = [];
        this.deliveryData.forEach((value, forEachIndex) => {

          if (forEachIndex === index) {
            const valueTemp = {
              ...value,
              default: true,
            }
            temp.unshift(valueTemp);
          } else {
            const valueTemp = {
              ...value,
              default: false,
            }
            temp.push(valueTemp);
          }


          this.deliveryData = temp;
          this.deliveryData$ = of(temp);

          this.cd.markForCheck();
        });

      });
  }

  validateDeliveryInfo(){

    this.errorStatus = 0;


    if ( this.inputRecipientNameRef.last.nativeElement.children[0].value === '') {
      if ( this.errorStatus === 0 ) {this.inputRecipientNameRef.last.nativeElement.children[0].focus();}
      this.errorStatus |= this.EMPTY_RECIPIENT_NAME;
    }

    if ( this.inputRecipientNumberRef.last.nativeElement.children[0].value === '') {
      if ( this.errorStatus === 0 ) {this.inputRecipientNumberRef.last.nativeElement.children[0].focus();}
      this.errorStatus |= this.EMPTY_RECIPIENT_NUMBER;
    } else {
      const patt = new RegExp('[a-zA-Z]');
      if ( patt.test(this.inputRecipientNumberRef.last.nativeElement.children[0].value) ) {
        if ( this.errorStatus === 0 ) {this.inputRecipientNumberRef.last.nativeElement.children[0].focus();}
        this.errorStatus |= this.INVALID_RECIPIENT_NUMBER;
      }
    }

    if ( this.inputZipnumberRef.last.nativeElement.children[0].value === ''
      || this.inputJusoRef.last.nativeElement.children[0].value === ''
    ) {
      if ( this.errorStatus === 0 ) {this.inputZipnumberRef.last.nativeElement.children[0].focus();}
      this.errorStatus |= this.EMPTY_DELIVERY_ADDRESS;
    }
  }

  getCurrentText(event) {
    if ( this.isShowDeliveryModal === true ) {
      this.renderer.setProperty(this.inputJusoRef.first.nativeElement.children[0], 'value', event.target.innerText);
      this.renderer.setProperty(this.inputZipnumberRef.first.nativeElement.children[0], 'value', event.target.getAttribute('data-zipnumber'));
      this.isShowSearchBox = false;
      this.renderer.setStyle(this.inputSearchBoxOuter.first.nativeElement, 'display', 'none');
    } else {
      this.renderer.setProperty(this.inputJusoRef.last.nativeElement.children[0], 'value', event.target.innerText);
      this.renderer.setProperty(this.inputZipnumberRef.last.nativeElement.children[0], 'value', event.target.getAttribute('data-zipnumber'));
      this.isShowSearchBox = false;
      this.renderer.setStyle( this.inputSearchBoxOuter.last.nativeElement, 'display', 'none' );
    }
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

    this.errorStatus = deliveryComponent.validate(this.errorStatus);

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
