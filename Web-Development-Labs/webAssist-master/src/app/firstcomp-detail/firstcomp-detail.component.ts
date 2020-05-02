import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../services/category.service';
import { ProdItem } from '../classses';
import { Location } from '@angular/common';

@Component({
  selector: 'app-firstcomp-detail',
  templateUrl: './firstcomp-detail.component.html',
  styleUrls: ['./firstcomp-detail.component.css']
})
export class FirstcompDetailComponent implements OnInit {

  products: ProdItem;

  constructor(private route: ActivatedRoute,
    private service1: CategoryService,
    private location: Location) { }

  ngOnInit(): void {
    this.getProds();
  }

  getProds(): void{
    const id = +this.route.snapshot.paramMap.get('id2'); 
    //У нас в routing.module.ts есть path: 'categories/:id1/products/:id2'
    //Эти строчки ищут id1 и id2, и по ним просто ищут категорию, и продук в ней.
    const id2 = +this.route.snapshot.paramMap.get('id1');
    this.service1.getProduct(id, id2).subscribe(categories => this.products = categories);
  }

  getBack(): void{
    this.location.back();
  }

}
