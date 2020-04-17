import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { AuthNavComponent } from './component/auth-nav/auth-nav.component';
import { AuthSideComponent } from './component/auth-side/auth-side.component';
import { AuthContentComponent } from './component/auth-content/auth-content.component';
import { RouterModule } from '@angular/router';

/* Reactive form services in Angular 7 */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AuthNavComponent, AuthSideComponent, AuthContentComponent],

  exports:[AuthNavComponent,
    BsDatepickerModule,
    AuthSideComponent,
    AuthContentComponent,
    FormsModule,
    ReactiveFormsModule
  ],

  imports: [
    CommonModule,
    BsDatepickerModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedsModule { }
