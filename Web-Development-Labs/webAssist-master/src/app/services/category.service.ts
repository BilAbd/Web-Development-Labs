import { Injectable } from '@angular/core';
import { Category, ProdItem } from '../classses';
import { Observable, of } from 'rxjs';
import { CategoryComponent } from '../category/category.component';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  cats3: Category;
  cats4: Category[];

  constructor(private cc: CategoryComponent) { }

  getCategory(id: number): Observable<Category> {
    console.log(this.cc.getThisCategories());
    this.cats4 = this.cc.getThisCategories();
    console.log(this.cats4[1].name);
    const cats2 : any = this.cats4.find(x => x.id == id);
    return of(cats2);
  }

  getCategories(): Observable<Category[]> {
    return of(this.cc.getThisCategories());
  }

  getProduct(id: number, id2: number): Observable<ProdItem> {
    const cat = this.cc.getThisCategories();
    const cat2 = cat.find(x => x.id == id2);
    const prods: any = cat2.products.find(x => x.id == id);
    return of(prods);
  }

}




