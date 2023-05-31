import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";
import {HttpClient} from "@angular/common/http";
import {Prodavnica} from "./prodavnica.service";
import {Korisnik} from "./korisnik.service";


export interface Slika{
  id: number,
  slikaSlika:Blob,
  opis:string,
  prodavnicaId:number,
  prodavnica : Prodavnica
  korisnikId:number,
  korisnik : Korisnik
}

@Injectable({
  providedIn: 'root'
})
export class SlikaService extends ApiService<Slika>{

  constructor(httpKlijent : HttpClient) { super('Slika', httpKlijent)}
}
