import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mod'
})
export class ModPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {

    return value > 0 ? '+' + value : value;
  }

}
