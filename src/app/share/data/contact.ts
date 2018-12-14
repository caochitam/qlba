import {firestore} from 'firebase';
export class Address{
  full: string;
}
export class Contact {
  id: string;
  displayName: string;
  phoneNumber: Array<string>;
  photoUrl: string;
  address: Address;
  email: string;
  gender: number;
  birthYear: number;
  createTime: firestore.Timestamp;
  isActive: boolean = true;
}