import { Injectable } from '@angular/core';
import {Proizvod} from "./servisi/proizvod.service";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items : Proizvod[] = [];

  constructor() { }

  addToCart(product: Proizvod) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
