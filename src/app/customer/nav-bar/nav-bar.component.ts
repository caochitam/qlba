import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { DevService } from '../../helper/dev.service'
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  _dev = new DevService('NavBarComponent');
  constructor(
    private _afa: AngularFireAuth,
    private _router: Router
  ) { }

  ngOnInit() {
  }
  logOut() {
    this._afa.auth.signOut().then(value => this._dev.log('Logout Successful, go to Login >>'));
    this._router.navigate(['login']);
  }
}