import { Component, OnInit } from '@angular/core';
import { WindowRefService } from '../../../../shared/services/window-ref.service';
import { ToasterService } from '../../../../shared/services/toaster.service';
import { LoadingIndicatorService } from '../../../../shared/services/loading-indicator.service';
import { InvoiceService } from '../../services/invoice.service';

@Component({
  selector: 'billing-supplier-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit {
  public invoiceDate;
  public invoices;
  public actionMenu;
  public changeDueDateVisibility: boolean = false;
  public invoiceIdForDueDate;
  constructor(
    private invoiceService: InvoiceService,
    private winRef: WindowRefService,
    private toasterService: ToasterService,
    private loader: LoadingIndicatorService
  ) { }

  /**
   * Getting all the invices on page  load.
   * 
   * @requires invoiceService.getAllInvoices
   * @memberof InvoicesComponent
   */
  ngOnInit() {
    this.loader.displayLoadingIndicator();
    this.invoiceService.getAllInvoices().subscribe(
      res => {
        this.invoices = JSON.parse(res['_body']);
        if (this.invoices != null) this.actionMenu = new Array(this.invoices.length);
        this.loader.hideLoadingIndicator();
      },
      err => {
        this.toasterService.displayToaster("Something went wrong.", 'error');
        this.loader.hideLoadingIndicator();
      }
    );
  }

  /**
   * Validates the following conditions.
   * 1. Paid invoice cannot be deleted
   * 
   * Makes a call to the changeInvoiceStatus function in invoice service if validated. 
   * Which inturn pushes the data to the backend.
   * 
   * @param {String} invoiceId Which invoice ID we're trying to update
   * @param {String} status The status we want to update it to
   * @param {String} currentStatus The current status 
   * @requires InvoiceService Change invoice status API
   * @memberof InvoicesComponent
   */
  changeStatus(invoiceId: String, status: String, currentStatus: String) {
    if (currentStatus == 'PAID' && status == "DELETED") {
      this.toasterService.displayToaster("Cannot delete paid invoice", 'error');
    } else {
      this.invoiceService.changeInvoiceStatus(invoiceId, status).subscribe(
        res => {
          this.ngOnInit();
        },
        err => {
          this.toasterService.displayToaster("Something went wrong.", 'error');
        }
      );
    }
  }


  /**
   * Takes the date from the front-end and validates of Invoice date is greater than new due date.
   * 
   * @param {any} date 
   * @memberof InvoicesComponent
   * @requires InvoiceService.changeDueDate
   * @requires toasterService.displayToaster
   */
  changeDueDate(date) {
    if (date < this.invoiceDate) {
      this.toasterService.displayToaster("Due Date should be before Invoice Date", 'error');
    } else {
      this.invoiceService.changeDueDate(this.invoiceIdForDueDate, date).subscribe(
        res => {
          this.ngOnInit();
        },
        err => {
          this.toasterService.displayToaster("Something went wrong.", 'error');
        }
      );
    }
  }


}
