import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FeedComponent} from './pages/feed/feed.component';
import {MyShoppingComponent} from './pages/my-shopping/my-shopping.component';
import {MyReviewsComponent} from './pages/my-reviews/my-reviews.component';
import {WishListComponent} from './pages/wish-list/wish-list.component';
import {AccountIndexComponent} from './pages/index/account-index.component';

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
        component : MyShoppingComponent,
      },
      {
        path : 'my-reviews',
        component : MyReviewsComponent,
      },
      {
        path : 'wish-list',
        component : WishListComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
