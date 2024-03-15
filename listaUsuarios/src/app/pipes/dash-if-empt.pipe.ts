import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dashIfEmpt'
})
export class DashIfEmptPipe implements PipeTransform {

  transform(value: any): string | any {
    const IS_EMPTY = value === null || value === undefined || value === '';
    if (IS_EMPTY) {
      return '-';
    }
    return value;
  }
}
