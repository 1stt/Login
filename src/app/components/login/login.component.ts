import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  // Url= AppURL;
  loginForm: FormGroup;

  constructor(public auth:AuthService,
    private builder: FormBuilder,
    private router: Router,
    // private alert: AlertService,
    ) {
      this.initialCreateFormData();
      auth.getCurrentLoggedIn();
    }

  ngOnInit(): void {
    this.buildForm();
  }
   //สร้างฟอร์ม
   private initialCreateFormData(){
    this.loginForm = this.builder.group({

      email:['',Validators.required],
      password:['',Validators.required],
      // remember:[true]
    });
  }

  buildForm(): void {
    this.loginForm = new FormGroup({
    email: new FormControl('', [Validators.required,Validators.email]),
    password: new FormControl('', [ Validators.pattern('^(?=.*[0–9])(?=.*[a-zA-Z])([a-zA-Z0–9]+)$'),
    Validators.minLength(6),
    Validators.maxLength(25),
    // remember:new FormControl('',[true])
    ])
    });
    }

    login() {
      this.auth.login(this.loginForm.value.email, this.loginForm.value.password);
      this.email = '';
      this.password = '';
    }

    // buildLoginButton(){
    //   this.login();
    // }


}
