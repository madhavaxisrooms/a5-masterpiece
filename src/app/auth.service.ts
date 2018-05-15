import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';


@Injectable()
export class AuthService {

  constructor(private route: ActivatedRoute, private _router: Router) {
    this.getToken();
  }
  access_token: string;
  logoutUser() {
    localStorage.removeItem('access_token');
    this._router.navigate(['/analytics']);
  }

  getToken() {
    this.access_token = localStorage.getItem('access_token');
    return this.access_token;
  }

  loggedIn() {
    return !!localStorage.getItem('access_token');
  }
}
