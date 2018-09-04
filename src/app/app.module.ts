import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import {HomeModule} from './home/home.module';
import {UiModule} from './ui/ui.module';
import {ShopsModule} from './shops/shops.module';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    ShopsModule,
    RouterModule,
    AppRoutingModule,
    // Common Module
    CoreModule,
    UiModule,
    ///

    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
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
