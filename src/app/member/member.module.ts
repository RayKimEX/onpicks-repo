import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberRoutingModule } from './member-routing.module';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import {UiModule} from '../ui/ui.module';

@NgModule({
  imports: [
    CommonModule,
    MemberRoutingModule,
    UiModule
  ],
  declarations: [
    SignupComponent,
    LoginComponent,
    ForgotPasswordComponent
  ]
})
export class MemberModule { }
