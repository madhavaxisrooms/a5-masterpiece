import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from './../../../../environments/environment';
import 'rxjs/Rx';
@Injectable()
export class HomeService {

  constructor(private http: Http) { }
  searchByBookingId(productId, bookingId) {
    const url = environment.analytics_ip + '/cm/reports/master/' + bookingId + '/' + productId;
    return this.http.get(url).map((res) => {
      return res.json();
    }, err => {
      return { status: 'Something went wrong. Please try again Later.' };
    });
  }
}
