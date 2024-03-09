import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'statusClass'
})
export class StatusClassPipe implements PipeTransform {

  transform(status: number): string {
    const obj: {[key: number]: string} = {
        1: 'warning',
        2: 'success',
        3: 'danger'
    };
    return obj[status];
  }
}