import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsComponent } from "./components/details/details.component";
import { CreateHotelComponent } from "./components/create-hotel/create-hotel.component";


const routes: Routes = [
  { path: '', redirectTo: 'details' },
  { path: 'details', component: DetailsComponent },
  { path: 'create-hotel', component: CreateHotelComponent },
  { path: 'create-hotel/:hotelId', component: CreateHotelComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
