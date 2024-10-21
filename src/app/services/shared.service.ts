import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private searchQuerySubject = new BehaviorSubject<string>(" ");
  private selectedCategorySubject = new BehaviorSubject<string>( "All");


  searchQuery = this.searchQuerySubject.asObservable();
  selectedCategory = this.selectedCategorySubject.asObservable();



  updateSearchQuery(query: string) {
    this.searchQuerySubject.next(query);
  }

  updateSelectedCategory(category: string) {
    this.selectedCategorySubject.next(category);
  }
}
