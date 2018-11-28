import { NgModule } from '@angular/core';
import {CommonModule, CurrencyPipe} from '@angular/common';
import { TimeAgoPipe } from './time-ago/time-ago.pipe';
import { OnpicksCurrencyPipe } from './onpicks-currency/onpicks-currency.pipe';
import { SafeHtmlPipe } from './safe-html/safe-html.pipe';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    TimeAgoPipe,

    OnpicksCurrencyPipe,

    SafeHtmlPipe,
  ],
  exports: [
    TimeAgoPipe,
    CurrencyPipe,
    OnpicksCurrencyPipe,
    SafeHtmlPipe,
  ],
  providers: [
    CurrencyPipe,
    OnpicksCurrencyPipe,
  ]
})
export class PipeModule { }
