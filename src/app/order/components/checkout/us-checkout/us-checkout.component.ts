import {Component, OnInit, ChangeDetectionStrategy, Inject, AfterViewInit, ViewChild, ElementRef, ChangeDetectorRef} from '@angular/core';
import {DOMAIN_HOST, PAYPAL_API_KEY_TOKEN, REGION_ID, RESPONSIVE_MAP, STRIPE_API_KEY_TOKEN} from '../../../../core/global-constant/app.config';
import {FormControl, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {BreakpointObserver, BreakpointState} from '@angular/cdk/layout';
import {tap} from 'rxjs/operators';
import {OrderDataService} from '../../../../core/service/data-pages/order/order-data.service';
import {STATE_LIST} from '../../../../core/global-constant/app.database';
import {Router} from '@angular/router';

@Component({
  selector: 'onpicks-us-checkout',
  templateUrl: './us-checkout.component.html',
  styleUrls: ['./us-checkout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class UsCheckoutComponent implements OnInit, AfterViewInit {
  @ViewChild('cardElement', {read : ElementRef}) cardElementRef;
  @ViewChild('cardNumber', {read : ElementRef}) cardNumberRef;
  @ViewChild('cardExpiry', {read : ElementRef}) cardExpiryRef;
  @ViewChild('cardCvc', {read : ElementRef}) cardCvcRef;
  @ViewChild('cardErrors', {read : ElementRef}) cardErrorsRef;
  @ViewChild('paymentForm', { read : ElementRef}) paymentFormRef;

  @ViewChild('inputZipCode', { read : ElementRef}) inputZipCodeRef;
  @ViewChild('inputFullName', { read : ElementRef}) inputFullNameRef;
  @ViewChild('inputAddressName', { read : ElementRef}) inputAddressNameRef;
  @ViewChild('inputFloor', { read : ElementRef}) inputFloorRef;
  @ViewChild('inputCity', { read : ElementRef}) inputCityRef;
  @ViewChild('inputPhone', { read : ElementRef}) inputPhoneRef;

  @ViewChild('paypalPayment') paypalPaymentRef;

  private footerHeight: number;
  private windowInnerHeight: number;

  constructor(
    @Inject( STATE_LIST ) public stateList,
    @Inject( DOMAIN_HOST ) private BASE_URL: string,
    @Inject( RESPONSIVE_MAP ) public responsiveMap,
    @Inject( PAYPAL_API_KEY_TOKEN ) public PaypalAPIKey,
    @Inject( STRIPE_API_KEY_TOKEN ) public StripeAPIKey,
    private orderDataService: OrderDataService,
    private breakpointObserver:  BreakpointObserver,
    private cd: ChangeDetectorRef,
    private httpClient: HttpClient,
    private router: Router,
  ) {
    const that = this;
    this.checkoutStore$ = this.orderDataService.getCheckoutData().pipe(
      tap( v => {
        this.checkoutStore = v;
        console.log(v);

        this.paypalScript = document.createElement('script');
        this.paypalScript.src = 'https://www.paypal.com/sdk/js?disable-funding=card&client-id=' + this.PaypalAPIKey;
        this.paypalScript.async = true;
        this.paypalScript.onload = function () {
          // @ts-ignore
          console.log(that.paypalPaymentRef);
          // @ts-ignore
          paypal.Buttons({
            style : {
              color: 'white',
              height: 40
            },
            createOrder : function(data, actions) {
              const purchase_items = []
              that.checkoutStore.items.forEach( (item, index) => {
                purchase_items.push(
                  {
                    name : item.title,
                    quantity : item.quantity,
                    unit_amount : {
                      currency_code : that.checkoutStore.currency,
                      value : item.price
                    }
                  }
                );
              })

              return actions.order.create({
                purchase_units: [{
                  amount: {
                    value: that.checkoutStore.grand_total,
                    breakdown : {
                      item_total : {
                        currency_code : that.checkoutStore.currency,
                        value : that.checkoutStore.total_items
                      },
                      shipping : {
                        currency_code : that.checkoutStore.currency,
                        value : that.checkoutStore.total_shipping_costs
                      }
                    }
                  },
                  items : purchase_items,
                }]
              });
            },
            onApprove: function(data, actions) {
              return actions.order.capture().then(function (details) {
                alert('Transaction completed by ' + details.payer.name.given_name);
                console.log(details);
                console.log(data)
                console.log(actions);

                const csrfToken = that.getCookie('csrftoken');
                that.paymentData.token = data.orderID;
                that.paymentData.payment_provider = 'paypal';
                return fetch('/api/orders/', {
                  method: 'post',
                  headers: {
                    'X-CSRFTOKEN' : csrfToken,
                    'content-type': 'application/json'
                  },
                  body: JSON.stringify(
                    that.paymentData
                  )
                }).then( (response) => {
                  console.log(response)
                  response.json().then( responseData => {
                    console.log(responseData);
                    console.log(responseData)
                    console.log(responseData.status)
                    console.log(responseData.order_code);
                    if ( responseData.status === 201) {
                      that.router.navigate(['/order/checkout-success'], { queryParams: { order_code : responseData.order_code }});
                    }
                  });

                });
              });
            }
          }).render(that.paypalPaymentRef.nativeElement);
        }
        document.head.appendChild(this.paypalScript);
      }),
    );
  }

  readonly EMPTY_FULL_NAME = 0b000000000001;
  readonly EMPTY_ADDRESS_NAME = 0b000000000010;
  readonly INCORRECT_ZIP_CODE = 0b000000001000;
  readonly EMPTY_STATE = 0b000000100000;
  readonly EMPTY_CITY = 0b000001000000;
  readonly INVALID_PHONE_NUMBER = 0b000010000000;

  errorStatus = 0;

  checkoutStore$;
  checkoutStore;
  stripeScript;
  paypalScript;
  initialGroup: FormGroup;
  stripe;

  /***********City Input*************/
  inputCityValue = '';

  paymentData = {
    'token' : '',
    'full_name' : '홍길동',
    'street_address_1': 'street_address_1',
    'street_address_2': 'street_address_2',
    'city': 'Brooklyn',
    'state': 'NY',
    'country': 'us',
    'zip_code': '11211',
    'phone_number': '8223124232',
    'payment_provider' : '',
    'payment_status' : 'paid',
    'buyer_contact': '8223124232',
    'buyer_name': '홍길동',
    'customs_id_number': 'US',
    'payment_method': 'card'
  }

  stripeCard;

  /*********checkout-mobile*******/
  isThirdBreakPoint = false;

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

    console.log(this.stateList.list.length);
    // <script src="https://js.stripe.com/v3/"></script>
  }

  ngAfterViewInit() {
    const that = this;

    this.stripeScript = document.createElement('script');
    this.stripeScript.src = 'https://js.stripe.com/v3/';
    this.stripeScript.async = true;
    this.stripeScript.onload = function () {

      // @ts-ignore
      that.stripe = Stripe(that.StripeAPIKey);
      const elements = that.stripe.elements();
      console.log(elements);

      // Custom styling can be passed to options when creating an Element.
      const style = {
        base: {
          // Add your base input styles here. For example:
          fontSize: '1.1rem',
          color: '#292929',
          fontStyle: '-apple-system, BlinkMacSystemFont, Roboto, Arial, sans-serif',
          fontWeight: '100',
          letterSpacing: '0.2px',
          '::placeholder': {
            color: '#b3b3b3',
          },
          height: '40px',
        },
        invalid: {
          color : '#00ff00'
        }
      };

      // Create an instance of the card Element.
      that.stripeCard = elements.create('card', {style});

      // Add an instance of the card Element into the `card-element` <div>.
      that.stripeCard.mount(that.cardElementRef.nativeElement);

      that.stripeCard.addEventListener('change', ({error}) => {
        const displayError = that.cardErrorsRef.nativeElement;

        if (error) {
          displayError.textContent = error.message;
        } else {
          displayError.textContent = '';
        }
      });
    };

    document.head.appendChild(this.stripeScript);
  }


  getCookie(cname) {
    const name = cname + '=';
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for ( let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return '';
  }

  currentState(xData) {
    this.inputZipCodeRef.nativeElement.children[0].value = '';
    this.inputCityRef.nativeElement.children[0].value = '';
    this.paymentData.state = xData.value;
  }

  stripePayemnt() {

    this.fullNameCheck(false);
    this.addressNameCheck(false);
    this.stateCheck();
    this.cityCheck(false);
    this.zipCodeCheck(false);
    this.phoneCheck(false);


    if( this.errorStatus !== 0 ) { return; }

    this.paymentData.city = this.inputCityRef.nativeElement.children[0].value;
    this.paymentData.full_name = this.inputFullNameRef.nativeElement.children[0].value;
    this.paymentData.street_address_1 = this.inputAddressNameRef.nativeElement.children[0].value;
    this.paymentData.street_address_2 = this.inputFloorRef.nativeElement.children[0].value;
    this.paymentData.zip_code = this.inputZipCodeRef.nativeElement.children[0].value;
    this.paymentData.phone_number = this.inputPhoneRef.nativeElement.children[0].value;

    const that = this;
    // this.httpClient.post<any>('/api/orders/KR-001000001/payments/inipay_webstd_return/', {}).subscribe( response => {
    //   console.log(response);
    // }, error => {
    //   console.log(error);
    // });
    this.stripe.createToken(this.stripeCard).then(function(result) {

      if (result.error) {
        // Inform the customer that there was an error.
        const displayError = that.cardErrorsRef.nativeElement;
        displayError.textContent = result.error.message;
      } else {
        that.paymentData.token = result.token.id;
        that.paymentData.payment_provider = 'stripe';
        that.httpClient.post<any>(that.BASE_URL + '/api/orders/',
          that.paymentData, { responseType: 'json' } )
        .subscribe( response => {
            console.log(response);
            console.log('checkout success!!');
            if ( response.status === 201 ) {
              that.router.navigate(['/order/checkout-success'], { queryParams: { order_code : response.order_code }});
            }
        }, error => {
          console.error(error);
        });
      }
    });
  }

  checkBitWise( data ) {
    return ((this.errorStatus & data) > 0);
  }

  callGeocodingAPI() {
    console.log(this.inputZipCodeRef.nativeElement.children[0].value.length);
    if ( this.inputZipCodeRef.nativeElement.children[0].value.length !== 0 && this.inputZipCodeRef.nativeElement.children[0].value.length < 5 ){
      this.errorStatus |= this.INCORRECT_ZIP_CODE;
      return ;
    } else if (this.inputZipCodeRef.nativeElement.children[0].value.length === 0) {
      this.errorStatus &= ~this.INCORRECT_ZIP_CODE;
      return;
    } else {
      this.errorStatus &= ~this.INCORRECT_ZIP_CODE;
    }

    this.httpClient.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + this.inputZipCodeRef.nativeElement.children[0].value + '&key=AIzaSyDNrW4gjz_0GmK6aQmCWv7ebp_xqfO3VdE&language=en')
      .subscribe( val => {
        if ( val['status'] === 'ZERO_RESULTS' ) {
          this.errorStatus |= this.INCORRECT_ZIP_CODE;
          return ;
        }
        const addressLength = val['results'][0].address_components.length;
        console.log(val['results'][0]);
        console.log(val['results'][0].address_components[2]);

        let cityFind = false;
        val['results'][0].address_components.forEach( (item, index) => {
          let typeValidCnt = 0;

          console.log('####' + item.long_name + ', cityFind : ' + cityFind);
          item.types.forEach( (type, typeIndex) => {

            console.log('##' + type);
            // Find city sublocality
            if ( cityFind === false && (type === 'political' || type === 'sublocality')) {

              typeValidCnt++;
              console.log('#' + typeValidCnt);
              if ( typeValidCnt === 2 ) {
                this.inputCityRef.nativeElement.children[0].value = item.long_name;
                cityFind = true;
                console.log(this.inputCityValue);
              }
            }

            // Find city locality, if it found by sublocality, don't find
            if (cityFind === false && ( type === 'political' || type === 'locality' )) {
              typeValidCnt++;
              console.log('#' + typeValidCnt);
              if ( typeValidCnt === 2 ) {
                this.inputCityRef.nativeElement.children[0].value = item.long_name;
                console.log(this.inputCityValue);
                cityFind = true;
              }
            }

            if ( type === 'political' || type === 'administrative_area_level_1') {
              typeValidCnt++;
              if ( typeValidCnt === 2 ) {
                this.paymentData.state = item.short_name;
              }
            }
          });


          this.cd.markForCheck();
        });
        this.stateCheck();
        this.cityCheck(false);
        this.zipCodeCheck(false);
      });
  }

  zipCodeCheck(isFocusOut) {
    if (isFocusOut && this.inputZipCodeRef.nativeElement.children[0].value === '') {
      return;
    }

    if ( this.inputZipCodeRef.nativeElement.children[0].value.length < 5 ) {
      this.errorStatus |= this.INCORRECT_ZIP_CODE;
    } else {
      this.errorStatus &= ~this.INCORRECT_ZIP_CODE;
    }
  }

  /* validation */

  stateCheck() {
    // EMPTY_STATE
    if ( this.paymentData.state === null ) {
      this.errorStatus |= this.EMPTY_STATE;
    } else {
      this.errorStatus &= ~this.EMPTY_STATE;
    }
  }

  fullNameCheck(isFocusOut) {
    if (isFocusOut && this.inputFullNameRef.nativeElement.children[0].value === '') {
      return;
    }

    if ( this.inputFullNameRef.nativeElement.children[0].value === '' ) {
      this.errorStatus |= this.EMPTY_FULL_NAME;
    } else {
      this.errorStatus &= ~this.EMPTY_FULL_NAME;
    }
  }

  addressNameCheck(isFocusOut) {
    if (isFocusOut && this.inputAddressNameRef.nativeElement.children[0].value === '') {
      return;
    }

    if ( this.inputAddressNameRef.nativeElement.children[0].value === '') {
      this.errorStatus |= this.EMPTY_ADDRESS_NAME;
    } else {
      this.errorStatus &= ~this.EMPTY_ADDRESS_NAME;
    }
  }

  cityCheck(isFocusOut) {
    if (isFocusOut && this.inputCityRef.nativeElement.children[0].value === '') {
      return;
    }

    if ( this.inputCityRef.nativeElement.children[0].value === '') {
      this.errorStatus |= this.EMPTY_CITY;
    } else {
      this.errorStatus &= ~this.EMPTY_CITY;
    }

    this.cd.markForCheck();
  }

  phoneCheck(isFocusOut) {

    if (isFocusOut && this.inputPhoneRef.nativeElement.children[0].value === '') {
      return;
    }
    const patt1 = new RegExp('^[0-9]{3}-[0-9]{3}-[0-9]{4}$');
    const patt2 = new RegExp('^[0-9]{10}$');

    console.log(patt2.test(this.inputPhoneRef.nativeElement.children[0].value));
    if ( patt1.test( this.inputPhoneRef.nativeElement.children[0].value)) {
      this.errorStatus &= ~this.INVALID_PHONE_NUMBER;
    } else if ( patt2.test(this.inputPhoneRef.nativeElement.children[0].value)) {
      this.errorStatus &= ~this.INVALID_PHONE_NUMBER;
    } else {
      this.errorStatus |= this.INVALID_PHONE_NUMBER;
    }
  }
  markForCheck(e) {
    this.cd.markForCheck();
  }
  onErrorEmitter(errorStatus) {
    console.log('onerroremiiter');
    console.log(errorStatus)
    this.errorStatus = errorStatus;
  }

}
