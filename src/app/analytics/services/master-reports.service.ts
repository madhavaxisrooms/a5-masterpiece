import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from './../../../environments/environment';
import 'rxjs/Rx/';
@Injectable()
export class MasterReportsService {

  constructor(private http: HttpClient) {

   }

  getList() {
    const url = environment.analytics_ip + '/cm/reports/master';
    return this.http.get(url);
  }
  getFilterResults($data) {
    const url = environment.analytics_ip + '/cm/reports/master';
    return this.http.get(url);
  }
}
