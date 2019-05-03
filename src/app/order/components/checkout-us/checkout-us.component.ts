import {Component, OnInit, ChangeDetectionStrategy, Inject, AfterViewInit, ViewChild, ElementRef} from '@angular/core';
import {DOMAIN_HOST, REGION_ID} from '../../../core/global-constant/app.config';
import {FormControl, FormGroup} from '@angular/forms';
import {HttpClient} from '../../../../../node_modules/@angular/common/http';

@Component({
  selector: 'onpicks-checkout-us',
  templateUrl: './checkout-us.component.html',
  styleUrls: ['./checkout-us.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckoutUsComponent implements OnInit, AfterViewInit {
  @ViewChild('cardElement', {read : ElementRef}) cardElement;
  @ViewChild('cardErrors', {read : ElementRef}) cardErrors;
  @ViewChild('paymentForm', { read : ElementRef}) paymentForm;

  constructor(
    @Inject( DOMAIN_HOST ) private BASE_URL: string,
    private httpClient: HttpClient
  ) { }

  paymentScript;
  initialGroup: FormGroup;
  stripe;
  stripeCard;

  ngOnInit() {
    this.initialGroup = new FormGroup({
      dummy: new FormControl( null),
    });
    // <script src="https://js.stripe.com/v3/"></script>
  }

  ngAfterViewInit() {
    const that = this;
    this.paymentScript = document.createElement('script');
    this.paymentScript.src = 'https://js.stripe.com/v3/';
    this.paymentScript.async = true;
    this.paymentScript.onload = function () {

      // @ts-ignore
      that.stripe = Stripe('pk_test_BdWhs6G5bNDS9XJ9aW5B0J4E00kl5O2qBD');
      const elements = that.stripe.elements();
      console.log(elements);

      // Custom styling can be passed to options when creating an Element.
      const style = {
        base: {
          // Add your base input styles here. For example:
          fontSize: '16px',
          color: '#32325d'
        },
      };

      // Create an instance of the card Element.
      that.stripeCard = elements.create('card', {style});

      // Add an instance of the card Element into the `card-element` <div>.
      that.stripeCard.mount(that.cardElement.nativeElement);

      that.stripeCard.addEventListener('change', ({error}) => {
        const displayError = that.cardErrors.nativeElement;
        console.log(that.cardErrors.nativeElement);
        if (error) {
          displayError.textContent = error.message;
        } else {
          displayError.textContent = '';
        }
      });
    };
    document.head.appendChild(this.paymentScript);
  }

  stripePayemnt() {
    const {token, error} = this.stripe.createToken(this.stripeCard);
    // const form = this.paymentForm.nativeElement;
    this.httpClient.post<any>(this.BASE_URL + '/api/orders/US-100000000/payments/stripe_create_charging/', {stripeToken: token})
    .subscribe( response => {
      console.log(response);
    });
  };



  stripeTokenHandler(token) {
    // Insert the token ID into the form so it gets submitted to the server
    const form = this.paymentForm.nativeElement;
    const hiddenInput = document.createElement('input');
    hiddenInput.setAttribute('type', 'hidden');
    hiddenInput.setAttribute('name', 'stripeToken');
    hiddenInput.setAttribute('value', token.id);
    form.appendChild(hiddenInput);

    // Submit the form
    form.submit();
  }
}
