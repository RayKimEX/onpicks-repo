import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ShopsModule} from './shops/shops.module';


const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'shops',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'shops',
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
