import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InvoicesComponent } from './components/invoices/invoices.component';
import { SubscriptionComponent } from './components/subscription/subscription.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home/:id', component: HomeComponent, children: [
      { path: 'subscription', component: SubscriptionComponent },
      { path: 'invoices', component: InvoicesComponent },
    ]
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BillingSupplierRoutingModule { }
