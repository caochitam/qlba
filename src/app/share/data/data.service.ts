import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Contact } from './contact';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  public contacts: Observable<Array<Contact>>;
  private _contacts;
  // private _contacts: Array<Contact>;
  private _contactCollection: AngularFirestoreCollection<Contact>;

  constructor(
    private readonly _afs: AngularFirestore,
    private readonly _afa: AngularFireAuth,
  ) {
    if(this._afa.authState && !this.contacts) this.getData(); // Call getData if authenticated
  }

  public getData(){
    // Get Contact Informations
    this._contactCollection = this._afs.collection<Contact>(
      'contacts',
      ref => ref.where('isActive', '==', true)
    );
    this.contacts = this._contactCollection.valueChanges();
  }

  public addContact(contact: Contact){
    // Add demo field into contact if in the development
    if (!environment.production) contact.isDemo = true;
    contact.id = this._afs.createId();
    return this._contactCollection.doc<Contact>(contact.id).set(contact);
    // return this._contactCollection.doc<Contact>(contact.id).set(Object.assign({}, contact));
    
  }
  public updateContact(contact: Contact){
    return this._contactCollection.doc<Contact>(contact.id).set(contact);
  }

  public getContact(id: string){
    return this._contactCollection.doc<Contact>(id).valueChanges();
  }

  private searchContactLocal(id: string){
    this.contacts.subscribe(contacts => {
      console.log(contacts)
    })
  }
}
