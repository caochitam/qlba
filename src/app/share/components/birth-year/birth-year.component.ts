import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-birth-year',
  templateUrl: './birth-year.component.html',
  styleUrls: ['./birth-year.component.css']
})
export class BirthYearComponent implements OnInit {
  private _currentYear = (new Date()).getFullYear();
  age: number;
  constructor() { }
  @Input() birthYear: number;
  @Output() birthYearChange = new EventEmitter<number>();
  emit() {this.birthYearChange.emit(this.birthYear)}
  ngOnInit() {}
  changeYear(val){
    if(val > 1000){
      this.birthYear = val;
      this.age = this._currentYear - this.birthYear;
    }else{
      this.age = val
      this.birthYear = this._currentYear - this.age;
    }
    this.emit();
  }
}
