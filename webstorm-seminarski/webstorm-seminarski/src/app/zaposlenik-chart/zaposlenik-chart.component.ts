import { Component, OnInit } from '@angular/core';
import {ChartConfiguration, ChartType} from "chart.js";
import {Signalr2Service} from "../servisi/signalr2.service";

@Component({
  selector: 'app-zaposlenik-chart',
  templateUrl: './zaposlenik-chart.component.html',
  styleUrls: ['./zaposlenik-chart.component.css']
})
export class ZaposlenikChartComponent implements OnInit {

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

  constructor(public signalR2Service: Signalr2Service) { }

  ngOnInit(): void {
  }

}
