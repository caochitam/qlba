import { Injectable } from '@angular/core';
import { environment } from '../environment';

@Injectable()
export class DevService {
  _caller: String
  constructor(caller: string) {
    if (caller) this._caller = caller;
  }
  public log(object:any) {
    if (environment.production == false){
      if (this._caller) console.log(`[${this._caller}]:`,object);
      else console.log("[DEV]:",object)
    }
  }
} 