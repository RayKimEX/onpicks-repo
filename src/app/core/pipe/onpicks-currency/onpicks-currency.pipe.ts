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
      // null의 경우가 있을때는 리턴
      // TODO : 왜 null의 경우가 생기는지 알아보기

      if ( temp === null ) { return ;}
      temp = temp.substring(1, temp.length) + '원';
      return temp;
    } else {
      let temp = this.currencyPipe.transform(value, currencyCode, 'symbol', '1.0');
      // null의 경우가 있을때는 리턴
      // TODO : 왜 null의 경우가 생기는지 알아보기

      if ( temp === null ) { return ;}
      temp = temp.substring(2, temp.length);
      return temp;
    }
  }

}
