import {Component, ViewChild, AfterViewInit, Input, EventEmitter, Output} from '@angular/core';
import {MatPaginator, MatTableDataSource, MatSort} from '@angular/material';
import {MasterReportsService} from './../../services/master-reports.service';

@Component({
  selector: 'app-analytics-master-reports',
  templateUrl: './master-reports.component.html',
  styleUrls: ['./master-reports.component.css']
})
export class MasterReportsComponent implements AfterViewInit {
  @Input() dataSource: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @Input() displayedColumns;
  @Output() dataValues: EventEmitter<string> = new EventEmitter<string>();
  constructor(private reportsService: MasterReportsService) {}

  /**
   * @ Get all the master reports vaues.
   * @ Memeber of MasterReportsComponent.
   */
  ngAfterViewInit() {
    this.reportsService.getList().subscribe((result) => {
      const $data = result;
     this.dataSource = new MatTableDataSource($data);
     this.dataSource.paginator = this.paginator;
     this.dataSource.sort = this.sort;
    });
  }
  searchById($data) {
    console.log($data);
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
