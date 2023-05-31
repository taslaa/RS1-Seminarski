import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";
import {HttpClient} from "@angular/common/http";


export interface Prodavnica{
  id: number,
  naziv:string,
  adresa:string,
  telefon:number,
  slika:Blob
}

@Injectable({
  providedIn: 'root'
})
export class ProdavnicaService extends ApiService<Prodavnica> {

  constructor(httpKlijent : HttpClient) {super('Prodavnica', httpKlijent) }
}
