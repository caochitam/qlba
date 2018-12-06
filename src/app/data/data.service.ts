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
    private _afs: AngularFirestore
  ) {
    // Get Contact Informations
    this._contactCollection = this._afs.collection<Contact>(
      'contacts',
      ref => ref.where('isActive', '==', true)
    );
    this.contacts = this._contactCollection.valueChanges();
  }

  createContact(contact: Contact){
    
  }

}