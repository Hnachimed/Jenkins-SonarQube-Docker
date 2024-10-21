import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getCategoryList(): Observable<any>{
    return this.http.get('https://dummyjson.com/products/category-list');
  }

  getProductByCategory(category:string):Observable<any>{
    if(category=="All"){
      return this.http.get('https://dummyjson.com/products');
    }
    else{
      return this.http.get(`https://dummyjson.com/products/category/${category}`);
    }
  }
}
