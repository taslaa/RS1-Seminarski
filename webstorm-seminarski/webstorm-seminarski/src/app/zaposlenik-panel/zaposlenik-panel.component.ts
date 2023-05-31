import { Component, OnInit } from '@angular/core';
import {ChartConfiguration, ChartType} from "chart.js";
import {SignalrService} from "../servisi/signalr.service";
import {Signalr2Service} from "../servisi/signalr2.service";

@Component({
  selector: 'app-zaposlenik-panel',
  templateUrl: './zaposlenik-panel.component.html',
  styleUrls: ['./zaposlenik-panel.component.css']
})
export class ZaposlenikPanelComponent implements OnInit {

constructor() {
}

  ngOnInit(): void {
  }

}
