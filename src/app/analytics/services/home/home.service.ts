import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
@Injectable()
export class HomeService {

  constructor(private http: HttpClient) { }
  searchByBookingId(productId, bookingId) {
    const url = environment.analytics_ip + '/cm/reports/master/' + bookingId + '/' + productId;
    return this.http.get(url);
  }
}
