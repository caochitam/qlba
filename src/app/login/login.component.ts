import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { SnotifyService, Snotify } from 'ng-snotify';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    private _afa: AngularFireAuth,
    private _router: Router,
    private _snotify: SnotifyService,
  ) { }

  ngOnInit() {
  }
  login(input) {
    let snotify$ = Observable.create((observer: Observer<Snotify>) =>{
      this._afa.auth.signInWithEmailAndPassword(input.inputEmail, input.inputPassword).then(uCredential=>{
        observer.next({
          title: 'Thành công',
          body: `Email: ${input.inputEmail}`,
          config: {timeout:2000}
        });
        observer.complete();
        this._router.navigate(['']);
      }).catch(()=>{
        observer.error({
          title: 'Lỗi đăng nhập',
          body: 'Đăng nhập thất bại',
          config: {timeout:2000}
        })
      })
    })
    this._snotify.async('Đang đăng nhập', snotify$ );
  }
  goBack() {
    this._router.navigate([''])
  }
}