import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  declarations: [HomeComponent]
})
export class DashboardModule { }
