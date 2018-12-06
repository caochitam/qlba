import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-birth-year',
  templateUrl: './birth-year.component.html',
  styleUrls: ['./birth-year.component.css']
})
export class BirthYearComponent implements OnInit {
  private _currentYear = (new Date()).getFullYear();
  private _birthYear: number;
  private _age: number;
  @Input() 
  set birthYear(birthYear: number){
    if(birthYear) {
      this._birthYear = birthYear;
      this._age = this._currentYear - birthYear;
    } else {
      this._birthYear = null;
      this._age = null;
    }
  }
  @Output() birthYearChange  = new EventEmitter<number>();

  constructor() { 
  }

  ngOnInit() {

  }
  setBirthYear(event){
    var value = Number(event.target.value);
    if (value){
      if(value > 200) {
        this._birthYear = value;
        this._age = this._currentYear - value;
      } else {
        this._birthYear = this._currentYear - value;
        this._age = value;
      }
    }
  }
  setAge(event){
    this._age = this._currentYear - Number(event.target.value);
  }

}