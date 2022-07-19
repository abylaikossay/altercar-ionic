import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageId'
})
export class ImageIdPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): string {
    if (!value) {
      return null;
    }
    if (!value?.length && !value[0]) {
      return null;
    }
    return value[0];
  }

}
