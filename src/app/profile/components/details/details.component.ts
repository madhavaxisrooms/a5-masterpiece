import { Component, OnInit } from '@angular/core';
import { HotelDetailsService } from '../../services/hotel-details.service';
import { ToasterService } from '../../../shared/services/toaster.service';
import { LoadingIndicatorService } from '../../../shared/services/loading-indicator.service';
import { AuthService } from '../../../auth.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  public hotelDetails;

  constructor(
    private hotelDetailsService: HotelDetailsService,
    private toaster: ToasterService,
    private loader: LoadingIndicatorService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.getHotelDetails();
  }

  getHotelDetails() {

    this.loader.displayLoadingIndicator()
    this.hotelDetailsService.getHotelDetails(JSON.parse(localStorage.getItem('userDetails')).userId).subscribe(
      res => {
        this.hotelDetails = res;
        this.loader.hideLoadingIndicator();
      },
      err => {
        this.loader.hideLoadingIndicator();
      }
    );
  }

  requestedForTrail(hotelId) {
    this.loader.displayLoadingIndicator()

    this.hotelDetailsService.requestedForTial(hotelId).subscribe(
      res => {
        this.toaster.displayToaster(res['message'], "success");
        this.getHotelDetails();
        this.loader.hideLoadingIndicator();

      },
      err => {
        this.toaster.displayToaster(err['message'], "error");
        this.loader.hideLoadingIndicator();

      }
    );
  }

}
