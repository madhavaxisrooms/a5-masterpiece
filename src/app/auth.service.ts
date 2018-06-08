import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';


@Injectable()
export class AuthService {

  constructor(
    private route: ActivatedRoute
    , private _router: Router
    , private http: HttpClient
  ) {
    this.getToken();
  }

  public userDetails;
  access_token: string;
  logoutUser() {
    localStorage.removeItem('access_token');
    this._router.navigate(['/analytics']);
  }

  getUserDetails(callback) {
    const url = "http://192.168.0.62:8888/api/be/getUserDetails";
    this.http.get(url).subscribe(
      res => { 
        this.userDetails = res;
        localStorage.setItem('userDetails',JSON.stringify(res))
        callback();
       },
      err => { console.log(err); }
    );
  }

  getToken() {
    this.access_token = localStorage.getItem('access_token');
    return 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOiIyMDE4LTA2LTA4IiwiZXhwIjoxNTI4NDU3MDk5NzY4LCJlbWFpbCI6ImtoZW1wYWxAYXhpc3Jvb21zLmNvbSIsInVzZXJJZCI6MTEwMSwicGFzc3dvcmQiOiI5QTJ1V3d0dTlsNERaVTNjWHU1MnZwSVYvQXVyaklUdVhwdG1TOHVIem54VkxMcitXOVIyelptdUNGSmNQcXlubXYrN3I5d0RPb1g0ZisrbDVWWWQvd1x1MDAzZFx1MDAzZCJ9.Cc46hTyoBa2PfsmdJAS9O8Upw8FQIBeaQp01Y0id624';
    // return this.access_token;
  }

  

  loggedIn() {
    return !!localStorage.getItem('access_token');
  }
}
