import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";
import {HttpClient} from "@angular/common/http";


export interface Spol{
  id:number,
  nazivSpola:string
}

@Injectable({
  providedIn: 'root'
})
export class SpolService extends ApiService<Spol>{

  constructor(httpKlijent : HttpClient) { super('Spol', httpKlijent) }
}
