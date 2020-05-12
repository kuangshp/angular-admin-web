import { Pipe, PipeTransform } from '@angular/core';
import { numberToCurrency } from '@app/utils';

@Pipe({
  name: 'toCurrency'
})
export class NumberToCurrencyPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    if (value) {
      return numberToCurrency(String(value));
    } else {
      return null;
    }
  }
}
