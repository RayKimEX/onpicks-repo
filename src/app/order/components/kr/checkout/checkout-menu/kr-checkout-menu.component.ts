import {Component, OnInit, ChangeDetectionStrategy, Inject, ChangeDetectorRef, AfterViewInit, HostListener, Input, OnDestroy, ElementRef, EventEmitter, Output} from '@angular/core';
import {BreakpointObserver, BreakpointState} from '@angular/cdk/layout';
import {CURRENCY, DOMAIN_HOST, RESPONSIVE_MAP} from '../../../../../core/global-constant/app.config';
import {HttpClient, HttpParams} from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';
import {select, Store} from '@ngrx/store';
import {BehaviorSubject, of} from 'rxjs';
import {OrderDataService} from '../../../../../core/service/data-pages/order/order-data.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'onpicks-kr-checkout-menu',
  templateUrl: './kr-checkout-menu.component.html',
  styleUrls: ['./kr-checkout-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class KrCheckoutMenuComponent implements OnInit, OnDestroy, AfterViewInit {
  @Input('errorStatus') errorStatus;
  @Input('inputSearchBox') inputSearchBox;

  @Input('inputOrderName') inputOrderName;
  @Input('inputOrderNumber') inputOrderNumber;
  @Input('inputRecipientName') inputRecipientName;
  @Input('inputRecipientNumber') inputRecipientNumber;
  @Input('inputZipnumber') inputZipnumber;
  @Input('inputJuso') inputJuso;
  @Input('inputDetailJuso') inputDetailJuso;

  @Input('checkoutAdditionNumber') checkoutAdditionNumber;
  @Input('addDeliveryView') addDeliveryView;
  @Input('isAgreementDirectBuyingInfo') isAgreementDirectBuyingInfo: boolean;
  @Input('shippingMessage') shippingMessage;
  @Input('deliveryData') deliveryData;
  @Input('data') data;
  @Input('payment_method') payment_method;

  @Output() validateEmitter = new EventEmitter();

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
  checkoutStore$;
  userStore$;
  userStore;

  deliveryData$;
  paymentScript = null;
  isShowDeliveryView = true;
  initialGroup: FormGroup;

  private headerHeight: number;
  private footerHeight: number;
  private windowInnerHeight: number;

  /*********checkout-mobile*******/
  isThirdBreakPoint = false;
  constructor(
    @Inject(CURRENCY) public currency: BehaviorSubject<any>,
    @Inject( RESPONSIVE_MAP ) public responsiveMap,
    @Inject(DOMAIN_HOST) private BASE_URL: string,
    private cd: ChangeDetectorRef,
    private httpClient: HttpClient,
    private breakpointObserver:  BreakpointObserver,
    private orderDataService: OrderDataService,
    private store: Store<any>,
  ) {
    this.checkoutStore$ = this.orderDataService.getCheckoutData().pipe(
      tap( v => console.log(v)),
    );

    this.userStore$ = this.store.pipe( select( state => state.auth.user))
      .subscribe( v => {
        this.userStore = v;
        console.log(v);
        if ( v ===  null ) { return; }
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
  }

  ngAfterViewInit() {
    this.windowInnerHeight = window.innerHeight;
    this.footerHeight = (document.querySelector('footer') as HTMLElement).offsetHeight;
    this.headerHeight = (document.querySelector('header') as HTMLElement).offsetHeight;
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.windowInnerHeight = window.innerHeight;
    this.scrollHandler(event);
  }
  @HostListener('window:scroll', ['$event'])
  scrollHandler(event) {
    if (this.isThirdBreakPoint) {
      const checkoutRightMenu = (document.querySelector('.checkout-right__menu') as HTMLElement);
      const bodyHeight = (document.querySelector('body') as HTMLElement).offsetHeight;
      const BREADCRUMB_HEIGHT = 69;

      const scrollTop = event.target.scrollingElement.scrollTop;
      if (scrollTop > this.headerHeight + BREADCRUMB_HEIGHT && scrollTop + this.windowInnerHeight < bodyHeight - this.footerHeight ) {
        checkoutRightMenu.style.top = (scrollTop - this.headerHeight - BREADCRUMB_HEIGHT) + 'px';
      }
    }
  }

  payment(form) {
    this.validateEmitter.emit();

    // emit후의 싱크를 맞추기 위해 setTimeout을 함
    setTimeout(() => {
      if ( this.errorStatus === 0 ) {

        this.formData.buyer_name = this.inputOrderName.nativeElement.children[0].value;
        this.formData.buyer_contact = this.inputOrderNumber.nativeElement.children[0].value;
        this.formData.payment_method = this.payment_method;
        // 0인 경우가 배송지 default이므로,
        // full_name 수신자 성함
        // 서버에 저장된 배송지 정보가 없을 경우
        console.log(this.deliveryData);
        if ( this.deliveryData.length === 0 ) {

          // inputRecipientNameRef
          // inputRecipientNumberRef
          // inputZipnumberRef
          // inputJusoRef
          // inputDetailJusoRef
          console.log('length == 0');
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
        if (this.shippingMessage){
          this.formData.shipping_message = this.shippingMessage;
        }
        this.formData.customs_id_number = this.checkoutAdditionNumber.nativeElement.children[0].value;

        this.formData.city = '';
        this.formData.country = '';
        console.log('formData');
        console.log(this.formData);
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
    }, 0 );


  }


  setDeliveryInfo() {
    const temp = {
      'full_name': '',
      'zip_code': '',
      'street_address_1': '',
      'street_address_2': '',
      'city': '',
      'state': '',
      'phone_number': ''
    };

    temp.full_name = this.inputRecipientName.last.nativeElement.children[0].value;
    temp.street_address_1 = this.inputJuso.last.nativeElement.children[0].value;
    temp.street_address_2 = this.inputDetailJuso.last.nativeElement.children[0].value;
    temp.zip_code = this.inputZipnumber.last.nativeElement.children[0].value;
    temp.phone_number = this.inputRecipientNumber.last.nativeElement.children[0].value;

    console.log('Set Delivery Info');
    console.log(temp);
    return temp;
  }

}
