import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shared-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public showHelp: boolean = false;
  public showProductSwitcher: boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
