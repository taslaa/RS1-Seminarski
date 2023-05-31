import { Component, OnInit } from '@angular/core';
import {SignalrService} from "./servisi/signalr.service";
import {HttpClient} from "@angular/common/http";
import {KorisnikService} from "./servisi/korisnik.service";
import {LoginComponent} from "./login/login.component";
import {MatDialog} from "@angular/material/dialog";
import {Signalr2Service} from "./servisi/signalr2.service";
import {JwtHelperService} from "@auth0/angular-jwt";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shop';

  constructor(public signalRService: SignalrService, public servis : KorisnikService, private jwtHelper : JwtHelperService,
              private http: HttpClient,
              private dialog:MatDialog,
              public SignalR2Service : Signalr2Service) { }
  ngOnInit() {
    this.signalRService.startConnection();
    this.signalRService.addTransferChartDataListener();
    this.startHttpRequest();

    this.SignalR2Service.startConnection();
    this.SignalR2Service.addTransferChartDataListener();
    this.startHttpRequest2();
  }

  private startHttpRequest = () => {
    this.http.get('https://localhost:7025/api/chart')
      .subscribe(res => {
        console.log(res);
      })
  }

  private startHttpRequest2 = () => {
    this.http.get('https://localhost:7025/api/chart2')
      .subscribe(res => {
        console.log(res);
      })
  }
  onCreate(){
    this.dialog.open(LoginComponent);
  }

  public AdminRole = () => {
    const token = localStorage.getItem("token");
    if (token && !this.jwtHelper.isTokenExpired(token)){
      const decodedToken = this.jwtHelper.decodeToken(token);
      const roles = decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
      return roles;
    }
    else{
        return ;
    }
  }

  public ZaposlenikRole = () => {
    const token = localStorage.getItem("token");
    if (token && !this.jwtHelper.isTokenExpired(token)){
      const decodedToken = this.jwtHelper.decodeToken(token);
      const roles = decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
      return roles;
    }
    else{
        return;
    }
  }



}
