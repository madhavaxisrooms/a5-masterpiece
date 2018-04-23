import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingReportsComponent } from './components/booking-reports/booking-reports.component';
import { ChannelsComponent } from './components/channels/channels.component';
import { CmLogReportsComponent } from './components/cm-log-reports/cm-log-reports.component';
import { PriceAndUpdatesComponent } from './components/price-and-updates/price-and-updates.component';
import { InventoryAndUpdatesComponent } from './components/inventory-and-updates/inventory-and-updates.component';
import { PriceUpdateReportComponent } from './components/price-and-updates/price-update-report/price-update-report.component';
import { ArcPriceReportComponent } from './components/price-and-updates/arc-price-report/arc-price-report.component';
import { ProductPriceReportComponent } from './components/price-and-updates/product-price-report/product-price-report.component';
import { PriceConfigChangeComponent } from './components/price-and-updates/price-config-change/price-config-change.component';
import { PromotionLogComponent } from './components/cm-log-reports/promotion-log/promotion-log.component';
import { ArcUpdateAnalysisReportComponent } from './components/cm-log-reports/arc-update-analysis-report/arc-update-analysis-report.component';
import { CmLogReportComponent } from './components/cm-log-reports/cm-log-report/cm-log-report.component';

const routes: Routes = [
  { path: '', redirectTo: 'cm-log-reports' },
  { path: 'booking-reports', component: BookingReportsComponent },
  { path: 'channels', component: ChannelsComponent },
  {
    path: 'cm-log-reports', component: CmLogReportsComponent, children: [
      { path: '', redirectTo: 'promotion-log' },
      { path: 'promotion-log', component: PromotionLogComponent },
      { path: 'cm-log-report', component: CmLogReportComponent },
      { path: 'arc-update-analysis-report', component: ArcUpdateAnalysisReportComponent },
    ]
  },
  {
    path: 'price-and-updates', component: PriceAndUpdatesComponent, children: [
      { path: '', redirectTo: 'price-update-report' },
      { path: 'price-update-report', component: PriceUpdateReportComponent },
      { path: 'arc-price-report', component: ArcPriceReportComponent },
      { path: 'product-price-report', component: ProductPriceReportComponent },
      { path: 'price-config-change', component: PriceConfigChangeComponent }
    ]
  },
  { path: 'inventory-and-updates', component: InventoryAndUpdatesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivityReportRoutingModule { }
