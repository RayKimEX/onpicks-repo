import { Pipe, PipeTransform } from '@angular/core';
import {CurrencyPipe} from '@angular/common';

@Pipe({
  name: 'onpicksCurrency'
})
export class OnpicksCurrencyPipe implements PipeTransform {

  constructor( private currencyPipe: CurrencyPipe ) {
  }

  transform(value: any, currencyCode: any): any {

    if ( currencyCode === 'KRW' ) {
      let temp = this.currencyPipe.transform(value, currencyCode);
      temp = temp.substring(1, temp.length) + '원';
      return temp;
    } else {
      let temp = this.currencyPipe.transform(value, currencyCode, 'symbol', '1.0');
      temp = temp.substring(2, temp.length);
      return temp;
    }
  }

}
