import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnalyticsRoutingModule } from './analytics-routing.module';
import {MatButtonModule, MatCheckboxModule, MatCardModule, MatSelectModule,
  MatInputModule, MatTableModule, MatPaginatorModule, MatIconModule, MatListModule, MatAutocompleteModule} from '@angular/material';
import { HomeComponent } from './components/home/home.component';
import { FilterComponent } from './components/filter/filter.component';
import { MasterReportsComponent } from './components/master-reports/master-reports.component';
import { Daterangepicker } from 'ng2-daterangepicker';
import { ClickOutsideModule } from 'ng-click-outside';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
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
    MatListModule,
    MatAutocompleteModule,
    Daterangepicker,
    ClickOutsideModule,
    ReactiveFormsModule
  ],
  declarations: [HomeComponent, FilterComponent, MasterReportsComponent]
})
export class AnalyticsModule { }
