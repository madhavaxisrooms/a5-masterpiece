import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng4GeoautocompleteModule } from 'ng4-geoautocomplete';

import { ProfileRoutingModule } from './profile-routing.module';
import { DetailsComponent } from './components/details/details.component';
import { CreateHotelComponent } from './components/create-hotel/create-hotel.component';
import { MatMenuModule, MatInputModule, MatSelectModule, MatFormFieldModule, MatFormFieldControl, MatIconModule, MatButtonModule, MatChipsModule, MatAutocompleteModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateHotelService } from "./services/create-hotel.service";
import { HotelDetailsService } from "./services/hotel-details.service";

@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    Ng4GeoautocompleteModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatSelectModule,
  ],
  declarations: [DetailsComponent, CreateHotelComponent],
  providers:[
    CreateHotelService,
    HotelDetailsService
  ]
})
export class ProfileModule { }
