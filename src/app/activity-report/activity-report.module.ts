import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivityReportRoutingModule } from './activity-report-routing.module';
import { NavComponent } from './components/nav/nav.component';
import { PriceAndUpdatesComponent } from './components/price-and-updates/price-and-updates.component';
import { ChannelsComponent } from './components/channels/channels.component';
import { InventoryAndUpdatesComponent } from './components/inventory-and-updates/inventory-and-updates.component';
import { BookingReportsComponent } from './components/booking-reports/booking-reports.component';
import { CmLogReportsComponent } from './components/cm-log-reports/cm-log-reports.component';
import { PriceUpdateReportComponent } from './components/price-and-updates/price-update-report/price-update-report.component';
import { ProductPriceReportComponent } from './components/price-and-updates/product-price-report/product-price-report.component';
import { PriceConfigChangeComponent } from './components/price-and-updates/price-config-change/price-config-change.component';
import { ArcPriceReportComponent } from './components/price-and-updates/arc-price-report/arc-price-report.component';
import { SubMenuComponent } from './components/price-and-updates/sub-menu/sub-menu.component';

@NgModule({
  imports: [
    CommonModule,
    ActivityReportRoutingModule
  ],
  declarations: [
    NavComponent, 
    PriceAndUpdatesComponent, 
    ChannelsComponent, 
    InventoryAndUpdatesComponent, 
    BookingReportsComponent, 
    CmLogReportsComponent, 
    PriceUpdateReportComponent, 
    ProductPriceReportComponent, PriceConfigChangeComponent, ArcPriceReportComponent, SubMenuComponent,
  ]
})
export class ActivityReportModule { }
