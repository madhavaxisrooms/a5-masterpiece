import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.css']
})
export class ChannelsComponent implements OnInit {

  public menuOptions = [
    {name:'OTA Activation Report', link:'/activity-report/channels/ota-activation', hidden: false},
    {name:'Block Channel', link:'/activity-report/channels/block-channel', hidden: false},
    {name:'Inventory & Price Availability Report', link:'/activity-report/channels/inventory-and-price-availability-report', hidden: false},
  ];

  constructor() { }

  ngOnInit() {
  }

}
