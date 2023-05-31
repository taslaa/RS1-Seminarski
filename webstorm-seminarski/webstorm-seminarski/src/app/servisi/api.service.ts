import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";




export class ApiService<T> {

  _endpoint: string = '';
  _url: string = 'https://localhost:7025/api/';

  constructor(endpoint: string, public httpKlijent: HttpClient) {
    this._endpoint = endpoint;
  }

  Get(params: HttpParams) {
    return this.httpKlijent.get<T[]>(`${this._url}${this._endpoint}`, {params: params});
  }

  Add(object: T) {
    return this.httpKlijent.post<T>(`${this._url}${this._endpoint}`, object);
  }

  Update(id: number, object: T) {
    return this.httpKlijent.patch<T>(`${this._url}${this._endpoint}/${id}`, object);
  }

  Delete(id: number) {
    return this.httpKlijent.post(`${this._url}${this._endpoint}/${id}`, null);
  }

  DeleteString(id: string) {
    return this.httpKlijent.post(`${this._url}${this._endpoint}/${id}`, null);
  }
}
