import { Component, OnInit } from '@angular/core';
import { SnotifyService, Snotify } from 'ng-snotify';
import { Router } from '@angular/router';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { DataService } from '../share/data/data.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  inputEmail: string;
  inputPassword: string;
  constructor(
    private _afa: AngularFireAuth,
    private _router: Router,
    private _snotify: SnotifyService,
    private _data: DataService
  ) { }

  ngOnInit() {
  }

  submit(){
    // Create notify Promise object
    let snotifyP = new Promise<Snotify>((resolve, reject) => {
      this._afa.auth.signInWithEmailAndPassword(this.inputEmail, this.inputPassword)
      .then(uCredential => {
        // console.log(uCredential);
        resolve ({
          title: 'Thành công',
          body: `${this.inputEmail}`,
          config: {timeout:2000}
        });
        this._data.getData(); // Call DataService to get data from server
        this._router.navigate(['']); // Redirect into home
      })
      .catch(e => {
        // console.log(e);
        if(e.code === "auth/user-not-found")
          reject({
            title: 'Thất bại',
            body: `Email không tồn tại.`,
            config: {timeout:3000}
          });
        if(e.code === "auth/wrong-password")
          reject({
            title: 'Thất bại',
            body: `Mật khẩu không đúng.`,
            config: {timeout:3000}
          });
      })
    })

    // Apply promise notify object to Async
    this._snotify.async('Đang đăng nhập',snotifyP);
  }
}
