import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PComponent } from './pages/p/p.component';
import {CComponent} from './pages/c/c.component';

const routes: Routes = [
  {
    path: 'shops/c/foods',
    component: CComponent,
  },
  {
    path: 'shops/p/1',
    component: PComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopsRoutingModule { }
