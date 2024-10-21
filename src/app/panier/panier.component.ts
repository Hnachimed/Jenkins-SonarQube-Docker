import { Component, OnInit } from '@angular/core';
import { LignePanier } from "../models/lignePanier";
import { PanierService } from "../services/panier.service";
import {CurrencyPipe, NgForOf} from "@angular/common";

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  standalone: true,
  imports: [
    CurrencyPipe,
    NgForOf
  ],
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  lignePanier: Array<LignePanier> = [];

  constructor(private panierService: PanierService) {}

  ngOnInit() {
    // Charger le panier à partir du service (qui gère déjà le localStorage)
    this.lignePanier = this.panierService.panier;
    console.log("Contenu du panier:", this.lignePanier);
  }

  calculerPrixTotal() {
    let cout = 0;
    for (let item of this.lignePanier) {
      cout += item.produit.price * item.qte;
    }
    return cout;
  }

  removeFromPanier(panier: LignePanier) {
    this.panierService.removeFromPanier(panier.produit);
    this.lignePanier = this.panierService.panier; // Mise à jour après suppression
  }

  viderPanier() {
    this.panierService.viderPanier(); // Appelle le service pour vider le panier
    this.lignePanier = this.panierService.panier; // Met à jour la vue
  }
}
