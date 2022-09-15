import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform {
  transform(value: string, mayusculas?: boolean): string {
    return mayusculas ? value.toUpperCase() : value.toLowerCase();
  }
}
