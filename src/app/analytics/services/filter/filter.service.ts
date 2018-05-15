import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { AuthService } from './../../../auth.service';
import 'rxjs/Rx/';

@Injectable()
export class FilterService {

  constructor(private http: HttpClient, private authService: AuthService) { }
  getProduct() {
    const url = environment.analytics_ip + '/cm/filters/getProductType';
    return this.http.get(url, {
      params: {
        accessToken: this.authService.access_token
      }
    });
  }
  getChannel() {
    const url = environment.analytics_ip + '/cm/filters/getChannelTypes';
    return this.http.get(url, {
      params: {
        accessToken: this.authService.access_token
      }
    });
  }
  getDateType() {
    const url = environment.analytics_ip + '/cm/filters/getDateType';
    return this.http.get(url, {
      params: {
        accessToken: this.authService.access_token
      }
    });
  }
  getPaymentType() {
    const url = environment.analytics_ip + '/cm/filters/getPaymentTypes';
    return this.http.get(url, {
      params: {
        accessToken: this.authService.access_token
      }
    });
  }
  getCount() {
    const url = environment.analytics_ip + '/cm/reports/masterCount';
    return this.http.get(url, {
      params: {
        accessToken: this.authService.access_token
      }
    });
  }
  getSupplierTypes() {
    const url = environment.analytics_ip + '/cm/filters/getSupplierTypes';
    return this.http.get(url, {
      params: {
        accessToken: this.authService.access_token
      }
    });
  }
  getHotel($cityId) {
    const url = environment.analytics_ip + '/cm/filters/getProducts';
    return this.http.get(url, {
      params: {
        accessToken: this.authService.access_token,
        cityId: $cityId
      }
    });
  }
  getCity() {
    const url = environment.analytics_ip + '/cm/filters/getCities';
    return this.http.get(url, {
      params: {
        accessToken: this.authService.access_token
      }
    });
  }
  getStatus($id) {
    const url = environment.analytics_ip + '/cm/filters/getStatuses/' + $id;
    return this.http.get(url, {
      params: {
        accessToken: this.authService.access_token
      }
    });
  }
  getSupplier(supplier = '') {
    const url = environment.analytics_ip + '/cm/filters/getSuppliers';
    return this.http.get(url, {
      params: {
        accessToken: this.authService.access_token,
        supplierType: supplier
      }
    });
  }
}
