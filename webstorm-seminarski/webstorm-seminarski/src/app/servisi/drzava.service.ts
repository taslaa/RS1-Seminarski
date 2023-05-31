import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";
import {HttpClient} from "@angular/common/http";


export interface Drzava{
  id: number,
  nazivDrzave:string,
  sifra:string,
  skracenica:string
}

@Injectable({
  providedIn: 'root'
})
export class DrzavaService extends ApiService<Drzava> {

  constructor(httpKlijent : HttpClient) { super('Drzava', httpKlijent)}
}
