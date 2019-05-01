import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TermsRoutingModule } from './terms-routing.module';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { TermsNavigatorComponent } from './components/terms-navigator/terms-navigator.component';
import { TermsIndexComponent } from './pages/index/terms-index.component';

@NgModule({
  imports: [
    CommonModule,
    TermsRoutingModule
  ],
  declarations: [
    PrivacyComponent,
    TermsNavigatorComponent,
    TermsIndexComponent
  ]
})
export class TermsModule { }
