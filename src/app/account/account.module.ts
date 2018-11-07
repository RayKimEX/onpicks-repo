import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { FeedComponent } from './pages/feed/feed.component';
import { WishListComponent } from './pages/wish-list/wish-list.component';
import { AccountProfileComponent } from './components/shared/account-profile/account-profile.component';
import {AccountIndexComponent} from './pages/index/account-index.component';
import { DeliveryAddressComponent } from './pages/settings/delivery-address/delivery-address.component';
import { ProfileComponent } from './pages/settings/profile/profile.component';
import { RefundComponent } from './pages/settings/refund/refund.component';
import {SettingsIndexComponent} from './pages/settings/index/settings-index.component';
import {UiModule} from '../ui/ui.module';
import { WrittenReviewsComponent } from './pages/my-reviews/written-reviews/written-reviews.component';
import { AvailableReviewsComponent } from './pages/my-reviews/available-reviews/available-reviews.component';
import { MyReviewsIndexComponent } from './pages/my-reviews/index/my-reviews-index/my-reviews-index.component';
import {DirectivesModule} from '../core/directives/directives.module';
import {PipeModule} from '../core/pipe/pipe.module';
import { OrdersComponent } from './pages/my-shopping/orders/orders.component';
import { CreditsComponent } from './pages/my-shopping/credits/credits.component';
import {MyShoppingIndexComponent} from './pages/my-shopping/index/my-shopping-index.component';

@NgModule({
  imports: [
    CommonModule,
    AccountRoutingModule,
    UiModule,
    DirectivesModule,
    PipeModule
  ],
  declarations: [
    FeedComponent,
    WishListComponent,
    AccountProfileComponent,
    AccountIndexComponent,
    SettingsIndexComponent,
    DeliveryAddressComponent,
    ProfileComponent,
    RefundComponent,
    WrittenReviewsComponent,
    AvailableReviewsComponent,
    MyReviewsIndexComponent,
    MyShoppingIndexComponent,
    OrdersComponent,
    CreditsComponent
  ]
})
export class AccountModule { }


