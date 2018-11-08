import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FeedComponent} from './pages/feed/feed.component';
import {WishListComponent} from './pages/wish-list/wish-list.component';
import {AccountIndexComponent} from './pages/index/account-index.component';
import {SettingsIndexComponent} from './pages/settings/index/settings-index.component';
import {ProfileComponent} from './pages/settings/profile/profile.component';
import {DeliveryAddressComponent} from './pages/settings/delivery-address/delivery-address.component';
import {RefundComponent} from './pages/settings/refund/refund.component';
import {MyReviewsIndexComponent} from './pages/my-reviews/index/my-reviews-index/my-reviews-index.component';
import {WrittenReviewsComponent} from './pages/my-reviews/written-reviews/written-reviews.component';
import {AvailableReviewsComponent} from './pages/my-reviews/available-reviews/available-reviews.component';
import {MyShoppingIndexComponent} from './pages/my-shopping/index/my-shopping-index.component';
import {OrdersComponent} from './pages/my-shopping/orders/orders.component';
import {CreditsComponent} from './pages/my-shopping/credits/credits.component';
import {OrdersDetailComponent} from './pages/my-shopping/orders-detail/orders-detail.component';
// import {SettingsComponent} from './pages/settings/settings.component';

const routes: Routes = [
  {
    path : 'account',
    component : AccountIndexComponent,
    children : [
      {
        path : '',
        redirectTo : 'feed',
        pathMatch : 'full'
      },
      {
        path : 'feed',
        component : FeedComponent,
      },
      {
        path : 'my-shopping',
        component : MyShoppingIndexComponent,
        children : [
          {
            path : '',
            redirectTo : 'orders',
            pathMatch : 'full'
          },
          {
            path : 'orders',
            component : OrdersComponent,
          },
          {
            path : 'credits',
            component : CreditsComponent
          },
          {
            path : 'orders-detail',
            component : OrdersDetailComponent
          }
        ]
      },
      {
        path : 'my-reviews',
        component : MyReviewsIndexComponent,
        children : [
          {
            path : '',
            redirectTo : 'written-reviews',
            pathMatch : 'full'
          },
          {
            path : 'written',
            component : WrittenReviewsComponent
          },
          {
            path : 'available',
            component : AvailableReviewsComponent
          }

        ]
      },
      {
        path : 'wish-list',
        component : WishListComponent,
      },
      // TODO : 이부분에 대해서 folder structure는 settingsIndex 안에 pages폴더를 만들고, 다시 그 구조를 만들어 낼수 있지만, 일단은 그냥. 그 안에 pages라고 가정하고 component들을 임시로 만듬.
      {
        path : 'settings',
        component : SettingsIndexComponent,
        children : [
          {
            path : '',
            redirectTo : 'profile',
            pathMatch : 'full'
          },
          {
            path : 'profile',
            component: ProfileComponent,
          },
          {
            path : 'delivery-address',
            component: DeliveryAddressComponent,
          },
          {
            path : 'refund',
            component: RefundComponent,
          },
          {
            path : 'profile',
            component: ProfileComponent,
          },
        ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
