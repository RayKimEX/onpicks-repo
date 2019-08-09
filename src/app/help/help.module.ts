
// Module
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelpRoutingModule } from './help-routing.module';

// Component
import { HelpNavigatorComponent } from './components/help-navigator/help-navigator.component';
import { FaqComponent } from './pages/index/faq/faq.component';
import { HelpIndexComponent } from './pages/index/help-index.component';
import { FaqKrComponent } from './components/faq-kr/faq-kr.component';
import { FaqUsComponent } from './components/faq-us/faq-us.component';

@NgModule({
  imports: [
    CommonModule,
    HelpRoutingModule
  ],
  declarations: [
    HelpNavigatorComponent,
    FaqComponent,
    HelpIndexComponent,
    FaqKrComponent,
    FaqUsComponent,
  ]
})
export class HelpModule { }
