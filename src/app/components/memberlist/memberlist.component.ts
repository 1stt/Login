import { Component, OnInit } from '@angular/core';
import { MemberService } from 'src/app/services/member.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-memberlist',
  templateUrl: './memberlist.component.html',
  styleUrls: ['./memberlist.component.css']
})
export class MemberlistComponent implements OnInit {

  members:any;
  constructor(private memberService: MemberService) { }

  ngOnInit(){
    this.getCustomersList();

  }

 getCustomersList() {
    this.memberService.getCustomersList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(members => {
      this.members = members;
    });
  }

  deleteCustomers() {
    this.memberService.deleteAll().catch(err => console.log(err));
  }
}
