import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'activity-report-sub-nav',
  templateUrl: './sub-nav.component.html',
  styleUrls: ['./sub-nav.component.css']
})
export class SubNavComponent implements OnInit {

  @Input('menuOptions') menuOptions; 

  constructor() { }

  ngOnInit() {
  }

}
