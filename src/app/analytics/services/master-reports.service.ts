import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import { environment } from './../../../environments/environment';
import 'rxjs/Rx/';
@Injectable()
export class MasterReportsService {

  constructor(private http: Http) { }
  getList() {
    const url = environment.analytics_ip + '/cm/reports/master';
    return this.http.get(url).map((res) => {
      return res.json();
    },
  err => {
    console.log(err);
  });
  }
}
