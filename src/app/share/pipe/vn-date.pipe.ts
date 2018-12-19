import { Pipe, PipeTransform } from '@angular/core';
import {firestore} from 'firebase';

@Pipe({
  name: 'vnDate'
})
export class VnDatePipe implements PipeTransform {
  transform(value: firestore.Timestamp, args?: any): any {
    if (value)
    return value.toDate().toLocaleDateString("vi-VN");
  }
}
