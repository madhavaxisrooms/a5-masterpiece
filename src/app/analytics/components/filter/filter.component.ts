import { Component, OnInit, ElementRef, Output, EventEmitter, ViewChild } from '@angular/core';
import * as moment from 'moment';
import { FilterService } from './../../services/filter/filter.service';
import { MasterReportsService } from './../../services/master-reports.service';
import {FormBuilder, FormGroup, FormControl} from '@angular/forms';
import {HttpErrorResponse} from '@angular/common/http';
import {LoadingIndicatorService} from './../../../shared/services/loading-indicator.service';
@Component({
  selector: 'app-analytics-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
  providers: [FilterService]
})
export class FilterComponent implements OnInit {
  channelValue;
  cityValue;
  selectedValue = [];
  showValues = [];
  channelShown;
  cityShown;
  chanValue: String = '';
  chanShow: Boolean = true;
  cityShow: Boolean = true;
  citValue: String = '';
  citySelected = [];
  productType: Object;
  paymentType: Object;
  getDate: Object;
  defaultDate: Number;
  hotelShow: Boolean = true;
  getCounts: Object;
  supplierType: Object;
  hotelSelected = [];
  hotValue: String = '';
  hotelValue;
  hotelShown;
  bookingStatus: Object;
  public daterange: any = {};
  productDefault;
  supplierList: Object;
  filterForms: FormGroup;
  startValue:number = 0;
  dataLength:number = 500;
  @Output() productTypeValue: EventEmitter<Number> = new EventEmitter<Number>();
  @Output() filterResult: any = new EventEmitter();
  @Output() selectDate: EventEmitter<String> = new EventEmitter<String>();
  public options: any = {
    alwaysShowCalendars: true,
    opens: 'left',
    defaultDate: [moment(), moment()],
    ranges: {
      'Today': [moment(), moment()],
      'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
      'This Week': [moment().startOf('week'), moment().endOf('week')],
      'This Month': [moment().startOf('month'), moment().endOf('month')],
      'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
    }
  };
  constructor(private filterService: FilterService, private _eref: ElementRef,
    private fb: FormBuilder, private masterServie: MasterReportsService, private loader: LoadingIndicatorService) {
    this.filterForms = this.fb.group({
      dateType    : new FormControl([-1]),
      productType   : new FormControl([-1]),
      supplierType  : new FormControl([-1]),
      supplierId      : new FormControl([-1]),
      modeOfPayment   : new FormControl([-1]),
      status : new FormControl([-1])
    });
    this.daterange.start = moment().format('YYYY-MM-DD');
    this.daterange.end = moment().format('YYYY-MM-DD');
  }

  ngOnInit() {
    this.getProduct();
    this.getChannel();
    this.getPaymentType();
    this.getDateType();
    this.getSupplierType();
    this.getHotel();
    this.getCity();
    this.getSupplier();
  }

