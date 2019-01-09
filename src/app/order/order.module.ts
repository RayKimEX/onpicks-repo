import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { CartComponent } from './pages/cart/cart.component';
import { OrderNavigatorComponent } from './components/order-navigator/order-navigator.component';
import {DirectivesModule} from '../core/directives/directives.module';
import {UiModule} from '../ui/ui.module';
import { CheckoutSuccessComponent } from './pages/checkout-success/checkout-success.component';
import { CheckoutSuccessNoBankComponent } from './pages/checkout-success-no-bank/checkout-success-no-bank.component';
import {PipeModule} from '../core/pipe/pipe.module';
import {CartToCheckoutService} from './share/cart-to-checkout.service';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    OrderRoutingModule,
    DirectivesModule,
    ReactiveFormsModule,
    PipeModule,
    UiModule
  ],
  declarations: [
    CheckoutComponent,
    CartComponent,
    OrderNavigatorComponent,
    CheckoutSuccessComponent,
    CheckoutSuccessNoBankComponent
  ],
  providers: [
    CartToCheckoutService
  ]
})
export class OrderModule { }
