import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TermsIndexComponent} from './pages/index/terms-index.component';
import {PrivacyComponent} from './pages/privacy/privacy.component';

const routes: Routes = [
  {
    path: '',
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
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TermsRoutingModule { }
