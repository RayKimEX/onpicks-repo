import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FaqComponent} from './pages/faq/faq.component';
import {RefundComponent} from './pages/refund/refund.component';
import {ImportComponent} from './pages/import/import.component';
import {ReturnComponent} from './pages/return/return.component';
import {AboutProductComponent} from './pages/about-product/about-product.component';

const routes: Routes = [
  {
    path: 'help',
    children : [
      {
        path : '',
        redirectTo : 'faq',
        pathMatch : 'full',
      },
      {
        path: 'faq',
        component: FaqComponent,
      },
      {
        path: 'refund',
        component : RefundComponent,
      },
      {
        path : 'import',
        component : ImportComponent,
      },
      {
        path : 'return',
        component : ReturnComponent
      },
      {
        path : 'about-product',
        component : AboutProductComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelpRoutingModule { }