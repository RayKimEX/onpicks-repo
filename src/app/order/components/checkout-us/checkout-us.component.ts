import {Component, OnInit, ChangeDetectionStrategy, Inject, AfterViewInit, ViewChild, ElementRef} from '@angular/core';
import {DOMAIN_HOST, REGION_ID} from '../../../core/global-constant/app.config';
import {FormControl, FormGroup} from '@angular/forms';

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
  ) { }

  paymentScript;
  initialGroup: FormGroup;

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
    this.paymentScript.onload = function() {

      // @ts-ignore
      const stripe = Stripe('pk_test_BdWhs6G5bNDS9XJ9aW5B0J4E00kl5O2qBD');
      const elements = stripe.elements();
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
      const card = elements.create('card', {style});

      // Add an instance of the card Element into the `card-element` <div>.
      card.mount(that.cardElement.nativeElement);

      card.addEventListener('change', ({error}) => {
        const displayError = that.cardErrors.nativeElement;
        console.log(that.cardErrors.nativeElement);
        if (error) {
          displayError.textContent = error.message;
        } else {
          displayError.textContent = '';
        }
      });


      const form = that.paymentForm.nativeElement;

      form.action = window.location.origin + '/api/orders/payments/stripe_create_charging'
      form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const {token, error} = await stripe.createToken(card);

        if (error) {
          // Inform the customer that there was an error.
          const errorElement = that.cardErrors.nativeElement;
          errorElement.textContent = error.message;
        } else {
          // Send the token to your server.
          // @ts-ignore
          that.stripeTokenHandler(token);
        }
      });
    };
    document.head.appendChild(this.paymentScript);

  }

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
