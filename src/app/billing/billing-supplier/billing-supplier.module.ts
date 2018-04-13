import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { BillingSupplierRoutingModule } from './billing-supplier-routing.module';
import { HomeComponent } from './components/home/home.component';
import { InvoicesComponent } from './components/invoices/invoices.component';
import { NavComponent } from './components/nav/nav.component';
import { SubscriptionComponent } from './components/subscription/subscription.component';
import { DetailsModalComponent } from './components/subscription/details-modal/details-modal.component';
import { ChargeValuePipe } from './pipes/charge-value.pipe';
import { PaymentCyclePipe } from './pipes/payment-cycle.pipe';
import { RecurringPipe } from './pipes/recurring.pipe';
import { PaymentService } from './services/payment.service';
import { InvoiceService } from './services/invoice.service';

@NgModule({
  imports: [
    CommonModule,
    BillingSupplierRoutingModule,RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  declarations: [HomeComponent, InvoicesComponent, NavComponent, SubscriptionComponent, DetailsModalComponent, ChargeValuePipe, PaymentCyclePipe, RecurringPipe],
  providers:[
    InvoiceService,
    PaymentService
  ]
})
export class BillingSupplierModule { }
