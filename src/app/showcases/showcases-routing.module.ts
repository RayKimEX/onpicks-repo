import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShowcasesComponent} from './pages/showcases/showcases.component';

const routes: Routes = [
  {
    path: '',
    component: ShowcasesComponent
  },

];
// const routes: Routes = [
//   {
//     path: 'shops/c/foods',
//     component: CComponent,
//   },
//   {
//     path: 'shops/p/1',
//     component: PComponent,
//   }
// ];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowcasesRoutingModule { }
