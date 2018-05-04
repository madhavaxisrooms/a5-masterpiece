import { Component, OnInit } from '@angular/core';
import { columns } from './columns';
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
    this.displayedColumns = ['channelId', 'otaReferenceId', 'status',
    'product', 'city', 'room_name', 'source', 'bookingDateAndTime', 'checkinDate'];
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
}
