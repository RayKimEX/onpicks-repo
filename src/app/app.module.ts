import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './core/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
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
