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
    PCustomerComponent,
    PDescriptionComponent,
    PItemDetailComponent,
    PMenuComponent,
    POtherSellersComponent,
    PReviewsComponent,
    PThumbnailComponent,
    CComponent
  ]
})
export class ShopsModule { }
