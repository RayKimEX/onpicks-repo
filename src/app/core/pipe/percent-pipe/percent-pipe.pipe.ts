import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percentPipe'
})
export class PercentPipePipe implements PipeTransform {

  transform(value: number): any {

    return (value * 100).toFixed(2);
  }

}
