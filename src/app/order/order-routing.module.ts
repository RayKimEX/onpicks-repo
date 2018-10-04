import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TermsIndexComponent} from '../terms/pages/index/terms-index.component';
import {PrivacyComponent} from '../terms/pages/privacy/privacy.component';
import {PComponent} from '../shops/pages/p/p.component';
import {CartComponent} from './pages/cart/cart.component';
import {CheckoutComponent} from './pages/checkout/checkout.component';

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
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
