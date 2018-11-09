import { InjectionToken, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopsRoutingModule } from './shops-routing.module';
import { PComponent } from './pages/p/pages/p.component';
import { PDescriptionComponent } from './pages/p/components/p-description/p-description.component';
import { PItemDetailComponent } from './pages/p/components/p-item-detail/p-item-detail.component';
import { PMenuComponent } from './pages/p/components/p-menu/p-menu.component';
import { POtherSellersComponent } from './pages/p/components/p-other-sellers/p-other-sellers.component';
import { PReviewsComponent } from './pages/p/components/p-reviews/p-reviews.component';
import { PThumbnailComponent } from './pages/p/components/p-thumbnail/p-thumbnail.component';
import { PCustomerComponent } from './pages/p/components/p-customer/p-customer.component';
import { UiModule } from '../ui/ui.module';
import { StoreModule } from '@ngrx/store';
import { PReducer } from './pages/p/pages/store/p.reducer';
import { DirectivesModule } from '../core/directives/directives.module';
import { PipeModule } from '../core/pipe/pipe.module';
import { ShopsIndexComponent } from './pages/shops-index.component';;
import { BeautyComponent } from './pages/c/index/beauty/beauty.component';
import { HomeComponent } from './pages/c/index/home/home.component';
import { ElectronicsComponent } from './pages/c/index/electronics/electronics.component';
import {PantryAndHouseholdComponent} from './pages/c/index/pantry-and-household/pantry-and-household.component';
import {FashionComponent} from './pages/c/index/fashion/fashion.component';
import {CIndexComponent} from './pages/c/index/c-index.component';


// TODO : Shops에만 너무 많은 기능들이 몰려있는데. Shops만 lazyLoading하는게 의미 있는지 모르겠음.
// TODO : Depth를 더 여러개로 쪼개서 Module Refactoring 해야할것 같다. URL기준으로 파일 구성하는게 맞아보이는데,

@NgModule({
  imports: [
    CommonModule,
    ShopsRoutingModule,

    UiModule,
    DirectivesModule,
    PipeModule
  ],
  declarations: [

    //
    ShopsIndexComponent,
    PantryAndHouseholdComponent,
    BeautyComponent,
    HomeComponent,
    ElectronicsComponent,
    FashionComponent,
    CIndexComponent

  ]
})
export class ShopsModule { }
