import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { UiModule } from './ui/ui.module';
import { ShopsModule } from './shops/shops.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { reducers } from './core/store/app.reducer';
import { DirectivesModule } from './core/directives/directives.module';
import { FooterComponent } from './ui/onpicks/footer/footer.component';
import { HeaderComponent } from './ui/onpicks/header/header.component';
import { ShowcasesComponent } from './showcases/pages/showcases/showcases.component';


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

    ShopsModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    // Common Module
    StoreModule.forRoot(reducers),
    DirectivesModule,
    UiModule,
    ///

    HomeModule,
  ],
  providers: [],
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
