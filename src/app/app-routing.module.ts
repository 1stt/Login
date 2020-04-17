import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegComponent } from './components/reg/reg.component';
import { MembercreateComponent } from './components/membercreate/membercreate.component';
import { MemberlistComponent } from './components/memberlist/memberlist.component';
import { FarmcreateComponent } from './components/farmcreate/farmcreate.component';
import { FarmlistComponent } from './components/farmlist/farmlist.component';
import { UploadComponent } from './components/upload/upload.component';
import { ProcessComponent } from './components/process/process.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SettingComponent } from './components/setting/setting.component';
import { TestUrlComponent } from './components/test-url/test-url.component';
import { TestlistComponent } from './components/testlist/testlist.component';
import { TestdetailComponent } from './components/testdetail/testdetail.component';
import { TestHComponent } from './components/test-h/test-h.component';
//guards
import { AuthGuard } from './guards/auth.guard';
//secureinnerpage
import { SecureInnerPagesGuard } from './guards/secure-inner-pages.guard';
//forgotpassword
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
//verifyemail
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'reg', component: RegComponent},
  { path: 'membercreate', component: MembercreateComponent, canActivate: [AuthGuard]},
  { path: 'memberlist', component: MemberlistComponent, canActivate: [AuthGuard]},
  { path: 'farmcreate', component: FarmcreateComponent, canActivate: [AuthGuard] },
  { path: 'farmlist', component: FarmlistComponent, canActivate: [AuthGuard]},
  { path: 'upload', component: UploadComponent, canActivate: [AuthGuard]},
  { path: 'process', component: ProcessComponent, canActivate: [AuthGuard]},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  { path: 'setting', component: SettingComponent, canActivate: [AuthGuard]},
  { path: 'test', component: TestUrlComponent, canActivate: [AuthGuard]},
  { path: 'testlist', component: TestlistComponent, canActivate: [AuthGuard]},
  { path: 'testdetail', component: TestdetailComponent, canActivate: [AuthGuard]},
  { path: 'testH', component: TestHComponent, canActivate: [AuthGuard]},
  { path: 'forgot-password', component: ForgotPasswordComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'verify-email-address', component: VerifyEmailComponent, canActivate: [SecureInnerPagesGuard] },
  



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
