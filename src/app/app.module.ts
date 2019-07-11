import { BrowserModule } from '@angular/platform-browser';
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
  LOCATION_MAP_CONST, REGION_ID,
  RESPONSIVE_MAP,
  RESPONSIVE_MAP_CONST
} from './core/global-constant/app.config';
import {AuthInterceptorService} from './core/service/auth/auth-interceptor.service';
import {UiEffects} from './core/store/ui/ui.effects';
import {CartEffects} from './core/store/cart/cart.effects';
import {SearchEffects} from './core/store/search/search.effects';
import {BreakpointObserver, LayoutModule} from '@angular/cdk/layout';
import 'hammerjs';
import {BehaviorSubject} from 'rxjs';
import {CATEGORY_CODE_MAP, CATEGORY_CODE_MAP_CONST, CATEGORY_MAP, CATEGORY_MAP_CONST} from './core/global-constant/app.category-database-long';
import {CATEGORY_SECOND_MAP, CATEGORY_SECOND_MAP_CONST} from './core/global-constant/app.category-database-short';
import {DISPLAY_ALERT_MESSAGE_MAP, DISPLAY_ALERT_MESSAGE_MAP_CONST, MENU_MAP, MENU_MAP_CONST, PREFERENCE_MAP, PREFERENCE_MAP_CONST, REPORT_REASON_MAP, REPORT_REASON_MAP_CONST, TITLE_MAP, TITLE_MAP_CONST} from './core/global-constant/app.locale';
import {STATE_LIST, STATE_LIST_CONST} from './core/global-constant/app.database';
import {DISPLAY_ALERT_MESSAGE} from './core/store/ui/ui.actions';
// export function getBaseHref(platformLocation: PlatformLocation): string {
//   return platformLocation.getBaseHrefFromDOM();
// }
function getCookie(cname) {
  const name = cname + '=';
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(';');
  for ( let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
}


function setCookie(cname, cvalue ) {
  // const d = new Date();
  // d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  // const expires = 'expires=' + d.toUTCString();

  if (isDevMode()) {
    document.cookie = cname + '=' + cvalue + ';path=/';
  } else {
    document.cookie = cname + '=' + cvalue + ';domain=.onpicks.com;path=/';
  }

  return 'KRW';
}

export function getImageHost() {
  if ( window.location.origin === 'http://localhost' ) {
    return 'http://img.staging.onpicks.com.s3.amazonaws.com';
  }

  if ( window.location.origin === 'https://staging.onpicks.com' ) {
    return 'http://img.staging.onpicks.com.s3.amazonaws.com';
  }

  return 'https://img.onpicks.com';
}

export function getCurrency() {
  console.log('@@@@@@@@@@@!@@')
  console.log(getCookie('onpicks-currency') );
  if (getCookie('onpicks-currency') === '') {
    switch (window.location.pathname.split('/')[1]) {
      case 'kr' :
        setCookie( 'onpicks-language', 'ko');
        setCookie( 'onpicks-currency', 'KRW');
        break;
      case 'us' :
        setCookie( 'onpicks-language', 'en');
        setCookie( 'onpicks-currency', 'USD');
        break;
      case 'cn' :
        setCookie( 'onpicks-language', 'zh');
        setCookie( 'onpicks-currency', 'CNY');
        break;
      default :
        setCookie( 'onpicks-currency', '???');
        break;
    }
  } else {
    switch (window.location.pathname.split('/')[1]) {
      case 'kr' :
        setCookie( 'onpicks-language', 'ko');
        // setCookie( 'onpicks-currency', 'KRW');
        break;
      case 'us' :
        setCookie( 'onpicks-language', 'en');
        // setCookie( 'onpicks-currency', 'USD');
        break;
      case 'cn' :
        setCookie( 'onpicks-language', 'zh');
        // setCookie( 'onpicks-currency', 'CNY');
        break;
      default :
        setCookie( 'onpicks-currency', '???');
        break;
    }
  }



  return new BehaviorSubject(getCookie('onpicks-currency'));
}


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

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
    UiModule,
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
      useValue : 'en'
    },
    {
      // https://localhost
      provide: DOMAIN_HOST,
      useValue : window.location.origin
    },
    {
      provide: IMAGE_HOST,
      useFactory : getImageHost
    },
    {
      provide: CURRENCY,
      useFactory : getCurrency,
      // useValue : new BehaviorSubject(getCookie('onpicks-currency')),
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
    }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


// const API_URL = {
//
// }
