import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Inject,
  ChangeDetectorRef,
  HostListener,
  AfterViewInit,
  Output,
  EventEmitter
} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {
  CURRENCY,
  DOMAIN_HOST,
  PAYPAL_API_KEY_TOKEN,
  RESPONSIVE_MAP,
  STRIPE_API_KEY_TOKEN
} from '../../../../../core/global-constant/app.config';
import {BehaviorSubject, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {BreakpointObserver, BreakpointState} from '@angular/cdk/layout';
import {OrderDataService} from '../../../../../core/service/data-pages/order/order-data.service';
import {select, Store} from '@ngrx/store';
import {catchError, map, tap} from 'rxjs/operators';
import {Router} from '@angular/router';
import {getCookie} from '../../../../../app.module';

@Component({
  selector: 'onpicks-us-checkout-menu',
  templateUrl: './us-checkout-menu.component.html',
  styleUrls: ['./us-checkout-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsCheckoutMenuComponent implements OnInit, AfterViewInit {
  @Input('inputZipCode') inputZipCode;
  @Input('inputFullName') inputFullName;
  @Input('inputAddressName') inputAddressName;
  @Input('inputFloor') inputFloor;
  @Input('inputCity') inputCity;
  @Input('inputPhone') inputPhone;

  @Input('cardErrors') cardErrors;
  @Input('cardElement') cardElement;
  @Input('paypalPayment') paypalPayment;
  @Input ('data') data;
  @Output() errorStatusEmitter = new EventEmitter();

  readonly EMPTY_FULL_NAME = 0b000000000001;
  readonly EMPTY_ADDRESS_NAME = 0b000000000010;
  readonly INCORRECT_ZIP_CODE = 0b000000001000;
  readonly EMPTY_STATE = 0b000000100000;
  readonly EMPTY_CITY = 0b000001000000;
  readonly INVALID_PHONE_NUMBER = 0b000010000000;

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
  };

  errorStatus = 0;
  checkoutStore$;
  checkoutStore;
  stripeScript;
  paypalScript;
  initialGroup: FormGroup;
  stripe;
  stripeCard;

  private headerHeight: number;
  private footerHeight: number;
  private windowInnerHeight: number;

  /*********checkout-mobile*******/
  isThirdBreakPoint = false;

  constructor(
    @Inject( CURRENCY ) public currency: BehaviorSubject<any>,
    @Inject( RESPONSIVE_MAP ) public responsiveMap,
    @Inject( DOMAIN_HOST ) private BASE_URL: string,
    @Inject( PAYPAL_API_KEY_TOKEN ) public PaypalAPIKey,
    @Inject( STRIPE_API_KEY_TOKEN ) public StripeAPIKey,
    private cd: ChangeDetectorRef,
    private httpClient: HttpClient,
    private breakpointObserver:  BreakpointObserver,
    private orderDataService: OrderDataService,
    private store: Store<any>,
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
          console.log(that.paypalPayment);
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

                const csrfToken = getCookie('csrftoken');
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
          }).render(that.paypalPayment.nativeElement);
        }
        document.head.appendChild(this.paypalScript);
      }),
    );
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

  ngAfterViewInit() {
    this.windowInnerHeight = window.innerHeight;
    this.footerHeight = (document.querySelector('footer') as HTMLElement).offsetHeight;
    this.headerHeight = (document.querySelector('header') as HTMLElement).offsetHeight;
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
  errorEmitter(errorStatus){
    this.errorStatusEmitter.emit(errorStatus);
  }

  stripePayment() {

    this.fullNameCheck(false);
    this.addressNameCheck(false);
    this.stateCheck();
    this.cityCheck(false);
    this.zipCodeCheck(false);
    this.phoneCheck(false);

    if ( this.errorStatus !== 0 ) { return; }

    this.paymentData.city = this.inputCity.nativeElement.children[0].value;
    this.paymentData.full_name = this.inputFullName.nativeElement.children[0].value;
    this.paymentData.street_address_1 = this.inputAddressName.nativeElement.children[0].value;
    this.paymentData.street_address_2 = this.inputFloor.nativeElement.children[0].value;
    this.paymentData.zip_code = this.inputZipCode.nativeElement.children[0].value;
    this.paymentData.phone_number = this.inputPhone.nativeElement.children[0].value;

    console.log(this.paymentData);

    const that = this;

    this.stripe.createToken(this.stripeCard).then(function(result) {

      if (result.error) {
        // Inform the customer that there was an error.
        const displayError = that.cardErrors.nativeElement;
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
  zipCodeCheck(isFocusOut) {
    if (isFocusOut && this.inputZipCode.nativeElement.children[0].value === '') {
      return;
    }

    if ( this.inputZipCode.nativeElement.children[0].value.length < 5 ) {
      this.errorStatus |= this.INCORRECT_ZIP_CODE;
    } else {
      this.errorStatus &= ~this.INCORRECT_ZIP_CODE;
    }
    if (this.errorStatus) {
      this.errorEmitter(this.errorStatus);
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
    if (this.errorStatus) {
      this.errorEmitter(this.errorStatus);
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
    if (this.errorStatus) {
      this.errorEmitter(this.errorStatus);
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
    if (this.errorStatus) {
      this.errorEmitter(this.errorStatus);
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
    if (this.errorStatus) {
      this.errorEmitter(this.errorStatus);
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
    if (this.errorStatus) {
      this.errorEmitter(this.errorStatus);
    }
  }
}
