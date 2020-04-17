import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  resetpasswordForm: FormGroup;

  constructor(
    public auth: AuthService
  ) { }

  ngOnInit(): void {
  }

  // ForgotPassword(){
  //   this.auth()
  // }

}
