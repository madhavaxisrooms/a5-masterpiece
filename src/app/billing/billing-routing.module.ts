import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'support', loadChildren:'app/billing/billing-support/billing-support.module#BillingSupportModule'},
  {path: 'supplier', loadChildren:'app/billing/billing-supplier/billing-supplier.module#BillingSupplierModule'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BillingRoutingModule { }
