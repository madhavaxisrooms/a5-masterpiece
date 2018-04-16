import { Component, OnInit } from '@angular/core';
import { LoadingIndicatorService } from '../../services/loading-indicator.service';

@Component({
  selector: 'shared-loading-indicator',
  templateUrl: './loading-indicator.component.html',
  styleUrls: ['./loading-indicator.component.css']
})
export class LoadingIndicatorComponent implements OnInit {

  public loadingIndicatorStatus: boolean;

  constructor(
    private loader: LoadingIndicatorService
  ) { }

  ngOnInit() {
    this.loader.loadingIndicatorStatus.subscribe(
      status => {
        this.loadingIndicatorStatus = status;
      }
    )
  }


}
