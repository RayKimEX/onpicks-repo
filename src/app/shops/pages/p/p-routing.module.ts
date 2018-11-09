import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PComponent} from './pages/p.component';

const routes: Routes = [
  {
    path : '',
    component : PComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PRoutingModule { }
