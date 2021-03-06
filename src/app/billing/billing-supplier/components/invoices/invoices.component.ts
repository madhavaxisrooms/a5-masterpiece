import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../../services/payment.service';
import { WindowRefService } from '../../../../shared/services/window-ref.service';
import { LoadingIndicatorService } from '../../../../shared/services/loading-indicator.service';
import { InvoiceService } from '../../services/invoice.service';

@Component({
  selector: 'billing-supplier-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit {
  rzp1: any;
  public invoices;
  public supplierid = localStorage.getItem('id');
  constructor(
    private invoiceService: InvoiceService,
    private paymentService: PaymentService,
    private winRef: WindowRefService,
    private loader: LoadingIndicatorService
  ) { }

  /**
   *Hide/Display Loader
   * Gets invoices details by ID
   *
   * @requires InvoiceService 
   * @memberof InvoicesComponent
   */
  ngOnInit() {
    this.loader.displayLoadingIndicator();
    this.invoiceService.getInvoiceDetailsById(this.supplierid).subscribe(
      res => {
        this.invoices = JSON.parse(res['_body']);
        this.loader.hideLoadingIndicator();
      }
    );
  }

  downloadInvoice(){
    this.paymentService.downloadInvoice();
  }

  /**
   * Called from inside the Pay Invoice function. 
   * Invoked when payment has been made successfully.
   * 
   * @param {any} response 
   * @memberof InvoicesComponent
   */
  paymentResponseHander(response) {
    this.paymentService.successfulPayment(response.razorpay_payment_id).subscribe(
      res => {
        this.winRef.reload();
      }
    );
  }

  /**
   * Calling payment Razorpay's payment gateway 
   * Do not recollect much about the same - Madhav Sharma
   * 
   * @param {any} invoice 
   * @memberof InvoicesComponent
   */
  payInvoice(invoice) {
    var userDetails = {
      "paymentRequestType": "NON_CREDIT",
      "loginId":'1101',
      "amount":invoice.totalAmount,
      "guestDetail": {
        "firstName": "test",
        "lastName": "test1",
        "emailId": "test@mail.com",
        "mobileNumber": "9036032636"
      },
      "orderDetail": {
        "currency": invoice.currency,
        "merchantReferenceId": invoice.invoiceId
      }
    };
    this.paymentService.paymentGateway(userDetails).subscribe(
      res => {
        var userDetails = JSON.parse(res['_body']);
        var options = {
          'key': "rzp_live_1WSALQH1f3VCRy",
          'name': 'RazorPay Payment',
          'description': 'Axisrooms',
          'image': '../../../../assets/axisrooms-logo-small.png',
          "order_id": userDetails.orderDetail.pgReferenceId,
          'handler': this.paymentResponseHander.bind(this),
          'prefill': {
            'name': userDetails.guestDetail.firstName + " " + userDetails.guestDetail.lastName,
            'email': userDetails.guestDetail.emailId,
            'contact': userDetails.guestDetail.mobileNumber
          },
          'notes': {
            'address': ''
          },
          'theme': {
            'color': '#01285b'
          }
        };
        this.rzp1 = new this.winRef.nativeWindow.Razorpay(options);
        this.rzp1.open();
      },
      (err) => {
        console.log(err);
      });

  }

}
