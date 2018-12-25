import {firestore} from 'firebase';
export interface Address{
  full: string;
}
export interface Relationship{
  type: string;
  reference: firestore.DocumentReference;
}
export interface Contact {
  id: string;
  displayName: string;
  phoneNumber: Array<string>;
  photoUrl: string;
  address: {full:string};
  email: string;
  gender: number;
  birthYear: number;
  relationship: Array<Relationship>;
  createTime: firestore.Timestamp;
  isActive: boolean;
  isDemo: boolean;
}