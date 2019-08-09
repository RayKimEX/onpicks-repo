import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { CheckoutSuccessVirtualAccountComponent } from './pages/checkout-success-virtual-account/checkout-success-virtual-account.component';
import { CheckoutSuccessComponent } from './pages/checkout-success/checkout-success.component';
import { CheckoutFailureComponent } from './pages/checkout-failure/checkout-failure.component';

const routes: Routes = [
  {
    path: '',
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
        path: 'checkout-failure',
        component: CheckoutFailureComponent,
      },
      {
        path: 'checkout-success',
        component : CheckoutSuccessComponent,
      },
      {
        path: 'checkout-success-virtual-account',
        component : CheckoutSuccessVirtualAccountComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
