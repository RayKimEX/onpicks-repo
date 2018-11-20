import { CommonModule } from '@angular/common';
import { ShopsRoutingModule } from './shops-routing.module';
import { UiModule } from '../ui/ui.module';
import { DirectivesModule } from '../core/directives/directives.module';
import { PipeModule } from '../core/pipe/pipe.module';
import { ShopsIndexComponent } from './pages/index/shops-index.component';;

import { NgModule } from '@angular/core';
import { PageSearchComponent } from './pages/index/search/page-search/page-search.component';

// TODO : Shops에만 너무 많은 기능들이 몰려있는데. Shops만 lazyLoading하는게 의미 있는지 모르겠음.
// TODO : Depth를 더 여러개로 쪼개서 Module Refactoring 해야할것 같다. URL기준으로 파일 구성하는게 맞아보이는데,

@NgModule({
  imports: [
    CommonModule,
    ShopsRoutingModule,

    UiModule,
    DirectivesModule,
    PipeModule
  ],
  declarations: [
    ShopsIndexComponent,
    PageSearchComponent,
  ]
})
export class ShopsModule { }
