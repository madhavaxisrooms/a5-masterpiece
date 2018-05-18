import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { DetailsComponent } from './components/details/details.component';
import { CreateHotelComponent } from './components/create-hotel/create-hotel.component';
import { BasicComponent } from './components/create-hotel/basic/basic.component';
import { ContactComponent } from './components/create-hotel/contact/contact.component';
import { AmenitiesComponent } from './components/create-hotel/amenities/amenities.component';
import { CommuteComponent } from './components/create-hotel/commute/commute.component';

@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule
  ],
  declarations: [DetailsComponent, CreateHotelComponent, BasicComponent, ContactComponent, AmenitiesComponent, CommuteComponent]
})
export class ProfileModule { }
