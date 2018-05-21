import {Component, OnInit, ViewChild, ElementRef, Input} from '@angular/core';
import { columns } from './columns';
import { HomeService } from './../../services/home/home.service';
import { MasterReportsService } from './../../services/master-reports.service';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { MasterReportsComponent } from './../master-reports/master-reports.component';
import { HttpErrorResponse} from '@angular/common/http';
import * as moment from 'moment';
import {FilterComponent} from '../filter/filter.component';
import {config} from './../../../config';
import {LoadingIndicatorService} from './../../../shared/services/loading-indicator.service';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-analytics-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HomeService, MasterReportsService]
})
export class HomeComponent implements OnInit {
  showbooking: Boolean = true;
  showColumns: Boolean = true;
  displayedColumns = [];
  columnData = [];
  dataSource1;
  productTypes: Number;
  clear: Boolean = true;
  totalCount: any;
  configUrl =  config.cm_url;
  @ViewChild(MasterReportsComponent)masterComp: MasterReportsComponent;
  @ViewChild('bookingId')bookingId: ElementRef;
  @ViewChild(FilterComponent)filterComp: FilterComponent;
  constructor(private homeService: HomeService, private masterService: MasterReportsService,
    private loader: LoadingIndicatorService, private titleServie: Title) { }

  ngOnInit() {
    this.displayedColumns = ['channelName', 'otaReferenceId', 'statusName',
      'hotelName', 'city', 'roomName', 'source', 'bookingDateAndTime', 'checkinDate', 'modeOfPayment', 'noOfRooms', 'totalAmountFinal'];
    this.columnData = columns;
    this.masterCount(moment().format('YYYY-MM-DD'));
    this.titleServie.setTitle('Master Report');
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
   * @memeber of HomeComponent
   */
  tableColumn(obj: any, index1): any {
    console.log(index1);
    const index: number = this.displayedColumns.indexOf(obj);
    if (index !== -1) {
      this.displayedColumns.splice(index, 1);
    } else {
      this.displayedColumns.splice(index1, 0, obj);
    }
  }
  /**
   * To search the values based on the booking id.
   * return an object matches with the booking id
   * memeber of home component
   */
  searchByBookingId() {
    this.loader.displayLoadingIndicator();
    this.homeService.searchByBookingId(this.productTypes, this.bookingId.nativeElement.value).subscribe((result) => {
      // this.dataSource1 = result;
      this.loader.hideLoadingIndicator();
      this.masterComp.searchById(result);
      this.masterCountById();
      this.clear = false;
    }, (err: HttpErrorResponse) => {
      this.loader.hideLoadingIndicator();
    });
  }
  masterCountById() {
    this.homeService.masterCountById(this.bookingId.nativeElement.value, this.productTypes).subscribe(result => {
      this.totalCount = result;
    });
  }
  filterResult(result) {
    this.masterComp.searchById(result);
  }
  /**
   * To get the product type id from the filter component
   * Used for search by booking id
   * @param {any} event
   * @memberof HomeComponent
   */
  productType(event) {
    this.productTypes = event;
  }
  clearFilter(id) {
    this.loader.displayLoadingIndicator();
    this.masterService.getFilterResults(this.filterComp.filterForms.value).subscribe(result => {
      this.clear = true;
      this.masterComp.searchById(result);
      this.masterCountFilter(this.filterComp.filterForms.value);
      id.value = '';
    }, err => {
      console.log(err);
    });
  }
  masterCount($data) {
    let $startDate;
    let $endDate;
    if (typeof $data === 'string') {
      $startDate = $data;
      $endDate = $data;
    } else {
      $startDate = $data.start;
      $endDate = $data.end;
    }
    const $params = {
      startDate: $startDate,
      endDate: $endDate
    };
    this.homeService.masterCount($params).subscribe( (result) => {
      this.totalCount = result;
    }, (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        console.log('Client Side Error');
      } else {
        console.log('Server Side Error');
      }
    });
  }
  masterCountFilter($data) {
    // console.log($data);
    this.homeService.masterCount($data).subscribe((result) => {
      this.totalCount = result;
        this.loader.hideLoadingIndicator();
    }, (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        console.log('Client Side Error');
      } else {
        console.log('Server Side Error');
      }
    });
  }
  nextPrev(event) {
    this.filterComp.nextPrev(event);
  }
}
