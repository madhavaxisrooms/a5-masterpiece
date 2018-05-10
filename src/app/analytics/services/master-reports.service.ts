import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { environment } from './../../../environments/environment';
import 'rxjs/Rx/';
@Injectable()
export class MasterReportsService {
  headers: Headers;
  options: RequestOptions;
  constructor(private http: Http) {

   }
  getList() {
    const url = environment.analytics_ip + '/cm/reports/master';
    this.options = new RequestOptions({ headers: this.headers});
    return this.http.get(url, this.options).map((res) => {
      return res.json();
    },
  err => {
    return { status: 'Something went wrong. Please try again Later.' };
  });
  }
  getFilterResults($data) {
    this.options = new RequestOptions({ headers: this.headers, params: $data });
    const url = environment.analytics_ip + '/cm/reports/master';
    return this.http.get(url, this.options).map((res) => {
      return res.json();
    }, err => {
       return { status: 'Something went wrong. Please try again Later.'};
    });
  }
}
