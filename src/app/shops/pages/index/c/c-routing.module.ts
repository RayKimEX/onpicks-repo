import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CIndexComponent} from './pages/index/c-index.component';
import {PantryAndHouseholdComponent} from './pages/index/pantry-and-household/index/pantry-and-household.component';
import {PageGroceryComponent} from './pages/index/pantry-and-household/index/grocery/page-grocery.component';
import {PageHouseholdSuppliesComponent} from './pages/index/pantry-and-household/index/household-supplies/page-household-supplies.component';
import {PagePersonalCareComponent} from './pages/index/pantry-and-household/index/personal-care/page-personal-care.component';
import {PageHealthComponent} from './pages/index/pantry-and-household/index/health/page-health.component';
import {PageBabyComponent} from './pages/index/pantry-and-household/index/baby/page-baby.component';
import {PagePetSuppliesComponent} from './pages/index/pantry-and-household/index/pet-supplies/page-pet-supplies.component';
import {PageOfficeSuppliesComponent} from './pages/index/pantry-and-household/index/office-supplies/page-office-supplies.component';
import {FashionComponent} from './pages/index/fashion/fashion.component';
import {HomeComponent} from './pages/index/home/home.component';
import {ElectronicsComponent} from './pages/index/electronics/electronics.component';
import {BeautyComponent} from './pages/index/beauty/beauty.component';

const routes: Routes = [
  {
    path : '',
    component : CIndexComponent,
    children : [
      {
        path : 'pantry-and-household',
        children : [
          {
            path : '',
            component: PantryAndHouseholdComponent,
          },
          {
            path : 'grocery',
            children : [
              {
                path : '',
                component : PageGroceryComponent,
              },
              {
                path : ':id',
                component : PageGroceryComponent,
              },
              {
                path : ':id/:id',
                component : PageGroceryComponent,
              }
            ]
          },
          {
            path : 'household-supplies',
            children : [
              {
                path : '',
                component : PageHouseholdSuppliesComponent
              },
              {
                path : ':id',
                component : PageHouseholdSuppliesComponent
              },
              {
                path : ':id/:id',
                component : PageHouseholdSuppliesComponent
              }
            ]
          },
          {
            path : 'personal-care',
            component : PagePersonalCareComponent,
            children : [
              {
                path : '',
                component : PagePersonalCareComponent
              },
              {
                path : ':id',
                component : PagePersonalCareComponent
              },
              {
                path : ':id/:id',
                component : PagePersonalCareComponent
              }
            ]
          },
          {
            path : 'health',
            component : PageHealthComponent,
            children : [
              {
                path : '',
                component : PageHealthComponent
              },
              {
                path : ':id',
                component : PageHealthComponent
              },
              {
                path : ':id/:id',
                component : PageHealthComponent
              }
            ]
          },
          {
            path : 'baby',
            component : PageBabyComponent,
            children : [
              {
                path : '',
                component : PageBabyComponent
              },
              {
                path : ':id',
                component : PageBabyComponent
              },
              {
                path : ':id/:id',
                component : PageBabyComponent
              }
            ]
          },
          {
            path : 'pet-supplies',
            component : PagePetSuppliesComponent,
            children : [
              {
                path : '',
                component : PagePetSuppliesComponent
              },
              {
                path : ':id',
                component : PagePetSuppliesComponent
              },
              {
                path : ':id/:id',
                component : PagePetSuppliesComponent
              }
            ]
          },
          {
            path : 'office-supplies',
            component : PageOfficeSuppliesComponent,
            children : [
              {
                path : '',
                component : PageOfficeSuppliesComponent
              },
              {
                path : ':id',
                component : PageOfficeSuppliesComponent
              },
              {
                path : ':id/:id',
                component : PageOfficeSuppliesComponent
              }
            ]
          }
        ],
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CRoutingModule { }

