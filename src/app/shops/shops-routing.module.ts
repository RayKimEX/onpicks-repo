import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShopsIndexComponent} from './pages/index/shops-index.component';
import {PageSearchComponent} from './pages/index/search/page-search/page-search.component';

const routes: Routes = [
  {
    path: 'shops',

    children : [
      {
        path: '',
        component : ShopsIndexComponent,
      },
      {
        path : 'c',
        loadChildren: './pages/index/c/c.module#CModule'
      },
      {
        path : 'p/:id',
        loadChildren: './pages/index/p/p.module#PModule'
      },
      {
        path : 'search',
        component : PageSearchComponent,
      }

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopsRoutingModule { }
