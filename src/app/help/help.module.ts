import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelpRoutingModule } from './help-routing.module';
import { HelpNavigatorComponent } from './components/help-navigator/help-navigator.component';
import { FaqComponent } from './pages/faq/faq.component';
import { HelpIndexComponent } from './pages/help-index/help-index.component';
import { AboutProductComponent } from './pages/about-product/about-product.component';
import { ReturnComponent } from './pages/return/return.component';
import { RefundComponent } from './pages/refund/refund.component';
import { ImportComponent } from './pages/import/import.component';

@NgModule({
  imports: [
    CommonModule,
    HelpRoutingModule
  ],
  declarations: [
    HelpNavigatorComponent,
    FaqComponent,
    HelpIndexComponent,
    AboutProductComponent,
    ReturnComponent,
    RefundComponent,
    ImportComponent
  ]
})
export class HelpModule { }
