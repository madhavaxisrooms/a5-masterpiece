import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from "./components/details/details.component";
import { SignupDetailsComponent } from "./components/signup-details/signup-details.component";
import { HotelCreationComponent } from "./components/hotel-creation/hotel-creation.component";
import { AmenitiesComponent } from "./components/hotel-creation/amenities/amenities.component";
import { BasicComponent } from "./components/hotel-creation/basic/basic.component";
import { CommuteAndBankComponent } from "./components/hotel-creation/commute-and-bank/commute-and-bank.component";
import { ContactComponent } from "./components/hotel-creation/contact/contact.component";

const routes: Routes = [
  { path: '', redirectTo: 'details' },
  { path: 'signup-details', component: SignupDetailsComponent },
  { path: 'details', component: DetailsComponent },
  {
    path: 'hotel-creation', component: HotelCreationComponent, children: [
      { path: '', redirectTo: 'basic-details' },
      { path: 'basic-details', component: BasicComponent },
      { path: 'amenities-and-LOS', component: AmenitiesComponent },
      { path: 'commute-and-bank-details', component: CommuteAndBankComponent },
      { path: 'contact-details', component: ContactComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignupRoutingModule { }
