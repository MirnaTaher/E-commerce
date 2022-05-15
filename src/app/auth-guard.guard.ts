import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoggedInService } from './logged-in.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  isLoggedIn;
  constructor(private loggedInService: LoggedInService){}
  ngOnInit(){
    this.isLoggedIn=this.loggedInService.getIsLoggedIn();
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.isLoggedIn=this.loggedInService.getIsLoggedIn();
      if(this.isLoggedIn.value){
        return true
      }
      window.alert('You dont have permission to view this page')
  }
  
}
