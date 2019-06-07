import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TermsRoutingModule } from './terms-routing.module';
import { PrivacyComponent } from './pages/index/privacy/privacy.component';
import { TermsNavigatorComponent } from './components/terms-navigator/terms-navigator.component';
import { TermsIndexComponent } from './pages/index/terms-index.component';
import { TermsKrComponent } from './components/terms-kr/terms-kr.component';
import { TermsUsComponent } from './components/terms-us/terms-us.component';
import { PrivacyKrComponent } from './components/privacy-kr/privacy-kr.component';
import { PrivacyUsComponent } from './components/privacy-us/privacy-us.component';

@NgModule({
  imports: [
    CommonModule,
    TermsRoutingModule
  ],
  declarations: [
    PrivacyComponent,
    TermsNavigatorComponent,
    TermsIndexComponent,
    TermsKrComponent,
    TermsUsComponent,
    PrivacyKrComponent,
    PrivacyUsComponent
  ]
})
export class TermsModule { }
