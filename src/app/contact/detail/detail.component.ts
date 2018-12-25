import { Component, OnInit, Input, Output } from '@angular/core';
import { Contact } from '../../share/data/contact';
import { DataService } from '../../share/data/data.service';
import { firestore } from 'firebase';
import { SnotifyService, Snotify } from 'ng-snotify';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  private _contact;
  @Input() 
  set contact(input: Contact){
    console.log("Set the contact")
    if(!input) this._contact = {isActive:true};
    else this._contact = input;
  }
  get contact(): Contact {
    return this._contact;
  }
  constructor(
    private _data: DataService,
    private _snotify: SnotifyService
  ) {
    
  }

  ngOnInit() {

  }
  save(){
    if (!this.contact.createTime) this.contact.createTime = firestore.Timestamp.fromDate(new Date());
    let snotifyP = this._data.addContact(this.contact).then(()=>{
      return {body: `Thêm liên hệ thành công.`,config:{timeout:2000}}
    });
    this._snotify.async('Đang tạo liên hệ',snotifyP);
  }
}
