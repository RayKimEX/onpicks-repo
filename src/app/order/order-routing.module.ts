import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CartComponent} from './pages/cart/cart.component';
import {CheckoutComponent} from './pages/checkout/checkout.component';
import {CheckoutSuccessNoBankComponent} from './pages/checkout-success-no-bank/checkout-success-no-bank.component';
import {CheckoutSuccessComponent} from './pages/checkout-success/checkout-success.component';

const routes: Routes = [
  {
    path: 'order',
    children : [
      {
        path : '',
        redirectTo : 'cart',
        pathMatch : 'full',
      },
      {
        path: 'cart',
        component: CartComponent,
      },
      {
        path: 'checkout',
        component: CheckoutComponent,
      },
      {
        path: 'checkout-success',
        component : CheckoutSuccessComponent,
      },
      {
        path: 'checkout-success-no-bank',
        component : CheckoutSuccessNoBankComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
