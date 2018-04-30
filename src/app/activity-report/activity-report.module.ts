import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule,MatButtonModule, MatCheckboxModule, MatCardModule, MatSelectModule,
  MatInputModule, MatTableModule, MatPaginatorModule, MatIconModule,MatNativeDateModule,MatSlideToggleModule } from '@angular/material';

import { ActivityReportRoutingModule } from './activity-report-routing.module';
import { NavComponent } from './components/nav/nav.component';
import { PriceAndUpdatesComponent } from './components/price-and-updates/price-and-updates.component';
import { ChannelsComponent } from './components/channels/channels.component';
import { InventoryAndUpdatesComponent } from './components/inventory-and-updates/inventory-and-updates.component';
import { CmLogReportsComponent } from './components/cm-log-reports/cm-log-reports.component';
import { PriceUpdateReportComponent } from './components/price-and-updates/price-update-report/price-update-report.component';
import { ProductPriceReportComponent } from './components/price-and-updates/product-price-report/product-price-report.component';
import { PriceConfigChangeComponent } from './components/price-and-updates/price-config-change/price-config-change.component';
import { ArcPriceReportComponent } from './components/price-and-updates/arc-price-report/arc-price-report.component';
import { PromotionLogComponent } from './components/cm-log-reports/promotion-log/promotion-log.component';
import { CmLogReportComponent } from './components/cm-log-reports/cm-log-report/cm-log-report.component';
import { ArcUpdateAnalysisReportComponent } from './components/cm-log-reports/arc-update-analysis-report/arc-update-analysis-report.component';
import { InventoryDiscrepancyComponent } from './components/inventory-and-updates/inventory-discrepancy/inventory-discrepancy.component';
import { OtaInventoryComponent } from './components/inventory-and-updates/ota-inventory/ota-inventory.component';
import { InventoryUpdateReportComponent } from './components/inventory-and-updates/inventory-update-report/inventory-update-report.component';
import { ArcInventoryAvailabilityReportComponent } from './components/inventory-and-updates/arc-inventory-availability-report/arc-inventory-availability-report.component';
import { OtaActivationComponent } from './components/channels/ota-activation/ota-activation.component';
import { BlockChannelComponent } from './components/channels/block-channel/block-channel.component';
import { InventoryAndPriceAvailabilityReportComponent } from './components/channels/inventory-and-price-availability-report/inventory-and-price-availability-report.component';
import { SubNavComponent } from './components/sub-nav/sub-nav.component';
import { ActivityReportLandingComponent } from './components/activity-report-landing/activity-report-landing.component';

@NgModule({
  imports: [
    CommonModule,
    ActivityReportRoutingModule,
    MatDatepickerModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatSelectModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatNativeDateModule,
    MatSlideToggleModule
  ],
  declarations: [
    NavComponent,
    PriceAndUpdatesComponent,
    ChannelsComponent,
    InventoryAndUpdatesComponent,
    CmLogReportsComponent,
    PriceUpdateReportComponent,
    ProductPriceReportComponent,
    PriceConfigChangeComponent,
    ArcPriceReportComponent,
    PromotionLogComponent,
    CmLogReportComponent,
    ArcUpdateAnalysisReportComponent,
    InventoryDiscrepancyComponent,
    OtaInventoryComponent,
    InventoryUpdateReportComponent,
    ArcInventoryAvailabilityReportComponent,
    OtaActivationComponent,
    BlockChannelComponent,
    InventoryAndPriceAvailabilityReportComponent,
    SubNavComponent,
    ActivityReportLandingComponent,
  ]
})
export class ActivityReportModule { }
