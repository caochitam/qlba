import {firestore} from 'firebase';
export class Address{
  full: string;
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
  createTime: firestore.Timestamp;
  isActive: boolean;
  isDemo: boolean;
}