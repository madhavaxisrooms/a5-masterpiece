import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class LoadingIndicatorService {

  private loadingIndicatorStatusSource = new BehaviorSubject<boolean>(false);
  loadingIndicatorStatus = this.loadingIndicatorStatusSource.asObservable();
  
  constructor() { }

  displayLoadingIndicator(){
    this.loadingIndicatorStatusSource.next(true);
  }

  hideLoadingIndicator(){
    this.loadingIndicatorStatusSource.next(false);
  }
}
