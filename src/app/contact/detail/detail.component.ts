import { Component, OnInit, Input, Output, HostBinding } from '@angular/core';
import { Contact } from '../../share/data/contact';
import { DataService } from '../../share/data/data.service';
import { firestore } from 'firebase';
import { SnotifyService, Snotify } from 'ng-snotify';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  host: {class:'col-md-9'}
})
export class DetailComponent implements OnInit {
  // private _contact;
  // @Input() set contact(input: Contact){
  //   console.log("Set the contact")
  //   if(!input) this._contact = {isActive:true};
  //   else this._contact = input;
  // };
  // get contact(): Contact {
  //   return this._contact;
  // };
  public contact: Contact = {isActive:true};
  public 
  constructor(
    private _data: DataService,
    private _snotify: SnotifyService,
    private _activedRoute: ActivatedRoute,
  ) {}

  ngOnInit() {
    this._activedRoute.params.subscribe(params=>{
      if(params.id) this._data.getContact(params.id).subscribe(contact => this.contact = contact);
    });
  }
  save(){
    if (!this.contact.createTime) this.contact.createTime = firestore.Timestamp.fromDate(new Date());
    if (!this.contact.id){ // Create contact at server
      let snotifyP = this._data.addContact(this.contact).then(()=>{
        // Route into new id
        return {body: `Thêm liên hệ thành công.`,config:{timeout:2000}}
      });
      this._snotify.async('Đang tạo liên hệ',snotifyP);
    }else{ //Save to opening contact
      let snotifyP = this._data.updateContact(this.contact).then(()=>{
        return {body: `Cập nhật liên hệ thành công.`,config:{timeout:2000}}
      });
      this._snotify.async('Đang cập nhật liên hệ',snotifyP);
      
    }
  }
}
