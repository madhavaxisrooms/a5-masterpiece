import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from './../../../environments/environment';
import 'rxjs/Rx/';
import * as moment from 'moment';
@Injectable()
export class MasterReportsService {

  constructor(private http: HttpClient) {

   }

  getList() {
    const url = environment.analytics_ip + '/cm/reports/master';
    return this.http.get(url,  {params: {
        accessToken: environment.accessToken,
        startDate: moment().format('YYYY-MM-DD'),
        endDate: moment().format('YYYY-MM-DD')
      }
    });
  }
  getFilterResults($data) {
    const url = environment.analytics_ip + '/cm/reports/master';
    const params = $data;
    console.log(params);
    params.accessToken =  environment.accessToken;
    return this.http.get(url, {
      params: params
    });
  }
}
