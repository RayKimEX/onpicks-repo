import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutCompleteComponent } from './pages/checkout-complete/checkout-complete.component';
import { OrderNavigatorComponent } from './components/order-navigator/order-navigator.component';
import {DirectivesModule} from '../core/directives/directives.module';
import {UiModule} from '../ui/ui.module';

@NgModule({
  imports: [
    CommonModule,
    OrderRoutingModule,
    DirectivesModule,
    UiModule
  ],
  declarations: [
    CheckoutComponent,
    CartComponent,
    CheckoutCompleteComponent,
    OrderNavigatorComponent
  ]
})
export class OrderModule { }
