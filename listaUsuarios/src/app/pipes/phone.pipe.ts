import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(phone: string): string {
    const INVALID_PHONE = !phone || phone.length < 10 || phone.length > 11;
    const CELLPHONE = phone.length === 11;
    if (INVALID_PHONE) {
      return 'Telefone inválido'
    }
    if (CELLPHONE) {
      return `(${phone.substring(0, 2)}) ${phone.substr(2, 5)}-${phone.substring(7, 4)}`;
    } else {
      return `(${phone.substring(0, 2)}) ${phone.substr(2, 4)}-${phone.substring(6, 4)}`;
    }
  }
}
