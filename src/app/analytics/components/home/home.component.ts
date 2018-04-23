import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-analytics-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showbooking: Boolean = true;
  constructor() { }

  ngOnInit() {
  }
  showBooking() {
    this.showbooking = this.showbooking === false ? true : false ;
  }
}
