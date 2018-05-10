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
      return { status: 'Something went wrong. Please try again Later.' };
    });
  }
  getChannel() {
    const url = environment.analytics_ip + '/cm/filters/getChannelTypes';
    return this.http.get(url).map(res => {
      return res.json();
    }, err => {
      return { status: 'Something went wrong. Please try again Later.' };
    });
  }
  getDateType() {
    const url = environment.analytics_ip + '/cm/filters/getDateType';
    return this.http.get(url).map(res => {
      return res.json();
    }, err => {
      return { status: 'Something went wrong. Please try again Later.' };
    });
  }
  getPaymentType() {
    const url = environment.analytics_ip + '/cm/filters/getPaymentTypes';
    return this.http.get(url).map(res => {
      return res.json();
    }, err => {
      return { status: 'Something went wrong. Please try again Later.' };
    });
  }
  getCount() {
    const url = environment.analytics_ip + '/cm/reports/masterCount';
    return this.http.get(url).map(res => {
      return res.json();
    }, err => {
      return { status: 'Something went wrong. Please try again Later.' };
    });
  }
  getSupplierTypes() {
    const url = environment.analytics_ip + '/cm/filters/getSupplierTypes';
    return this.http.get(url).map(res => {
      return res.json();
    }, err => {
      return { status: 'Something went wrong. Please try again Later.' };
    });
  }
  getHotel() {
    const url = environment.analytics_ip + '/cm/filters/getProducts';
    return this.http.get(url).map(res => {
      return res.json();
    }, err => {
      return { status: 'Something went wrong. Please try again Later.' };
    });
  }
  getCity() {
    const url = environment.analytics_ip + '/cm/filters/getCities';
    return this.http.get(url).map(res => {
      return res.json();
    }, err => {
      return { status: 'Something went wrong. Please try again Later.' };
    });
  }
  getStatus($id) {
    const url = environment.analytics_ip + '/cm/filters/getStatuses/' + $id;
    return this.http.get(url).map(res => {
      return res.json();
    }, err => {
      return { status: 'Something went wrong. Please try again Later.' };
    });
  }
  getSupplier() {
    const url = environment.analytics_ip + '/cm/filters/getSuppliers';
    return this.http.get(url).map(res => {
      return res.json();
    }, err => {
      return { status: 'Something went wrong. Please try again Later.' };
    });
  }
}
