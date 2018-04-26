import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cm-log-reports',
  templateUrl: './cm-log-reports.component.html',
  styleUrls: ['./cm-log-reports.component.css']
})
export class CmLogReportsComponent implements OnInit {
  public menuOptions = [
    {name:'Promotion Log', link:'/activity-report/cm-log-reports/promotion-log', hidden: false},
    {name:'CM Log Report', link:'/activity-report/cm-log-reports/cm-log-report', hidden: false},
    {name:'ARC Update Analysis Report', link:'/activity-report/cm-log-reports/arc-update-analysis-report', hidden: false},
  ];
  constructor() { }

  ngOnInit() {
  }

}
