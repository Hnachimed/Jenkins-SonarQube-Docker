import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ListProduitsComponent} from "./list-produits/list-produits.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListProduitsComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})
export class AppComponent {
  title = 'E-commerce-app';
  filiere: string = 'genie informatique';
}
