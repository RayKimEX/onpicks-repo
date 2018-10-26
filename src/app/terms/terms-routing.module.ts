import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShopsIndexComponent} from '../shops/pages/index/shops-index.component';
import {PComponent} from '../shops/pages/p/p.component';
import {TermsIndexComponent} from './pages/index/terms-index.component';
import {PrivacyComponent} from './pages/privacy/privacy.component';

const routes: Routes = [
  {
    path: 'terms',
    children : [
      {
        path : '',
        component: TermsIndexComponent,
        pathMatch : 'full',
      },
      {
        path: 'privacy',
        component: PrivacyComponent,
      },
      {
        path: 'p/:id',
        component: PComponent,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TermsRoutingModule { }
