import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http:HttpClient) { }

  searchProducts(query:String):Observable<any>{
    const url=`https://dummyjson.com/products/search?q=${query}`;
    return this.http.get(url);

  }
}
