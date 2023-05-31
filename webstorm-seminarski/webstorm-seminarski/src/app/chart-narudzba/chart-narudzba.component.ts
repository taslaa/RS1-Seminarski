import { Component, OnInit } from '@angular/core';
import {ChartConfiguration, ChartType} from "chart.js";
import {Signalr3Service} from "../servisi/signalr3.service";

@Component({
  selector: 'app-chart-narudzba',
  templateUrl: './chart-narudzba.component.html',
  styleUrls: ['./chart-narudzba.component.css']
})
export class ChartNarudzbaComponent implements OnInit {

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

  constructor(public charServis: Signalr3Service) { }

  ngOnInit(): void {
  }

}
