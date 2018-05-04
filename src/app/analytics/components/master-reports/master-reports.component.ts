import { Component, ViewChild, AfterViewInit, Input } from '@angular/core';
import {MatPaginator, MatTableDataSource, MatSort} from '@angular/material';
import {MasterReportsService} from './../../services/master-reports.service';
@Component({
  selector: 'app-analytics-master-reports',
  templateUrl: './master-reports.component.html',
  styleUrls: ['./master-reports.component.css']
})
export class MasterReportsComponent implements AfterViewInit {
  dataSource;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @Input() displayedColumns;
  constructor(private reportsService: MasterReportsService) {}

  /**
   * @ Get all the master reports vaues.
   * @ Memeber of MasterReportsComponent.
   */
  ngAfterViewInit() {
    this.reportsService.getList().subscribe((result) => {
     this.dataSource = new MatTableDataSource(result);
     this.dataSource.paginator = this.paginator;
     this.dataSource.sort = this.sort;
    });
  }
}
