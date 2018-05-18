import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupRoutingModule } from './signup-routing.module';
import { DetailsComponent } from './components/details/details.component';
import { SignupDetailsComponent } from './components/signup-details/signup-details.component';
import { HotelCreationComponent } from './components/hotel-creation/hotel-creation.component';
import { BasicComponent } from './components/hotel-creation/basic/basic.component';
import { AmenitiesComponent } from './components/hotel-creation/amenities/amenities.component';
import { CommuteAndBankComponent } from './components/hotel-creation/commute-and-bank/commute-and-bank.component';
import { ContactComponent } from './components/hotel-creation/contact/contact.component';

@NgModule({
  imports: [
    CommonModule,
    SignupRoutingModule
  ],
  declarations: [DetailsComponent, SignupDetailsComponent, HotelCreationComponent, BasicComponent, AmenitiesComponent, CommuteAndBankComponent, ContactComponent]
})
export class SignupModule { }
