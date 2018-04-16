import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivityReportRoutingModule } from './activity-report-routing.module';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
  imports: [
    CommonModule,
    ActivityReportRoutingModule
  ],
  declarations: [NavComponent]
})
export class ActivityReportModule { }
