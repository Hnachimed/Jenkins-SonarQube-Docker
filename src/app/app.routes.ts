import { Routes } from '@angular/router';
import {PanierComponent} from "./panier/panier.component";
import {ListProduitsComponent} from "./list-produits/list-produits.component";
import {ProductDetailsComponent} from "./produit-details/produit-details.component";
import {HomeComponent} from "./home/home.component";
import {AuthGuardGuard} from "./auth-guard.guard";
import {LoginComponent} from "./login/login.component";
import {OrderComponent} from "./order/order.component";
import {SignUpComponent} from "./sign-up/sign-up.component";

export const routes: Routes = [
  {path:'panier', component: PanierComponent},
  {path:'listproduits', component: ListProduitsComponent},
  { path: 'product/:id', component: ProductDetailsComponent },
  {path:'home', component: HomeComponent},
  {path: "order", component: OrderComponent, canActivate: [AuthGuardGuard]},
  {path: "login", component: LoginComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'signup', component: SignUpComponent }
];
