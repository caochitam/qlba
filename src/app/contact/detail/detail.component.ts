import { Component, OnInit, Input, Output } from '@angular/core';
import { Contact } from '../../share/data/contact';
import { DataService } from '../../share/data/data.service';
import {firestore} from 'firebase';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input() contact: Contact;
  constructor(
    private _data: DataService
  ) { }

  ngOnInit() {

  }
  save(){
    if (!this.contact.createTime) this.contact.createTime = firestore.Timestamp.fromDate(new Date());
    console.log(this.contact); //Dev
    this._data.addContact(this.contact).then(()=>{console.log("Success!")});
  }
}
