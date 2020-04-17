import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
// import { ReactiveFormsModule, FormsModule } from '@angular/forms';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { RegComponent } from './components/reg/reg.component';
import { MembercreateComponent } from './components/membercreate/membercreate.component';
import { MemberlistComponent } from './components/memberlist/memberlist.component';
import { FarmcreateComponent } from './components/farmcreate/farmcreate.component';
import { FarmlistComponent } from './components/farmlist/farmlist.component';
import { UploadComponent } from './components/upload/upload.component';
import { ProcessComponent } from './components/process/process.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SharedsModule } from './shareds/shareds.module';
import { ProfileComponent } from './components/profile/profile.component';
import { SettingComponent } from './components/setting/setting.component';

import {AngularFireModule} from 'angularfire2'
import {AngularFireStorageModule} from 'angularfire2/storage'
import {AngularFireDatabaseModule} from 'angularfire2/database'
import { AngularFireAuthModule } from 'angularfire2/auth';
import {AngularFirestoreModule} from 'angularfire2/firestore'

// import { AngularFireDatabaseModule } from "@angular/fire/database";


import { environment } from '../environments/environment';


import { MemberService } from './services/member.service';

/* Reactive form services in Angular 7 */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TestUrlComponent } from './components/test-url/test-url.component';
import { TestlistComponent } from './components/testlist/testlist.component';
import { TestdetailComponent } from './components/testdetail/testdetail.component';
import { TestHComponent } from './components/test-h/test-h.component';

//guards
import { AuthGuard } from './guards/auth.guard';
import { SecureInnerPagesGuard } from './guards/secure-inner-pages.guard';
//forgotpassword
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegComponent,
    MembercreateComponent,
    MemberlistComponent,
    FarmcreateComponent,
    FarmlistComponent,
    UploadComponent,
    ProcessComponent,
    DashboardComponent,
    ProfileComponent,
    SettingComponent,
    TestUrlComponent,
    TestlistComponent,
    TestdetailComponent,
    TestHComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // AngularFireModule.initializeApp(environment.firebaseConfig),
    // AngularFireDatabaseModule,
    // AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    SharedsModule,
    RouterModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule,
    

  ],
  providers: [AuthGuard,SecureInnerPagesGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
