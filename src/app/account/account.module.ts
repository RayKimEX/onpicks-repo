import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountRoutingModule } from './account-routing.module';
import { FeedComponent } from './pages/index/feed/feed.component';
import { WishListComponent } from './pages/index/wish-list/wish-list.component';
import { AccountIndexComponent } from './pages/index/account-index.component';
import { PageDeliveryAddressComponent } from './pages/index/settings/index/delivery-address/page-delivery-address.component';
import { ProfileComponent } from './pages/index/settings/index/profile/profile.component';
import { RefundComponent } from './pages/index/settings/index/refund/refund.component';
import { SettingsIndexComponent } from './pages/index/settings/index/settings-index.component';
import { UiModule } from '../ui/ui.module';
import { WrittenReviewsComponent } from './pages/index/my-reviews/index/written-reviews/written-reviews.component';
import { AvailableReviewsComponent } from './pages/index/my-reviews/index/available-reviews/available-reviews.component';
import { MyReviewsIndexComponent } from './pages/index/my-reviews/index/my-reviews-index.component';
import { DirectivesModule } from '../core/directives/directives.module';
import { PipeModule } from '../core/pipe/pipe.module';
import { OrdersComponent } from './pages/index/my-shopping/index/orders/orders.component';
import { CreditsComponent } from './pages/index/my-shopping/index/credits/credits.component';
import { MyShoppingIndexComponent } from './pages/index/my-shopping/index/my-shopping-index.component';
import { OrdersDetailComponent } from './pages/index/my-shopping/index/orders-detail/orders-detail.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { WriteReviewComponent } from './components/emitter/write-review/write-review.component';
import { DeliveryAddressComponent } from './components/emitter/delivery-address/delivery-address.component';

@NgModule({
  imports: [
    CommonModule,
    AccountRoutingModule,
    UiModule,
    DirectivesModule,
    PipeModule,
    InfiniteScrollModule,
  ],
  declarations: [
    FeedComponent,
    WishListComponent,
    AccountIndexComponent,
    SettingsIndexComponent,
    PageDeliveryAddressComponent,
    ProfileComponent,
    RefundComponent,
    WrittenReviewsComponent,
    AvailableReviewsComponent,
    MyReviewsIndexComponent,
    MyShoppingIndexComponent,
    OrdersComponent,
    CreditsComponent,
    OrdersDetailComponent,
    WriteReviewComponent,
  ]
})

export class AccountModule { }


