import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-birth-year',
  templateUrl: './birth-year.component.html',
  styleUrls: ['./birth-year.component.css']
})
export class BirthYearComponent implements OnInit {
  private _currentYear = (new Date()).getFullYear();
  year: number;
  age: number;
  constructor() { }
  @Input() set birthYear (val: number){this.changeYear(val)};
  @Output() birthYearChange = new EventEmitter<number>();
  emit() {this.birthYearChange.emit(this.year)}
  ngOnInit() {
  }
  changeYear(val){
    if(val){
      if(val > 1000){
        this.year = val;
        this.age = this._currentYear - this.year;
      }else{
        this.age = val
        this.year = this._currentYear - this.age;
      }
    }else{
      this.year = null;
      this.age = null;
    }
  }
  update(val){
    this.changeYear(val);
    this.emit();
  }
}
