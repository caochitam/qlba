import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap, delay, map } from 'rxjs/operators';
import { AngularFireAuth  } from '@angular/fire/auth';
import { auth } from 'firebase';
import { DevService } from './helper/dev.service'
@Injectable()
export class AuthGuard implements CanActivate {
  private _dev = new DevService('AuthGuard');
  constructor(
    private _afa: AngularFireAuth,
    private _router: Router,
  ) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this._afa.authState.pipe(map(state => {
      if (state) return true;
      else {
        this._router.navigate(['login']);
        return false;
      }
    }))
  }

  canLoad(
    route: Route
  ): Observable<boolean> | Promise<boolean> | boolean {
    let url = `/${route.path}`;
    return true;
  }
}
