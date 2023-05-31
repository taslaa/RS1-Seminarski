import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";
import {HttpClient} from "@angular/common/http";


export interface Kategorija{
  id:number,
  nazivKategorije:string,
  materijal:string,
  kvalitet:string
}

@Injectable({
  providedIn: 'root'
})
export class KategorijaService extends ApiService<Kategorija> {

  constructor(httpKlijent: HttpClient) {super('Kategorija', httpKlijent) }
}
