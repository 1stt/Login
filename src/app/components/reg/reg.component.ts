import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl, NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

// import { MemberService } from 'src/app/services/member.service';
// import { Member } from 'src/app/models/member';
// import { AngularFireList } from 'angularfire2/database';
import { ValidateService } from 'src/app/services/validate.service';
import { RegService } from 'src/app/services/reg.service';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {
  title: string;

  user: any={};
  email: string;
  password: string;
    id: string;
    // uid:string;

  // Url = AppURL;
  form:FormGroup;
  // member:Member=new Member();
  // memberList:AngularFireList<Member>;


  constructor(
    public reg:RegService,
    public auth: AuthService,
    // public memberservice:MemberService,
    private builder: FormBuilder,
    private router: Router,
    private validate:ValidateService,
  ) {
    this.initialCreateFormData();
   }

  ngOnInit(): void {
    this.buildForm();
  }
  buildForm(): void {
    this.form = new FormGroup({
    email: new FormControl('', [Validators.required,Validators.email]),
    password: new FormControl('', [Validators.pattern('^(?=.*[0–9])(?=.*[a-zA-Z])([a-zA-Z0–9]+)$'),
    Validators.minLength(6),
    Validators.maxLength(25)]),
    username: new FormControl('', [Validators.required]),
    cpassword: new FormControl('', [Validators.required]),
    
    });
    
    }

    signup() {
      this.email = this.password = '';
      this.auth.signup(this.form.value.email, this.form.value.password);
      console.log('email is ' + this.form.value.email + ' ' + ' password is ' +   this.form.value.password)
      // this.email = this.password = '';
    }

//สร้างฟอร์ม
private initialCreateFormData(){

this.form = this.builder.group({
  username:['',[Validators.required]],
  email:['',[Validators.required,Validators.email]],
  password:['',[Validators.required,this.validate.isPassword]],
  cpassword:['',[Validators.required,this.validate.comparePassword('password')]],
  

});

}

//upload ข้อมูลลง firebase หลังจาก register
addDetailUser(data){
  if (this.id) {
    this.reg.editDetailUser(this.id, data.value).then(this.goToHome);
  } else {
    this.reg.addDetailUser(data.value).then(this.goToHome);
  }
}

goToHome = () => {
this.router.navigate(['membercreate']);
}

}
