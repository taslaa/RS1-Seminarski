import { Injectable } from '@angular/core';
import {ChartModel} from "../signalr/chart-model";
import * as signalR from "@microsoft/signalr";
import {Chart2Model} from "../signalr/chart2-model";


@Injectable({
  providedIn: 'root'
})
export class Signalr2Service {

  public data2: Chart2Model[];

  private hubConnection: signalR.HubConnection
  public startConnection = () => {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('https://localhost:7025/chart2')
      .build();
    this.hubConnection
      .start()
      .then(() => console.log('Connection started'))
      .catch(err => console.log('Error while starting connection: ' + err))
  }

  public addTransferChartDataListener = () => {
    this.hubConnection.on('transferchartdata', (data2) => {
      this.data2 = data2;
      console.log(data2);
    });
  }
}
