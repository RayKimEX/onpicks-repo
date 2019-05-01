import { NgModule } from '@angular/core';
import {CommonModule, CurrencyPipe} from '@angular/common';
import { TimeAgoPipe } from './time-ago/time-ago.pipe';
import { OnpicksCurrencyPipe } from './onpicks-currency/onpicks-currency.pipe';
import { SafeHtmlPipe } from './safe-html/safe-html.pipe';
import {PercentPipePipe} from './percent-pipe/percent-pipe.pipe';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    TimeAgoPipe,

    OnpicksCurrencyPipe,

    SafeHtmlPipe,

    PercentPipePipe,
  ],
  exports: [
    TimeAgoPipe,
    CurrencyPipe,
    OnpicksCurrencyPipe,
    SafeHtmlPipe,
    PercentPipePipe,
  ],
  providers: [
    CurrencyPipe,
    OnpicksCurrencyPipe,
  ]
})
export class PipeModule { }
