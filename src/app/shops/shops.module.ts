import {InjectionToken, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopsRoutingModule } from './shops-routing.module';
import { PComponent } from './pages/p/p.component';
import { PDescriptionComponent } from './components/p/p-description/p-description.component';
import { PItemDetailComponent } from './components/p/p-item-detail/p-item-detail.component';
import { PMenuComponent } from './components/p/p-menu/p-menu.component';
import { POtherSellersComponent } from './components/p/p-other-sellers/p-other-sellers.component';
import { PReviewsComponent } from './components/p/p-reviews/p-reviews.component';
import { PThumbnailComponent } from './components/p/p-thumbnail/p-thumbnail.component';
import { PCustomerComponent } from './components/p/p-customer/p-customer.component';
import { CComponent } from './pages/c/c.component';
import { UiModule } from '../ui/ui.module';
import {  StoreModule } from '@ngrx/store';
import { PReducer } from './pages/p/store/p.reducer';
import { DirectivesModule } from '../core/directives/directives.module';
import { PipeModule } from '../core/pipe/pipe.module';
import { ShopsIndexComponent } from './pages/index/shops-index.component';

// TODO : Shops에만 너무 많은 기능들이 몰려있는데. Shops만 lazyLoading하는게 의미 있는지 모르겠음.
// TODO : Depth를 더 여러개로 쪼개서 Module Refactoring 해야할것 같다. URL기준으로 파일 구성하는게 맞아보이는데,

@NgModule({
  imports: [
    CommonModule,
    ShopsRoutingModule,
    StoreModule.forFeature('p', PReducer),
    UiModule,
    DirectivesModule,
    PipeModule
  ],
  declarations: [
    PComponent,
    CComponent,

    PCustomerComponent,
    PDescriptionComponent,
    PMenuComponent,
    POtherSellersComponent,
    PReviewsComponent,
    PThumbnailComponent,
    PItemDetailComponent,

    //
    ShopsIndexComponent

  ]
})
export class ShopsModule { }
