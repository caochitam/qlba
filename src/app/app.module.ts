import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { environment } from '../environments/environment';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

// Snotify
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';

// Ng-bootstrap
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

// Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { ListComponent } from './contact/list/list.component';
import { DetailComponent } from './contact/detail/detail.component';

// Services
import { DataService } from './share/data/data.service';
import { PhoneNosInputComponent } from './share/components/phone-nos-input/phone-nos-input.component';
import { AddressInputComponent } from './share/components/address-input/address-input.component';
import { BirthYearComponent } from './share/components/birth-year/birth-year.component';
import { VnDatePipe } from './share/pipe/vn-date.pipe';
import { DateInputComponent } from './share/components/date-input/date-input.component';
import { RelationshipComponent } from './share/components/relationship/relationship.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ContactComponent,
    ListComponent,
    DetailComponent,
    PhoneNosInputComponent,
    AddressInputComponent,
    BirthYearComponent,
    VnDatePipe,
    DateInputComponent,
    RelationshipComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    SnotifyModule,
    BsDatepickerModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults},
    SnotifyService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
