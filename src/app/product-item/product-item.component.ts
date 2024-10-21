import {Component, EventEmitter, Input, input, Output} from '@angular/core';
import {Product} from "../models/product";
import {PanierService} from "../services/panier.service";
import {CommonModule, CurrencyPipe} from "@angular/common";

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [
    CurrencyPipe,
    CommonModule
  ],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  @Input() produit!:Product;


  constructor(private panierservice:PanierService){

  }
  addToPanier(product: Product) {
    this.panierservice.addtopanier(product);
  }


}
