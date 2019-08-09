import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

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
];

@NgModule({
  imports: [

    /* TODO : review에서 anchorScrolling 구현요망*/
    RouterModule.forRoot( appRoutes , {
      anchorScrolling : 'enabled',
      onSameUrlNavigation : 'reload',
    })
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
