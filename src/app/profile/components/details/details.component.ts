import { Component, OnInit } from '@angular/core';
import { HotelDetailsService } from '../../services/hotel-details.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  public hotelDetails;

  constructor(
    private hotelDetailsService: HotelDetailsService
  ) { }

  ngOnInit() {
    this.getHotelDetails();
  }

  getHotelDetails() {
    this.hotelDetailsService.getHotelDetails(1101).subscribe(
      res => {
        console.log(res);
        this.hotelDetails = res;
      },
      err =>{
        console.log(err);
      }
    );
  }

  requestedForTrail(hoteId){
    this.hotelDetailsService.requestedForTial(hoteId).subscribe(
      res => {
        console.log(res);
        // this.hotelDetails = res;
      },
      err =>{
        console.log(err);
      }
    );
  }

}
