import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { AuthService } from './../../../auth.service';
@Injectable()
export class HomeService {

  constructor(private http: HttpClient, private authService: AuthService) { }
  searchByBookingId(productId, bookingId) {
    const url = environment.analytics_ip + '/cm/reports/master/' + bookingId + '/' + productId;
    return this.http.get(url, {
      params: {
        accessToken: this.authService.access_token
      }
    });
  }
  masterCount($startDate, $endDate) {
    const url = environment.analytics_ip + '/cm/reports/masterCount';
    return this.http.get(url, {
      params: {
        accessToken: this.authService.access_token,
        startDate: $startDate,
        endDate: $endDate
      }
    });
  }
}
