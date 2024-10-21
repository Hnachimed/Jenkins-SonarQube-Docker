import {Component, OnInit} from '@angular/core';
import {Product} from "../models/product";
import {CommonModule} from "@angular/common";
import {ProductItemComponent} from "../product-item/product-item.component";
import {LignePanier} from "../models/lignePanier";
import {PanierComponent} from "../panier/panier.component";
import {ProduitService} from "../services/produit.service";
import {PanierService} from "../services/panier.service";
import {SearchService} from "../services/search.service";
import {FormsModule} from "@angular/forms";
import {CategoryService} from "../services/category.service";
import {Router} from "@angular/router";
import {SharedService} from "../services/shared.service";

@Component({
  selector: 'app-list-produits',
  standalone: true,
  imports: [CommonModule, ProductItemComponent, PanierComponent, FormsModule],
  templateUrl: './list-produits.component.html',
  styleUrl: './list-produits.component.css'
})
export class ListProduitsComponent implements OnInit{
  produits: Array<any> = [];
  panier:Array<LignePanier>=[];
  originalProduits: Array<any> = [];
  categories: Array<string> = [];
  selectedCategory: string = '';
  searchQuery: string='';

  constructor(private router: Router,
              private produitservice:ProduitService,
              private panierservice:PanierService,
              private searchservice:SearchService,
              private categoryservice: CategoryService,
              private sharedService: SharedService) {
  }
  ngOnInit() {
    this.produitservice.getProduct().subscribe((response: any) => {
      this.produits = response.products;
      this.originalProduits = [...this.produits]; // Copie des produits originaux
    });

    this.categoryservice.getCategoryList().subscribe((response: any) => {
      this.categories = response;
    });

    this.sharedService.selectedCategory.subscribe(data=>{
      this.categoryservice.getProductByCategory(data).subscribe((response:any)=>{
        this.produits=response.products;
      })
    })

    this.sharedService.searchQuery.subscribe( data=>{
      this.searchservice.searchProducts(data).subscribe((response:any)=>{
        this.produits=response.products;
      })
    })
  }

/*
  loadProducts() {
    this.produitservice.getProduct().subscribe((response: any) => {
      this.produits = response.products;
      this.originalProduits = [...this.produits]; // Copie des produits originaux
    });
  }

  loadCategories() {
    this.categoryservice.getCategoryList().subscribe((response: any) => {
      this.categories = response;
    });
  }

  addtopanier(product: Product) {
    this.panierservice.addtopanier(product);
  }

  onSearch() {
    if (this.searchQuery) {
      this.searchservice.searchProducts(this.searchQuery).subscribe((response: any) => {
        this.produits = response.products;
      });
    } else {
      this.loadProducts();
    }
  }

  filterProductsByCategory() {
    if (this.selectedCategory) {
      this.categoryservice.getProductByCategory(this.selectedCategory).subscribe((response: any) => {
        this.produits = response.products;
      });
    } else {
      this.loadProducts();
    }
  }


  search() {
    if (!this.searchQuery) {
      this.loadProducts();
      return;
    }

    this.produits = this.produits.filter(obj => {
      return obj.title.toLowerCase().includes(this.searchQuery.toLowerCase());
    });
  }
*/


  goToProductDetails(productId: number) {
    this.router.navigate(['/product', productId]);
  }
}
