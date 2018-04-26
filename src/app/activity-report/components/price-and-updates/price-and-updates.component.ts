import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-price-and-updates',
  templateUrl: './price-and-updates.component.html',
  styleUrls: ['./price-and-updates.component.css']
})
export class PriceAndUpdatesComponent implements OnInit {
  public menuOptions = [
    {name:'Price Update Report', link:'/activity-report/price-and-updates/price-update-report', hidden: false},
    {name:'Product Price Report', link:'/activity-report/price-and-updates/product-price-report', hidden: false},
    {name:'Price Config Change', link:'/activity-report/price-and-updates/price-config-change', hidden: false},
    {name:'ARC Price Report', link:'/activity-report/price-and-updates/arc-price-report', hidden: false},
  ];
  constructor() { }

  ngOnInit() {
  }

}
