// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { DirectivesModule } from '../core/directives/directives.module';
import { PipeModule } from '../core/pipe/pipe.module';

import { ShopsRoutingModule } from './shops-routing.module';
import { UiModule } from '../ui/ui.module';
import { ShopsIndexComponent } from './pages/index/shops-index.component';;
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
