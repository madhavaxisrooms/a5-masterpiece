import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../services/header.service';

@Component({
  selector: 'shared-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  public showHelp: boolean = false;
  public showProductSwitcher: boolean = false;
  public header;
  constructor(
    private headerService: HeaderService
  ) { }

  ngOnInit() {
    // this.headerService.getHeaderData().subscribe(
    //   res => {
    //     console.log(123);
    //     console.log(res);
    //   },
    //   err => {
    //     alert(err);
    //   }
    // );
  }

}
