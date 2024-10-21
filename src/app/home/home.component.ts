import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import {ProductItemComponent} from "../product-item/product-item.component";
import {PanierComponent} from "../panier/panier.component";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {Product} from "../models/product";
import {ProduitService} from "../services/produit.service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  produits: Product[] = [];
  originalProduits: Array<any> = [];

  constructor(private produitService: ProduitService) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.produitService.getProduct().subscribe((response: any) => {
      this.produits = response.products;
      this.originalProduits = [...this.produits]; // Copie des produits originaux
    });
  }
}
