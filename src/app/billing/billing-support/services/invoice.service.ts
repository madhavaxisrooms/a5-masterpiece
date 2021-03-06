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
   * Getting all Invoices
   * 
   * @returns 
   * @memberof InvoiceService
   */
  getAllInvoices() {
    const url = 'https://billing-service.axisrooms.com/v1/api/invoiceDetails';
    return this.http.post(url, null).map(
      (res) => {
        return res;
      }
    );
  }

  /**
   * Changing Invioce Status
   * 
   * @param {any} invoiceId 
   * @param {any} change 
   * @returns 
   * @memberof InvoiceService
   */
  changeInvoiceStatus(invoiceId, change) {
    const url = 'https://billing-service.axisrooms.com/v1/api/changeStatus/' +change+'?invoiceNo='+ invoiceId;
    return this.http.put(url, null).map(
      (res) => {
        return res;
      }
    );
  }

  /**
   * Changes Due date
   * 
   * @param {any} invoiceId 
   * @param {any} date 
   * @returns 
   * @memberof InvoiceService
   */
  changeDueDate(invoiceId, date) {
    const url = 'https://billing-service.axisrooms.com/v1/api/changeDueDate/' +date+'?invoiceNo='+ invoiceId;
    return this.http.put(url, null).map(
      (res) => {
        return res;
      }
    );
  }


  sendInvoice(id){
    const url = 'https://billing-service.axisrooms.com/v1/api/generate/invoice?invoiceNo='+ id;
    return this.http.post(url, null).map(
      (res) => {
        return res;
      },
      err => {
        return err;
      }
    );
  }

  
}
