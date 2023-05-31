import { Injectable } from '@angular/core';
import {Kategorija} from "./kategorija.service";
import {Dobavljac} from "./dobavljac.service";
import {Brend} from "./brend.service";
import {ApiService} from "./api.service";
import {HttpClient} from "@angular/common/http";
import {Korisnik} from "./korisnik.service";


export interface Proizvod{
  id:number,
  nazivProizvoda:string,
  valutaId:number,
  cijena:number,
  serijskiBroj:number,
  slika:Blob,
  kategorijaId:number,
  kategorija:Kategorija,
  dobavljacId:number,
  dobavljac:Dobavljac,
  brendId:number,
  brend:Brend,
}

@Injectable({
  providedIn: 'root'
})
export class ProizvodService extends ApiService<Proizvod> {

  constructor(httpKlijent: HttpClient) {super('Proizvod',httpKlijent) }
}
