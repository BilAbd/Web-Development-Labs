import { Component, OnInit } from '@angular/core';
import { Category, ProdItem } from '../classses';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categ: Category;
  categ2: Category;
  categories: Category[];

  item1: ProdItem;
  item2: ProdItem;
  item3: ProdItem;
  item4: ProdItem;

  items: ProdItem[];

  constructor() { 
    this.item1 = new ProdItem();
    this.item1.id = 1;
    this.item1.name = "prod1";
    this.item1.description = "good";
    this.item1.rating = 5;

    this.item2 = new ProdItem();
    this.item2.id = 2;
    this.item2.name = "prod2";
    this.item2.description = "bad";
    this.item2.rating = 3;

    this.item3 = new ProdItem();
    this.item3.id = 3;
    this.item3.name = "prod3";
    this.item3.description = "acceptable";
    this.item3.rating = 10;

    this.item4 = new ProdItem();
    this.item4.id = 4;
    this.item4.name = "prod4";
    this.item4.description = "worst";
    this.item4.rating = 1;
    

    this.items = [this.item1, this.item2];

    this.categ = new Category();
    this.categ.id = 1;
    this.categ.name = "Shoes";
    this.categ.products = this.items;

    this.items = [this.item3, this.item4];

    this.categ2 = new Category();
    this.categ2.id = 2;
    this.categ2.name = "Tshirt";
    this.categ2.products = this.items;

    this.categories = [this.categ, this.categ2];
  }

  getThisCategories(): any { //Зачем здесь эта функция? Чтобы передать наши категории в сервис
    return this.categories;
  }

  ngOnInit(): void {
  
  }
  

}
