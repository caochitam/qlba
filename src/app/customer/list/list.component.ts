import { Component, OnInit, Output, EventEmitter, } from '@angular/core';
import {Observable} from 'rxjs';
import {DevService} from '../../helper/dev.service';
import {Contact} from '../../data/contact';
import {DataService} from '../../data/data.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Output() select = new EventEmitter<Contact>();

  private _dev = new DevService('ListComponent');
  contacts$ : Observable<Contact[]>;
  constructor(
    private _data: DataService,
  ) {
    this.contacts$ = this._data.contacts
  }

  ngOnInit() {
  }

  emitSelectedContact(contact: Contact){
    this.select.emit(contact);
  }
  emitNewContact(){
    this.select.emit(new Contact())
  }
}