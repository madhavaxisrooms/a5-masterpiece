import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsComponent } from "./components/details/details.component";
import { CreateHotelComponent } from "./components/create-hotel/create-hotel.component";
import { BasicComponent } from "./components/create-hotel/basic/basic.component";
import { AmenitiesComponent } from "./components/create-hotel/amenities/amenities.component";
import { CommuteComponent } from "./components/create-hotel/commute/commute.component";
import { ContactComponent } from "./components/create-hotel/contact/contact.component";


const routes: Routes = [
  { path: '', redirectTo: 'details' },
  { path: 'details', component: DetailsComponent },
  {
    path: 'create-hotel', component: CreateHotelComponent, children: [
      { path: '', redirectTo: 'basic-details' },
      { path: 'basic-details', component: BasicComponent },
      { path: 'amenities-and-logs', component: AmenitiesComponent },
      { path: 'commute-and-bank-details', component: CommuteComponent },
      { path: 'contact-details', component: CommuteComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
