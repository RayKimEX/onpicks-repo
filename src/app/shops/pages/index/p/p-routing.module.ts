import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PIndexComponent } from './pages/index/p-index.component';
import { CommunicateBoxComponent } from './pages/index/reviews/communicate-box.component';

const routes: Routes = [
  {
    path : '',
    component : PIndexComponent,
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
