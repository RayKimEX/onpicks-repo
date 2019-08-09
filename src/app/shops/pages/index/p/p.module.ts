
// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { PPictureReviewComponent } from './components/index/pure/p-picture-review/p-picture-review.component';
import { PDescriptionComponent } from './components/index/pure/p-description/p-description.component';
import { PMenuComponent } from './components/index/pure/p-menu/p-menu.component';
import { PReviewsComponent } from './components/index/pure/p-reviews/p-reviews.component';
import { PThumbnailComponent } from './components/index/pure/p-thumbnail/p-thumbnail.component';
import { PItemDetailComponent } from './components/index/pure/p-item-detail/p-item-detail.component';
import { PRefundComponent } from './components/index/pure/p-refund/p-refund.component';
import { PProductReportComponent } from './components/index/pure/p-product-report/p-product-report.component';
import { POtherSellersComponent } from './components/index/pure/p-other-sellers/p-other-sellers.component';
import { PIndexComponent } from './pages/index/p-index.component';

// Modules
import { DirectivesModule } from '../../../../core/directives/directives.module';
import { PipeModule } from '../../../../core/pipe/pipe.module';
import { PRoutingModule } from './p-routing.module';
import { UiModule } from '../../../../ui/ui.module';

// Store
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { PEffects } from './store/p.effects';
import { PReducer } from './store/p.reducer';

@NgModule({
  imports: [
    CommonModule,
    UiModule,
    DirectivesModule,
    PipeModule,
    PRoutingModule,
    StoreModule.forFeature('p', PReducer),
    EffectsModule.forFeature([PEffects])

  ],
  declarations: [
    PIndexComponent,

    PPictureReviewComponent,
    PDescriptionComponent,
    PMenuComponent,

    PReviewsComponent,
    PThumbnailComponent,
    PItemDetailComponent,

    PRefundComponent,
    PProductReportComponent,
    POtherSellersComponent,
  ]
})
export class PModule { }
