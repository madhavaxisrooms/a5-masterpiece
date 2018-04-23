import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnalyticsRoutingModule } from './analytics-routing.module';
import {MatButtonModule, MatCheckboxModule, MatCardModule, MatSelectModule,
  MatInputModule, MatTableModule, MatPaginatorModule, MatIconModule, MatListModule} from '@angular/material';
import { HomeComponent } from './components/home/home.component';
import { FilterComponent } from './components/filter/filter.component';
import { MasterReportsComponent } from './components/master-reports/master-reports.component';
@NgModule({
  imports: [
    CommonModule,
    AnalyticsRoutingModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatSelectModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatListModule
  ],
  declarations: [HomeComponent, FilterComponent, MasterReportsComponent]
})
export class AnalyticsModule { }
