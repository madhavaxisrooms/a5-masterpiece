import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { environment } from './../../../../environments/environment';
import 'rxjs/Rx/';

@Injectable()
export class FilterService {

  constructor(private http: Http) { }
  getProduct() {
    const url = environment.analytics_ip + '/cm/filters/getProductType';
    return this.http.get(url).map((res) => {
      return res.json();
    }, err => {
      console.log(err);
    });
  }
  getChannel() {
    const url = environment.analytics_ip + '/cm/filters/getChannelTypes';
    return this.http.get(url).map(res => {
      return res.json();
    }, err => {
      console.log(err);
    });
  }
  getDateType() {
    const url = environment.analytics_ip + '/cm/filters/getDateType';
    return this.http.get(url).map(res => {
      return res.json();
    }, err => {
      console.log(err);
    });
  }
  getPaymentType() {
    const url = environment.analytics_ip + '/cm/filters/getPaymentTypes';
    return this.http.get(url).map(res => {
      return res.json();
    }, err => {
      console.log(err);
    });
  }
  getCount() {
    const url = environment.analytics_ip + '/cm/reports/masterCount';
    return this.http.get(url).map(res => {
      return res.json();
    }, err => {
      console.log(err);
    });
  }
  getSupplierTypes() {
    const url = environment.analytics_ip + '/cm/filters/getSupplierTypes';
    return this.http.get(url).map(res => {
      return res.json();
    }, err => {
      console.log(err);
    });
  }
  getHotel() {
    const url = environment.analytics_ip + '/cm/filters/getProducts';
    return this.http.get(url).map(res => {
      return res.json();
    }, err => {
      console.log(err);
    });
  }
  getCity() {
    const url = environment.analytics_ip + '/cm/filters/getCities';
    return this.http.get(url).map(res => {
      return res.json();
    }, err => {
      console.log(err);
    });
  }
  getStatus($id) {
    const url = environment.analytics_ip + '/cm/filters/getStatuses/' + $id;
    return this.http.get(url).map(res => {
      return res.json();
    }, err => {
      console.log(err);
    });
  }
  getSupplier() {
    const url = environment.analytics_ip + '/cm/filters/getSuppliers';
    return this.http.get(url).map(res => {
      return res.json();
    }, err => {
      console.log(err);
    });
  }
}
