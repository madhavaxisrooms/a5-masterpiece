import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import 'rxjs/Rx/';

@Injectable()
export class FilterService {

  constructor(private http: HttpClient) { }
  getProduct() {
    const url = environment.analytics_ip + '/cm/filters/getProductType';
    return this.http.get(url, {
      params: {
        accessToken: environment.accessToken
      }
    });
  }
  getChannel() {
    const url = environment.analytics_ip + '/cm/filters/getChannelTypes';
    return this.http.get(url, {
      params: {
        accessToken: environment.accessToken
      }
    });
  }
  getDateType() {
    const url = environment.analytics_ip + '/cm/filters/getDateType';
    return this.http.get(url, {
      params: {
        accessToken: environment.accessToken
      }
    });
  }
  getPaymentType() {
    const url = environment.analytics_ip + '/cm/filters/getPaymentTypes';
    return this.http.get(url, {
      params: {
        accessToken: environment.accessToken
      }
    });
  }
  getCount() {
    const url = environment.analytics_ip + '/cm/reports/masterCount';
    return this.http.get(url, {
      params: {
        accessToken: environment.accessToken
      }
    });
  }
  getSupplierTypes() {
    const url = environment.analytics_ip + '/cm/filters/getSupplierTypes';
    return this.http.get(url, {
      params: {
        accessToken: environment.accessToken
      }
    });
  }
  getHotel($cityId) {
    const url = environment.analytics_ip + '/cm/filters/getProducts';
    return this.http.get(url, {
      params: {
        accessToken: environment.accessToken,
        cityId: $cityId
      }
    });
  }
  getCity() {
    const url = environment.analytics_ip + '/cm/filters/getCities';
    return this.http.get(url, {
      params: {
        accessToken: environment.accessToken
      }
    });
  }
  getStatus($id) {
    const url = environment.analytics_ip + '/cm/filters/getStatuses/' + $id;
    return this.http.get(url, {
      params: {
        accessToken: environment.accessToken
      }
    });
  }
  getSupplier(supplier = '') {
    const url = environment.analytics_ip + '/cm/filters/getSuppliers';
    return this.http.get(url, {
      params: {
        accessToken: environment.accessToken,
        supplierType: supplier
      }
    });
  }
}
