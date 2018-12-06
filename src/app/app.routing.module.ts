import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import {LoginComponent} from './login/login.component';
import {CustomerComponent} from './customer/customer.component';
const routes: Routes = [
  { path: '', redirectTo: 'benh-nhan', pathMatch: 'full' },
  {
    path: 'benh-nhan',
    component: CustomerComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login', 
    component: LoginComponent,
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }