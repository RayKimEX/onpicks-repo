import { CommonModule } from '@angular/common';
import { ShopsRoutingModule } from './shops-routing.module';
import { UiModule } from '../ui/ui.module';
import { DirectivesModule } from '../core/directives/directives.module';
import { PipeModule } from '../core/pipe/pipe.module';
import { ShopsIndexComponent } from './pages/index/shops-index.component';;

import { NgModule } from '@angular/core';
import { PageSearchComponent } from './pages/index/search/page-search/page-search.component';

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
