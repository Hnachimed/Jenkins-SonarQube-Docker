import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProduitService} from "../services/produit.service";
import {CommonModule, CurrencyPipe, DatePipe, NgClass} from "@angular/common";
import {Product} from "../models/product";
import {PanierService} from "../services/panier.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-produit-details',
  standalone: true,
  imports: [CommonModule,
    CurrencyPipe,
    NgClass,
    DatePipe, FormsModule
  ],
  templateUrl: './produit-details.component.html',
  styleUrl: './produit-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  product: any;
  mainImage: string = ' ';
  activeImageIndex: number = 0;
  newReview = {
    reviewerName: '',
    rating: null,
    comment: ''
  };


  constructor(private route: ActivatedRoute, private produitService: ProduitService, private panierService: PanierService) {
  }

  ngOnInit() {
    const productId = +this.route.snapshot.paramMap.get('id')!;
    this.produitService.getSingleProduct(productId).subscribe(response => {
      this.product = response;
    });
  }

  // Méthode pour changer l'image principale
  changeMainImage(index: number): void {
    this.activeImageIndex = index;
  }

  addToPanier(product: Product) {
    this.panierService.addtopanier(product);
  }

  submitReview(): void {
    const newReview = {
      ...this.newReview,
      date: new Date()
    }
  }
}
