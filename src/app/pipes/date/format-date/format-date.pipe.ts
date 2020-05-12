import { Pipe, PipeTransform } from '@angular/core';
import { formatDate } from '@app/utils';

@Pipe({
  name: 'formatDate',
  pure: false, // 非纯管道
})
export class FormatDatePipe implements PipeTransform {

  transform(value: unknown, ...args: any[]): unknown {
    if (value) {
      const isDue = args[0];
      return formatDate(value, isDue);
    } else {
      return null;
    }
  }

}
