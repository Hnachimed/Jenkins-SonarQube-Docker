import { Component, OnInit } from '@angular/core';
import { PanierService } from '../services/panier.service';
import { LignePanier } from '../models/lignePanier';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  standalone: true,
  imports: [
    CommonModule
  ],
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  lignePanier: Array<LignePanier> = [];
  total: number = 0;

  constructor(private panierService: PanierService) {}

  ngOnInit(): void {
    this.lignePanier = this.panierService.panier;
    this.calculerTotal();
  }

  calculerTotal() {
    this.total = this.lignePanier.reduce(
      (sum, item) => sum + item.produit.price * item.qte,
      0
    );
  }

  confirmerCommande() {
    alert('Commande confirmée avec succès !');
    this.panierService.viderPanier();
  }
}
