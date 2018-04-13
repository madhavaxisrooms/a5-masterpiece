import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class InvoiceService {

  constructor(
    private http: Http
  ) { }
/**
 * Gets All Invoices of perticular User ID from server
 * 
 * @param {any} userid 
 * @returns 
 * @memberof InvoiceService
 */
getInvoiceDetailsById(userid) {
    const url = 'https://billing-service.axisrooms.com/v1/api/invoiceDetails/' + userid;
    return this.http.post(url, null).map(
      (res) => {        
        return res;
      }
    );
  }

}
