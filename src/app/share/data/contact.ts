import {firestore} from 'firebase';
export interface Address{
  full: string;
}
export interface Relationship{
  type: string;
  reference: firestore.DocumentReference;
}
export interface Contact {
  id?: string;
  displayName?: string;
  phoneNumbers?: Array<string>;
  photoUrl?: string;
  address?: {full?:string};
  email?: string;
  gender?: number;
  birthYear?: number;
  relationships?: Array<Relationship>;
  createTime?: firestore.Timestamp;
  isActive?: boolean;
  isDemo?: boolean;
}