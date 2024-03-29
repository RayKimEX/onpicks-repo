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
import {BeautyIndexComponent} from './pages/index/beauty/index/beauty-index.component';
import {PageSkinCareComponent} from './pages/index/beauty/index/skin-care/page-skin-care.component';
import {PageHairCareComponent} from './pages/index/beauty/index/hair-care/page-hair-care.component';
import {PageFragranceComponent} from './pages/index/beauty/index/fragrance/page-fragrance.component';
import {PageMakeupComponent} from './pages/index/beauty/index/makeup/page-makeup.component';
import {PageBodyCareComponent} from './pages/index/beauty/index/body-care/page-body-care.component';
import {PageMenGroomingComponent} from './pages/index/beauty/index/mens-grooming/page-mens-grooming.component';
import {PageCleansingAndPeelingComponent} from './pages/index/beauty/index/cleansing-and-peeling/page-cleansing-and-peeling.component';
import {PageSunCareComponent} from './pages/index/beauty/index/sun-care/page-sun-care.component';
import {PageCandleAndDiffuserComponent} from './pages/index/beauty/index/candle-and-diffuser/page-candle-and-diffuser.component';
import {PageKBeautyComponent} from './pages/index/beauty/index/k-beauty/page-k-beauty.component';

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
        children : [
          {
            path : '',
            component : BeautyIndexComponent,
          },
          {
            path : 'cleansing-and-peeling',
            children : [
              {
                path : '',
                component : PageCleansingAndPeelingComponent,
              },
              {
                path : ':id',
                component : PageCleansingAndPeelingComponent,
              },
              {
                path : ':id/:id',
                component : PageCleansingAndPeelingComponent,
              }
            ]
          },
          {
            path : 'sun-care',
            children : [
              {
                path : '',
                component : PageSunCareComponent,
              },
              {
                path : ':id',
                component : PageSunCareComponent,
              },
              {
                path : ':id/:id',
                component : PageSunCareComponent,
              }
            ]
          },
          {
            path : 'candle-and-diffuser',
            children : [
              {
                path : '',
                component : PageCandleAndDiffuserComponent,
              },
              {
                path : ':id',
                component : PageCandleAndDiffuserComponent,
              },
              {
                path : ':id/:id',
                component : PageCandleAndDiffuserComponent,
              }
            ]
          },
          {
            path : 'k-beauty',
            children : [
              {
                path : '',
                component : PageKBeautyComponent,
              },
              {
                path : ':id',
                component : PageKBeautyComponent,
              },
              {
                path : ':id/:id',
                component : PageKBeautyComponent,
              }
            ]
          },
          {
            path : 'skin-care',
            children : [
              {
                path : '',
                component : PageSkinCareComponent,
              },
              {
                path : ':id',
                component : PageSkinCareComponent,
              },
              {
                path : ':id/:id',
                component : PageSkinCareComponent,
              }
            ]
          },
          {
            path : 'hair-care',
            children : [
              {
                path : '',
                component : PageHairCareComponent,
              },
              {
                path : ':id',
                component : PageHairCareComponent,
              },
              {
                path : ':id/:id',
                component : PageHairCareComponent,
              }
            ]
          },
          {
            path : 'fragrance',
            children : [
              {
                path : '',
                component : PageFragranceComponent,
              },
              {
                path : ':id',
                component : PageFragranceComponent,
              },
              {
                path : ':id/:id',
                component : PageFragranceComponent,
              }
            ]
          },
          {
            path : 'makeup',
            children : [
              {
                path : '',
                component : PageMakeupComponent,
              },
              {
                path : ':id',
                component : PageMakeupComponent,
              },
              {
                path : ':id/:id',
                component : PageMakeupComponent,
              }
            ]
          },
          {
            path : 'body-care',
            children : [
              {
                path : '',
                component : PageBodyCareComponent,
              },
              {
                path : ':id',
                component : PageBodyCareComponent,
              },
              {
                path : ':id/:id',
                component : PageBodyCareComponent,
              }
            ]
          },
          {
            path : 'mens-grooming',
            children : [
              {
                path : '',
                component : PageMenGroomingComponent,
              },
              {
                path : ':id',
                component : PageMenGroomingComponent,
              },
              {
                path : ':id/:id',
                component : PageMenGroomingComponent,
              }
            ]
          },
        ]
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CRoutingModule { }

