import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-auth-nav',
  templateUrl: './auth-nav.component.html',
  styleUrls: ['./auth-nav.component.css']
})
export class AuthNavComponent implements OnInit {

  constructor(
    private authen:AuthService,
  ) { }

  ngOnInit(): void {
  }

  onLogout() {
    // this.alert.notify('ออกจากระบบสำเร็จ', 'info');
    this.authen.signOut()
  }

}
