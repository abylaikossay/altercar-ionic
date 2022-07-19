import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appEmptyPipe'
})
export class EmptyPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): string {
    if (!value) {
      return '--';
    }
    return value;
  }

}
