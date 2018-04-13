import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from "@angular/http";
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { BillingSupportRoutingModule } from './billing-support-routing.module';
import { HomeComponent } from './components/home/home.component';
import { FormComponent } from './components/form/form.component';
import { InvoicesComponent } from './components/invoices/invoices.component';
import { TemplateDetailsComponent } from './components/template-details/template-details.component';
import { PaymentCyclePipe } from './pipes/payment-cycle.pipe';
import { ProductNamePipe } from './pipes/product-name.pipe';
import { RecurringPipe } from './pipes/recurring.pipe';
import { AudienceComponent } from './components/form/audience/audience.component';
import { BillingComponent } from './components/form/billing/billing.component';
import { ValidityComponent } from './components/form/validity/validity.component';
import { FormService } from './services/form.service';
import { InvoiceService } from './services/invoice.service';
import { FormDataService } from './components/form/services/form-data.service';

@NgModule({
  imports: [
    CommonModule,
    BillingSupportRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
  ],
  declarations: [
    HomeComponent,
    FormComponent,
    InvoicesComponent,
    TemplateDetailsComponent,
    PaymentCyclePipe, 
    ProductNamePipe,
    RecurringPipe, 
    AudienceComponent,
    BillingComponent,
    ValidityComponent],
  providers:[
    FormService,
    FormDataService,
    InvoiceService
  ]
})
export class BillingSupportModule { }
