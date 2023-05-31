import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";
import {Brend} from "./brend.service";
import {HttpClient} from "@angular/common/http";


export interface Valuta{
  id:number,
  naziv:string
}

@Injectable({
  providedIn: 'root'
})
export class ValutaService extends ApiService<Valuta> {

  constructor(httpKlijent: HttpClient) {super('Valuta',httpKlijent) }
}
