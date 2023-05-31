import { Component, OnInit } from '@angular/core';
import {ChartConfiguration, ChartType} from "chart.js";
import {Signalr2Service} from "../servisi/signalr2.service";
import {SignalrService} from "../servisi/signalr.service";

@Component({
  selector: 'app-chart-admin',
  templateUrl: './chart-admin.component.html',
  styleUrls: ['./chart-admin.component.css']
})
export class ChartAdminComponent implements OnInit {

  chartOptions: ChartConfiguration['options'] = {
    responsive: true,
    scales: {
      y: {
        min: 0
      }
    }
  };
  chartLabels: string[] = ['Real time chartovi - SignalR'];
  chartType: ChartType = 'bar';
  chartLegend: boolean = true;

  constructor(public signalRService: SignalrService) { }

  ngOnInit(): void {
  }

}