  channelComplete(a) {
    const values = a.split(',');
    if (values[values.length - 1] !== '') {
      this.channelShown = [];
      const query = values[values.length - 1].toUpperCase().trim();
      for (let i = 0; i < this.channelValue.length; i++) {
        if (this.channelValue[i].name.toUpperCase().indexOf(query) !== -1) {
          this.channelShown.push(this.channelValue[i]);
        }
      }
    } else {
      this.channelShown = this.channelValue;
    }
  }
  cityComplete(a) {
    const values = a.split(',');
    if (values[values.length - 1] !== '') {
      this.cityShown = [];
      const query = values[values.length - 1].toUpperCase().trim();
      for (let i = 0; i < this.cityValue.length; i++) {
        if (this.cityValue[i].name.toUpperCase().indexOf(query) !== -1) {
          this.cityShown.push(this.cityValue[i]);
        }
      }
    } else {
      this.cityShown = this.cityValue;
    }
  }
  hotelComplete(a) {
    const values = a.split(',');
    if (values[values.length - 1] !== '') {
      this.hotelShown = [];
      const query = values[values.length - 1].toUpperCase().trim();
      for (let i = 0; i < this.hotelValue.length; i++) {
        if (this.hotelValue[i].name.toUpperCase().indexOf(query) !== -1) {
          this.hotelShown.push(this.hotelValue[i]);
        }
      }
    } else {
      this.hotelShown = this.hotelValue;
    }
  }
  channelSelected(value, obj,  allChannel) {
    const index = obj.indexOf(value.id);
    if (index === -1) {
      obj.push(value.id);
      this.chanValue = this.chanValue + value.name + ',';
    } else {
      obj.splice(index, 1);
      this.chanValue = this.chanValue.replace(value.name + ',', '');
    }
    allChannel.checked = false;
    this.channelShown = this.channelValue;
  }
  citySelectedFn(value, obj, allChannel) {
    const index = obj.indexOf(value.id);
    if (index === -1) {
      obj.push(value.id);
      this.citValue = this.citValue + value.name + ',';
    } else {
      obj.splice(index, 1);
      this.citValue = this.citValue.replace(value.name + ',', '');
    }
    allChannel.checked = false;
    this.cityShown = this.cityValue;
    this.getHotel(obj.toString());
  }
  hotelSelectedFn(value, obj, allHotel) {
    const index = obj.indexOf(value.id);
    if (index === -1) {
      obj.push(value.id);
      this.hotValue = this.hotValue + value.name + ',';
    } else {
      obj.splice(index, 1);
      this.hotValue = this.hotValue.replace(value.name + ',', '');
    }
    allHotel.checked = false;
    this.hotelShown = this.hotelValue;
  }
  channelFocus() {
      this.chanShow = false;
  }
  cityFocus() {
    this.cityShow = false;
  }
  hotelFocus() {
    this.hotelShow = false;
  }
  isChecked($id, obj) {
    return obj.indexOf($id) !== -1 ? true : false;
  }
  channelAll(obj, input) {
    this.chanValue = '';
    this.selectedValue.length = 0;
    if (obj.checked) {
      for (const channel of this.channelValue) {
        this.chanValue += channel.name + ',';
        this.selectedValue.push(channel.id);
      }
      input.value = this.chanValue;
      this.channelShown = this.channelValue;
    }
  }
  cityAll(obj, input) {
    this.citValue = '';
    this.citySelected.length = 0;
    if (obj.checked) {
      for (const city of this.cityValue) {
        this.citValue += city.name + ',';
        this.citySelected.push(city.id);
      }
      input.value = this.citValue;
      this.cityShown = this.cityValue;
    }
    this.getHotel(this.citySelected.toString());
  }
  hotelAll(obj, input) {
     this.hotValue = '';
     this.hotelSelected.length = 0;
     if (obj.checked) {
       for (const hotel of this.hotelValue) {
         this.hotValue += hotel.name + ',';
         this.hotelSelected.push(hotel.id);
       }
      input.value = this.hotValue;
      this.hotelShown = this.hotelValue;
     }
  }
  public selectedDate(value: any, datepicker?: any) {
    datepicker.start = value.start;
    datepicker.end = value.end;
    this.daterange.start = moment(value.start).format('YYYY-MM-DD');
    this.daterange.end = moment(value.end).format('YYYY-MM-DD');
    this.daterange.label = value.label;
  }
  filterSubmit() {
    this.loader.displayLoadingIndicator();
    const filterValues = this.filterForms.value;
    filterValues.startDate = this.daterange.start;
    filterValues.endDate = this.daterange.end;
    filterValues.selectCity = this.citySelected.toString();
    filterValues.channelId = this.selectedValue.toString();
    filterValues.productId = this.hotelSelected.toString();
    filterValues.startRowNumber = this.startValue;
    filterValues.endRowNumber = this.dataLength
    this.masterServie.getFilterResults(filterValues).subscribe(result => {
      this.loader.hideLoadingIndicator();
      this.filterResult.emit(result);
      this.selectDate.emit(this.daterange);
    });
  }
  nextPrev(data) {
    const filterValues = this.filterForms.value;
    filterValues.startDate = this.daterange.start;
    filterValues.endDate = this.daterange.end;
    filterValues.selectCity = this.citySelected.toString();
    filterValues.channelId = this.selectedValue.toString();
    filterValues.productId = this.hotelSelected.toString();
    filterValues.startRowNumber = this.startValue;
    filterValues.endRowNumber = this.dataLength;
    this.loader.displayLoadingIndicator();
    if (data === 'next') {
      filterValues.startRowNumber += this.dataLength;
      this.startValue += this.dataLength;
    } else {
      filterValues.startRowNumber -= this.dataLength;
      this.startValue -= this.dataLength;
      if (filterValues.startRowNumber < 0) {
        filterValues.startRowNumber = 0;
        this.startValue = 0;
      }
    }
    this.masterServie.getFilterResults(filterValues).subscribe(result => {
      this.filterResult.emit(result);
      this.loader.hideLoadingIndicator();
      this.selectDate.emit(this.daterange);
    });
  }
  getProduct() {
    this.filterService.getProduct().subscribe((result) => {
      this.productType = result;
      this.productDefault = result[0].id;
      this.productTypeValue.emit(result[0].id);
      this.getStatus();
    });
  }

  getChannel() {
    this.filterService.getChannel().subscribe(result => {
      this.channelValue = result;
      this.channelShown = result;
    });
  }
  getDateType() {
    this.filterService.getDateType().subscribe(result => {
      this.getDate = result;
      this.defaultDate = 1;
    });
  }
  getPaymentType() {
    this.filterService.getPaymentType().subscribe(result => {
      this.paymentType = result;
    },
      (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        console.log('Client Side Error');
      } else {
        console.log('Server Side Error');
      }
    });
  }
  getSupplierType() {
    this.filterService.getSupplierTypes().subscribe(result => {
      this.supplierType = result;
    }, (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        console.log('Client Side Error');
      } else {
        console.log('Server Side Error');
      }
    });
  }
  getHotel($cityId = '') {
    this.filterService.getHotel($cityId).subscribe(result => {
      this.hotelValue = result;
      this.hotelShown = result;
    }, (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        console.log('Client Side Error');
      } else {
        console.log('Server Side Error');
      }
    });
  }
  getCity() {
    this.filterService.getCity().subscribe(result => {
      this.cityShown = result;
      this.cityValue = result;
    });
  }
  productTypeChange(obj) {
    this.productDefault =  obj.value;
    this.productTypeValue.emit(obj.value);
    this.getStatus();
  }
  getStatus() {
    this.filterService.getStatus(this.productDefault).subscribe(result => {
      this.bookingStatus = result;
    });
  }
  getSupplier() {
    this.filterService.getSupplier().subscribe(result => {
      this.supplierList = result;
    });
  }
  outsideChannel(event) {
    this.chanShow = true;
  }

  outsideCity(event) {
    this.cityShow = true;
  }
  /**
   * To hide the show hotel chain dropdown
   * return the hotelShow
   * @param {any} event
   * @memberof FilterComponent
   */
  outsideHotel(event) {
    this.hotelShow = true;
  }

  supplierTypeChange(supplierType) {
    this.filterService.getSupplier(supplierType).subscribe((result => {
      console.log(result);
    }));
  }
}
