import { Pipe, PipeTransform } from '@angular/core';
import moment from 'moment';

@Pipe({
  name: 'formNow',
})
export class FormNowPipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): unknown {
    if (value) {
      return moment(value).fromNow();
    } else {
      return null;
    }
  }
}
