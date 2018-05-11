import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shared-support-header',
  templateUrl: './support-header.component.html',
  styleUrls: ['./support-header.component.css']
})
export class SupportHeaderComponent implements OnInit {
  public showHelp: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
