import { Pipe, PipeTransform } from '@angular/core';
import {firestore} from 'firebase';
@Pipe({
  name: 'neuDate'
})
export class NeuDatePipe implements PipeTransform {

  transform(value: firestore.Timestamp, args?: any): any {
    if (value)
    return value.toDate().toLocaleDateString("vi-VN");
  }

}