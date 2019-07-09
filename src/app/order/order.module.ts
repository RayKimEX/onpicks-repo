import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { CartComponent } from './pages/cart/cart.component';
import { OrderNavigatorComponent } from './components/order-navigator/order-navigator.component';
import { DirectivesModule} from '../core/directives/directives.module';
import { UiModule} from '../ui/ui.module';
import { CheckoutSuccessComponent } from './pages/checkout-success/checkout-success.component';
import { CheckoutSuccessVirtualAccountComponent } from './pages/checkout-success-virtual-account/checkout-success-virtual-account.component';
import {PipeModule} from '../core/pipe/pipe.module';
import {CartToCheckoutService} from './share/cart-to-checkout.service';
import {ReactiveFormsModule} from '@angular/forms';
import { CheckoutKrComponent } from './components/checkout-kr/checkout-kr.component';
import { CheckoutUsComponent } from './components/checkout-us/checkout-us.component';
import { CheckoutFailureComponent } from './pages/checkout-failure/checkout-failure.component';
import { FloatingCheckoutDirective } from './directive/floating-checkout.directive';

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
    CheckoutSuccessVirtualAccountComponent,
    CheckoutKrComponent,
    CheckoutUsComponent,
    CheckoutFailureComponent,
    FloatingCheckoutDirective
  ],
  providers: [
    CartToCheckoutService
  ]
})
export class OrderModule { }
