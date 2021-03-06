import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserService } from './users/user.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthguardGuard implements CanActivate {
  constructor(
    private router: Router, 
    private user: UserService
  ){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      
    if(this.user.getUserLoggedIn()==true)
    {
      return true;
    }
    else
    {
    this.router.navigateByUrl("/loginForm");
    }
    
  }
}
