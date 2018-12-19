import { Component, OnInit } from '@angular/core';
import { Contact } from '../share/data/contact';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  selectedContact = new Contact();
  constructor() { }

  ngOnInit() {
  }

}
