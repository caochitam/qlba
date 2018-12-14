import { Component, OnInit, Input, Output } from '@angular/core';
import { Contact } from '../../share/data/contact';
import { DataService } from '../../share/data/data.service';
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
    console.log("Saving...");
    console.log(this.contact);
    this._data.addContact(this.contact).then(()=>{console.log("Success!")});
  }
}
