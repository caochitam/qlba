import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // { path: '', redirectTo: 'benh-nhan', pathMatch: 'full' },
  // {
  //   path: 'benh-nhan',
  //   component: CustomerComponent,
  //   canActivate: [AuthGuard]
  // },
  // {
  //   path: 'login', 
  //   component: LoginComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
