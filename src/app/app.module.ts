import {BrowserModule, BrowserTransferStateModule} from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import {isDevMode, LOCALE_ID, NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UiModule } from './ui/ui.module';
import { ShopsModule } from './shops/shops.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { reducers } from './core/store/app.reducer';
import { DirectivesModule } from './core/directives/directives.module';
import { FooterComponent } from './ui/pure/onpicks/item/footer/footer.component';
import { HeaderComponent } from './ui/pure/onpicks/item/header/header.component';
import { APP_BASE_HREF } from '@angular/common';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {EffectsModule} from '@ngrx/effects';
import {AuthEffects} from './core/store/auth/auth.effects';
import {
  BREAKPOINT,
  CURRENCY,
  DOMAIN_HOST, IMAGE_HOST,
  LOCATION_MAP,
  LOCATION_MAP_CONST, PAYPAL_API_KEY, PAYPAL_API_KEY_TOKEN, REGION_ID,
  RESPONSIVE_MAP,
  RESPONSIVE_MAP_CONST, STRIPE_API_KEY, STRIPE_API_KEY_TOKEN
} from './core/global-constant/app.config';
import {AuthInterceptorService} from './core/service/interceptor/auth-interceptor.service';
import {UiEffects} from './core/store/ui/ui.effects';
import {CartEffects} from './core/store/cart/cart.effects';
import {SearchEffects} from './core/store/search/search.effects';
import {BreakpointObserver, LayoutModule} from '@angular/cdk/layout';
import {BehaviorSubject} from 'rxjs';
import {CATEGORY_CODE_MAP, CATEGORY_CODE_MAP_CONST, CATEGORY_MAP, CATEGORY_MAP_CONST, CATEGORY_REPORT_MAP, CATEGORY_REPORT_MAP_CONST} from './core/global-constant/app.category-database-long';
import {CATEGORY_SECOND_MAP, CATEGORY_SECOND_MAP_CONST} from './core/global-constant/app.category-database-short';
import {DISPLAY_ALERT_MESSAGE_MAP, DISPLAY_ALERT_MESSAGE_MAP_CONST, MENU_MAP, MENU_MAP_CONST, PREFERENCE_MAP, PREFERENCE_MAP_CONST, REPORT_REASON_MAP, REPORT_REASON_MAP_CONST, TITLE_MAP, TITLE_MAP_CONST} from './core/global-constant/app.locale';
import {STATE_LIST, STATE_LIST_CONST} from './core/global-constant/app.database';
import {DISPLAY_ALERT_MESSAGE} from './core/store/ui/ui.actions';
import {environment} from '../environments/environment';
import {SORT_LIST, SORT_LIST_CONST} from './core/global-constant/item-component.locale';
// export function getBaseHref(platformLocation: PlatformLocation): string {
//   return platformLocation.getBaseHrefFromDOM();
// }



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({
      appId: 'my-app-id',
    }),
    BrowserTransferStateModule, // <--- Added
    BrowserAnimationsModule,
    LayoutModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    UiModule,
    RouterModule,
    AppRoutingModule,

    // Common Module
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([AuthEffects, UiEffects, CartEffects, SearchEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    }),
    // !environment.production ? StoreDevtoolsModule.instrument({
    //   maxAge: 25, // Retains last 25 states
    // }) : [],
    DirectivesModule,

    ShopsModule,

    // ShowcasesModule,
    // TermsModule,
    // HelpModule,
    // OrderModule,
    // MemberModule,
    // AccountModule
  ],
  providers: [
    AuthInterceptorService,
    {
      provide: HTTP_INTERCEPTORS, useExisting: AuthInterceptorService, multi: true,
    },
    {
      // /kr, /us
      // /kr, /us
      provide: APP_BASE_HREF,
      useValue: '/' + (window.location.pathname.split('/')[1] || '')
    },
    {
      // kr, us
      provide: REGION_ID,
      useValue: (window.location.pathname.split('/')[1] || '')
    },
    // JIT
    {
      provide: LOCALE_ID,
      useValue : 'ko'
    },
    {
      // https://localhost
      provide: DOMAIN_HOST,
      useValue : window.location.origin
    },
    {
      provide : DISPLAY_ALERT_MESSAGE_MAP,
      useValue : DISPLAY_ALERT_MESSAGE_MAP_CONST
    },
    {
      provide : STATE_LIST,
      useValue : STATE_LIST_CONST,
    },
    {
      provide: LOCATION_MAP,
      useValue : LOCATION_MAP_CONST,
    },
    {
      provide : CATEGORY_MAP,
      useValue : CATEGORY_MAP_CONST
    },
    {
      provide: CATEGORY_CODE_MAP,
      useValue : CATEGORY_CODE_MAP_CONST,
    },
    {
      provide : TITLE_MAP,
      useValue : TITLE_MAP_CONST
    },
    {
      provide : MENU_MAP,
      useValue : MENU_MAP_CONST
    },
    {
      provide : CATEGORY_SECOND_MAP,
      useValue : CATEGORY_SECOND_MAP_CONST,
    },
    {
      provide : RESPONSIVE_MAP,
      useValue : RESPONSIVE_MAP_CONST
    },
    {
      provide : REPORT_REASON_MAP,
      useValue : REPORT_REASON_MAP_CONST
    },
    {
      provide : PREFERENCE_MAP,
      useValue : PREFERENCE_MAP_CONST
    },
    {
      provide : STRIPE_API_KEY_TOKEN,
      useValue : STRIPE_API_KEY
    },
    {
      provide : PAYPAL_API_KEY_TOKEN,
      useValue : PAYPAL_API_KEY
    },
    {
      provide : CATEGORY_REPORT_MAP,
      useValue : CATEGORY_REPORT_MAP_CONST
    },
    {
      provide : SORT_LIST,
      useValue : SORT_LIST_CONST
    }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


// const API_URL = {
//
// }
