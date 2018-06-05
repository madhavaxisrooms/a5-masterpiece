import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';

import 'rxjs/Rx'
@Injectable()
export class CreateUserService {

  constructor(
    private http: HttpClient
  ) { }




  createUser(user) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    const url = "http://192.168.0.62:8888/api/be/supplierSignUp";
    return this.http.post(url, user, httpOptions);
  }
}
