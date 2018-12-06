import { Component, OnInit, Input } from '@angular/core';
import {Contact} from '../../data/contact';
import {DataService} from '../../data/data.service';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  // contact : Contact = new Contact();
  // private contact = new Contact();
  @Input() contact: Contact;
  // @Input() 
  // set contact(con: Contact){

  // }
  constructor(
    private _data: DataService,
    // private contact: Contact
  ) {
  }

  ngOnInit() {
  }
  createContact(){
    console.log(this.contact);
    // this._data.createContact(contact);
  }
}