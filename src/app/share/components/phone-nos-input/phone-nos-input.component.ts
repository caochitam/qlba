import { Component, OnInit, Input, Output, EventEmitter, HostBinding } from '@angular/core';

@Component({
  selector: 'app-phone-nos-input',
  templateUrl: './phone-nos-input.component.html',
  styleUrls: ['./phone-nos-input.component.css']
})
export class PhoneNosInputComponent implements OnInit {
  newPhoneNumber: String;
  constructor() { }
  @Input() phoneNumbers: Array<String>;
  @Output() phoneNumbersChange = new EventEmitter<Array<String>>();
  // @HostBinding('class.form-control')
  ngOnInit() {

  }
  addANewNumber(){
    if(this.newPhoneNumber) {
      if (this.phoneNumbers)
        this.phoneNumbers.push(this.newPhoneNumber);
      else 
        this.phoneNumbers = [this.newPhoneNumber];
      this.newPhoneNumber = "";
      this.emit();
    }
  }
  deleteAPhoneNo(i: number){
    this.phoneNumbers.splice(i,1);
    this.emit();
  }
  deleteLastPhoneNo(){
    if(!this.newPhoneNumber && this.phoneNumbers && this.phoneNumbers.length>0){
      this.phoneNumbers.splice(-1,1);
      this.emit();
    }
  }
  emit(){
    this.phoneNumbersChange.emit(this.phoneNumbers);
  }
}
