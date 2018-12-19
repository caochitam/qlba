import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {firestore} from 'firebase';
@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.css']
})
export class DateInputComponent implements OnInit {
  constructor() {}
  @Input() date: firestore.Timestamp;
  @Output() dateChange = new EventEmitter<firestore.Timestamp>();
  emit() {this.dateChange.emit(this.date)}
  ngOnInit() {
  }
  save(value: Date){
    if(value){
      this.date = firestore.Timestamp.fromDate(value);
      this.emit();
    }
  }
}
