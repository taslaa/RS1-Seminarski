import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";
import {HttpClient} from "@angular/common/http";
import {JwtHelperService} from "@auth0/angular-jwt";


@Injectable({
  providedIn: 'root'
})
export class RecenzijaService extends ApiService<any> {

  constructor(httpKlijent: HttpClient, private jwtHelper : JwtHelperService) { super('Recenzija',httpKlijent)}

  GetKorisnik(){
    return this.httpKlijent.get("https://localhost:7025/Recenzija/GetKorisnike/");
  }

  public GetUserName = (): string => {
    const token = localStorage.getItem("token");
    const decodedToken = this.jwtHelper.decodeToken(token);
    const name = decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname']
    return name;
  }
}
