import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';
import { WindowRefService } from '../../../shared/services/window-ref.service';
import { ToasterService } from '../../../shared/services/toaster.service';



@Injectable()
export class FormService {

  /**
   * Behaviour Subjects for forms naviation and toggling
   * 
   * @private
   * @memberof FormService
   */
  private formHiddenSource = new BehaviorSubject<boolean>(true);
  private audienceHiddenSource = new BehaviorSubject<boolean>(false);
  private billingHiddenSource = new BehaviorSubject<boolean>(true);
  private validityHiddenSource = new BehaviorSubject<boolean>(true);
  private billingNavDisabledSource = new BehaviorSubject<boolean>(true);


  formHidden = this.formHiddenSource.asObservable();
  audienceHidden = this.audienceHiddenSource.asObservable();
  billingHidden = this.billingHiddenSource.asObservable();
  validityHidden = this.validityHiddenSource.asObservable();
  billingNavDisabled = this.billingNavDisabledSource.asObservable();


  constructor(
    private http: Http,
    private winRef: WindowRefService,
    private toasterService: ToasterService
  ) { }

  toggleForm(change: boolean) {
    this.formHiddenSource.next(change);
  }

  /**
   * Toggling inbetween froms. 
   * 
   * @param {*} from Current Component
   * @param {*} to Target Component
   * @memberof FormService
   */
  toggleFormTabs(from: any, to: any) {
    // Hiding and showing forms
    if (from == null || to == null) {
      this.audienceHiddenSource.next(true);
      this.billingHiddenSource.next(true);
      this.validityHiddenSource.next(true);
    }
    else if (from === 'audience') this.audienceHiddenSource.next(true);
    else if (from === 'billing') this.billingHiddenSource.next(true);
    else if (from === 'validity') this.validityHiddenSource.next(true);

    if (to === 'audience') this.audienceHiddenSource.next(false);
    else if (to === 'billing') this.billingHiddenSource.next(false);
    else if (to === 'validity') this.validityHiddenSource.next(false);


    //Enabling and disbaling buttons
    if (to == 'validity') this.billingNavDisabledSource.next(false);
    if (to == 'audience') this.billingNavDisabledSource.next(true);

  }


  /**
   * Getting all templates from Server
   * 
   * @returns {Observable<any>} 
   * @memberof FormService
   */
  getAllTemplates(): Observable<any> {



    const url = 'https://billing-service.axisrooms.com//v1/api/getTemplate';
    return this.http.post(url, null).map(
      (res) => {
        return res;
      },
      (err)=>{
        return err;
      }
    );
  }

  /**
   *  Posting a new template to the server for creating a template
   * 
   * @param {any} template 
   * @memberof FormService
   */
  createTemplate(template) {
    const url = "https://billing-service.axisrooms.com/v1/api/createTemplate";
    this.http.post(url, template).subscribe(
      res => {
        this.getAllTemplates();
        this.winRef.reload();
      },
      err => {
        this.toasterService.displayToaster("Something went wrong.", 'error');
      }
    );
  }


  /**
   * Assiging templates to the users.
   * 
   * @param {any} supplierId 
   * @returns 
   * @memberof FormService
   */
  assignTemplate(supplierId) {
    const url = "https://billing-service.axisrooms.com/v1/api/assign/supplier/" + supplierId;
    return this.http.post(url, null).map(
      res => {
        return res;
      },
      err => {
        return err;
      }
    );
  }

  /**
   * Sending Invoices based on date
   * 
   * @param {any} date 
   * @returns 
   * @memberof FormService
   */
  sendInvoices(date) {
    const url = "https://billing-service.axisrooms.com/v1/api/invoice/dateRun/" + date;
    return this.http.post(url, null).map(
      res => {
        return res;
      },
      err => {
        return err;
      }
    );
  }

  /**
   * Sending Invoices based on Id
   * 
   * @param {any} date 
   * @returns 
   * @memberof FormService
   */
  sendInvoicesById(id) {
    const url = "https://billing-service.axisrooms.com//v1/api/generate/invoice/" + id;
    return this.http.post(url, null).map(
      res => {
        return res;
      },
      err => {
        return err;
      }
    );
  }


}
