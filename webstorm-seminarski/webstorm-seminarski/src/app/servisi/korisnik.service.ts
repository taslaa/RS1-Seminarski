import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ApiService} from "./api.service";
import {Subject} from "rxjs";
import {Spol} from "./spol.service";
import {Drzava} from "./drzava.service";
import {JwtHelperService} from "@auth0/angular-jwt";


export interface Korisnik extends LoginKorisnik{
  id:string,
  ime:string,
  prezime:string,
  datumRodjenja: Date,
  grad : string,
  brojTelefona : string,
  adresa : string,
  drzavaId : number,
  drzava:Drzava,
  spolId : number,
  spol:Spol,
  roles : string[]
}

export interface LoginKorisnik extends Token{
  email : string,
  lozinka : string
}


export interface Token {
  token : string,
  refreshToken : string,
  IsAuthSuccessful : boolean
}

@Injectable({
  providedIn: 'root'
})
export class KorisnikService extends ApiService<Korisnik>{

  private authChangeSub = new Subject<boolean>()
  public authChanged = this.authChangeSub.asObservable();

  constructor(htppKlijent : HttpClient, private jwtHelper : JwtHelperService) { super('Korisnik', htppKlijent) }

  public sendAuthStateChangeNotification = (isAuthenticated: boolean) => {
    this.authChangeSub.next(isAuthenticated);
  }

  public isUserAuthenticated = (): boolean => {
    const token = localStorage.getItem("token");

    return token && !this.jwtHelper.isTokenExpired(token);
  }

  Registracija(object : Korisnik){
    return this.httpKlijent.post<Korisnik>(`${this._url}${'Korisnik/registration'}`, object );
  }

  Login(object : LoginKorisnik){
    return this.httpKlijent.post<LoginKorisnik>(`${this._url}${'Korisnik/login'}`, object );
  }



  dodajZaposlenika(object : Korisnik){
    return this.httpKlijent.post<Korisnik>(`${this._url}${'Korisnik/dodajZaposlenika'}`, object );
  }

  public logout = () => {
    localStorage.removeItem("token");
  }

  public isLoginActive() {
    const token = localStorage.getItem("token");
    if (token && !this.jwtHelper.isTokenExpired(token)){
      return true;
    }
    return false;
  }
  public isUserAdmin = (): boolean => {
    const token = localStorage.getItem("token");
    const decodedToken = this.jwtHelper.decodeToken(token);
    const role = decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']
    return role === 'Admin';
  }



  public isUserZaposlenik = (): boolean => {
    const token = localStorage.getItem("token");
    const decodedToken = this.jwtHelper.decodeToken(token);
    const role = decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']
    return role === 'Zaposlenik';
  }

  public GetUserName = (): string => {
    const token = localStorage.getItem("token");
    const decodedToken = this.jwtHelper.decodeToken(token);
    const name = decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname']
    return name;
  }
}
