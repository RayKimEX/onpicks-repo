import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PComponent } from './pages/p/p.component';
import {ShopsIndexComponent} from './pages/index/shops-index.component';
import {PantryAndHouseholdComponent} from './pages/c/pantry-and-household/pantry-and-household.component';
import {FashionComponent} from './pages/c/fashion/fashion.component';
import {HomeComponent} from './pages/c/home/home.component';
import {ElectronicsComponent} from './pages/c/electronics/electronics.component';
import {BeautyComponent} from './pages/c/beauty/beauty.component';
import {CIndexComponent} from './pages/c/index/c-index.component';

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
        path : 'c',
        component : CIndexComponent,
        children : [
          {
            path: 'pantry-and-household',
            component: PantryAndHouseholdComponent,
          },
          {
            path: 'fashion',
            component: FashionComponent,
          },
          {
            path: 'home',
            component: HomeComponent,
          },
          {
            path: 'electronics',
            component: ElectronicsComponent,
          },
          {
            path: 'beauty',
            component: BeautyComponent,
          },
        ]
      },
      {
        path : 'p/:id',
        component : PComponent,
      }

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopsRoutingModule { }
