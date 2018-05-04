import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import {MatSelectModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatSelectModule,
    
  ],
  declarations: [HomeComponent, NavComponent]
})
export class DashboardModule { }
