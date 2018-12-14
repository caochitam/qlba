import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from './contact';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public contacts: Observable<Contact[]>;
  private _contactCollection: AngularFirestoreCollection<Contact>;

  constructor(
    private readonly _afs: AngularFirestore
  ) {}

  public getData(){
    // Get Contact Informations
    this._contactCollection = this._afs.collection<Contact>(
      'contacts',
      ref => ref.where('isActive', '==', true)
    );
    this.contacts = this._contactCollection.valueChanges();
  }

  public addContact(contact: Contact){
    contact.id = this._afs.createId();
    return this._contactCollection.doc(contact.id).set(JSON.parse(JSON.stringify(contact)));
  }
}
