import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'neuAge',
  pure: true
})
export class NeuAgePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value) return (new Date()).getFullYear() - Number(value);
    else return null;
  }

}