import { Component, OnInit } from '@angular/core';
import { Contact } from '../../share/data/contact';
import { DataService } from '../../share/data/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public searchStr: string;
  public contacts: Observable<Array<Contact>>;
  constructor(
    private _data: DataService,
  ) {
    this.contacts = this._data.contacts
  }

  ngOnInit() {
  }
  search(){
    console.log(this.searchStr);
  }

}
