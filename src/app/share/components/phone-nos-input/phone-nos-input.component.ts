import { Component, OnInit, Input, Output, EventEmitter, HostBinding } from '@angular/core';

@Component({
  selector: 'app-phone-nos-input',
  templateUrl: './phone-nos-input.component.html',
  styleUrls: ['./phone-nos-input.component.css']
})
export class PhoneNosInputComponent implements OnInit {
  newPhoneNumber: String;
  constructor() { }
  @Input() phoneNumber: Array<String>;
  @Output() phoneNumberChange = new EventEmitter<Array<String>>();
  @HostBinding('class.form-control')
  ngOnInit() {

  }
  addANewNumber(){
    if(this.newPhoneNumber) {
      if (this.phoneNumber)
        this.phoneNumber.push(this.newPhoneNumber);
      else 
        this.phoneNumber = [this.newPhoneNumber];
      this.newPhoneNumber = "";
      this.emit();
    }
  }
  deleteAPhoneNo(i: number){
    this.phoneNumber.splice(i,1);
    this.emit();
  }
  deleteLastPhoneNo(){
    if(!this.newPhoneNumber && this.phoneNumber && this.phoneNumber.length>0){
      this.phoneNumber.splice(-1,1);
      this.emit();
    }
  }
  emit(){
    this.phoneNumberChange.emit(this.phoneNumber);
  }
}
