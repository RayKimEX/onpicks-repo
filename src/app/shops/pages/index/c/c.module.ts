
// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Component
import { PantryAndHouseholdComponent } from './pages/index/pantry-and-household/index/pantry-and-household.component';
import { BeautyIndexComponent } from './pages/index/beauty/index/beauty-index.component';
import { ElectronicsComponent } from './pages/index/electronics/electronics.component';
import { FashionComponent } from './pages/index/fashion/fashion.component';
import { CIndexComponent } from './pages/index/c-index.component';
import { HomeComponent } from './pages/index/home/home.component';


import { CReducer } from './store/c.reducer';

// Module
import { UiModule } from '../../../../ui/ui.module';
import { DirectivesModule } from '../../../../core/directives/directives.module';
import { PipeModule } from '../../../../core/pipe/pipe.module';
import { CRoutingModule } from './c-routing.module';
import { StoreModule } from '@ngrx/store';

// Page
import { PageSkinCareComponent } from './pages/index/beauty/index/skin-care/page-skin-care.component';
import { PageHairCareComponent } from './pages/index/beauty/index/hair-care/page-hair-care.component';
import { PageFragranceComponent } from './pages/index/beauty/index/fragrance/page-fragrance.component';
import { PageMenGroomingComponent } from './pages/index/beauty/index/mens-grooming/page-mens-grooming.component';
import { PageBodyCareComponent } from './pages/index/beauty/index/body-care/page-body-care.component';
import { PageMakeupComponent } from './pages/index/beauty/index/makeup/page-makeup.component';
import { PageCleansingAndPeelingComponent } from './pages/index/beauty/index/cleansing-and-peeling/page-cleansing-and-peeling.component';
import { PageSunCareComponent } from './pages/index/beauty/index/sun-care/page-sun-care.component';
import { PageCandleAndDiffuserComponent } from './pages/index/beauty/index/candle-and-diffuser/page-candle-and-diffuser.component';
import { PageKBeautyComponent } from './pages/index/beauty/index/k-beauty/page-k-beauty.component';
import { PageGroceryComponent } from './pages/index/pantry-and-household/index/grocery/page-grocery.component';
import { PageHouseholdSuppliesComponent } from './pages/index/pantry-and-household/index/household-supplies/page-household-supplies.component';
import { PagePersonalCareComponent } from './pages/index/pantry-and-household/index/personal-care/page-personal-care.component';
import { PageHealthComponent } from './pages/index/pantry-and-household/index/health/page-health.component';
import { PageBabyComponent } from './pages/index/pantry-and-household/index/baby/page-baby.component';
import { PagePetSuppliesComponent } from './pages/index/pantry-and-household/index/pet-supplies/page-pet-supplies.component';
import { PageOfficeSuppliesComponent } from './pages/index/pantry-and-household/index/office-supplies/page-office-supplies.component';

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

    PageSkinCareComponent,
    PageHairCareComponent,
    PageFragranceComponent,
    PageMenGroomingComponent,
    PageBodyCareComponent,
    PageMakeupComponent,
    PageCleansingAndPeelingComponent,
    PageSunCareComponent,
    PageCandleAndDiffuserComponent,
    PageKBeautyComponent,
  ]
})
export class CModule { }
