import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { LOCALE_ID, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UiModule } from './ui/ui.module';
import { ShopsModule } from './shops/shops.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { reducers } from './core/store/app.reducer';
import { DirectivesModule } from './core/directives/directives.module';
import { FooterComponent } from './ui/onpicks/ui/footer/footer.component';
import { HeaderComponent } from './ui/onpicks/ui/header/header.component';
import { ShowcasesComponent } from './showcases/pages/showcases/showcases.component';
import { ShowcasesModule } from './showcases/showcases.module';
import { APP_BASE_HREF } from '@angular/common';
import { TermsModule } from './terms/terms.module';
import { HelpModule } from './help/help.module';
import {OrderModule} from './order/order.module';
import {MemberModule} from './member/member.module';
import {AccountModule} from './account/account.module';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {EffectsModule} from '@ngrx/effects';
import {AuthEffects} from './core/store/auth/auth.effects';
import {DOMAIN_HOST} from './app.config';

// export function getBaseHref(platformLocation: PlatformLocation): string {
//   return platformLocation.getBaseHrefFromDOM();
// }

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ShowcasesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,


    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    // Common Module
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([AuthEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    }),
    DirectivesModule,
    UiModule,
    ///

    ShopsModule,
    ShowcasesModule,
    TermsModule,
    HelpModule,
    OrderModule,
    MemberModule,
    AccountModule
  ],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: '/' + (window.location.pathname.split('/')[1] || '')
    },
    {
      provide: LOCALE_ID,
      useValue : 'ko'
    },
    {
      provide: DOMAIN_HOST,
      useValue : window.location.origin
    }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
// import { AuthEffects } from './auth/store/auth.effects';

// @NgModule({
//   declarations: [
//     AppComponent
//   ],
//   imports: [
//     BrowserModule,
//     HttpClientModule,
//     AppRoutingModule,
//     SharedModule,
//     ShoppingListModule,
//     AuthModule,
//     CoreModule,
//     StoreModule.forRoot(reducers),
//     EffectsModule.forRoot([AuthEffects]),
//     StoreRouterConnectingModule,
//     !environment.production ? StoreDevtoolsModule.instrument() : []
//   ],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
