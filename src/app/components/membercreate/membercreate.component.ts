import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MemberService } from 'src/app/services/member.service';
import { Member } from 'src/app/models/member';


@Component({
  selector: 'app-membercreate',
  templateUrl: './membercreate.component.html',
  styleUrls: ['./membercreate.component.css']
})
export class MembercreateComponent implements OnInit {

  member:Member = new Member();
  submitted = false;


  constructor(

    private memberService: MemberService

  ) { }

  ngOnInit() {
  }

  newCustomer(): void {
    this.submitted = false;
    this.member = new Member();
  }

  save() {
    this.memberService.createCustomer(this.member);
    this.member = new Member();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }



}
