import { Component, OnInit } from '@angular/core';
import { WindowRefService } from '../../services/window-ref.service';
import { AuthService } from '../../../auth.service';

@Component({
  selector: 'shared-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public year;
  constructor(
    private window: WindowRefService,
    private authService: AuthService
  ) { }

  ngOnInit() {

    this.authService.getUserDetails(() => {
      this.window.nativeWindow.intercomSettings.app_id = "j1n5rzzu";
      this.window.nativeWindow.intercomSettings.name = this.authService.userDetails.name;
      this.window.nativeWindow.intercomSettings.email = this.authService.userDetails.email;
    });

    this.year = (new Date()).getFullYear();

  }

}
