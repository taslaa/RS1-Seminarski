import { Injectable } from '@angular/core';
import {Drzava} from "./drzava.service";
import {ApiService} from "./api.service";
import {HttpClient} from "@angular/common/http";


export interface Dostavljac {
  id:number,
  naziv:string,
  drzavaId:number,
  drzava:Drzava,
  telefon:string
}

@Injectable({
  providedIn: 'root'
})


export class DostavljacService extends ApiService<Dostavljac>{

  constructor(httpKlijent:HttpClient) { super('Dostavljac', httpKlijent)}
}
