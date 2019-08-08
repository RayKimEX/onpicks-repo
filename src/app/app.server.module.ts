import {Inject, NgModule} from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {UniversalInterceptorService} from './core/service/interceptor/universal-interceptor.service';
import {BrowserModule} from '@angular/platform-browser';
import {CURRENCY} from './core/global-constant/app.config';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ModuleMapLoaderModule,
    BrowserModule.withServerTransition({
      appId: 'my-app-id',
    }),
  ],
  providers: [
    // Add universal-only providers here
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UniversalInterceptorService,
      multi: true
    }
  ],
  bootstrap: [ AppComponent ],
})
export class AppServerModule { }
