import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  hideNavBar = true;
  constructor(
    private _router : Router,
    private _afa: AngularFireAuth
  ){
    // Show/Hide navBar base on authState
    this._afa.authState.subscribe(user => {
      if (user) this.hideNavBar = false; 
      else this.hideNavBar = true;
    })
  }

  logOut(){
    this._afa.auth.signOut().finally(() => {
      this._router.navigate(['dang-nhap']);
    })
  }
}
