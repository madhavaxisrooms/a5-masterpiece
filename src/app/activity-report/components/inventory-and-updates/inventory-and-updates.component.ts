import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventory-and-updates',
  templateUrl: './inventory-and-updates.component.html',
  styleUrls: ['./inventory-and-updates.component.css']
})
export class InventoryAndUpdatesComponent implements OnInit {
  public menuOptions = [
    {name:'ARC Inventory Availability Report', link:'/activity-report/inventory-and-updates/arc-inventory-availabilty-report', hidden: false},
    {name:'Inventory Discrepancy', link:'/activity-report/inventory-and-updates/inventory-discrepancy', hidden: false},
    {name:'Inventory Update Report', link:'/activity-report/inventory-and-updates/inventory-update-report', hidden: false},
    {name:'OTA Inventory', link:'/activity-report/inventory-and-updates/ota-inventory', hidden: false},
  ];
  constructor() { }

  ngOnInit() {
  }

}
