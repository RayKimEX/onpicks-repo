import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CRoutingModule } from './c-routing.module';
import {PantryAndHouseholdComponent} from './pages/index/pantry-and-household/index/pantry-and-household.component';
import {BeautyIndexComponent} from './pages/index/beauty/index/beauty-index.component';
import {ElectronicsComponent} from './pages/index/electronics/electronics.component';
import {FashionComponent} from './pages/index/fashion/fashion.component';
import {CIndexComponent} from './pages/index/c-index.component';
import {PageGroceryComponent} from './pages/index/pantry-and-household/index/grocery/page-grocery.component';
import {PageHouseholdSuppliesComponent} from './pages/index/pantry-and-household/index/household-supplies/page-household-supplies.component';
import {PagePersonalCareComponent} from './pages/index/pantry-and-household/index/personal-care/page-personal-care.component';
import {PageHealthComponent} from './pages/index/pantry-and-household/index/health/page-health.component';
import {PageBabyComponent} from './pages/index/pantry-and-household/index/baby/page-baby.component';
import {PagePetSuppliesComponent} from './pages/index/pantry-and-household/index/pet-supplies/page-pet-supplies.component';
import {PageOfficeSuppliesComponent} from './pages/index/pantry-and-household/index/office-supplies/page-office-supplies.component';
import {UiModule} from '../../../../ui/ui.module';
import {DirectivesModule} from '../../../../core/directives/directives.module';
import {PipeModule} from '../../../../core/pipe/pipe.module';
import {HomeComponent} from './pages/index/home/home.component';
import {StoreModule} from '@ngrx/store';
import {CReducer} from './store/c.reducer';
import { PageSkincareComponent } from './pages/index/beauty/index/skincare/page-skincare.component';
import {PageHairComponent} from './pages/index/beauty/index/hair/page-hair.component';
import {PageFragranceComponent} from './pages/index/beauty/index/fragrance/page-fragrance.component';
import {PageMenComponent} from './pages/index/beauty/index/men/page-men.component';
import {PageBathAndBodyComponent} from './pages/index/beauty/index/bath-and-body/page-bath-and-body.component';
import {PageMakeupComponent} from './pages/index/beauty/index/makeup/page-makeup.component';

@NgModule({
  imports: [
    CommonModule,
    CRoutingModule,

    UiModule,
    DirectivesModule,
    PipeModule,
    StoreModule.forFeature('c', CReducer),
  ],
  declarations: [
    PantryAndHouseholdComponent,
    BeautyIndexComponent,
    HomeComponent,
    ElectronicsComponent,
    FashionComponent,
    CIndexComponent,
    PageGroceryComponent,
    PageHouseholdSuppliesComponent,
    PagePersonalCareComponent,
    PageHealthComponent,
    PageBabyComponent,
    PagePetSuppliesComponent,
    PageOfficeSuppliesComponent,

    PageSkincareComponent,
    PageHairComponent,
    PageFragranceComponent,
    PageMenComponent,
    PageBathAndBodyComponent,
    PageMakeupComponent,
  ]
})
export class CModule { }
