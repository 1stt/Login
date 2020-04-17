import { NgZone } from '@angular/core';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
@Injectable()
export class AuthGuard implements CanActivate {
constructor(
    private afAuth: AngularFireAuth, 
    private router: Router,
    private ngZone:NgZone,
    public auth: AuthService) 
    { }

canActivate(
 next: ActivatedRouteSnapshot,
 state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
    console.log("5222222222") 
// return this.afAuth.authState
//  .take(1)
//  .map(user => !!user)
//  .do(loggedIn => {
 if (this.auth.isLoggedIn !== true) {
    this.ngZone.run(()=>this.auth.navigateTo('/login'));
    console.log("1111111111111111")
 }
 return true; 
}
}