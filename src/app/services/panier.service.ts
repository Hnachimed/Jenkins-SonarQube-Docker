import { Injectable } from '@angular/core';
import { LignePanier } from '../models/lignePanier';
import { Product } from '../models/product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  private panierSubject = new BehaviorSubject<Array<LignePanier>>([]);
  panier$ = this.panierSubject.asObservable();

  constructor() {
    const savedPanier = localStorage.getItem('panier');
    if (savedPanier) {
      this.panierSubject.next(JSON.parse(savedPanier));
    }
  }

  get panier(): Array<LignePanier> {
    return this.panierSubject.getValue();
  }

  addtopanier(product: Product) {
    let panier = this.panier;
    let existingProduct = panier.find(item => item.produit.id === product.id);
    if (existingProduct && product.stock>0) {
      existingProduct.qte++;
      product.stock--;
    } else {
      panier.push({ produit: product, qte: 1 });
      product.stock--;
    }
    this.updateLocalStorage(panier);
  }

  removeFromPanier(product: Product) {
    let panier = this.panier;
    const index = panier.findIndex(item => item.produit.id === product.id);
    if (index !== -1) {
      if (panier[index].qte > 1) {
        panier[index].qte--;
        product.stock++;
      } else {
        panier.splice(index, 1);
      }
      this.updateLocalStorage(panier);
    }
  }

  viderPanier() {
    this.panierSubject.next([]);
    localStorage.removeItem('panier');
  }

  private updateLocalStorage(panier: Array<LignePanier>) {
    this.panierSubject.next(panier);
    localStorage.setItem('panier', JSON.stringify(panier));
  }
}
