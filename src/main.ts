import {enableProdMode, TRANSLATIONS, TRANSLATIONS_FORMAT} from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
  console.log = function(){};
}

// use the require method provided by webpack
declare const require;

// JIT,
// we use the webpack raw-loader to return the content as a string
const translations = require(`raw-loader!./locale/messages.ko.xlf`);

platformBrowserDynamic().bootstrapModule(AppModule,
  {
    providers: [
      {provide: TRANSLATIONS, useValue: translations},
      {provide: TRANSLATIONS_FORMAT, useValue: 'xlf'}
    ]
});
