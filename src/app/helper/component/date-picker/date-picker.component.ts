import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {firestore} from 'firebase';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit {
  @Input() date: firestore.Timestamp;
  @Output() dpChange = new EventEmitter<firestore.Timestamp>();
  constructor() { }

  ngOnInit() {
  }

}