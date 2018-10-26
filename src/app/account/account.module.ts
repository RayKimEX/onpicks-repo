import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { FeedComponent } from './pages/feed/feed.component';
import { MyShoppingComponent } from './pages/my-shopping/my-shopping.component';
import { MyReviewsComponent } from './pages/my-reviews/my-reviews.component';
import { WishListComponent } from './pages/wish-list/wish-list.component';
import { AccountProfileComponent } from './components/shared/account-profile/account-profile.component';
import {AccountIndexComponent} from './pages/index/account-index.component';


@NgModule({
  imports: [
    CommonModule,
    AccountRoutingModule
  ],
  declarations: [
    FeedComponent,
    MyShoppingComponent,
    MyReviewsComponent,
    WishListComponent,
    AccountProfileComponent,
    AccountIndexComponent
  ]
})
export class AccountModule { }


