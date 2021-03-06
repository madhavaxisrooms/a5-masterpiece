import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../services/header.service';

@Component({
  selector: 'shared-support-header',
  templateUrl: './support-header.component.html',
  styleUrls: ['./support-header.component.css']
})
export class SupportHeaderComponent implements OnInit {
  public showHelp: boolean = false;
  public header;
  public levelOne = [];
  public lowerLevels = [];

  public dashboardVisible:boolean = false;
  public bookingVisible:boolean = false;
  public inventoryVisible:boolean = false;
  public analyticsVisible:boolean = false;
  public reportsVisible:boolean = false;

  constructor(
    private headerService: HeaderService,
  ) { }

  ngOnInit() {
    this.header = this.headerService.headerJson;
    
    // this.headerService.getHeaderData().subscribe(
    //   res => {
    //     this.header = res;
    //     this.traverse(this.header);
    //   },
    //   err => {
    //     console.log(err);
    //   }
    // );

    this.headerService.getSupplierViewHeaderData(262).subscribe(
      res => {
        console.log(res);
      },
      err =>{
        console.log(err);
      }
    );

    this.header.menus.splice(-1,1);
  }

  
}
