import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ShopsModule} from './shops/shops.module';
//
// import { ShowcasesModule } from './showcases/showcases.module';
// import { APP_BASE_HREF } from '@angular/common';
// import { TermsModule } from './terms/terms.module';
// import { HelpModule } from './help/help.module';
// import {OrderModule} from './order/order.module';
// import {MemberModule} from './member/member.module';
// import {AccountModule} from './account/account.module';
const appRoutes: Routes = [
  {
    path : '',
    pathMatch : 'full',
    redirectTo : 'shops',
  },
  {
    path: 'showcases',
    loadChildren : './showcases/showcases.module#ShowcasesModule'
  },
  {
    path : 'order',
    loadChildren : './order/order.module#OrderModule'
  },
  {
    path: 'member',
    loadChildren : './member/member.module#MemberModule',
  },
  {
    path: 'account',
    loadChildren : './account/account.module#AccountModule',
  },
  {
    path: 'help',
    loadChildren : './help/help.module#HelpModule',
  },
  {
    path: 'terms',
    loadChildren : './terms/terms.module#TermsModule',
  }

  // { path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule'},
  // { path: 'shopping-list', component: ShoppingListComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot( appRoutes )
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }



// @NgModule({
//   imports: [
//     RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
//   ],
//   exports: [RouterModule]
// })
// export class AppRoutingModule {
//
// }
