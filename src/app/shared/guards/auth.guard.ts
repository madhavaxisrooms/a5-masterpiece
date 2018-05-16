import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router,
    ActivatedRoute, CanActivateChild, CanLoad } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { CookieService } from 'ngx-cookie-service';
import { Route } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
  cookieValue = '';

  constructor( private route: ActivatedRoute, private _router: Router, private cookieService: CookieService ) { }

  canActivate() {
   return this.checkToken();
  }
  canActivateChild() {
    return this.checkToken();
  }
  canLoad(route: Route) {
      return this.checkToken();
  }
  checkToken() {
    this.cookieValue = this.cookieService.get('access_token');
    const cookieExists: boolean = this.cookieService.check('access_token');
    if (cookieExists) {
        return true;
    } else {
      location.href = 'http://localhost:8080';
      return false;
    }
  }
}
