import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component'
import { AuthGuard } from './auth.guard';
const routes: Routes = [
  { path: '', redirectTo: 'lien-he', pathMatch: 'full' },
  {
    path: 'lien-he',
    component: ContactComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'dang-nhap', 
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
