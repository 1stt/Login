import { NgZone } from '@angular/core';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SecureInnerPagesGuard implements CanActivate {

  constructor(
    public auth: AuthService,
    private ngZone:NgZone,
    public router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(this.auth.isLoggedIn) {
      window.alert("You are not allowed to access this URL!");
      console.log("มาผิดทางจ้าาา")
      this.ngZone.run(()=>this.auth.navigateTo('membercreate'))
    }
    return true;
  }

}