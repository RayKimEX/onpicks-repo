import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FaqComponent} from './pages/index/faq/faq.component';

const routes: Routes = [
  {
    path: '',
    children : [
      {
        path : '',
        redirectTo : 'faq',
        pathMatch : 'full',
      },
      {
        path: 'faq',
        component: FaqComponent,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelpRoutingModule { }
