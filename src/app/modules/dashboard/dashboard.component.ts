import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DashboardService } from '../dashboard.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Chrome', weight: 61.4, symbol: 'Blue' },
  { position: 2, name: 'Internet Explorer', weight: 11.8, symbol: 'Black' },
  { position: 3, name: 'Firefox', weight: 10.9, symbol: 'Green' },
  { position: 4, name: 'Edge', weight: 4.7, symbol: 'Orange' },
  { position: 5, name: 'Safari', weight: 4.2, symbol: 'Dark Blue' },
  { position: 6, name: 'Sogou Explorer', weight: 1.6, symbol: 'Red' },
  { position: 7, name: 'Other', weight: 2.6, symbol: 'YBR' },
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  bigChart = [] as any;
  cards = [] as any;
  pieChart = [] as any;

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.bigChart = this.dashboardService.bigChart();
    this.cards = this.dashboardService.cards();
    this.pieChart = this.dashboardService.pieChart();
    this.dataSource.paginator = this.paginator;
  }

}
