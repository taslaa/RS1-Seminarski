import { Component, OnInit } from '@angular/core';
import {Proizvod} from "../servisi/proizvod.service";
import {CartService} from "../cart.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private cartService: CartService) { }

  ngOnInit(): void {
  }

  addToCart(product : Proizvod) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
}
