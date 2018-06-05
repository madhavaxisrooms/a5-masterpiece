import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from '../shared/components/page-not-found/page-not-found.component';
import { AuthGuard } from '../shared/guards/auth.guard';
import { AppComponent } from '../app.component';
import { HomeComponent } from '../shared/components/home/home.component';

const routes: Routes = [
  { path: 'login', loadChildren: 'app/login/login.module#LoginModule' },
  {
    path: '', component:HomeComponent, children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: 'app/dashboard/dashboard.module#DashboardModule' },
      { path: 'billing', loadChildren: 'app/billing/billing.module#BillingModule'},
      { path: 'activity-report', loadChildren: 'app/activity-report/activity-report.module#ActivityReportModule'},
      { path: 'analytics', loadChildren: 'app/analytics/analytics.module#AnalyticsModule'},
      { path: 'profile', loadChildren: 'app/profile/profile.module#ProfileModule' },
    ]
  },
  { path: '**', component: PageNotFoundComponent },
  { path: '404', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
