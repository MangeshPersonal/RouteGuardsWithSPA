import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { CanActivateChild,Router } from '@angular/router';

@Injectable()
export class ActivatechildGuard implements CanActivateChild {

  constructor(private router:Router){

  }
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
console.log('redirecting home due to access Rights..');
this.router.navigate(['Home']);
    return false;
  }
  
}
