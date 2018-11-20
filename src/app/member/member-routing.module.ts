import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignupComponent} from './pages/signup/signup.component';
import {LoginComponent} from './pages/login/login.component';
import {ForgotPasswordComponent} from './pages/forgot-password/forgot-password.component';

const routes: Routes = [
  {
    path : '',
    children : [
      {
        path : 'signup',
        component : SignupComponent,
      },
      {
        path : 'login',
        component : LoginComponent,
      },
      {
        path : 'forgot-password',
        component : ForgotPasswordComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberRoutingModule { }
