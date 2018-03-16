import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserService } from './users/user.service';
import { Router } from '@angular/router';

@Injectable()
export class LoginguarGuard implements CanActivate {
  constructor(
    private router: Router, 
    private user: UserService
  ){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(this.user.getUserLoggedIn()===false)
      return true;
    else
      console.log("es verdad");
      this.router.navigateByUrl("/dashboard");
  }
}
