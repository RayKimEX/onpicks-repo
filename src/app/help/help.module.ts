import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelpRoutingModule } from './help-routing.module';
import { HelpNavigatorComponent } from './components/help-navigator/help-navigator.component';
import { FaqComponent } from './pages/index/faq/faq.component';
import { AboutProductComponent } from './pages/index/about-product/about-product.component';
import { ReturnComponent } from './pages/index/return/return.component';
import { ImportComponent } from './pages/index/import/import.component';
import { RefundPolicyComponent } from './pages/index/refund/refund-policy.component';
import {HelpIndexComponent} from './pages/index/help-index.component';

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
    RefundPolicyComponent,
    ImportComponent,
  ]
})
export class HelpModule { }
