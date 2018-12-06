import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-phone-nos',
  templateUrl: './phone-nos.component.html',
  styleUrls: ['./phone-nos.component.css']
})
export class PhoneNosComponent implements OnInit {
  @Input() phoneNos: String[];
  @Output() phoneNosChange  = new EventEmitter<String[]>(); 
  newPhoneNo = "";
  constructor() { }

  ngOnInit() {
    if (this.phoneNos === undefined) this.phoneNos = [];
    this.newPhoneNo = "";
  }
  addPhoneNo(event){
    if(event.target.value.length > 5){
      this.phoneNos.push(event.target.value);
      event.target.value = "";
      // this.phoneNosChange.emit(this.phoneNos)
    }
  }
  deletePhoneNo(i){
    this.phoneNos.splice(i,1);
    // this.phoneNosChange.emit(this.phoneNos)
  }
  deleteLast(event){
    if(event.target.value == "") this.phoneNos.splice(-1,1);
    // this.phoneNosChange.emit(this.phoneNos)
  }
}