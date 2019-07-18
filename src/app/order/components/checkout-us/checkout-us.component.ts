import {Component, OnInit, ChangeDetectionStrategy, Inject, AfterViewInit, ViewChild, ElementRef, ChangeDetectorRef, HostListener} from '@angular/core';
import {DOMAIN_HOST, REGION_ID, RESPONSIVE_MAP} from '../../../core/global-constant/app.config';
import {FormControl, FormGroup} from '@angular/forms';
import {HttpClient} from '../../../../../node_modules/@angular/common/http';
import {BreakpointObserver, BreakpointState} from '../../../../../node_modules/@angular/cdk/layout';
import {tap} from 'rxjs/operators';
import {OrderDataService} from '../../../core/service/data-pages/order/order-data.service';
import {STATE_LIST} from '../../../core/global-constant/app.database';
import {Router} from '@angular/router';

@Component({
  selector: 'onpicks-checkout-us',
  templateUrl: './checkout-us.component.html',
  styleUrls: ['./checkout-us.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CheckoutUsComponent implements OnInit, AfterViewInit {
  @ViewChild('cardElement', {read : ElementRef}) cardElement;
  @ViewChild('cardNumber', {read : ElementRef}) cardNumber;
  @ViewChild('cardExpiry', {read : ElementRef}) cardExpiry;
  @ViewChild('cardCvc', {read : ElementRef}) cardCvc;
  @ViewChild('cardErrors', {read : ElementRef}) cardErrors;
  @ViewChild('paymentForm', { read : ElementRef}) paymentForm;

  @ViewChild('inputZipCode', { read : ElementRef}) inputZipCode;
  @ViewChild('inputFullName', { read : ElementRef}) inputFullName;
  @ViewChild('inputAddressName', { read : ElementRef}) inputAddressName;
  @ViewChild('inputFloor', { read : ElementRef}) inputFloor;
  @ViewChild('inputCity', { read : ElementRef}) inputCity;
  @ViewChild('inputPhone', { read : ElementRef}) inputPhone;

  @ViewChild('paypalPayment') paypalPayment;

  private footerHeight: number;
  private windowInnerHeight: number;

  constructor(
    @Inject( STATE_LIST ) public stateList,
    @Inject( DOMAIN_HOST ) private BASE_URL: string,
    @Inject( RESPONSIVE_MAP ) public responsiveMap,
    private orderDataService: OrderDataService,
    private breakpointObserver:  BreakpointObserver,
    private cd: ChangeDetectorRef,
    private httpClient: HttpClient,
    private router: Router,
  ) {
    this.checkoutStore$ = this.orderDataService.getCheckoutData().pipe(
      tap( v => console.log(v)),
    );
  }
  // https://maps.googleapis.com/maps/api/geocode/json?address=11211&key=AIzaSyDNrW4gjz_0GmK6aQmCWv7ebp_xqfO3VdE&language=en
  // https://maps.googleapis.com/maps/api/geocode/json?address=92101&key=AIzaSyDNrW4gjz_0GmK6aQmCWv7ebp_xqfO3VdE
  // https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyDNrW4gjz_0GmK6aQmCWv7ebp_xqfO3VdE

  readonly EMPTY_FULL_NAME = 0b000000000001;
  readonly EMPTY_ADDRESS_NAME = 0b000000000010;
  readonly INCORRECT_ZIP_CODE = 0b000000001000;
  readonly EMPTY_STATE = 0b000000100000;
  readonly EMPTY_CITY = 0b000001000000;
  readonly INVALID_PHONE_NUMBER = 0b000010000000;

  errorStatus = 0;

  checkoutStore$;
  stripeScript;
  paypalScript;
  initialGroup: FormGroup;
  stripe;


  /***********City Input*************/
  inputCityValue = '';


  stripePaymentData = {
    'stripe_token' : '',
    'full_name' : '',
    'street_address_1': '',
    'street_address_2': '',
    'city': '',
    'state': null,
    'country': '',
    'zip_code': '',
    'phone_number': ''
  };

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

    this.paypalScript = document.createElement('script');
    this.paypalScript.src = 'https://www.paypal.com/sdk/js?client-id=AWt9c2qy20OweuAcv_qLKqmaDccTmGTbz6c3mnxRmtpAk-cwP3Q9RHIUTRHnHwrXpzB6_nppyWroVZSg';
    this.paypalScript.async = true;
    this.paypalScript.onload = function () {
      // @ts-ignore
      console.log(that.paypalPayment);
      // @ts-ignore
      paypal.Buttons({
        createOrder : function(data, actions) {
          return actions.order.create({
            purchase_units: [{
              amount: {
                value: 2.5,
                breakdown : {
                  item_total : {
                    currency_code : 'USD',
                    value : 2.5
                  }
                }
              },
              items : [
                {
                  name : 'abc',
                  quantity : 2,
                  unit_amount : {
                    currency_code : 'USD',
                    value : 0.5
                  }
                },
                {
                  name : 'ddd',
                  quantity : 3,
                  unit_amount : {
                    currency_code : 'USD',
                    value : 0.5
                  }
                }
              ],
            }]
          });
        }
      }).render(that.paypalPayment.nativeElement);
    }
    document.head.appendChild(this.paypalScript);

    this.stripeScript = document.createElement('script');
    this.stripeScript.src = 'https://js.stripe.com/v3/';
    this.stripeScript.async = true;
    this.stripeScript.onload = function () {

      // @ts-ignore
      that.stripe = Stripe('pk_test_BdWhs6G5bNDS9XJ9aW5B0J4E00kl5O2qBD');
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
      that.stripeCard.mount(that.cardElement.nativeElement);

      that.stripeCard.addEventListener('change', ({error}) => {
        const displayError = that.cardErrors.nativeElement;

        if (error) {
          displayError.textContent = error.message;
        } else {
          displayError.textContent = '';
        }
      });
    };

    document.head.appendChild(this.stripeScript);
  }

  currentState(xData) {
    this.inputZipCode.nativeElement.children[0].value = '';
    this.inputCity.nativeElement.children[0].value = '';
    this.stripePaymentData.state = xData.value;
    console.log(xData);
  }

  stripePayemnt() {

    this.fullNameCheck(false);
    this.addressNameCheck(false);
    this.stateCheck();
    this.cityCheck(false);
    this.zipCodeCheck(false);
    this.phoneCheck(false);


    if( this.errorStatus !== 0 ) { return; }

    this.stripePaymentData.city = this.inputCity.nativeElement.children[0].value;
    this.stripePaymentData.full_name = this.inputFullName.nativeElement.children[0].value;
    this.stripePaymentData.street_address_1 = this.inputAddressName.nativeElement.children[0].value;
    this.stripePaymentData.street_address_2 = this.inputFloor.nativeElement.children[0].value;
    this.stripePaymentData.zip_code = this.inputZipCode.nativeElement.children[0].value;
    this.stripePaymentData.phone_number = this.inputPhone.nativeElement.children[0].value;

    console.log(this.stripePaymentData.phone_number);
    const that = this;
    this.stripe.createToken(this.stripeCard).then(function(result) {

      if (result.error) {
        // Inform the customer that there was an error.
        const displayError = that.cardErrors.nativeElement;
        displayError.textContent = result.error.message;
      } else {
        that.stripePaymentData.stripe_token = result.token.id;

        that.httpClient.post<any>(that.BASE_URL + '/api/orders/US-100000000/payments/stripe_payment/',
          that.stripePaymentData, {responseType: 'json' })
        .subscribe( response => {
          console.log('success!!')
            console.log(response);
            that.router.navigate(['/order/checkout-success'], { queryParams: { order_code : response.order_code }});
        }, error => {
          console.log('error!!')
          console.log(error);
        });
      }
    });
  }

  checkBitWise( data ) {
    return ((this.errorStatus & data) > 0);
  }

  callGeocodingAPI() {
    console.log(this.inputZipCode.nativeElement.children[0].value.length);
    if ( this.inputZipCode.nativeElement.children[0].value.length !== 0 && this.inputZipCode.nativeElement.children[0].value.length < 5 ){
      this.errorStatus |= this.INCORRECT_ZIP_CODE;
      return ;
    } else if (this.inputZipCode.nativeElement.children[0].value.length === 0) {
      this.errorStatus &= ~this.INCORRECT_ZIP_CODE;
      return;
    } else {
      this.errorStatus &= ~this.INCORRECT_ZIP_CODE;
    }

    this.httpClient.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + this.inputZipCode.nativeElement.children[0].value + '&key=AIzaSyDNrW4gjz_0GmK6aQmCWv7ebp_xqfO3VdE&language=en')
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
                this.inputCity.nativeElement.children[0].value = item.long_name;
                cityFind = true;
                console.log(this.inputCityValue);
              }
            }

            // Find city locality, if it found by sublocality, don't find
            if (cityFind === false && ( type === 'political' || type === 'locality' )) {
              typeValidCnt++;
              console.log('#' + typeValidCnt);
              if ( typeValidCnt === 2 ) {
                this.inputCity.nativeElement.children[0].value = item.long_name;
                console.log(this.inputCityValue);
                cityFind = true;
              }
            }

            if ( type === 'political' || type === 'administrative_area_level_1') {
              typeValidCnt++;
              if ( typeValidCnt === 2 ) {
                this.stripePaymentData.state = item.short_name;
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
    if (isFocusOut && this.inputZipCode.nativeElement.children[0].value === '') {
      return;
    }

    if ( this.inputZipCode.nativeElement.children[0].value.length < 5 ) {
      this.errorStatus |= this.INCORRECT_ZIP_CODE;
    } else {
      this.errorStatus &= ~this.INCORRECT_ZIP_CODE;
    }
  }

  /* validation */

  stateCheck() {
    // EMPTY_STATE
    if ( this.stripePaymentData.state === null ) {
      this.errorStatus |= this.EMPTY_STATE;
    } else {
      this.errorStatus &= ~this.EMPTY_STATE;
    }
  }

  fullNameCheck(isFocusOut) {
    if (isFocusOut && this.inputFullName.nativeElement.children[0].value === '') {
      return;
    }

    if ( this.inputFullName.nativeElement.children[0].value === '' ) {
      this.errorStatus |= this.EMPTY_FULL_NAME;
    } else {
      this.errorStatus &= ~this.EMPTY_FULL_NAME;
    }
  }

  addressNameCheck(isFocusOut) {
    if (isFocusOut && this.inputAddressName.nativeElement.children[0].value === '') {
      return;
    }

    if ( this.inputAddressName.nativeElement.children[0].value === '') {
      this.errorStatus |= this.EMPTY_ADDRESS_NAME;
    } else {
      this.errorStatus &= ~this.EMPTY_ADDRESS_NAME;
    }
  }

  cityCheck(isFocusOut) {
    if (isFocusOut && this.inputCity.nativeElement.children[0].value === '') {
      return;
    }

    if ( this.inputCity.nativeElement.children[0].value === '') {
      this.errorStatus |= this.EMPTY_CITY;
    } else {
      this.errorStatus &= ~this.EMPTY_CITY;
    }

    this.cd.markForCheck();
  }

  phoneCheck(isFocusOut) {

    if (isFocusOut && this.inputPhone.nativeElement.children[0].value === '') {
      return;
    }
    const patt1 = new RegExp('^[0-9]{3}-[0-9]{3}-[0-9]{4}$');
    const patt2 = new RegExp('^[0-9]{10}$');

    console.log(patt2.test(this.inputPhone.nativeElement.children[0].value));
    if ( patt1.test( this.inputPhone.nativeElement.children[0].value)) {
      this.errorStatus &= ~this.INVALID_PHONE_NUMBER;
    } else if ( patt2.test(this.inputPhone.nativeElement.children[0].value)) {
      this.errorStatus &= ~this.INVALID_PHONE_NUMBER;
    } else {
      this.errorStatus |= this.INVALID_PHONE_NUMBER;
    }
  }

}
