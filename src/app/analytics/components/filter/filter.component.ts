import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
@Component({
  selector: 'app-analytics-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  channelValue = [{
    id: 1,
    name: 'Axisrooms'
  }, {
    id: 2,
    name: 'Booking.com'
  }, {
    id: 3,
    name: 'Cleartrip'
  }, {
    id: 4,
    name: 'Make my trip'
  }, {
    id: 5,
    name: 'GO-immo'
  }];
  cityValue = [{
    id: 1,
    name: 'Bangalore',
  }, {
    id: 2,
    name: 'Chennai',
  }];
  selectedValue = [];
  showValues = [];
  channelShown = this.channelValue;
  cityShown = this.cityValue;
  chanValue: String = '';
  chanShow: Boolean = true;
  cityShow: Boolean = true;
  citValue: String = '';
  citySelected = [];
  public daterange: any = {};
  public options: any = {
    locale: { format: 'DD/MM/YYYY' },
    alwaysShowCalendars: true,
    opens: 'left',
    ranges: {
      'Today': [moment(), moment()],
      'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
      'This Week': [moment().startOf('week'), moment().endOf('week')],
      'This Month': [moment().startOf('month'), moment().endOf('month')],
      'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
    }

  };

  constructor() { }

  ngOnInit() {
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

  channelSelected(value, obj, element, allChannel) {
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
    // this.channelShown = this.channelValue;
  }
  citySelectedFn(value, obj, element, allChannel) {
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
    // this.channelShown = this.channelValue;
  }
  channelFocus() {
    this.chanShow = false;
    this.cityShow = true;
  }
  cityFocus() {
    this.chanShow = true;
    this.cityShow = false;
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
  }
  public selectedDate(value: any, datepicker?: any) {
    datepicker.start = value.start;
    datepicker.end = value.end;
    this.daterange.start = value.start;
    this.daterange.end = value.end;
    this.daterange.label = value.label;
  }
  filterSubmit() {
    console.log('City Selected' + this.citySelected);
    console.log('Channel Selected' + this.selectedValue);
    this.chanShow = true;
    this.cityShow = true;
  }
}
