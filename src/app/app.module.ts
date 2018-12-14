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

// Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { ListComponent } from './contact/list/list.component';
import { DetailComponent } from './contact/detail/detail.component';

// Services
import { DataService } from './share/data/data.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ContactComponent,
    ListComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    SnotifyModule,
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
