import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from './../../../config';
import { AuthService } from './../../../auth.service';
@Injectable()
export class HomeService {

  constructor(private http: HttpClient, private authService: AuthService) { }
  searchByBookingId(productId, bookingId) {
    const url = config.analytics_ip + '/cm/reports/master/' + bookingId + '/' + productId;
    return this.http.get(url, {
      params: {
        accessToken: this.authService.access_token
      }
    });
  }
  masterCount($params) {
    const params = $params;
    params.accessToken = this.authService.access_token;
    const url = config.analytics_ip + '/cm/reports/masterCount';
    return this.http.get(url, {
      params: params
    });
  }
}
