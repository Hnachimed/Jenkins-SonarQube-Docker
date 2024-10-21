import {Component, OnInit} from '@angular/core';
import {Router, RouterModule} from '@angular/router';
import {LignePanier} from "../models/lignePanier";
import {ProduitService} from "../services/produit.service";
import {PanierService} from "../services/panier.service";
import {SearchService} from "../services/search.service";
import {CategoryService} from "../services/category.service";
import {Product} from "../models/product";
import {FormsModule} from "@angular/forms";
import {CommonModule, NgForOf} from "@angular/common";
import {SharedService} from "../services/shared.service";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, FormsModule, NgForOf,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  produits: Array<any> = [];
  panier:Array<LignePanier>=[];
  originalProduits: Array<any> = [];
  categories: Array<string> = [];
  selectedCategory: string = 'All';
  searchQuery: string='';

  constructor(private router: Router,
              private produitservice:ProduitService,
              private panierservice:PanierService,
              private searchservice:SearchService,
              private categoryservice: CategoryService,
              private sharedservice: SharedService,
              private authservice: AuthService) {
  }

  ngOnInit() {
    this.loadCategories();
  }
  /*loadProducts() {
    this.produitservice.getProduct().subscribe((response: any) => {
      this.produits = response.products;
      this.originalProduits = [...this.produits]; // Copie des produits originaux
    });
  }
*/
  loadCategories() {
    this.categoryservice.getCategoryList().subscribe((response: any) => {
      this.categories = response;
    });
  }

  /*addtopanier(product: Product) {
    this.panierservice.addtopanier(product);
  }*/

  onSearch() {
    this.sharedservice.updateSearchQuery(this.searchQuery)
  }

  filterProductsByCategory() {
    this.sharedservice.updateSelectedCategory(this.selectedCategory)

  }


  search() {
    this.sharedservice.updateSearchQuery(this.searchQuery)

  }


/*  goToProductDetails(productId: number) {
    this.router.navigate(['/product', productId]);
  }*/

  handleLogout() {
    this.authservice.logout();

    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([this.router.url]);
    });
  }

  handleLogin() {
    this.authservice.login();
  }

  isAuth(): boolean {
    return this.authservice.isAuth;
  }
}

