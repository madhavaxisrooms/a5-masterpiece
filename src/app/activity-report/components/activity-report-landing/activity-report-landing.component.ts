import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'activity-report-landing',
  templateUrl: './activity-report-landing.component.html',
  styleUrls: ['./activity-report-landing.component.css']
})
export class ActivityReportLandingComponent implements OnInit {


  @Input('menuOptions') menuOptions; 
  

  constructor() { }

  ngOnInit() {
  }

}
