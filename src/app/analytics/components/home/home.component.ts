import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { columns } from './columns';
import { HomeService } from './../../services/home/home.service';
@Component({
  selector: 'app-analytics-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HomeService]
})
export class HomeComponent implements OnInit {
  showbooking: Boolean = true;
  showColumns: Boolean = true;
  displayedColumns = [];
  columnData = [];
  dataSource = [];
  productTypes: Number;
  @ViewChild('bookingId')bookingId: ElementRef;
  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.displayedColumns = ['channelId', 'otaReferenceId', 'status',
      'hotelName', 'city', 'roomName', 'source', 'bookingDateAndTime', 'checkinDate'];
    this.columnData = columns;
  }
  /**
   * @ Used to show and hide the show booking dropdown above the master reports table.
   * @ Member of HomeComponent
   * @ return boolean values only
   * @ if true hide the dropdown
   * @ if false show the dropdown
   */
  showBooking() {
    this.showbooking = this.showbooking === false ? true : false ;
  }

  /**
   * @ To show the column list dropdown above the master reports table
   * @ Memeber of HomeComponent
   * @ return boolean values only
   * @ if true hide the column
   * @ if false show the column
   */
  showColumn() {
    this.showColumns = this.showColumns === false ? true : false;
  }

  /**
   * @ To display the number of columns in the master reports.
   * @ By default shows 8 columns. based on user selection shows and hide the other columns.
   * @ return array of [displayCOlumns]
   * @ memeber of HomeComponent
   */
  tableColumn(obj: any): any {
    const index: number = this.displayedColumns.indexOf(obj);
    if (index !== -1) {
      this.displayedColumns.splice(index, 1);
    } else {
      this.displayedColumns.push(obj);
    }
  }
  searchByBookingId() {
    console.log(this.productTypes);
    this.homeService.searchByBookingId(this.productTypes, this.bookingId.nativeElement.value).subscribe((result) => {
      this.dataSource = result;
    });
  }
  productType(event) {
    this.productTypes = event;
  }
}
