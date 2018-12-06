import {firestore} from 'firebase';
export class Address{
  full: string;
}
export class Contact {
  id: string;
  fullName: string;
  phoneNo: Array<string>;
  address: Address;
  email: string;
  gender: number;
  birthYear: number;
  createTime: firestore.Timestamp;
  isPatient: boolean = false;
  isDemo: boolean = true;
  isActive: boolean = true;
  isBanded: boolean = false;
}