import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
@Injectable()
export class HomeService {

  constructor(private http: HttpClient) { }
  searchByBookingId(productId, bookingId) {
    const url = environment.analytics_ip + '/cm/reports/master/' + bookingId + '/' + productId;
    return this.http.get(url, {
      params: {
        accessToken: environment.accessToken
      }
    });
  }
  masterCount($startDate, $endDate) {
    const url = environment.analytics_ip + '/cm/reports/masterCount';
    return this.http.get(url, {
      params: {
        accessToken: environment.accessToken,
        startDate: $startDate,
         endDate: $endDate
      }
    });
  }
}
