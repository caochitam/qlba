import { Component, OnInit } from '@angular/core';
import { DevService } from '../helper/dev.service';
import { Contact } from '../data/contact';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  private _dev = new DevService('CustomerComponent');
  selectedContact: Contact = new Contact();

  constructor() { }

  ngOnInit() {
  }
  selectContact(contact: Contact) {
    this.selectedContact = contact;
  }
}