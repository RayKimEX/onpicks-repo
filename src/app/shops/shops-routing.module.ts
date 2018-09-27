import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PComponent } from './pages/p/p.component';
import {CComponent} from './pages/c/c.component';
import {ShopsIndexComponent} from './pages/index/shops-index.component';

const routes: Routes = [
  {
    path: 'shops',
    children : [
      {
        path : '',
        component: ShopsIndexComponent,
        pathMatch : 'full',
      },
      {
        path: 'c/:id',
        component: CComponent,
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
export class ShopsRoutingModule { }
