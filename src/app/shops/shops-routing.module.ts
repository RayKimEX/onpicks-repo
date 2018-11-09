import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PComponent } from './pages/p/pages/p.component';
import {ShopsIndexComponent} from './pages/shops-index.component';
import {PantryAndHouseholdComponent} from './pages/c/index/pantry-and-household/pantry-and-household.component';
import {FashionComponent} from './pages/c/index/fashion/fashion.component';
import {HomeComponent} from './pages/c/index/home/home.component';
import {ElectronicsComponent} from './pages/c/index/electronics/electronics.component';
import {BeautyComponent} from './pages/c/index/beauty/beauty.component';
import {CIndexComponent} from './pages/c/index/c-index.component';
import {PModule} from './pages/p/p.module';

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
        loadChildren: './pages/p/p.module#PModule'
      }

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopsRoutingModule { }
