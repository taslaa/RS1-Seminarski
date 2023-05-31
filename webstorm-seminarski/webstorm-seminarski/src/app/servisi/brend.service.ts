import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";
import {HttpClient} from "@angular/common/http";
import {Drzava} from "./drzava.service";


export interface Brend{
  id:number,
  nazivBrenda:string,
  luxury:string,
  slika :Blob,
  drzavaId: number,
  drzava : Drzava
}

@Injectable({
  providedIn: 'root'
})
export class BrendService extends ApiService<Brend>{

  constructor(httpKlijent: HttpClient) {super('Brend',httpKlijent) }
}
