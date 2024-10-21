import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  private apiUrl = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) {}

  getProduct(){
    return this.http.get('https://dummyjson.com/products');
  }

  getSingleProduct(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }


}
