import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FeedComponent} from './pages/index/feed/feed.component';
import {WishListComponent} from './pages/index/wish-list/wish-list.component';
import {AccountIndexComponent} from './pages/index/account-index.component';
import {SettingsIndexComponent} from './pages/index/settings/index/settings-index.component';
import {ProfileComponent} from './pages/index/settings/index/profile/profile.component';
import {PageDeliveryAddressComponent} from './pages/index/settings/index/delivery-address/page-delivery-address.component';
import {RefundComponent} from './pages/index/settings/index/refund/refund.component';
import {MyReviewsIndexComponent} from './pages/index/my-reviews/index/my-reviews-index.component';
import {WrittenReviewsComponent} from './pages/index/my-reviews/index/written-reviews/written-reviews.component';
import {AvailableReviewsComponent} from './pages/index/my-reviews/index/available-reviews/available-reviews.component';
import {MyShoppingIndexComponent} from './pages/index/my-shopping/index/my-shopping-index.component';
import {OrdersComponent} from './pages/index/my-shopping/index/orders/orders.component';
import {CreditsComponent} from './pages/index/my-shopping/index/credits/credits.component';
import {OrdersDetailComponent} from './pages/index/my-shopping/index/orders-detail/orders-detail.component';
import {AuthGuard} from '../core/service/auth/auth.guard';
// import {SettingsComponent} from './pages/settings/settings.component';

const routes: Routes = [
  {
    path : '',
    component : AccountIndexComponent,
    canActivate : [AuthGuard],
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
            children : [
              {
                path : '',
                component : OrdersDetailComponent
              },
              {
                path : ':id',
                component : OrdersDetailComponent
              }
            ]

          }
        ]
      },
      {
        path : 'my-reviews',
        component : MyReviewsIndexComponent,
        children : [
          {
            path : '',
            redirectTo : 'written',
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
            component: PageDeliveryAddressComponent,
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
