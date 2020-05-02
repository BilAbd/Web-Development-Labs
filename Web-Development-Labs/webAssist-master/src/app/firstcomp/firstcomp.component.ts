import { Component, OnInit, Input } from '@angular/core';
import { ProdItem, Category } from '../classses';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../services/category.service';
import { Location } from '@angular/common';



@Component({
  selector: 'app-firstcomp',
  templateUrl: './firstcomp.component.html',
  styleUrls: ['./firstcomp.component.css']
})


export class FirstcompComponent implements OnInit {

 @Input() public i: Category;
 categories: Category;
 
  constructor(private route: ActivatedRoute,
    private service1: CategoryService,
    private location: Location) {
   }

  ngOnInit(): void {
    this.getProds();
  }

  getProds(): void{ //Обращается в сервис и по id категорию, на странице которой мы находимся
    const id = +this.route.snapshot.paramMap.get('id'); //Этот код из route'а (ссылки страницы
    //на которой мы находися ) берет id
    this.service1.getCategory(id).subscribe(categories => this.categories = categories);
    //categories - случайное название, можно хоть X,Y,Z ставить, главное чтобы значение
    //так что пишется прям как .find и .filter для массивов
    //после => и перед = было переменной в нашем коде
  }

  getBack(): void{ //Возвращает нас на 1 страницу назад
    this.location.back();
  }

}
