import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";
import {HttpClient} from "@angular/common/http";
import * as http from "http";
import {Drzava} from "./drzava.service";


export interface Dobavljac{
  id: number,
  nazivDobavljaca:string,
  brojDobavljaca:number,
  drzavaId:number,
  drzava:Drzava
}

@Injectable({
  providedIn: 'root'
})
export class DobavljacService extends ApiService<Dobavljac> {

  constructor(httpKlijent : HttpClient) {super('Dobavljac', httpKlijent) }
}
