import {Component, ViewChild, AfterViewInit, Input, EventEmitter, Output, OnInit} from '@angular/core';
import {MatPaginator, MatTableDataSource, MatSort} from '@angular/material';
import {MasterReportsService} from './../../services/master-reports.service';
import {LoadingIndicatorService} from './../../../shared/services/loading-indicator.service';
@Component({
  selector: 'app-analytics-master-reports',
  templateUrl: './master-reports.component.html',
  styleUrls: ['./master-reports.component.css']
})
export class MasterReportsComponent implements AfterViewInit, OnInit {
  @Input() dataSource: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @Input() displayedColumns;
  @Output() dataValues: EventEmitter<string> = new EventEmitter<string>();
  constructor(private reportsService: MasterReportsService, private loadingService: LoadingIndicatorService) {}

  /**
   * @ Get all the master reports vaues.
   * @ Memeber of MasterReportsComponent.
   */
  ngOnInit() {
    this.loadingService.displayLoadingIndicator();
  }
  ngAfterViewInit() {
    this.reportsService.getList().subscribe((result: any) => {
     this.dataSource = new MatTableDataSource(result);
     this.loadingService.hideLoadingIndicator();
     this.dataSource.paginator = this.paginator;
     this.dataSource.sort = this.sort;
    });
  }
  searchById($data) {
    this.loadingService.hideLoadingIndicator();
    this.dataSource = new MatTableDataSource($data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  nextSetValues() {
    this.dataValues.emit('next');
  }
  previousSetValues() {
    this.dataValues.emit('prev');
  }
}
