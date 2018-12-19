import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Address } from '../../data/contact';
@Component({
  selector: 'app-address-input',
  templateUrl: './address-input.component.html',
  styleUrls: ['./address-input.component.css']
})
export class AddressInputComponent implements OnInit {
  constructor() { }
  @Input() address: Address;
  @Output() addressChange = new EventEmitter<Address>();
  emit() {this.addressChange.emit(this.address)}
  ngOnInit() {}

  save(value){
    if(value){
      if(this.address)
        this.address.full = value;
      else
        this.address = {full: value};
      this.emit();
    }else{
      if(this.address)
        if (this.address.full){
          delete this.address.full;
          this.emit();
        }
    }
  }
}
