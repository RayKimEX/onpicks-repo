import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PRoutingModule } from './p-routing.module';
import {PComponent} from './pages/p.component';
import {PCustomerComponent} from './components/p-customer/p-customer.component';
import {PDescriptionComponent} from './components/p-description/p-description.component';
import {PMenuComponent} from './components/p-menu/p-menu.component';
import {PReviewsComponent} from './components/p-reviews/p-reviews.component';
import {PThumbnailComponent} from './components/p-thumbnail/p-thumbnail.component';
import {PItemDetailComponent} from './components/p-item-detail/p-item-detail.component';
import {POtherSellersComponent} from './components/p-other-sellers/p-other-sellers.component';
import {UiModule} from '../../../ui/ui.module';
import {DirectivesModule} from '../../../core/directives/directives.module';
import {PipeModule} from '../../../core/pipe/pipe.module';
import {PReducer} from './pages/store/p.reducer';
import {StoreModule} from '@ngrx/store';

@NgModule({
  imports: [
    CommonModule,
    UiModule,
    DirectivesModule,
    PipeModule,
    PRoutingModule,
    StoreModule.forFeature('p', PReducer),

  ],
  declarations: [
    PComponent,

    PCustomerComponent,
    PDescriptionComponent,
    PMenuComponent,

    PReviewsComponent,
    PThumbnailComponent,
    PItemDetailComponent,

    POtherSellersComponent,
  ]
})
export class PModule { }
