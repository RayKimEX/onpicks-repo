import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PComponent} from './pages/index/p.component';
import {CommunicateBoxComponent} from './pages/index/reviews/communicate-box.component';

const routes: Routes = [
  {
    path : '',
    component : PComponent,
    children : [
      {
        path : 'reviews/:id',
        component : CommunicateBoxComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PRoutingModule { }
