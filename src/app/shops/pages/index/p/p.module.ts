import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PRoutingModule } from './p-routing.module';
import {PIndexComponent} from './pages/index/p-index.component';
import {PPictureReviewComponent} from './components/index/pure/p-picture-review/p-picture-review.component';
import {PDescriptionComponent} from './components/index/pure/p-description/p-description.component';
import {PMenuComponent} from './components/index/pure/p-menu/p-menu.component';
import {PReviewsComponent} from './components/index/pure/p-reviews/p-reviews.component';
import {PThumbnailComponent} from './components/index/pure/p-thumbnail/p-thumbnail.component';
import {PItemDetailComponent} from './components/index/pure/p-item-detail/p-item-detail.component';
import {UiModule} from '../../../../ui/ui.module';
import { DirectivesModule } from '../../../../core/directives/directives.module';
import { PipeModule } from '../../../../core/pipe/pipe.module';
import { PReducer } from './store/p.reducer';
import { StoreModule } from '@ngrx/store';
import { PRefundComponent } from './components/index/pure/p-refund/p-refund.component';
import { EffectsModule } from '@ngrx/effects';
import { PEffects } from './store/p.effects';
import { PProductReportComponent } from './components/index/pure/p-product-report/p-product-report.component';

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
    PProductReportComponent
  ]
})
export class PModule { }
