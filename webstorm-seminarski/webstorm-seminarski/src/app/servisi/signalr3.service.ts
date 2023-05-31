import { Injectable } from '@angular/core';
import {Chart2Model} from "../signalr/chart2-model";
import * as signalR from "@microsoft/signalr";
import {Chart3Model} from "../signalr/chart3-model";

@Injectable({
  providedIn: 'root'
})
export class Signalr3Service {

  public data3: Chart3Model[];

  private hubConnection: signalR.HubConnection
  public startConnection = () => {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('https://localhost:7025/chart3')
      .build();
    this.hubConnection
      .start()
      .then(() => console.log('Connection started'))
      .catch(err => console.log('Error while starting connection: ' + err))
  }

  public addTransferChartDataListener = () => {
    this.hubConnection.on('transferchartdata', (data3) => {
      this.data3 = data3;
      console.log(data3);
    });
  }
}
