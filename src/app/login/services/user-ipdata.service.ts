import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx/';


@Injectable()
export class UserIpdataService {

  constructor(
    private http: HttpClient
  ) { }

  getUsersCountry(){
    const url = "https://ipinfo.io";
    return this.http.get(url);
  }

}
