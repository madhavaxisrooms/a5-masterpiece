import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';

@Component({
  selector: 'activity-report-cm-log-reports-cm-log-report',
  templateUrl: './cm-log-report.component.html',
  styleUrls: ['./cm-log-report.component.css']
})
export class CmLogReportComponent implements OnInit {

  constructor() { }

  myControl: FormControl = new FormControl();

  ngOnInit(){}

}
