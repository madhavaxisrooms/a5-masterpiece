import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from '../shared/components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo:'dashboard',pathMatch: 'full' },
  { path: 'billing', loadChildren: 'app/billing/billing.module#BillingModule' },
  { path: 'activity-report', loadChildren: 'app/activity-report/activity-report.module#ActivityReportModule' },
  { path: 'analytics', loadChildren: 'app/analytics/analytics.module#AnalyticsModule' },
  { path: 'dashboard', loadChildren: 'app/dashboard/dashboard.module#DashboardModule' },
  { path: '**', component: PageNotFoundComponent },
  { path: '404', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
