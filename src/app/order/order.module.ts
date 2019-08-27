
// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Module
import { DirectivesModule} from '../core/directives/directives.module';
import { UiModule} from '../ui/ui.module';
import { OrderRoutingModule } from './order-routing.module';
import { PipeModule } from '../core/pipe/pipe.module';

// Component
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutSuccessComponent } from './pages/checkout-success/checkout-success.component';
import { CheckoutSuccessVirtualAccountComponent } from './pages/checkout-success-virtual-account/checkout-success-virtual-account.component';
import { CheckoutFailureComponent } from './pages/checkout-failure/checkout-failure.component';
import { HealthyProductWarningComponent } from './components/cart/healthy-product-warning/healthy-product-warning.component';
import { OrderNavigatorComponent } from './components/shared/order-navigator/order-navigator.component';

import { KrCheckoutComponent } from './components/checkout/kr-checkout/kr-checkout.component';
import { KrCheckoutMenuComponent } from './components/checkout/kr-checkout/checkout-menu/kr-checkout-menu.component';

import { UsCheckoutComponent } from './components/checkout/us-checkout/us-checkout.component';
import { UsCheckoutMenuComponent } from './components/checkout/us-checkout/checkout-menu/us-checkout-menu.component';



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
    KrCheckoutComponent,
    UsCheckoutComponent,
    CheckoutFailureComponent,
    KrCheckoutMenuComponent,
    UsCheckoutMenuComponent,
    HealthyProductWarningComponent,
  ]
})
export class OrderModule { }
