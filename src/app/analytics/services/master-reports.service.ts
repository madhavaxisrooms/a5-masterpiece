import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { AuthService } from './../../auth.service';
import {config} from './../../config';
import 'rxjs/Rx/';
import * as moment from 'moment';
@Injectable()
export class MasterReportsService {

  constructor(private http: HttpClient, private authService: AuthService) {

   }

  getList() {
    const params = {
      accessToken: this.authService.access_token,
      startDate: moment().format('YYYY-MM-DD'),
      endDate: moment().format('YYYY-MM-DD'),
      startRowNumber: '0',
      endRowNumber: '500'
    };
    const url = config.analytics_ip + '/cm/reports/master';
    return this.http.get(url,  {params: params});
  }
  getFilterResults($data) {
    const url = config.analytics_ip + '/cm/reports/master';
    const params = $data;
    params.accessToken = this.authService.access_token;
    return this.http.get(url, {
      params: params
    });
  }
}
