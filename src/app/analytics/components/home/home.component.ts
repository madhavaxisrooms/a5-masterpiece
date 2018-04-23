import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-analytics-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showbooking: Boolean = true;
  showColumns: Boolean = true;
  displayedColumns = [];
  columnData = [];
  constructor() { }

  ngOnInit() {
    this.displayedColumns = ['channel', 'ota_reference_id', 'status',
    'product', 'city', 'room_name', 'source', 'booking_time', 'check_in'];
    this.columnData = [{
      name: 'Channel',
      checked: true,
      value: 'channel'
    }, {
      name: 'OTA Reference Id',
      checked: true,
      value: 'ota_reference_id'
    }, {
      name: 'Status',
      checked: true,
      value: 'status'
    }, {
      name: 'Product',
      checked: true,
      value: 'product'
    }, {
      name: 'City',
      checked: true,
      value: 'city'
    }, {
      name: 'Room Name',
      checked: true,
      value: 'room_name'
    }, {
      name: 'Source',
      checked: true,
      value: 'source'
    }, {
      name: 'Rate Plan',
      checked: false,
      value: 'rate_plan'
    }, {
      name: 'Booking Time',
      checked: true,
      value: 'booking_time'
    }, {
      name: 'Check In',
      checked: true,
      value: 'check_in'
    }, {
      name: 'Check Out',
      checked: false,
      value: 'check_out'
    }, {
      name: 'No. of Rooms',
      checked: false,
      value: 'no_of_rooms'
    }, {
      name: 'Total Guests',
      checked: false,
      value: 'total_guests'
    }, {
      name: 'Guest Name',
      checked: false,
      value: 'guest_name'
    }, {
      name: 'Guest Email',
      checked: false,
      value: 'guest_email'
    }, {
      name: 'Guest Phone',
      checked: false,
      value: 'guest_phone'
    }, {
      name: 'Room Nights',
      checked: false,
      value: 'room_nights'
    }, {
      name: 'Total Amount',
      checked: false,
      value: 'total_amount'
    }, {
      name: 'Supplier Amount',
      checked: false,
      value: 'supplier_amount'
    }, {
      name: 'Avg BAR',
      checked: false,
      value: 'avg_bar'
    }, {
      name: 'Tax Amount',
      checked: false,
      value: 'tax_amount'
    }, {
      name: 'Mode of Payment',
      checked: false,
      value: 'mode_of_payment'
    }, {
      name: 'Promotions',
      checked: false,
      value: 'promotions'
    }, {
      name: 'Coupon Discount',
      checked: false,
      value: 'coupon_discount'
    }, {
      name: 'Special Request',
      checked: false,
      value: 'special_request'
    }, {
      name: 'Coupon',
      checked: false,
      value: 'coupon'
    }, {
      name: 'Deal',
      checked: false,
      value: 'deal'
    }];
  }
  showBooking() {
    this.showbooking = this.showbooking === false ? true : false ;
  }
  tableColumn(obj: any): any {
    console.log(obj);
    const index: number = this.displayedColumns.indexOf(obj);
    if (index !== -1) {
      this.displayedColumns.splice(index, 1);
    } else {
      this.displayedColumns.push(obj);
    }
    console.log(this.displayedColumns);
  }
  showColumn() {
    this.showColumns = this.showColumns === false ? true : false;
  }
}
