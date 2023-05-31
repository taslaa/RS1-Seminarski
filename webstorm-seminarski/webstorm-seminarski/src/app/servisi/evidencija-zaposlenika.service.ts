import { Injectable } from '@angular/core';
import {Drzava} from "./drzava.service";
import {Spol} from "./spol.service";
import {Korisnik, LoginKorisnik} from "./korisnik.service";
import {ApiService} from "./api.service";
import {HttpClient} from "@angular/common/http";




@Injectable({
  providedIn: 'root'
})
export class EvidencijaZaposlenikaService extends ApiService<any> {

  constructor(htppKlijent : HttpClient) {super('EvidencijaZaposlenika', htppKlijent) }

  GetKorisnik(){
    return this.httpKlijent.get("https://localhost:7025/EvidencijaZaposlenika/GetKorisnike");
  }
}
