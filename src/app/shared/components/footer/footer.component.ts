import { Component, OnInit } from '@angular/core';
import { WindowRefService } from '../../services/window-ref.service';

@Component({
  selector: 'shared-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public year;
  constructor(
    private window: WindowRefService
  ) { }

  ngOnInit() {
    this.year = (new Date()).getFullYear();
    this.window.nativeWindow.intercomSettings.app_id = "j1n5rzzu";
    this.window.nativeWindow.intercomSettings.name = 'madhav';
    this.window.nativeWindow.intercomSettings.email = "madhav@axisroms.com"
  }

}
