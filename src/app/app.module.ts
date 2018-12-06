import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// Snotify
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
// Ngx-bootstrap
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
// Routing
import { AppRoutingModule } from './app.routing.module';
// Environment
import { environment } from './environment';
// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LoginComponent } from './login/login.component';
import { CustomerComponent } from './customer/customer.component';
import { DevService } from './helper/dev.service';
import { NavBarComponent } from './customer/nav-bar/nav-bar.component';
import { ListComponent } from './customer/list/list.component';
import { DetailComponent } from './customer/detail/detail.component';
import { DataService } from './data/data.service';
import { NeuDatePipe } from './helper/pipe/neu-date.pipe';
import { PhoneNosComponent } from './helper/component/phone-nos/phone-nos.component';
import { DatePickerComponent } from './helper/component/date-picker/date-picker.component';
import { BirthYearComponent } from './helper/component/birth-year/birth-year.component';
import { NeuAgePipe } from './helper/pipe/neu-age.pipe';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    // Snotify
    SnotifyModule.forRoot(),
    // Ngx-bootstrap
    BsDatepickerModule.forRoot(),
    // Routing
    AppRoutingModule,

    // AngularFire2
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
  ],
  declarations: [AppComponent, HelloComponent, LoginComponent, CustomerComponent, NavBarComponent, ListComponent, DetailComponent, NeuDatePipe, PhoneNosComponent, DatePickerComponent, BirthYearComponent, NeuAgePipe],
  bootstrap: [AppComponent],
  providers: [
    DevService,

    // Snotify
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults },
    SnotifyService,
    DataService

  ]
})
export class AppModule { }
