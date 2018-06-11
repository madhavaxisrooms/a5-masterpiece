import { Component, OnInit } from '@angular/core';
import {config} from './../../../config';

@Component({
  selector: 'app-temp-header',
  templateUrl: './temp-header.component.html',
  styleUrls: ['./temp-header.component.css']
})
export class TempHeaderComponent implements OnInit {
  configUrl: string =  config.cm_url;
  constructor() { }

  ngOnInit() {
  }

}
