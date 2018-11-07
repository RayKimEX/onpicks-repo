import { NgModule } from '@angular/core';
import {CommonModule, CurrencyPipe} from '@angular/common';
import { TimeAgoPipe } from './time-ago/time-ago.pipe';
import { OnpicksCurrencyPipe } from './onpicks-currency/onpicks-currency.pipe';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    TimeAgoPipe,

    OnpicksCurrencyPipe,
  ],
  exports: [
    TimeAgoPipe,
    CurrencyPipe,
    OnpicksCurrencyPipe,
  ],
  providers: [
    CurrencyPipe,
    OnpicksCurrencyPipe,
  ]
})
export class PipeModule { }
